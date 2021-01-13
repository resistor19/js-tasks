let rand = Math.round(Math.random()*10)
console.log(rand)

function func1(){
    let num = document.getElementById("inp").value
    console.log(num)
    if (num == rand) {
        alert("Молодец,долбоеб!!!")
    }
    if (num<rand ){
        alert("Проебал, ввел меньше")
    }
    if (num>rand ){
        alert("Проебал, ввел больше")
    }    

}