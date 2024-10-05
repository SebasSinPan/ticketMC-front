// ------------------------------------------------------------------------
//                     Ticket & Modal | prio & state
// ------------------------------------------------------------------------

let aplicarEstilosTicket = ()=>{

    const ticketPrio = document.querySelectorAll('.ticket-prio');
    const ticketState = document.querySelectorAll('.ticket-state');

    //asigna un color de fondo según la prioridad del ticket
    ticketPrio.forEach((prio)=>{
        if (prio.innerHTML == 'alta') {        
            prio.style.backgroundColor = 'var(--prio-alta)';
        } else 
        if (prio.innerHTML == 'media') {
            prio.style.backgroundColor = 'var(--prio-media)';
        } else 
        if (prio.innerHTML == 'baja'){
            prio.style.backgroundColor = 'var(--prio-baja)';
        }
    })

    //asigna un color de fondo según el estado del ticket
    ticketState.forEach((state)=>{
        if (state.innerHTML == 'Completado') {        
            state.style.backgroundColor = 'var(--state-complete)';
        } else 
        if (state.innerHTML == 'Visto') {
            state.style.backgroundColor = 'var(--state-onhold)';
        } else 
        if (state.innerHTML == 'No visto'){
            state.style.backgroundColor = 'var(--state-unseen)';
        }
    })

}

let aplicarEstilosModal = ()=>{

    const detailsPrio = document.querySelector('.details--prio');
    const detailsState = document.querySelector('.details--state');

    if (detailsPrio.innerHTML == 'alta') {        
        detailsPrio.style.backgroundColor = 'var(--prio-alta)';
    } else 
    if (detailsPrio.innerHTML == 'media') {
        detailsPrio.style.backgroundColor = 'var(--prio-media)';
    } else 
    if (detailsPrio.innerHTML == 'baja'){
        detailsPrio.style.backgroundColor = 'var(--prio-baja)';
    }

    if (detailsState.innerHTML == 'Completado') {        
        detailsState.style.backgroundColor = 'var(--state-complete)';
    } else 
    if (detailsState.innerHTML == 'Visto') {
        detailsState.style.backgroundColor = 'var(--state-onhold)';
    } else 
    if (detailsState.innerHTML == 'No visto'){
        detailsState.style.backgroundColor = 'var(--state-unseen)';
    }

}