//--------------------------------------------------------------------
//            Rutas asociadas
//--------------------------------------------------------------------

const ticketViewBtn = document.getElementById('user__option--tickets-btn');
const logoViewTickets = document.getElementById('userNavLogo');

//redirecciona a la página de visualización de ticktt
ticketViewBtn.addEventListener('click', ()=>{
    window.location = '/src/views/tickets/';
})

//redirecciona a la página principal de visualización
logoViewTickets.addEventListener('click', ()=>{
    window.location = '/src/views/tickets/';
})
