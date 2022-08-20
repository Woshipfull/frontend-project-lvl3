install:
	npm ci

start:
	NODE_ENV=development npx webpack serve --open

develop:
	NODE_ENV=development npx webpack

build:
	rm -rf dist
	NODE_ENV=production npx webpack

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage

.PHONY: test