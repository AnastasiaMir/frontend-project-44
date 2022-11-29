install:
	npm ci
brain-games:
	node bin/brain-games.js
<<<<<<< HEAD
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js
=======
>>>>>>> 21e0cd26f691060113a19d59613e9320b9b3c149
publish:
	npm publish --dry-run
lint:
	npx eslint .