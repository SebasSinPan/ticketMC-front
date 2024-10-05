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
        MODAL.showModal();
});

//Permite cerrar el modal al clickear fuera de este
MODAL.addEventListener('click', e => {
    const dialogDimensions = MODAL.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        MODAL.close();
    }
});

// ------------------------------------------------------------------------
//                          Datos de los tickets
// ------------------------------------------------------------------------

//Obtiene los datos de los tickets y, con ellos, crea elemento por elemento,
//el ticket, para añadirlo al HTML
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
            
            // Crea el contenedor principal
            const ticketDiv = document.createElement('div');
            ticketDiv.className = 'ticket select-ticket';

            // Div título
            const titleDiv = document.createElement('div');
            titleDiv.className = 'ticket--title';

            // Creación h3
            const titleElement = document.createElement('h3');
            titleElement.className = 'title--name';
            titleElement.textContent = `${dataTticketTitle}`;

            // Creación prioridad
            const priorityElement = document.createElement('span');
            priorityElement.className = 'title--prio ticket-prio';
            priorityElement.textContent = `${dataTticketPrio}`;

            // Inyección a Div título
            titleDiv.appendChild(titleElement);
            titleDiv.appendChild(priorityElement);

            // Div descripción
            const descriptionDiv = document.createElement('div');
            descriptionDiv.className = 'ticket--description';

            // Párrafo descripción
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = `${dataTticketDescription}`;

            // Inyección a Div descipción
            descriptionDiv.appendChild(descriptionElement);

            // Div estado
            const stateDiv = document.createElement('div');
            stateDiv.className = 'ticket--state';

            // Creación Estado
            const stateElement = document.createElement('span');
            stateElement.className = 'ticket-state';
            stateElement.textContent = `${dataTticketState}`;

            // Inyección Estado
            stateDiv.appendChild(stateElement);

            // Inyección al Div del ticket
            ticketDiv.appendChild(titleDiv);
            ticketDiv.appendChild(descriptionDiv);
            ticketDiv.appendChild(stateDiv);

            // Inyectar Ticket al contenedor
            ticketContainer.appendChild(ticketDiv);

            aplicarEstilosTicket();

        }

    }catch (error) {
        console.error('Error cargando los datos:', error);
    }
}

window.onload = cargarDatos;