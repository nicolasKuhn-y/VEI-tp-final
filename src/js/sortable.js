const modulos = document.getElementById('modulos')

Sortable.create(modulos,{
    group:{
        name:"moduls"
    },
    animation:300,
    easing:"cubic-bezier(0.5, 0, 0.75, 0)",
    handle:".fa-grip-lines",
    filter:".titulo"
});