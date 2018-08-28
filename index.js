const getFirstSelector = function (selector) {
  return document.querySelector(selector)
}

const nestedTarget = function () {
  return document.querySelector('#nested .target')
}

const deepestChild = function() {
  return document.querySelector('#grand-node div div div div')
}