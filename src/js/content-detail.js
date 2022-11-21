const content = document.querySelector('.contenido');
const descripcion = document.querySelector('.descripcion');
const text = document.querySelector('.descripcion-text')
const modulos = document.querySelector('.modulos')
const titulo = document.querySelector('.titulo')

content.addEventListener('click', () =>{
    descripcion.classList.remove('fw-bold')
    text.classList.add('d-none')

    content.classList.add('fw-bold')
    modulos.classList.remove('d-none')
    modulos.classList.add('col-sm-12')


    titulo.classList.add('d-none')
})

descripcion.addEventListener('click', () =>{
    descripcion.classList.add('fw-bold')
    text.classList.remove('d-none')
    
    content.classList.remove('fw-bold')
    modulos.classList.add('d-none')
})

