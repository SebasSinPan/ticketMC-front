// ------------------------------------------------------------------------
//                          Tickets abiertos
// ------------------------------------------------------------------------

//Obtiene los datos del back y, con ellos, llama al js de
//componentes para crear, elemento por elemento, el ticket
async function loadOpenTickets() {
    try {
        //Con un fetch, lee los datos de los tickets almacenados
        const response = await fetch('datos.json');
        const datos = await response.json();

        //asigna cada dato a una variable
        for (let i = 0; i < datos.length; i++) {
            
            let dataTicketId = datos[i].ticketId;
            let dataTticketDate = datos[i].ticketDate;
            let dataTticketTitle = datos[i].ticketTitle;
            let dataTticketDescription = datos[i].ticketDescription;
            let dataTticketPrio = datos[i].ticketPrio;
            let dataTticketState = datos[i].ticketState;

            //con una función ya definida, crea el elemento del ticket
            const ticketContainer = document.getElementById('container__ticket--ticket');

            // // Inyectar Ticket al contenedor
            ticketContainer.appendChild(createTicket(dataTicketId, dataTticketDate, dataTticketTitle, dataTticketDescription, dataTticketPrio, dataTticketState));

            //aplica los estilos del ticket según su información 
            aplicarEstilosTicket();

        }

    }catch (error) {
        console.error('Error cargando los datos:', error);
    }
}

//Ejecuta la función al cargar la página
window.onload = loadOpenTickets;

// ------------------------------------------------------------------------
//                          Tickets completados
// ------------------------------------------------------------------------

// Obtiene los datos de los tickets de un json y, con ellos, llama al js de
// componentes para crear, elemento por elemento, el ticket
async function loadClosedTickets() {
    try {
        //Con un fetch, lee los datos de los tickets almacenados
        const response = await fetch('datos.json');
        const datos = await response.json();
        
        //asigna cada dato a una variable
        for (let i = 0; i < datos.length; i++) {
            
            let dataTicketId = datos[i].ticketId;
            let dataTticketDate = datos[i].ticketDate;
            let dataTticketTitle = datos[i].ticketTitle;
            let dataTticketDescription = datos[i].ticketDescription;
            let dataTticketPrio = datos[i].ticketPrio;
            let dataTticketState = datos[i].ticketState;

            //con una función ya definida, crea el elemento del ticket
            const completedTicketContainer = document.getElementById('container__completed');

            // // Inyectar Ticket al contenedor
            completedTicketContainer.appendChild(createTicket(dataTicketId, dataTticketDate, dataTticketTitle, dataTticketDescription, dataTticketPrio, dataTticketState));

            //aplica los estilos del ticket según su información 
            aplicarEstilosTicket();

        }

    }catch (error) {
        console.error('Error cargando los datos:', error);
    }
}

// window.onload = loadClosedTickets;

// // ------------------------------------------------------------------------
// //                          Todos los tickets
// // ------------------------------------------------------------------------

async function loadAllTickets() {
    try {
        //Con un fetch, lee los datos de los tickets almacenados
        const response = await fetch('datos.json');
        const datos = await response.json();
        
        //asigna cada dato a una variable
        for (let i = 0; i < datos.length; i++) {
            
            let dataTicketId = datos[i].ticketId;
            let dataTticketDate = datos[i].ticketDate;
            let dataTticketTitle = datos[i].ticketTitle;
            let dataTticketDescription = datos[i].ticketDescription;
            let dataTticketPrio = datos[i].ticketPrio;
            let dataTticketState = datos[i].ticketState;

            //con una función ya definida, crea el elemento del ticket
            const allTicketContainer = document.getElementById('container__completed');

            // // Inyectar Ticket al contenedor
            allTicketContainer.appendChild(createTicket(dataTicketId, dataTticketDate, dataTticketTitle, dataTticketDescription, dataTticketPrio, dataTticketState));

            //aplica los estilos del ticket según su información 
            aplicarEstilosTicket();

        }

    }catch (error) {
        console.error('Error cargando los datos:', error);
    }
}

// window.onload = loadAllTickets;