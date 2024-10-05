//------------------------------------------------------------------
//     Banner principal
//------------------------------------------------------------------

//cambio dinámico de la palabra del banner principal

const palabra = document.getElementById('palabraRotatoria');

let cualidades = [
    "facilidad",
    "velocidad",
    "calidad",
    "elegancia"
];

//Se inicializa un indice para usarlo de comprarativo anterior y así no repetir índice
let indiceAnt = 0;
let indice;

//Selecciona una palabra al azar del arreglo
let seleccion = ()=>{
    indice = Math.floor(Math.random() * cualidades.length);
}

//Se le de un valor al índice principal, si no es el mismo de la última selección,
//se utiliza como índice del arreglo y se le asigna ese valor a la palabra que varia
let cambioPalabras = ()=>{
    
    seleccion();

    while (indice == indiceAnt) {
        seleccion();
    }

    palabra.innerHTML = cualidades[indice];       

    indiceAnt = indice;
}

//Intérvalo para la reproducción continua de la palabra
setInterval(cambioPalabras,3000);

//------------------------------------------------------------------
//     Carrusel horizontal sección de características
//------------------------------------------------------------------

//Cargar la distancia del desplazamiento de las características de manera dinémica

document.addEventListener('DOMContentLoaded', ()=>{
    
    const sliderWidth = document.getElementById('caracteristicas__container');
    const root = document.documentElement;

    let actualizarAncho = ()=>{
        let nuevoWidth = sliderWidth.offsetWidth;
        console.log(sliderWidth.offsetWidth);
        root.style.setProperty('--slider-width',`${nuevoWidth}px`);
    }

    actualizarAncho();

    window.addEventListener('resize',actualizarAncho)
})

//------------------------------------------------------------------
//     Fade entre redirecciones
//------------------------------------------------------------------

const UP = document.getElementById('up');
const cover = document.getElementById('cover');

//Hace que la cubierta sea visible y añade la clase de la animación
let addCover = () => {
    cover.classList.add('fade-background');
    cover.classList.remove('apear-background');
    cover.style.display = 'block';
}

//Añade la segunda parte de la animación y se asegura que se vaya la 
//primer parte
let removerCover = () => {
    cover.classList.add('apear-background');
    cover.classList.remove('fade-background');
}

//Hace que, al clickear el botón para subir, se ejecuten las animaciones
//de desplazamiento y vuelve la cover a su estado inicial
UP.addEventListener('click', () => {
    
    addCover();

    setTimeout(()=>{
        window.scrollTo(0,0);
        removerCover();

        setTimeout(()=>{
            cover.style.display = 'none';
        },1000)

    },1000)

});

const FAQ = document.getElementById('faq');
const FAQLink = document.getElementById('faq-directioner');
const CONTACT = document.getElementById('contact');
const CONTACTLink = document.getElementById('contact-directioner');

//Función que mide la distancia del elemento al top del elemento
let distanciaTotal = elemento => {
    let distancia = elemento.getBoundingClientRect(); //obtiene info del elemento
    let distanciaTotal = distancia.top + window.scrollY; //suma distancia del elemento y de lo que se ha scrolleado
    return distanciaTotal;
}

//Evira que el link funcione por defecto, obtiene la información de la
//sección FAQ, redirecciona y aplica la animación
FAQLink.addEventListener('click', ev => {
    
    let dist = distanciaTotal(FAQ) - 70;
    ev.preventDefault();
    addCover();

    setTimeout(()=>{
        window.scrollTo(0, dist);
        removerCover();

        setTimeout(()=>{
            cover.style.display = 'none';
        },1000)

    },1000)

});

//Evira que el link funcione por defecto, obtiene la información de la
//sección CONTENT, redirecciona y aplica la animación
CONTACTLink.addEventListener('click', ev => {
    
    let dist = distanciaTotal(CONTACT) - 70;
    ev.preventDefault();
    addCover();

    setTimeout(()=>{
        window.scrollTo(0, dist);
        removerCover();

        setTimeout(()=>{
            cover.style.display = 'none';
        },1000)

    },1000)

});