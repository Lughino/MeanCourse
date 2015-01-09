test:
	@NODE_ENV="test" \
	./node_modules/.bin/mocha --reporter spec -u tdd --require "should" --require "./tests/index.js" "modules/**/tests/**/test.*.js"

.PHONY: test