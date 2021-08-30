// Arrow Functions
function callMe(name) {
    console.log(name)
}

const callMe2 = function(name) {
    console.log(name)
}

const callMe3 = (name) => {
    console.log(name)
}

// Destructuring
function getScores() {
    return [70, 80, 90, 100]
}
let [x, y, ...args] = getScores()
console.log(x) // 70
console.log(y) // 80
console.log(args) // [90, 100]

