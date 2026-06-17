const btnNum = document.querySelector('#btn-num')
const Div01 = document.querySelector('#div-01')
const inputIdade = document.querySelector('#idade')
const inputPeso = document.querySelector('#peso')

let cont12 = 0
let contPode = 0
let contNaoPode = 0

btnNum.addEventListener('click', (evt)=>{
    let idade = Number(inputIdade.value)
    let peso = Number(inputPeso.value)

    if((idade >= 18) && (idade <= 60) && (peso > 50)){
        contPode++
    }else{
        contNaoPode++
    }

    cont12++

    if(cont12 == 4){
        inputIdade.setAttribute('disabled', 'disabled')
        inputPeso.setAttribute('disabled', 'disabled')

        Div01.innerHTML = `Total de pessoas que podem doar ${contPode} <br> Total de pessoas que NÃO podem doar ${contNaoPode}`
        }

    inputIdade.value = ''
    inputPeso.value = ''

})

