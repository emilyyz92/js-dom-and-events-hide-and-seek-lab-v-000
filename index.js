const getFirstSelector = function (selector) {
  return document.querySelector(selector)
}

const nestedTarget = function () {
  return document.querySelector('#nested .target')
}

const deepestChild = function() {
  return document.querySelector('#grand-node div div div div')
}

const increaseRankBy = function(n) {
  const list = document.querySelectorAll(`#app .ranked-list li`)
  for (let i=0; i< list.length; i++) {
    list[i].innerHTML += parseInt(n)
  }
  return list
}
