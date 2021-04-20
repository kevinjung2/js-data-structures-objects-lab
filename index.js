// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
  const newDriver = {...object}

  newDriver[key] = value
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver}

  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
