const inputNome = document.querySelector('#name')
const inputIdade = document.querySelector('#idade')
const inputM = document.querySelector('#masculino')
const inputF = document.querySelector('#feminino')
const btnNum = document.querySelector('#btn-num')
const divA = document.querySelector('#div-a')
const divB = document.querySelector('#div-b')
const divC = document.querySelector('#div-c')
const divD = document.querySelector('#div-d')


cont20 = 0
cont18 = 0
cont65 = 0
cont1865 = 0
contM = 0
contF = 0

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName(checkbox.name)
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

btnNum.addEventListener('click', (evt)=>{
    let idade = Number(inputIdade.value)
    

    if(idade < 18){
        cont18++
    }else if((idade >= 18) && (idade < 65)){
        cont1865++
    }else{
        cont65++
    }

    if (cont20 == 1) {
        inputIdade.setAttribute('disabled', 'disabled')
        inputNome.setAttribute('disabled', 'disabled')

        divA.innerHTML = ``
    }
})

