var util = require('util');
var pathToRegexp = require('./');


// "tests" lol
var TESTS = [
	// '/wat/:huh/yeah',
	// 'urr/yeah/?huh',
	'/wut/(.+)/regex/:sure/ok',
	// 'some*/string',
	// ['what', 'is', ':this/doing/here'],
]

TESTS.forEach(function(str) {
	console.log(str)
	console.log(pathToRegexp(str).allTokens)
	console.log(pathToRegexp(str).keys)
})

TESTS.forEach(function(str) {
	console.log(pathToRegexp(str).allTokens.reduce(function(str, token) {
		if (token.delimiter) {
			str += token.delimiter
		}
		if (token.string) {
			str += token.string
		} else {
			str += 'something'
		}
		return str
	}, ''))
})
