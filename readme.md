# finite-constant-function

[![build status](http://img.shields.io/travis/chiefbiiko/finite-constant-function.svg?style=flat)](http://travis-ci.org/chiefbiiko/finite-constant-function) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/finite-constant-function?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/finite-constant-function)

***

Make a function that will return a constant value `n` times, then nothing, `undefined`.

***

## Get it!

```
npm install --save finite-constant-function
```

***

## Usage

``` js
var fcf = require('finite-constant-function')
var fiveTimes = fcf(5, 419)

for (var i = 0; i < 25; i++) console.log(fiveTimes())
```

***

## API

### `fcf(n, constant)`

Create a function that will return `constant` `n` times, then nothing, `undefined`.

***

## License

[MIT](./license.md)
