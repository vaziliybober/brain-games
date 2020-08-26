install:
	npm install

start:
	node bin/mind-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

parity-check:
	node bin/parity-check.js