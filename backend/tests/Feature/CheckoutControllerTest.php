<?php

namespace Tests\Feature;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class CheckoutControllerTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function test_checkout_as_anonymous_user(): void
    {
        Product::create([
            'name' => 'Nike Zoom',
            'price' => 50,
            'image' => 'https://picsum.photos/201/300',
        ])->save();

        $response = $this->postJson('/api/checkout', [
            'price' => 50.0,
            'products' => ['nike-zoom'],
            'email' => 'example@example.com',
        ]);

        $response->assertStatus(200);
    }
}
