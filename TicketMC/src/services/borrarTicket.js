const borrarTicketBtn = document.getElementById('ticket-erase');
const borrarTicketconfirmationModal = document.getElementById('confirmar_borrar_ticket');

const borrarTicketConfirmBtn = document.getElementById('confirmar_borrar_ticket_btn_confirm');
const borrarTicketCancelBtn = document.getElementById('confirmar_borrar_ticket_btn_cancel');

if (localStorage.getItem('rol') == 'user'){

    //inicializa el ticket que se va a borra
    let actualDeletableTicket = 0;

    //función que borra determinado ticket
    async function borrarTicket(ticket_id) {
        let URL = 'https://ticketproject-br3d.onrender.com';
        try {
            const response = await fetch(`${URL}/ticket/${ticket_id}`, {
                method: 'DELETE', 
                headers: {
                    'Content-Type': 'application/json',
                    'token' : localStorage.getItem('validationCode')
                }
            });

            // se verifica si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            
            // se espera a la respuesta del back la respuesta y se almacena como JSON
            const respuesta = await response.json();
            //alerta respuesta guardada exitosamente
            ticketAlertSuccessText.innerHTML = 'Ticket borrado exitosamente';
            ticketAlertSuccessModal.style.display = 'flex';
            ticketAlertSuccessModal.showModal();
            setTimeout(()=>{
                ticketAlertSuccessModal.close();
                ticketAlertSuccessModal.style.display = 'none';
                window.location.reload(true);
            },1500)

        }catch(error) {
            console.error('Error al enviar datos:', error);
            //ticket no puede ser eliminado
            ticketAlertErrorText.innerHTML = 'Hubo un error eliminando el ticket';
            ticketAlertErrorModal.style.display = 'flex';
            ticketAlertErrorModal.showModal();
            setTimeout(()=>{
                ticketAlertErrorModal.close();
                ticketAlertErrorModal.style.display = 'none';

            },1500)
        }
    }

    //escucha al contenedor de tickets y extrae el valor del id del ticket
    //clickeado
    ticketContainer.addEventListener('click', ev => {
    
        const ticket = ev.target.closest('.select-ticket');
            //asigna el valor del ticket a la variable para borra ticket
            const id = ticket.querySelector('.ticket-hidden-info__id').textContent;
            actualDeletableTicket = id;
            console.log(actualDeletableTicket)
        }
    );

    borrarTicketBtn.addEventListener('click',()=>{
        borrarTicketconfirmationModal.style.display = 'flex'; 
        borrarTicketconfirmationModal.showModal(); 
        
        borrarTicketConfirmBtn.addEventListener('click', ()=>{
            borrarTicket(actualDeletableTicket);
            borrarTicketconfirmationModal.close(); 
            borrarTicketconfirmationModal.style.display = 'none'; 
        });

        borrarTicketCancelBtn.addEventListener('click', ()=>{
            borrarTicketconfirmationModal.close(); 
            borrarTicketconfirmationModal.style.display = 'none'; 
        })
    });

}