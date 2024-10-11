// Función que cierra seción y elimina todos los datos del usuario
//esto hace que su salida sea segura y rasrto
const cerrarSesionBtn = document.getElementById('modalClose__btns--confirm');

cerrarSesionBtn.addEventListener('click', () =>{
    window.location = '/src/views/login/';
    localStorage.clear();
})