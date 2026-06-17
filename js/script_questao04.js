const btnNum = document.querySelector('#btn-num')
const Div01 = document.querySelector('#div-01')
const Div02 = document.querySelector('#div-02')
const Div03 = document.querySelector('#div-03')
const Div04 = document.querySelector('#div-04')
const inputIdade = document.querySelector('#idade')
const inputSexo = document.querySelector('#sexo')
const inputNome = document.querySelector('#nome')

let cont12 = 0
let cont18 = 0
let cont65 = 0
let cont1865 = 0

btnNum.addEventListener('click', (evt)=>{
    let idade = Number(inputIdade.value)
    let sexo = Number(inputSexo.value)

    if(idade < 18){
        cont18++
    }else if(idade > 65){
        cont65++
    }else if((idade >= 18) && (idade < 65)){
        cont1865++
    }

    cont12++

    if(cont12 == 3){
        inputIdade.setAttribute('disabled', 'disabled')
        inputPeso.setAttribute('disabled', 'disabled')
        inputNome.setAttribute('disabled', 'disabled')

        Div01.innerHTML = `Total de pessoas com idade inferior a 18 anos: ${cont18}`
        Div02.innerHTML = `Total de pessoas com idade acima de 65 anos: ${cont65}`
        Div02.innerHTML = `Total de pessoas com idade entre 18 e menor que 65 anos: ${cont1865}`
        Div02.innerHTML = `Total de pessoas do sexo masculino: ${}. <br> Total de pessoas do sexo feminino ${}.`
        }

    inputIdade.value = ''
    inputPeso.value = ''
    inputSexo.value = ''

})

