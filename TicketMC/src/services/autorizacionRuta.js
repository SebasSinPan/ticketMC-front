//Función que valida que el usuario se haya autenticado 
//si no hay registro de la autenticación, lo devuelve al login
if (!localStorage.getItem('validationCode')) {
    window.location = '/src/views/error/';
}