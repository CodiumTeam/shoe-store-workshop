<?php

namespace App\Http\Controllers;

use App\Mail\OrderCreated;
use App\Models\Order;
use App\Models\Product;
use App\Services\PaymentService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class CheckoutController extends Controller
{
    public function execute(Request $request, PaymentService $paymentService): JsonResponse
    {
        $params = $request->validate([
            'price' => 'required|numeric',
            'products' => 'required|array',
            'email' => 'required|email',
        ]);

        $products = $this->getProductsFromCart($params['products']);
        $price = $params['price'];

        if (!$this->validatePrice($price, $products)) {
            return new JsonResponse([
                'error' => 'invalid price',
            ], 400);
        }

        $user = $this->getUser();
        $order = Order::create(['price' => $price]);
        $order->user()->associate($user)->save();
        $order->products()->saveMany($products);

        $paymentService->payOrder($order);

        Mail::to($params['email'])->send(new OrderCreated($order));

        return new JsonResponse(['status' => 'success']);
    }

    public function getProductsFromCart($product_slugs): array
    {
        return array_map(
            fn ($slug) => Product::where('slug', $slug)->firstOrFail(),
            $product_slugs
        );
    }

    private function getUser() {
        return Auth::guard('sanctum')->user();
    }

    private function validatePrice(float $submitted_price, array $products): bool
    {
        $price_sum_of_all_products = array_sum(array_map(fn ($p) => (float) $p->price, $products));
        $price_adjusted_for_user = $this->calculateDiscountForUser($price_sum_of_all_products, count($products));
        return $price_adjusted_for_user === $submitted_price;
    }

    private function calculateDiscountForUser(float $price, int $amount_of_products): float
    {
        if (!$this->getUser()) {
            return $price;
        }

        switch ($amount_of_products) {
            case 1:
                $discount = 0.98;
                break;
            default:
                $discount = 1;
        }

        return $price * $discount;
    }
}
