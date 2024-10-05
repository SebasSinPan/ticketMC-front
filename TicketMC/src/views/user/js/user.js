//botones que abren o cierran modales
const userData = document.getElementById('user-data');
const statsData = document.getElementById('stats-data');
const helpData = document.getElementById('help-data');
const closeBtn = document.getElementById('closeBtn');
const closeCloseModal = document.getElementById('modalClose__btns--close');

//cobertura de transiciones y sus posiciones
const cortina = document.getElementById('curtain');
const cortinaPosicionUser = [20, 63, 28, 89];
const cortinaPosicionStats = [153, 63, 153, 89];
const cortinaPosicionHelp = [280, 63, 280, 89];

//modales y variables de css
const modalUser = document.getElementById('modalUser');
const modalStats = document.getElementById('modalStats');
const modalHelp = document.getElementById('modalHelp');
const modalClose = document.getElementById('modalClose');
const root = document.documentElement;

//animaciones
const modalUserAnimation = 'aparicionModalUser';
const modalStatsAnimation = 'aparicionModalStats';
const modalHelpAnimation = 'aparicionModalHelp';
const modal800Animation = 'aparicionModal800px';

// tamaño de la pantalla
let actualWidth = window.innerWidth;
console.log(actualWidth)

// actualiza el valor de la variable que tiene el tamaño de la ventana y
// modifica el tamaño del modal
window.addEventListener('resize', ()=>{
    actualWidth = window.innerWidth;
})

//Definir las posiciones de la cortina, según el elemento que clickea
let restartMeasurements = arreglo =>{
    root.style.setProperty('--curtain-top',`${arreglo[0]}px`);
    root.style.setProperty('--curtain-right',`${arreglo[1]}px`);
    root.style.setProperty('--curtain-animation-top',`${arreglo[2]}px`);
    root.style.setProperty('--curtain-animation-right',`${arreglo[3]}px`);
}

//Evita el comportamiento del botón, redefine las medidas de aparición
//de la cortina, muestra la cortina, añade la animación y después de
//1s lo retira todo
let abrirModal = (boton, modal, animacion, posicionCortina)=>{
    boton.addEventListener('click', ev => {
        ev.preventDefault();
    
        restartMeasurements(posicionCortina);
    
        cortina.style.display = 'block';
        cortina.classList.add(animacion);
        setTimeout(()=>{
            modal.showModal();
            cortina.style.display = 'none';
            cortina.classList.remove(animacion);
        },700)
    })
}

//Evita el comportamiento del botón, añade la animación y después de
//1s lo retira todo
let abrirModal800 = (boton, modal, animacion)=>{
    boton.addEventListener('click', ev => {
        ev.preventDefault();
        
        modal.classList.add(animacion);

        modal.showModal();
        setTimeout(()=>{

            setTimeout(()=>{
                modal.classList.remove(animacion);
            },1000)

        },700)
    })
}

//cierra el modal si se clickea fuera de este
let cerrarModal = (modal)=>{
    modal.addEventListener('click', e =>{
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            modal.close();
        }
    })
}

//métodos para leer la pantalla y actualizar las variables que dependan de
//estas medidas
if ((actualWidth > 800)) {
    abrirModal(userData, modalUser, modalUserAnimation, cortinaPosicionUser);
    abrirModal(statsData, modalStats, modalStatsAnimation, cortinaPosicionStats);
    abrirModal(helpData, modalHelp, modalHelpAnimation, cortinaPosicionHelp);
} else{
    abrirModal800(userData, modalUser, modal800Animation);
    abrirModal800(statsData, modalStats, modal800Animation);
    abrirModal800(helpData, modalHelp, modal800Animation);
}

//Abre el modal de confirmación para cerrar sesión
closeBtn.addEventListener('click', ev => {
    ev.preventDefault();
    modalClose.showModal();
})

cerrarModal(modalUser);
cerrarModal(modalStats);
cerrarModal(modalHelp);
// cerrarModal(modalClose);

//Da la opción de cerrar el modal de confirmación para cerrar sesión
closeCloseModal.addEventListener('click', ()=>{
    modalClose.close();
})

fetch