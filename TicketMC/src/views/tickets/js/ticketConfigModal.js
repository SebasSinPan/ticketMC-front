const configModalOpen = document.getElementById('container__nav--config-btn');
const configModal = document.getElementById('nav--config-modal');
const configModalClose = document.getElementById('config-modal--exit');

//Permite abrir con el botón de configuración y
//da las animaciones para la apertura del modal
configModalOpen.addEventListener('click', ()=>{
    configModal.classList.add('fade-in-modal');
    configModal.showModal();
    //tras ocurrir la animación, la animación se remueve
    configModal.addEventListener('animationend', () => {
        configModal.classList.remove('fade-in-modal');
    });
})

//permite cerrar el modal clickeando a la x
//da animaciones de cierre
configModalClose.addEventListener('click', ()=>{
    configModal.classList.add('fade-out-modal');

    //tras ocurrir la animación, la animación se remueve
    configModal.addEventListener('animationend', () => {
        configModal.close();
        configModal.classList.remove('fade-out-modal');
    }, {once: true});
})

//permite cerrar el modal clickeando fuera de él 
//además que añade una animación para cuando esto sucede
configModal.addEventListener('click', e =>{
    const dialogDimensions = configModal.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ){
        //agrega una animación a la salida del modal
        configModal.classList.add('fade-out-modal');
        
        //tras ocurrir la animación, la animación se remueve
        configModal.addEventListener('animationend', () => {
            configModal.close();
            configModal.classList.remove('fade-out-modal');
        }, {once: true});
    }   
});

//--------------------------------------------------------------------
//determinación del tema en las preferencias del usuario
//--------------------------------------------------------------------

const temaOscuroCheckbox = document.getElementById('tema_oscuro');

// Valida que no haya un valor de tema
let valorTema = localStorage.getItem('tema');

if (!valorTema) {
    // Verifica la preferencia del usuario
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('tema', 'dark');
        temaOscuroCheckbox.checked = true;
    } else {
        // Inicializa el tema con un color por defecto
        localStorage.setItem('tema', 'light');
    }
} else {
    // Si hay un tema guardado, configura el checkbox
    if (valorTema === 'dark') {
        temaOscuroCheckbox.checked = true;
    }
}

// Condicional para cambiar el valor del tema de la página
const themeColorPreference = () => {
    if (temaOscuroCheckbox.checked) {
        localStorage.setItem('tema', 'dark');
    } else {
        localStorage.setItem('tema', 'light');
    }

    // Dispara un evento personalizado
    const sendChange = new Event('temaCambiado');
    document.dispatchEvent(sendChange);
}

// Se llama por primera vez el validador del tema de la página
themeColorPreference();

// Evento que detecta los cambios en el selector del tema
temaOscuroCheckbox.addEventListener('change', () => {
    themeColorPreference();
});

//TODO : Si se carga la página en modo oscuro, no funciona