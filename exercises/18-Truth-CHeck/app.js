function truthCheck(collection, pre) {
  for (let value of collection) {
    if (!value[pre]) {
      return false
    }
  }
  return true
}