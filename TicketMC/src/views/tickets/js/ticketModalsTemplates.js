// ------------------------------------------------------------------------
//                          Ticket Modal & Response
// ------------------------------------------------------------------------

const ticketContainer = document.querySelector('.container__ticket--ticket'); 

//Elementos del modal con los detalles del ticket
const MODAL = document.getElementById('modal');

//Elementos de la plantilla del 

//detecta el ticket al que se le da click y le asigna sus dutos al modal y a
//la palntilla de respuesta
//Este evento ocurre al clickear cualquier tickets, lo que hace que el modal de
//detalles se abra inmediatamente
ticketContainer.addEventListener('click', ev => {
    
    const ticket = ev.target.closest('.select-ticket');

        //Datos únicos de la plantilla
        const id = ticket.querySelector('.ticket-hidden-info__id').textContent;
        const date = ticket.querySelector('.ticket-hidden-info__date').textContent;
        
        //Datos comportidos
        const title = ticket.querySelector('.title--name').textContent;
        const prio = ticket.querySelector('.title--prio').textContent;
        const description = ticket.querySelector('.ticket--description p').textContent;
        const state = ticket.querySelector('.ticket-state').textContent;
        
        //Datos impresos en la modal de detalles del ticket
        MODAL.querySelector('.details--title').textContent = title;
        MODAL.querySelector('.details--state').textContent = state;
        MODAL.querySelector('.details--prio').textContent = prio;
        MODAL.querySelector('.details--description').textContent = description;

        //Datos impresos en la plantilla de solución del ticket
        mainContainerResponse.querySelector('.resolve--title-number').textContent = id;
        mainContainerResponse.querySelector('.response-ticket-title__name').textContent = title;
        mainContainerResponse.querySelector('.response-ticket-prio__data').textContent = prio;
        mainContainerResponse.querySelector('.response-ticket-description__text').textContent = description;

        aplicarEstilosModal();  
        MODAL.classList.add('fade-in-modal');
        MODAL.showModal();

        // evento que limpia la clase de animación una vez que la animación termine
        MODAL.addEventListener('animationend', () => {
            MODAL.classList.remove('fade-in-modal');
        }
    );
});

//Permite cerrar el modal al clickear fuera de este
//además, añade y elimina la animación de salida
MODAL.addEventListener('click', e => {
    const dialogDimensions = MODAL.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        //agrega una animación a la salida del modal
        MODAL.classList.add('fade-out-modal');
        
        //tras ocurrir la animación, la animación se remueve
        MODAL.addEventListener('animationend', () => {
            MODAL.close();
            MODAL.classList.remove('fade-out-modal');
        }, {once: true});
    }
});

// ------------------------------------------------------------------------
//                          Resolver tickets
// ------------------------------------------------------------------------


//botones que habilitan o desabilitan la plantilla de respuesta
const resolveTicketBtn = document.getElementById('details__header--response-btn');
const cancelTicketResponseBtn = document.querySelector('.response-answer-btn-cancel');
//elementos del a página principal
const mainContainerFilters = document.getElementById('container__ticket--ticket-filters');
const mainContainerContent = document.getElementById('container__ticket--ticket');
//plantilla de respuesta
const mainContainerResponse = document.getElementById('container__resolve');

//hace que todo el contenido del contenedor desaparezca y trae el formulario
//para solucionar el ticket
resolveTicketBtn.addEventListener('click', ev => {
    ev.preventDefault();

    //aplica clases con animaciones para desvanecer
    MODAL.classList.add('fade-out-view');
    mainContainerFilters.classList.add('fade-out-view');
    mainContainerContent.classList.add('fade-out-view');

    //tras ocurridas las animaciones, se eliminana y se cambia su display
    MODAL.addEventListener('animationend', ()=>{
        MODAL.classList.remove('fade-out-view');
        MODAL.close();
        mainContainerFilters.classList.remove('fade-out-view');
        mainContainerFilters.style.display = 'none';
        mainContainerContent.classList.remove('fade-out-view');
        mainContainerContent.style.display = 'none';
        
        //Se despliega la plantilla de respuesta
        mainContainerResponse.classList.add('fade-in-view');
        mainContainerResponse.style.display = 'block';

        //Tras la animación, se elimina la clase que la contiene
        mainContainerResponse.addEventListener('animationend', ()=>{
            mainContainerResponse.classList.remove('fade-in-view');
        })
    })
})

