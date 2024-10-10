const sendTicketResponseBtn = document.querySelector('.response-answer-btn-send');
const sendTicketResponseForm = document.getElementById('resolve--response-form');
const solveInitializerBtn = document.getElementById('details__header--response-btn');

const ticketAlertSuccessModal = document.getElementById('ticketAlertSuccess');
const ticketAlertSuccessText = document.getElementById('registerAlertSuccess__message');
const ticketAlertErrorModal = document.getElementById('ticketAlertError');
const ticketAlertErrorText = document.getElementById('registerAlertError__message');

//condicional que evita errores al no ingresar como usuario
if (localStorage.getItem('rol') != 'user') {

    //Inizializa los valores requeridos para responder el ticket
    let actualSolvingTicketId = 0;

    //Este evento extrae el id del ticket del cual se despliega la plantilla de 
    //solución
    solveInitializerBtn.addEventListener('click', ()=>{
        const solvingTicketId = parseInt(document.querySelector('.resolve--title-number').innerHTML);
        console.log(solvingTicketId)
        actualSolvingTicketId = solvingTicketId;
    })

    // función que envia la respuesta del ticket a la base de datos
    async function enviarDatosTicket(data, id) {
        let URL = 'https://ticketproject-br3d.onrender.com';
        try {
            const response = await fetch(`${URL}/ticket/solution/${id}`, {
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

            // se espera a la respuesta del back la respuesta como JSON
            const respuesta = await response.json();
            //alerta respuesta guardada exitosamente
            ticketAlertSuccessText.innerHTML = 'Respuesta registrada exitosamente';
            ticketAlertSuccessModal.style.display = 'flex';
            ticketAlertSuccessModal.showModal();
            setTimeout(()=>{
                ticketAlertSuccessModal.close();
                window.location.reload(true);
            },1500)

        } catch (error) {
            console.error('Error al enviar datos:', error);
            //alerta respuesta no ha sido almacenada
            ticketAlertErrorText.innerHTML = 'Hubo un error al almacenar la respuesta';
            ticketAlertErrorModal.style.display = 'flex';
            ticketAlertErrorModal.showModal();
            setTimeout(()=>{
                ticketAlertErrorModal.close();
            },1500)
        }
    }


    // //se crea una función que obtiene la fecha actual
    const responseTicketDate = ()=>{
        //Crear un objeto con la api de fecha para obtener la fecha actual
        //y la parsea al formato ISO
        let fecha = new Date();
        return fecha.toISOString();
    }

    sendTicketResponseForm.addEventListener('submit', ev =>{
        ev.preventDefault();
    
        const responseTicketPrio = document.querySelector('.response-ticket-prio__data').innerHTML.toLowerCase();
        const ticketTitle = 'Título provicional'
        const ticketSolutionText = document.getElementById('response-answer-solution').value;
    
        const respuestaTicket = {
            "id": actualSolvingTicketId,
            "tech_id": localStorage.getItem('id'),
            "status": "cerrado",
            "priority": responseTicketPrio,
            "title_solution": ticketTitle,
            "date_solution": responseTicketDate(),
            "tech_description": ticketSolutionText,
            "category": 'Ticket de soporte'
        }
    
        enviarDatosTicket(respuestaTicket, actualSolvingTicketId);
    
    })

}