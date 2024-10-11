//--------------------------------------------------------------------
//            Rutas asociadas
//--------------------------------------------------------------------

const logoBtnReload = document.getElementById('header__logo-btn');
const logoBtnProfile = document.getElementById('header__profile-btn');
const routeViewUserSettings = document.getElementById('config-modal--profile-btn');

//recarga la página al clickear en el logo
logoBtnReload.addEventListener('click', ()=>{
    window.location.reload(true);
})

//redirige al usuario a la vista de datos de usuario
logoBtnProfile.addEventListener('click', ()=>{
    window.location = '/src/views/user/'
})

//ruta del modal que cierra seción
routeViewUserSettings.addEventListener('click', ()=>{
    localStorage.clear();
    window.location.href = '/src/views/user/'
})