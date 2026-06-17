const btnNum = document.querySelector('#btn-num')
const Div01 = document.querySelector('#div-01')
const inputNum = document.querySelector('#num')

let cont = 0

btnNum.addEventListener('click', (evt)=>{
    let numDigitado = Number(inputNum.value)

    for(i = 1; i < numDigitado; i++){
        if(numDigitado % i == 0){
            Div01.innerHTML += `${i} <br> `
        }
    }
})

