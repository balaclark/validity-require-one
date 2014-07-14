var defaultMsg = 'At least one of these fields should have a value'
  , validity = require('validity')
  , async = require('async')

module.exports = requireOne

function requireOne(fields, msg) {

  var required = validity.customRequired(msg || defaultMsg)

  return function (key, msg, object, callback) {

    var isRequired = true

    async.each(fields, checkFieldIsRequired, validate)

    function checkFieldIsRequired(field, done) {
      if (field === key) return done()
      required(field, msg, object, function (err, msg) {
        if (!msg) isRequired = false
        done()
      })
    }

    function validate() {
      if (isRequired) {
        return required(key, msg, object, callback)
      }
      return callback(null, undefined)
    }
  }
}
