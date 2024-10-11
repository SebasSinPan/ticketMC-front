// Función que cierra seción y elimina todos los datos del usuario
//esto hace que su salida sea segura y rasrto
const exitBtnConfigMenu = document.getElementById('config-button-exit');

exitBtnConfigMenu.addEventListener('click', () =>{
    window.location = '/src/views/login/';
    localStorage.clear();
})