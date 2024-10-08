const createTicketBtn = document.getElementById('ticket--create-btn');
const createTicketModal = document.getElementById('create__ticket');
const closeTicketModal = document.getElementById('create__ticket-close');
const closerBtnModal = document.getElementById('btn--container-cancel');
const sendTicketData = document.getElementById('btn--container-create');

//evento que abre el modal si se clickea sobre el elemento indicado
createTicketBtn.addEventListener('click', ()=>{
    createTicketModal.classList.add('fade-in-modal');
    createTicketModal.showModal();
});

// evento que limpia la clase una vez que la animación termine
createTicketModal.addEventListener('animationend', () => {
    createTicketModal.classList.remove('fade-in-modal');
});

//función que cierra el modal si se clickea sobre el elemento indicado
let cerrarModal = (elemento)=> {
    elemento.addEventListener('click', ()=>{
        //agrega una animación a la salida del modal
        createTicketModal.classList.add('fade-out-modal');

        //tras ocurrir la animación, la animación se remueve
        createTicketModal.addEventListener('animationend', () => {
            createTicketModal.close();
            createTicketModal.classList.remove('fade-out-modal');
        }, {once: true});
    });
}

cerrarModal(closeTicketModal);
cerrarModal(closerBtnModal);

//función que cierra el modal si se clickea por fuera de este
createTicketModal.addEventListener('click', ev =>{
    //Se obtienen los límites del componenete
    const dialogDimensions = createTicketModal.getBoundingClientRect();
    //Evaluación del dónde se clickea: si se clickea fuera del modal se cierra
    if (
        ev.clientX < dialogDimensions.left ||
        ev.clientX > dialogDimensions.right ||
        ev.clientY < dialogDimensions.top ||
        ev.clientY > dialogDimensions.bottom
    ) {
        //agrega una animación a la salida del modal
        createTicketModal.classList.add('fade-out-modal');

        //tras ocurrir la animación, la animación se remueve
        createTicketModal.addEventListener('animationend', () => {
            createTicketModal.close();
            createTicketModal.classList.remove('fade-out-modal');
        }, {once: true});
    }
})