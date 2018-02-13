function finiteConstant (n, z) {
  return function () {
    if (n-- > 0) return z
  }
}

module.exports = finiteConstant