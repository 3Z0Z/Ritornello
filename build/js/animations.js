const boton = document.querySelector('.menu__boton');
const menu = document.querySelector('.menu__lista');

const hover2 = document.getElementById('hover2');
const mostrar2 = document.getElementById('mostrar2');

boton.addEventListener('click', () => {
    if(menu.style.display == 'none'){
        menu.style.display = 'flex';
    }else{
        menu.style.display = 'none';
    }
});

function mostrar(hover, mostrar){
    hover.addEventListener('mouseover', () => {
        mostrar.style.display = 'flex';
    });
}

function ocultar(hover, mostrar){
    hover.addEventListener('mouseleave', () => {
        mostrar.style.display = 'none';
    });
}

mostrar(hover2, mostrar2);

ocultar(hover2, mostrar2);
