const registerForm = document.getElementById('singup__form');
const registerAlertError = document.getElementById('registerAlertError');
const registerAlertErrorText = document.getElementById('registerAlertError__message');
const registerAlertSuccess = document.getElementById('registerAlertSuccess');
const registerAlertSuccessText = document.getElementById('registerAlertSuccess__text');

//función que valida que la cadena del input name siga un patrón correcto
//De caso contrario, muestra un mensaje de error
const confirmarNombre = (nombre)=>{
    let isValid = true;

    //patrón que debe seguir el input
    const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!namePattern.test(nombre)){
        isValid = false;
        document.getElementById('nameErrorMessage').innerHTML = 'El nombre no debe contener números ni caracteres especiales';
        document.getElementById('nameErrorMessage').style.display = 'block';
    }else{
        document.getElementById('nameErrorMessage').style.display = 'none';
    }

    return isValid;
}

//función que valida que la cadena del input email siga un patrón correcto
//De caso contrario, muestra un mensaje de error
const confirmarCorreo = (correo)=>{
    let isValid = true;

    //patrón que debe seguir el input
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(correo)){
        isValid = false;
        document.getElementById('emailErrorMessage').innerHTML = 'Introduce un correo válido';
        document.getElementById('emailErrorMessage').style.display = 'block';
    }else{
        document.getElementById('emailErrorMessage').style.display = 'none';
    }

    return isValid;
}

//función que valida que las cadenas ingresadas en ambos campos
//de contraseña sean iguales. De caso contrario, muestra un mensaje de error
const confirmarContrasenna = (pass1, pass2) => {
    let isValid = true;

    if(!(pass1 == pass2)){
        isValid = false;
        document.getElementById('passErrorMessage').innerHTML = 'Las contraseñas no coinciden';
        document.getElementById('passErrorMessage').style.display = 'block';
    }else{
        document.getElementById('passErrorMessage').style.display = 'none';
    }

    return isValid;
}

//función que llama todas las validaciones y determina si todas
//sean correctas
const validarDatosRegistro = (nombre, correo, pass1, pass2)=>{
    let isValid = true;
    let validation1 = confirmarNombre(nombre);
    let validation2 = confirmarCorreo(correo);
    let validation3 = confirmarContrasenna(pass1, pass2)

    //validación que todos los campos evaluados sean correctos
    if (validation1 == false || validation2 == false || validation3 == false ) {
        isValid = false;
    }

    return isValid;
}

//función que prepara los datos para enviarlos al back
//en caso que los datos no sean correctos o no válidos, maneja el error
async function enviarRegistro(data) {
    let URL = 'https://ticketproject-br3d.onrender.com';
    try {
        const response = await fetch(`${URL}/auth/register/`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        });

        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        // Procesamos la respuesta como JSON
        const respuesta = await response.json();

        console.log('Respuesta de la API:', respuesta);
        //alerta de la solicitud
        registerAlertSuccessText.innerHTML = 'El registro fue exitoso';
        registerAlertSuccess.showModal();
        setTimeout(()=>{
            registerAlertSuccess.close();
        },2000)


    } catch (error) {
        console.error('Error al enviar datos:', error);
        //alerta de la solicitud
        registerAlertErrorText.innerHTML = 'Hubo un error en el registro';
        registerAlertError.showModal();
        setTimeout(()=>{
            registerAlertError.close();
        },2000)

    }
}

//evento que llama las funciones para validar datos y enviar los datos
registerForm.addEventListener('submit', async ev =>{
    ev.preventDefault();

    const nombreRegistro = document.getElementById('nombreRegistro').value;
    const correoRegistro = document.getElementById('correoRegistro').value;
    const contrasennaRegistro = document.getElementById('contrasennaRegistro').value;
    const contrasennaRegistro_rep = document.getElementById('contrasennaRegistro_rep').value;

    const isValid = validarDatosRegistro(nombreRegistro, correoRegistro, contrasennaRegistro, contrasennaRegistro_rep);

    if (isValid){
        // nombreRegistro : nombreRegistro,
        const registerData = {
            email : correoRegistro,
            password : contrasennaRegistro
        }
        
        await enviarRegistro(registerData);
        
        registerForm.reset();
    }

})