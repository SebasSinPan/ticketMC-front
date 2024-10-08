const setNewPassForm = document.getElementById('data-modal-pass');

const confirmChangePassModal = document.getElementById('confirmChangePass');
const cancelChangePassBtn = document.getElementById('confirmChangePass-cancel');
const confirmChangePassBtn = document.getElementById('confirmChangePass-confirm');


//función que rectifica que los dos campos de la nueva contraseña sean iguales
let validateNewPass = (pass1, pass2)=>{
    let isValid = true;
    
    if (pass1 != pass2){
        isValid = false;
    }

    return isValid;
}

//función que envia las contraseñas antiguas y nuevas para cambiar
//la clave de acceso
async function enviarPass(pass) {
    try {
        const response = await fetch(`${ruta/cambiar/pass}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pass)
        });

        if(!response.ok){
            throw new Error("Error en la solicitud: " + response.statusText);
        }

        //Procesamos la respuesta
        const respuesta = await response.json();
        console.log('Respuesta de la API: ', respuesta);
        alert('contraseña cambiada con éxito');

    } catch (er) {
        console.error('Error al enviar datos: ', error);
        alert('error al cambiar la contraseña');
    }
}

//Evalua los datos de los inputs, tanto la contraseña nueva como las
//nuevas digitadas. Si es verdadero, abre el modal de confirmación
setNewPassForm.addEventListener('submit', ev =>{
    ev.preventDefault();

    //TODO : Buscar una forma en la cual se valide el valor de la contraseña actual
    // const passOld = document.getElementById('user--pass-old');

    let pass1 = document.getElementById('user--pass-new').value;
    let pass2 = document.getElementById('user--pass-new2').value;

    //Compara las nuevas contraseñas
    let passValidated = validateNewPass(pass1, pass2);

    if(passValidated){
        mostrarModal(confirmChangePassModal);
    }else{
        alert('Las contraseñas no coinciden');
    }

})

//Cierra el modal de confirmación de cambio, no el de cambio
cancelChangePassBtn.addEventListener('click', ev =>{
    ev.preventDefault();

    esconderModal(confirmChangePassModal);
})

//TODO : Pedir ruta para esto (validación y cambio de contraseña),
// y hacer purebas

//Pide confirmación al usuario para confirmar la contraseña
confirmChangePassBtn.addEventListener('click', ev =>{
    ev.preventDefault();

    const pass = document.getElementById('user--pass-new');
    enviarPass(pass);

    esconderModal(confirmChangePassModal);
    esconderModal(changePassModal);
    setNewPassForm.reset();
});