//Evento que cancela la respuesta y permite volver a la página principal de tickets
cancelTicketResponseBtn.addEventListener('click', ev =>{
    ev.preventDefault();

    //se le añade la animación de desvanecimiento
    mainContainerResponse.classList.add('fade-in-view_reverse');
    //Tras la animación, se elimina la animación, se cambia el display y
    //se recarga la pestaña
    mainContainerResponse.addEventListener('animationend', ()=>{
        mainContainerResponse.classList.remove('fade-in-view_reverse');
        mainContainerResponse.style.display = 'none';
        window.location.reload(true);
    })
})

// ------------------------------------------------------------------------
//                    Detalles de tickets resueltos
// ------------------------------------------------------------------------

// const completedTicketsContainer = getElementById('container__completed');
const openResponseBtn = document.getElementById('completed-open-details');
const responseSumaryModal = document.getElementById('completed--deatils-modal');

openResponseBtn.addEventListener('click', ()=>{
    responseSumaryModal.showModal();
})

responseSumaryModal.addEventListener('click', e =>{
    const dialogDimensions = responseSumaryModal.getBoundingClientRect();

    //TODO : La animación de entrada no funciona
    responseSumaryModal.classList.add('fade-in-modal');
    responseSumaryModal.showModal();
    responseSumaryModal.addEventListener('animationend', ()=>{
        responseSumaryModal.classList.remove('fade-in-modal');
    })

    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        //agrega una animación a la salida del modal
        responseSumaryModal.classList.add('fade-out-modal');
        
        //tras ocurrir la animación, la animación se remueve
        responseSumaryModal.addEventListener('animationend', () => {
            responseSumaryModal.close();
            responseSumaryModal.classList.remove('fade-out-modal');
        }, {once: true});
    }
})

// completedTicketsContainer.addEventListener('click', ev => {
    
//     const closedTicketBtn = ev.target.closest('.completed-open-details');

//         //Datos únicos de la plantilla
//         const id = ticket.querySelector('.ticket-hidden-info__id').textContent;
//         const date = ticket.querySelector('.details--date').textContent;
        
//         //Datos comportidos
//         const title = ticket.querySelector('.title--name').textContent;
//         const prio = ticket.querySelector('.title--prio').textContent;
//         const description = ticket.querySelector('.ticket--description p').textContent;
//         const state = ticket.querySelector('.ticket-state').textContent;
        
//         //Datos impresos en la modal de detalles del ticket
//         MODAL.querySelector('.details--title').textContent = title;
//         MODAL.querySelector('.details--state').textContent = state;
//         MODAL.querySelector('.details--prio').textContent = prio;
//         MODAL.querySelector('.details--description').textContent = description;

//         //Datos impresos en la plantilla de solución del ticket
//         mainContainerResponse.querySelector('.resolve--title-number').textContent = id;
//         mainContainerResponse.querySelector('.response-ticket-title__name').textContent = title;
//         mainContainerResponse.querySelector('.response-ticket-prio__data').textContent = prio;
//         mainContainerResponse.querySelector('.response-ticket-description__text').textContent = description;

//         aplicarEstilosModal();  
//         MODAL.classList.add('fade-in-modal');
//         MODAL.showModal();

//         // evento que limpia la clase de animación una vez que la animación termine
//         MODAL.addEventListener('animationend', () => {
//             MODAL.classList.remove('fade-in-modal');
//         }
//     );
// });