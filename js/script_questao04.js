const inputNome = document.querySelector('#name')
const inputIdade = document.querySelector('#idade')
const inputSexo = document.querySelector('#sexo')
const btnNum = document.querySelector('#btn-num')
const divA = document.querySelector('#div-a')
const divB = document.querySelector('#div-b')
const divC = document.querySelector('#div-c')
const divD = document.querySelector('#div-d')
const ObjPessoas = 


cont20 = 0
cont18 = 0
cont65 = 0
cont1865 = 0
contM = 0
contF = 0



btnNum.addEventListener('click', (evt)=>{
    let idade = Number(inputIdade.value)
    let contF = Text(inputSexo.feminino)
    let contM = Text(inputSexo.masculino)

    

    if(idade < 18){
        cont18++
    }else if((idade >= 18) && (idade < 65)){
        cont1865++
    }else{
        cont65++
    }

    if(contF, 'checked'){
        contF
    }else if(contM, 'checked'){
        contM
    }else{
        alert('Essa área deve ser marcada.')
    }

    if (cont20 == 2) {
        inputIdade.setAttribute('disabled', 'disabled')
        inputNome.setAttribute('disabled', 'disabled')
        inputSexo.setAttribute('disabled', 'disabled')

        divA.innerHTML = `São ${cont18} as pessoas com idade inferior a 18 anos`
        divB.innerHTML = `São ${cont65} as pessoas com idade inferior a 18 anos`
        divC.innerHTML = `São ${cont1865} as pessoas com idade inferior a 18 anos`
        divD.innerHTML = `São ${contM} as pessoas do sexo masculino. <br>São ${contF} as pessoas do sexo feminino.`
    }
    
})

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName(checkbox.name)
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}