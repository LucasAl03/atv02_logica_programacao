const btnNum = document.querySelector('#btn-num')
const Div01 = document.querySelector('#div-01')
const Div02 = document.querySelector('#div-02')
const Div03 = document.querySelector('#div-03')
const Div04 = document.querySelector('#div-04')
const inputIdade = document.querySelector('#idade')
const inputM = document.querySelector('#masculino')
const inputF = document.querySelector('#feminino')
const inputNome = document.querySelector('#nome')

let cont12 = 0
let cont18 = 0
let cont65 = 0
let cont1865 = 0
let contM = 0
let contF = 0

function myFunction(element) {
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";

    if(element.checked != true) {
         return true;
    }

    document.getElementById("masculino").checked = false;
    document.getElementById("feminino").checked = false;

    document.getElementById(element.id).checked = true;
    
}

btnNum.addEventListener('click', (evt)=>{
    let idade = Number(inputIdade.value)
    let masculino = Number(inputM.value)
    let feminino = Number(inputF.value)
    

    if(idade < 18){
        cont18++
    }else if(idade > 65){
        cont65++
    }else if((idade >= 18) && (idade < 65)){
        cont1865++
    }else if(masculino){
        contM++
    }else{
        contF++
    } 

    cont12++

    if(cont12 == 2){
        inputIdade.setAttribute('disabled', 'disabled')
        inputNome.setAttribute('disabled', 'disabled')
        inputM.setAttribute('disabled', 'disabled')
        inputF.setAttribute('disabled', 'disabled')

        Div01.innerHTML = `Total de pessoas com idade inferior a 18 anos: ${cont18}`
        Div02.innerHTML = `Total de pessoas com idade acima de 65 anos: ${cont65}`
        Div03.innerHTML = `Total de pessoas com idade entre 18 e menor que 65 anos: ${cont1865}`
        Div04.innerHTML = `Total de pessoas do sexo masculino: ${contM}. <br> Total de pessoas do sexo feminino ${contF}.`
        }

    inputIdade.value = ''
    inputNome.value = ''
    inputM.value = ''
    inputF.value = ''
})

