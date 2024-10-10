// ------------------------------------------------------------------------
//                     Ticket & Modal | prio & state
// ------------------------------------------------------------------------

let aplicarEstilosTicket = ()=>{

    const ticketPrio = document.querySelectorAll('.ticket-prio');
    const ticketState = document.querySelectorAll('.ticket-state');

    //asigna un color de fondo según la prioridad del ticket
    ticketPrio.forEach((prio)=>{
        if (prio.innerHTML == 'Alta') {        
            prio.style.backgroundColor = 'var(--prio-alta)';
        } else 
        if (prio.innerHTML == 'Media') {
            prio.style.backgroundColor = 'var(--prio-media)';
        } else 
        if (prio.innerHTML == 'Baja'){
            prio.style.backgroundColor = 'var(--prio-baja)';
        }
    })

    //asigna un color de fondo según el estado del ticket
    ticketState.forEach((state)=>{
        if (state.innerHTML == 'Cerrado') {        
            state.style.backgroundColor = 'var(--state-complete)';
        } else 
        if (state.innerHTML == 'Abierto') {
            state.style.backgroundColor = 'var(--state-unseen)';
        }
    })

}

let aplicarEstilosModal = ()=>{

    const detailsPrio = document.querySelector('.details--prio');
    const detailsState = document.querySelector('.details--state');

    if (detailsPrio.innerHTML == 'Alta') {        
        detailsPrio.style.backgroundColor = 'var(--prio-alta)';
    } else 
    if (detailsPrio.innerHTML == 'Media') {
        detailsPrio.style.backgroundColor = 'var(--prio-media)';
    } else 
    if (detailsPrio.innerHTML == 'Baja'){
        detailsPrio.style.backgroundColor = 'var(--prio-baja)';
    }

    if (detailsState.innerHTML == 'Cerrado') {        
        detailsState.style.backgroundColor = 'var(--state-complete)';
    } else 
    if (detailsState.innerHTML == 'Abierto') {
        detailsState.style.backgroundColor = 'var(--state-unseen)';
    }
}