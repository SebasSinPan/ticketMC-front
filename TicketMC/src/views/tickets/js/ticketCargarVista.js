const ticketsContainer = document.getElementById('container__ticket');

let rol = 'cliente';
if (rol == 'cliente'){
    
    ticketsContainer.appendChild(createTicketCreator())

}