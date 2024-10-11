const ticketsContainer = document.getElementById('container__ticket');
const ticketPosibilityErase = document.getElementById('ticket-erase-container');

let rol = localStorage.getItem('rol');
if (rol == 'user'){
    ticketPosibilityErase.style.display = 'block';
    ticketsContainer.appendChild(createTicketCreator())

}

const solveSupportTicketBtn = document.getElementById('details__header--response-btn');

if (rol !== 'admin'){
    solveSupportTicketBtn.style.display = 'none';
}else{
    solveSupportTicketBtn.style.display = 'block';
}