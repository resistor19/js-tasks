document.querySelector('button').onclick = function(){
let lenght = 10
let min = 0
let max = 99
let result = []
for (let i = 0; i<lenght; i++){
    result.push(randomInteger(min,max))
}
console.log(result)
document.querySelector('#rand').innerHTML = result
return result
}

function randomInteger (min,max){
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand)
    return rand
}

// result.sort(document.querySelector('#up').onclick =function(a,b){
//     return a-b
// })


//   document.querySelector('#up').onclick = function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   }
  
//   let result
  
//   result.sort(compareNumeric);
  










// const name= "anton"
// console.log(name)
// console.log (Number.MAX_SAFE_INTEGER)
// console.log (Math.pow(2,53)-1)
// console.log(Number.POSITIVE_INFINITY)
// function getRandom(min,max){
// return Math.floor(Math.random() * (max-min+1)+min)
// }
// console.log(getRandom(1,99))
// function qwer(name){
//     console.log('Hi ' + name)
// }
// qwer('REDY')
// setInterval(function(){
//     console.log(++getRandom),1
// })