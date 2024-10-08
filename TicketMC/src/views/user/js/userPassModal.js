const changePassBtn = document.getElementById('user-pass');
const changePassModal = document.getElementById('options--data-modal');
const changePassForm = document.getElementById('data-modal-pass');
const changePassCloseBtn = document.getElementById('data-modal-close');


//función que le da al modal una clase para la entrada del modal, lo
//muestra y después retira la clase de la entrada
const mostrarModal  = (modal)=>{
    modal.classList.add('showGenericModal')
    modal.showModal();
    modal.addEventListener('animationend', ()=>{
        modal.classList.remove('showGenericModal')
    })
}

//función que le da al modal una clase para la salida del modal, lo
//oculta y después retira la clase de la salida
const esconderModal  = (modal)=>{
    modal.classList.add('hideGenericModal')
    modal.addEventListener('animationend', () => {
        modal.close();
        modal.classList.remove('hideGenericModal');
    }, {once: true});
}

//Abre el modal para cambiar la contraseña
changePassBtn.addEventListener('click', ev =>{
    ev.preventDefault();

    mostrarModal(changePassModal);
})

//Cierra el modal de cambio de contraseña
changePassCloseBtn.addEventListener('click', ()=>{
    esconderModal(changePassModal);
    changePassForm.reset();
})
