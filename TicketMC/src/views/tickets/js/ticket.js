// ------------------------------------------------------------------------
//                          Ticket details
// ------------------------------------------------------------------------

const MODAL = document.getElementById('modal');
const ticketContainer = document.querySelector('.container__ticket--ticket'); 

//detecta el ticket al que se le da click y le asigna sus dutos al modal
ticketContainer.addEventListener('click', ev => {
    
    const ticket = ev.target.closest('.select-ticket');

        const title = ticket.querySelector('.title--name').textContent;
        const prio = ticket.querySelector('.title--prio').textContent;
        const description = ticket.querySelector('.ticket--description p').textContent;
        const state = ticket.querySelector('.ticket-state').textContent;
        
        MODAL.querySelector('.details--title').textContent = title;
        MODAL.querySelector('.details--state').textContent = state;
        MODAL.querySelector('.details--prio').textContent = prio;
        MODAL.querySelector('.details--description').textContent = description;

        aplicarEstilosModal();  
        MODAL.classList.add('fade-in-modal');
        MODAL.showModal();

        // evento que limpia la clase de animación una vez que la animación termine
        MODAL.addEventListener('animationend', () => {
            MODAL.classList.remove('fade-in-modal');
        });
});

//Permite cerrar el modal al clickear fuera de este
//además, añade y elimina la animación de salida
MODAL.addEventListener('click', e => {
    const dialogDimensions = MODAL.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        //agrega una animación a la salida del modal
        MODAL.classList.add('fade-out-modal');
        
        //tras ocurrir la animación, la animación se remueve
        MODAL.addEventListener('animationend', () => {
            MODAL.close();
            MODAL.classList.remove('fade-out-modal');
        }, {once: true});
    }
});

// ------------------------------------------------------------------------
//                          Datos de los tickets
// ------------------------------------------------------------------------

//Obtiene los datos de los tickets de un json y, con ellos, llama al js de
//componentes para crear, elemento por elemento, el ticket
async function cargarDatos() {
    try {
        const response = await fetch('datos.json');
        const datos = await response.json();
        
        for (let i = 0; i < datos.length; i++) {
            
            let dataTicketId = datos[i].ticketId;
            let dataTticketTitle = datos[i].ticketTitle;
            let dataTticketDescription = datos[i].ticketDescription;
            let dataTticketPrio = datos[i].ticketPrio;
            let dataTticketState = datos[i].ticketState;
            let dataTticketDate = datos[i].ticketDate;

            const ticketContainer = document.querySelector('.container__ticket--ticket');

            // // Inyectar Ticket al contenedor
            ticketContainer.appendChild(createTicket(dataTticketTitle, dataTticketDescription, dataTticketPrio, dataTticketState));

            aplicarEstilosTicket();

        }

    }catch (error) {
        console.error('Error cargando los datos:', error);
    }
}

window.onload = cargarDatos;