UID=$(shell id -u)

.PHONY: setup
setup:
	docker run --rm -u "$(UID):$(UID)" -v ${PWD}:/code -w /code composer:2.2.24 install
	cp .env.example .env
	$(MAKE) up
	./vendor/bin/sail artisan key:generate
	./vendor/bin/sail artisan migrate:refresh -n --seed

.PHONY: test
test:
	./vendor/bin/sail test

.PHONY: up
up:
	./vendor/bin/sail up -d --wait

.PHONY: down
down:
	./vendor/bin/sail down

.PHONY: clean
clean:
	./vendor/bin/sail down -v
	rm -f .env
	rm -rf vendor
