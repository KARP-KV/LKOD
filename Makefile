.PHONY: install build sync transform generate lint

install:
	npm ci

build: sync transform generate

sync:
	node --trace-warnings --experimental-transform-types src/bin/sync.ts

transform:
	node --trace-warnings --experimental-transform-types src/bin/transform.ts

generate:
	rm -rf public/*
	node --trace-warnings --experimental-transform-types src/bin/generate.ts

lint:
	npm run lint
