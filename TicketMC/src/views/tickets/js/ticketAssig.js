// ------------------------------------------------------------------------
//                          Tickets abiertos
// ------------------------------------------------------------------------

let date = new Date();
        console.log(date.toISOString())
//Obtiene los datos del back y, con ellos, llama al js de
//componentes para crear, elemento por elemento, el ticket
async function loadOpenTickets() {
    let URL = 'https://ticketproject-br3d.onrender.com';
    try {
        const response = await fetch(`${URL}/ticket/`,{
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                'token' : localStorage.getItem('validationCode')
            },
        });
        const datos = await response.json();
        console.log(datos)
        
        let capitalizeTicketData = (data) => {
            return data.charAt(0).toUpperCase() + data.slice(1)
        }

        // asigna cada dato a una variable
        for (let i = 0; i < datos.length; i++) {
            
            let dataTicketId = datos[i].id;
            let dataTticketDate = datos[i].created_at.slice(0,10);
            let dataTticketTitle = capitalizeTicketData(datos[i].title);
            let dataTticketDescription = capitalizeTicketData(datos[i].description);
            let dataTticketPrio = capitalizeTicketData(datos[i].priority);
            let dataTticketState = capitalizeTicketData(datos[i].status);

            //Ahora, dependiendo de la información del ticket, se van a realizar
            //algunos filtros por vista

            //Vista principal, sólo tickets abiertos
            const ticketContainer = document.getElementById('container__ticket--ticket');
            if (dataTticketState == 'Abierto'){
                ticketContainer.appendChild(createTicket(dataTicketId, dataTticketDate, dataTticketTitle, dataTticketDescription, dataTticketPrio, dataTticketState));
            }

            //Vista tickets cerrados, sólo tickets cerrados
            // const completedTicketContainer = document.getElementById('container__completed');
            // if (dataTticketState == 'Cerrado'){
            //     completedTicketContainer.appendChild(createTicketCompleted(dataTicketId, dataTticketDate, dataTticketTitle, dataTticketState, dataTicketTech, dataTicketSolution, dataTicketUser, dataTticketDescription, dataTticketPrio));
            // }

            //Vista todos los tickets, todos los tickets
            const allTicketContainer = document.getElementById('container__history');
            allTicketContainer.appendChild(createTicket(dataTicketId, dataTticketDate, dataTticketTitle, dataTticketDescription, dataTticketPrio, dataTticketState));
            
            
            //aplica los estilos del ticket según su información 
            aplicarEstilosTicket();

        }

    }catch (error) {
        console.error('Error cargando los datos:', error);
        console.log(`${error}: hubo un error en la obtención de los datos`)
    }
}

//Ejecuta la función al cargar la página
window.onload = loadOpenTickets;