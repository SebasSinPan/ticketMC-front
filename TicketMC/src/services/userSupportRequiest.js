const supportMessageForm = document.getElementById('modalHelp__contenido--form');
const supportMessageModal = document.getElementById('modalHelp');

//Función que envía los datos del formulario de ayuda de 
//soporte al back
async function enviarMensajeSoporte(data) {
    //Determina como return si el mensaje se envió o no
    let sendValidator = true;
    try {
        const response = await fetch(`${URL}/ticket/support`, {
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

        //TODO : Añadir lógica para enviar el correo o recibir una confirmación
        //que el mensaje fue enviado

        //Ya que la respuesta fue exitosa, el validador es verdadero
        sendValidator = true;
        return sendValidator;

    } catch (error) {
        console.error('Error al enviar datos:', error);
        //Ya que la respuesta fue fallida, el validador es falso
        sendValidator = false;
        return sendValidator;
    }

}

//evento que, al presionar el botón de enviar, extrae los datos
//del formulario, los trata y envía al back
supportMessageForm.addEventListener('submit', ev =>{
    ev.preventDefault();

    const supportMessageTopic = document.getElementById('modalHelpInput--asunto');
    const supportMessageDescription = document.getElementById('modalHelpInput--mensaje');

    let mensaje = {
        title : supportMessageTopic,
        description : supportMessageDescription
    }

    let enviarMensaje = enviarMensajeSoporte(mensaje);
    
    if (enviarMensaje) {
        supportMessageModal.classList.add('hideGenericModal');

        supportMessageModal.addEventListener('animationend', ()=>{
            supportMessageForm.reset();
            supportMessageModal.classList.remove('hideGenericModal');
            supportMessageModal.close();
        })
    }else{
        alert('Tuvimos problemas enviando su mensaje. Por favor intente más tarde')
    }
});