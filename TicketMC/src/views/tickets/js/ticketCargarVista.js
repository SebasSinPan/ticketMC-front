const ticketsContainer = document.getElementById('container__ticket');

let rol = localStorage.getItem('rol');
if (rol == 'user'){
    
    ticketsContainer.appendChild(createTicketCreator())

}

const solveSupportTicketBtn = document.getElementById('details__header--response-btn');

if (rol !== 'admin'){
    solveSupportTicketBtn.style.display = 'none';
}else{
    solveSupportTicketBtn.style.display = 'block';
}