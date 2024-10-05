//------------------------------------------------------------------
//     Modal de términos y condiciones
//------------------------------------------------------------------
//se crea una función que obtiene la fecha actual
const obtenerFecha = ()=>{
    //Crear un objeto con la api de fecha para obtener la fecha actual
    let fecha = new Date();

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let año = fecha.getFullYear();

    //Agregar un cero a la fecha en caso que su tamaño sea menor a 2
    if (dia.toString().length < 2){
        dia = `0${dia}`;
    }

    if (mes.toString().length < 2){
        mes = `0${mes}`;
    }

    //Retornar la fecha actual
    return `${dia}/${mes}/${año}`;
}

const VerTerminos = document.getElementById('verTerminos');
const TerminosModal = document.getElementById('terminosModal');

//Evento que muestra los términos y condiciones con un modal
VerTerminos.addEventListener('click', (ev)=>{
    //Se evita que el enlace redireccione
    ev.preventDefault();
    
    //Redefinir la fecha en la que se está de acuerdo con los términos
    let fechaAcuerdo = document.getElementById('condiciones__fecha');
    fechaAcuerdo.innerHTML = obtenerFecha();

    //Abrir el modal
    TerminosModal.showModal();
})

//Condición para que se cierre el modal
TerminosModal.addEventListener('click', ev =>{
    //Se obtienen los límites del componenete
    const dialogDimensions = TerminosModal.getBoundingClientRect();
    //Evaluación del dónde se clickea: si se clickea fuera del modal se cierra
    if (
        ev.clientX < dialogDimensions.left ||
        ev.clientX > dialogDimensions.right ||
        ev.clientY < dialogDimensions.top ||
        ev.clientY > dialogDimensions.bottom
    ) {
        TerminosModal.close();
    }
})

//------------------------------------------------------------------
//     Transición Registro e Inicio de sesión
//------------------------------------------------------------------

const usarRegistrarse = document.getElementById('usarRegistrarse');
const usarIniciarSesion = document.getElementById('usarIniciarSesion');
const cobertura = document.getElementById('cover');
const SINGUP = document.getElementById('singup');
const LOGIN = document.getElementById('login');
const singupForm = document.getElementById('singup__form');
const loginForm = document.getElementById('login__form');

//Retira las clases añadidas antes que se redireccione la página
window.addEventListener('beforeunload',()=>{
    cobertura.classList.remove('estadoFinalRegistro');
    cobertura.classList.remove('estadoFinalInicio');
    SINGUP.classList.remove('usarAparecer');
    LOGIN.classList.remove('usarAparecer');
    SINGUP.classList.remove('usarDesvanecer');
    LOGIN.classList.remove('usarDesvanecer');
})

//Función que añade las clases en las que desaparece el inicio de
//sesión y aparece el registro
let desabilitarInicioSesion = ()=>{
    LOGIN.classList.add('usarDesvanecer');
    LOGIN.classList.remove('usarAparecer');
    SINGUP.classList.add('usarAparecer');
    SINGUP.classList.remove('usarDesvanecer');
    loginForm.reset()
}

//Función que añade las clases en las que desaparece el registro
//y aparece el inicio de sesión
let desabilitarRegistro = ()=>{
    SINGUP.classList.add('usarDesvanecer');
    SINGUP.classList.remove('usarAparecer');
    LOGIN.classList.add('usarAparecer');
    LOGIN.classList.remove('usarDesvanecer');
    singupForm.reset();
}

//Añade las clases que dan la animación para mostrar el registro y 
//elimina las que pueden generar problemas 
usarRegistrarse.addEventListener('click', ev =>{
    ev.preventDefault();
    cobertura.classList.add('usarRegistrarse');
    
    //Quita el display del inicio de sesión para evitar que se 
    //seleccione con el tab
    desabilitarInicioSesion();

    //Después de 700ms remueve y añade clases de mantenimiento
    setTimeout(() => {
        cobertura.classList.remove('usarRegistrarse');
        cobertura.classList.add('estadoFinalRegistro');
        cobertura.classList.remove('estadoFinalInicio');
        LOGIN.style.display = "none";
        SINGUP.style.display = "flex";
    }, 700);
})

//Añade las clases que dan la animación para mostrar el inicio de sesión y 
//elimina las que pueden generar problemas
usarIniciarSesion.addEventListener('click', ev =>{
    ev.preventDefault();
    cobertura.classList.remove('estadoFinalRegistro');
    cobertura.classList.add('usarIniciarSesion');

    //Quita el display del inicio de sesión para evitar que se 
    //seleccione con el tab
    desabilitarRegistro();

    //Después de 700ms remueve y añade clases de mantenimiento
    setTimeout(() => {
        cobertura.classList.add('estadoFinalInicio');
        cobertura.classList.remove('usarIniciarSesion');
        SINGUP.style.display = "none";
        LOGIN.style.display = "flex";
    }, 700);
})

//------------------------------------------------------------------
//     Animación fondo
//------------------------------------------------------------------

const BODY = document.getElementById('body');

for (let i = 0; i < 30; i++) { 
    const MOTA = document.createElement('div');
    MOTA.classList.add('mota');

    // Posicionar aleatoriamente
    MOTA.style.width = `${Math.random() * 10 + 5}px`; // Ancho aleatorio entre
    MOTA.style.height = MOTA.style.width; // Mantenerlo circular
    MOTA.style.left = `${Math.random() * 100}vw`; // Posición aleatoria 
    MOTA.style.top = `${Math.random() * 100}vh`; // Posición aleatoria 
    MOTA.style.animationDelay = `${Math.random() * 2}s`; 

    // Opacidad aleatoria entre 0.3 y 1
    const OPACIDAD = Math.random() * 0.7 + 0.3; // Opacidad entre 0.3 y 1
    MOTA.style.opacity = OPACIDAD;

    BODY.appendChild(MOTA);
    console.log('ago')
}