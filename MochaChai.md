* Mocha
Mocha is a Javascript test framework.

```bash
npm install -g mocha
npm install --save-dev mocha
```

** Mocha Basic Spec
```javascript
describe('Basic Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
        ....
    });
 it('should return first charachter of the string', function () {
       ....
    });
});
```
*** describe()
Is a collection of tests. It is used to group together related tests. It takes two arguments, the first is a string that describes the test, the second is a function that contains all the tests.

*** it()
Is a single test, or test-case. It is used to test a single attribute of a target. It also takes two arguments, the first is a string that describes the test, the second is a function that contains the test.

** Hooks
With its default "BDD" interface, Mocha provides four hooks which allow you to specify functions that will be run before or after the tests in a suite or context.

```javascript
describe('hooks', function() {
  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});
```
*** before()
Runs before all tests in a describe block.
*** after()
Runs after all tests in a describe block.
*** beforeEach()
Runs before each test in a describe block.
*** afterEach()
Runs after each test in a describe block.

* to Execute
Set up test script in package.json
```json
"scripts": {
    "test": "mocha"
  }
```
Then run
```bash
npm test
```

* Chai
Chai is a Javascript assertion library.
  
```bash	
npm install --save-dev chai
```

* Assert style
```javascript
var assert = require('chai').assert;
var foo = “bar”;

assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
```	
* Expect style
```javascript
var expect = require('chai').expect;
var foo = “bar”;

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
```
* Should style
```javascript
var should = require('chai').should();
var foo = “bar”;

foo.should.be.a('string');
foo.should.equal('bar');
```

