install:
	npm install

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .;

link: 
	sudo npm link

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js