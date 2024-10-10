const btnObtenerDatosTickets = document.getElementById('btn--container-create');
const formCrearTicket = document.getElementById('formCrearTicket');
const modalCrearTicket = document.getElementById('create__ticket');

const ticketCreateAlertSuccessModal = document.getElementById('ticketAlertSuccess');
const ticketCreateAlertSuccessText = document.getElementById('registerAlertSuccess__message');
const ticketCreateAlertErrorModal = document.getElementById('ticketAlertError');
const ticketCreateAlertErrorText = document.getElementById('registerAlertError__message');

//evita problemas con el ingreso de técnicos
if (localStorage.getItem('rol') == 'user'){

    //función que envia los datos del ticket al backend para crear un ticket
    async function enviarDatosTicket(data) {
        let URL = 'https://ticketproject-br3d.onrender.com';
        try {
            const response = await fetch(`${URL}/ticket/`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                    'token' : localStorage.getItem('validationCode')
                },
                body: JSON.stringify(data)
            });
    
            // se verifica si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
    
            // se espera a la respuesta del back la respuesta como JSON
            const respuesta = await response.json();
            console.log('Respuesta de la API:', respuesta);
            //alerta ticket creado  exitosamente
            ticketCreateAlertSuccessText.innerHTML = 'Ticket creado exitosamente';
            ticketCreateAlertSuccessModal.style.display = 'flex';
            ticketCreateAlertSuccessModal.showModal();
            setTimeout(()=>{
                ticketCreateAlertSuccessModal.close();
                window.location.reload(true);
            },1500)

        } catch (error) {
            console.error('Error al enviar datos:', error);
            //alerta respuesta no ha sido almacenada
            ticketCreateAlertErrorText.innerHTML = 'Error al crear el ticket';
            ticketCreateAlertErrorModal.style.display = 'flex';
            ticketCreateAlertErrorModal.showModal();
            setTimeout(()=>{
                ticketCreateAlertErrorModal.close();
                formCrearTicket.reset();
                modalCrearTicket.classList.add('fade-out-modal');
                setTimeout(()=>{
                    modalCrearTicket.close();
                    modalCrearTicket.classList.remove('fade-out-modal');
                }, 300)
            },1500)
        }
    }

    //se crea una función que obtiene la fecha actual
    const fechaCrearTicket = ()=>{
        //Crear un objeto con la api de fecha para obtener la fecha actual
        let fecha = new Date();

        let dia = fecha.getDate();
        let mes = fecha.getMonth() + 1;
        let año = fecha.getFullYear();

        //Agregar un cero a la fecha en caso que su tamaño sea menor a 2
        if (dia.toString().length < 2){
            dia = `0${dia}`;
        }

        if (mes.toString().length < 2){
            mes = `0${mes}`;
        }

        //Retornar la fecha actual
        // return `${dia}/${mes}/${año}`;
        return new Date.stringify.iso
    }

    //evita problemas con el ingreso de técnicos
    if (localStorage.getItem('rol') == 'user') {

        //extrae la información del formulario, la asigna a variables y crea
        //un arreglo que se envia al backend
        formCrearTicket.addEventListener('submit', async ev => {
            ev.preventDefault();
        
            //Inputs directos
            const ticketNombre = document.getElementById('create_ticket_name').value;
            const ticketDescripcion = document.getElementById('create_ticket_description').value;
            
            //Input tipo radio
            const ticketPrio = document.querySelector('input[name="radio_opt_group"]:checked').value;
            
            //Archivos
            const ticketFiles = document.getElementById('create_ticket_files');
            const allFiles = ticketFiles.files;
        
            //Arreglo con los datos adquiridos
            const ticketData = {
                title : ticketNombre,
                description : ticketDescripcion,
                status : 'abierto',
                priority : ticketPrio,
            }
            // files : []
        
            //Si el usuario sí anexó archivos, se añaden al arreglo con
            //el resto de datos
            // if (allFiles.lenght > 0){
            //     for (let i = 0; i < archivos.lenght; i++){
            //         ticketData.files.push(allFiles[i])
            //     }
            // }
        
            //LLama la función que se comunica con el back
            //esto para enviar los datos obtenidos en el formulario al backend
            // enviarDatosTicket(ticketData);
            enviarDatosTicket(ticketData);
        
            //una vez enviados los datos, se reinicia el formulario 
            //y se cierra el modal
        
            formCrearTicket.reset();
            modalCrearTicket.classList.add('fade-out-modal');
            setTimeout(()=>{
                modalCrearTicket.close();
                modalCrearTicket.classList.remove('fade-out-modal');
            }, 300)
            
        })
    }

}
//Se optó por este y no por form data por una mayor maniobrabilidad con 
//los datos