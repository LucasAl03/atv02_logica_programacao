const pessoas = []

const formPessoa = document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista')
const divA = document.querySelector('#div-a')
const divB = document.querySelector('#div-b')
const divC = document.querySelector('#div-c')
const divD = document.querySelector('#div-d')

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName(checkbox.name)
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

cont20 = 0
cont18 = 0
cont65 = 0
cont1865 = 0

formPessoa.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const dadosForm = new FormData(formPessoa)

    const pessoa = {
        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        sexo: dadosForm.get('sexo')
    }

    addPessoa(pessoa)

    formPessoa.reset()
    
    
})

const addPessoa = (objPessoa)=>{
    pessoas.push(objPessoa)

    listPessoa()
}

const listPessoa = () =>{
    pessoas.forEach((elem, i)=>{
        divLista.innerHTML += `${i + 1} - ${elem.name}, ${elem.idade} anos, do sexo ${elem.sexo}`
    })
}

