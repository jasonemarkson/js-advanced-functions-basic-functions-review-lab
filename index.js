// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function(word = "special") {
        return `You are ${flair}${word}${flair}!`
    }
}

const Calculator = {
    add() {
    return 1 + 3
    },
    subtract() {
    return 1 - 3
    },
    multiply() {
    return 1 * 3
    },
    divide() {
    return 10 / 5
    }
}

let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }
