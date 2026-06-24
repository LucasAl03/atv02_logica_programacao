const inpuIdade = document.querySelector('#idade')
const inputPeso = document.querySelector('#peso')
const btnVerifica = document.querySelector('#btn-num')
const divResultado = document.querySelector('#div-result')

let cont12 = 0
let contPode = 0
let contNaoPode = 0

btnVerifica.addEventListener('click', (evt) => {
    let idade = Number(inpuIdade.value)
    let peso = Number(inputPeso.value)

    if ((idade >= 18) && (idade <= 60) && (peso > 50)) {
        contPode++
    } else {
        contNaoPode++
    }

    cont12++


    
    if (cont12 == 2) {
        inpuIdade.setAttribute('disabled', 'disabled')
        inputPeso.setAttribute('disabled', 'disabled')

        divResultado.innerHTML = `Total de pessoas que podem doar ${contPode} <p> Total de pessoas que NÃO podem doar ${contNaoPode}`
    }

    inpuIdade.value = ''
    inputPeso.value = ''
})
