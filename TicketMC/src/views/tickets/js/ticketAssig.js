// ------------------------------------------------------------------------
//                          Tickets abiertos
// ------------------------------------------------------------------------

let date = new Date();
        console.log(date.toISOString())
// Obtiene los datos del back y, con ellos, llama al js de
// componentes para crear, elemento por elemento, el ticket
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
        // console.log(datos)
        
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

           // Vista principal, sólo tickets abiertos
            const ticketContainer = document.getElementById('container__ticket--ticket');
            if (dataTticketState === 'Abierto') {
                ticketContainer.appendChild(createTicket(dataTicketId, dataTticketDate, dataTticketTitle, dataTticketDescription, dataTticketPrio, dataTticketState));
            }

            // // Vista tickets cerrados, sólo tickets cerrados
            // const completedTicketContainer = document.getElementById('container__completed');
            // if (dataTticketState === 'Cerrado') {
            //     completedTicketContainer.appendChild(createTicketCompleted(dataTicketId, dataTticketDate, dataTticketTitle, dataTticketState, dataTicketTech, dataTicketSolution, dataTicketUser, dataTticketDescription, dataTticketPrio));
            // }

            // Vista todos los tickets, todos los tickets
            const allTicketContainer = document.getElementById('container__history');
            allTicketContainer.appendChild(createTicket(dataTicketId, dataTticketDate, dataTticketTitle, dataTticketDescription, dataTticketPrio, dataTticketState));

            // Aplica los estilos del ticket según su información 
            aplicarEstilosTicket();


        }

    }catch (error) {
        console.error('Error cargando los datos:', error);
        console.log(`${error}: hubo un error en la obtención de los datos`)
    }
}

//Ejecuta la función al cargar la página

///////////////////////////////////////////

async function loadAllTickets() {
    let URL = 'https://ticketproject-br3d.onrender.com';
    try {
        const response = await fetch(`${URL}/users/${localStorage.getItem('id')}/tickets-solutions/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token' : localStorage.getItem('validationCode')
            },
        });
        const datos = await response.json();
        console.log(datos)
        
        // asigna cada dato a una variable
        for (let i = 0; i < datos.length; i++) {
            
            let ticketId = datos[i].id;
            let tech_id = datos[i].tech_id;
            let user_id = datos[i].user_id;
            let title = datos[i].title;
            let description = datos[i].description;
            let status = datos[i].status;
            let priority = datos[i].priority;
            let title_solution = datos[i].title_solution;
            let date_solution = datos[i].date_solution;
            let tech_description = datos[i].tech_description;

            // Vista tickets cerrados, sólo tickets cerrados
            const completedTicketContainer = document.getElementById('container__completed');
            if (status == 'cerrado') {
                completedTicketContainer.appendChild(createTicketCompleted(ticketId, date_solution, title, 'Cerrado', `Técnico id: ${tech_id}`, date_solution, tech_description,`Usuario id: ${user_id}`, description, priority));
            }

            // Aplica los estilos del ticket según su información 
            aplicarEstilosTicket();


        }
    }catch(error){
        console.error('error' + error.status)
    }
}


window.onload = ()=>{
    loadOpenTickets();
    loadAllTickets();
}

