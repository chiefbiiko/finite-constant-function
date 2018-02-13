var tape = require('tape')
var finiteConstant = require('./index')

tape('void after n calls', function (t) {
  var fiveTimes = finiteConstant(5, 419)
  var counter = 0
  for (var i = 0; i < 100; i++) counter += fiveTimes() ? 1 : 0
  t.is(counter, 5, 'five non-undefined return values')
  t.end()
})
