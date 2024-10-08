//-------------------------------------------------------------
//Modificar datos comunes de la cuenta
//-------------------------------------------------------------



//-------------------------------------------------------------
//Modificar datos comunes de la cuenta
//-------------------------------------------------------------

const modUserDataForm = document.getElementById('modal__contenido--datos-usuario-form');

//función que valida el dato ingresado como nombre
const validarNuevoNombre = (nombre)=>{
    let isValid = true;

    //patrón que debe seguir el input
    const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!namePattern.test(nombre)){
        isValid = false;
        document.getElementById('contenido--input_errorName').style = 'block';
    }

    return isValid;
} 

//función que valida el dato ingresado como correo
const validarNuevoCorreo = (correo)=>{
    let isValid = true;

    //patrón que debe seguir el input
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(correo)){
        isValid = false;
        document.getElementById('contenido--input_errorEmail').style = 'block';
    }

    return isValid;
}

//función que valida el dato ingresado como teléfono
const validarNuevoTelefono = (telefono)=>{
    let isValid = true;

    //patrón que debe seguir el input
    const telPattern = /^\d+$/;

    if (!telPattern.test(telefono)){
        isValid = false;
        document.getElementById('contenido--input_errorNum').style = 'block';
    }

    return isValid;
}

modUserDataForm.addEventListener('submit', ev => {
    ev.preventDefault();

    const newName = document.getElementById('updateUserData__nombre').value;
    const newMail = document.getElementById('updateUserData__correo').value;
    const newTel = document.getElementById('updateUserData__tel').value;

    validarNuevoNombre(newName);
    validarNuevoCorreo(newMail);
    validarNuevoTelefono(newTel);


    //------------------------------------
    // TODO : Revisar bien la manera de poder validar y enviar solo
    // un dato, sin necesidad de hacer un fetch por dato
    //------------------------------------
})

//-------------------------------------------------------------
//Modificar contraseña
//-------------------------------------------------------------

const modUserPassForm = document.getElementById('data-modal-pass');