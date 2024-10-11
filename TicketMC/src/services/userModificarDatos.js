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

const validarValidaciones = (val1, val2) =>{
    let isValid = true;
    if(!(val1 && val2)) {
        isValid = false;
    }
    return isValid;
}

async function actualizarDatosUsuario(data){
    let URL = 'https://ticketproject-br3d.onrender.com';
    try {
        const response = await fetch(`${URL}/profiles/${localStorage.getItem('id')}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                'token' : localStorage.getItem('validationCode')
            },
            body: JSON.stringify(data)
        });

        // se verifica si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        const respuesta = await response.json();
        console.log('Respuesta de la API:', respuesta);
        

    }catch (error){
        console.error('Error al enviar datos: ', error);
    }
}

modUserDataForm.addEventListener('submit', ev => {
    ev.preventDefault();

    const newName = document.getElementById('updateUserData__nombre').value;
    const newTel = document.getElementById('updateUserData__tel').value;

    let val1 = validarNuevoNombre(newName);
    let val2 = validarNuevoTelefono(newTel);

    if (validarValidaciones(val1, val2)){
        let data = {
            id: localStorage.getItem('id'),
            fullname: newName,
            phone: newTel
        }
        
        actualizarDatosUsuario(data);

    }

})
