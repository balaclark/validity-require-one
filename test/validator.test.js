var createValidator = require('../')
  , assert = require('assert')

describe('validity-require-one', function () {

  it('should require that at least one property is set', function (done) {
    var obj =
      { property1: ''
      , property2: ''
      , property3: ''
      }
    createValidator(['property1', 'property2', 'property3'])('property1', 'Test Property', obj, function (err, message) {
      assert.equal('At least one of these fields should have a value', message)
      done()
    })
  })

  it('should not require a property if another is already set', function (done) {
    var obj =
      { property1: ''
      , property2: 'testing'
      , property3: ''
      }
    createValidator(['property1', 'property2', 'property3'])('property1', 'Test Property', obj, function (err, message) {
      assert.equal(undefined, message)
      done()
    })
  })

  it('should not fail if the target property is the only one set', function (done) {
    var obj =
      { property1: 'testing'
      , property2: ''
      , property3: ''
      }
    createValidator(['property1', 'property2', 'property3'])('property1', 'Test Property', obj, function (err, message) {
      assert.equal(undefined, message)
      done()
    })
  })


  it('should allow a custom error message to be passed in', function (done) {
    var obj =
      { property1: ''
      , property2: ''
      , property3: ''
      }
    createValidator(['property1', 'property2', 'property3'], 'custom message')('property1', 'Test Property', obj, function (err, message) {
      assert.equal('custom message', message)
      done()
    })
  })

})
