const nombreUsuario = document.getElementById('user__profile--nombre');
const correoUsuario = document.getElementById('user__profile--correo');
const telefonoUsuario = document.getElementById('user__profile--tel');

//esta función obtiene los datos personales del usuario
async function obtenerDatosUsuario(){
    let URL = 'https://ticketproject-br3d.onrender.com';
    try {
        const response = await fetch(`${URL}/profiles/${localStorage.getItem('id')}`,{
            headers: {
                'Content-Type': 'application/json',
                'token' : localStorage.getItem('validationCode')
            },
            body: JSON.stringify()
        });

        //maneja el error si la petición no devuelve respuesta
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText)
        }

        //maneja la respuesta
        const respuesta = await response.json();
        console.log('Respuesta de la API: ', respuesta);
        return respuesta;

    }catch (error) {
        //manejo del error
        console.error('Error al enviar datos: ', error)
        return null;
    }
}

//función que modifica el html inyectando los datos del usuario
const mostrarDatosUsuario = async ()=>{

    let datos = await obtenerDatosUsuario();

    if(datos){
        nombreUsuario.innerHTML = datos.fullname || 'Nombre no definido';
        correoUsuario.innerHTML = datos.phone || 'Teléfono no definido';
        telefonoUsuario.innerHTML = datos.email || 'correo no definido';
    } else {
        nombreUsuario.innerHTML = 'Nombre no definido';
        correoUsuario.innerHTML = 'Teléfono no definido';
        telefonoUsuario.innerHTML = 'correo no definido';
    }
}

mostrarDatosUsuario();
