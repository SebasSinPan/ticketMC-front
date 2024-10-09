// const sendTicketResponseBtn = document.querySelector('.response-answer-btn-send');

//TODO : Cuadrar bien lo de la respuesta y de ahí empezar a gestionar esto

// //función que envia la respuesta del ticket a la base de datos
// async function enviarDatosTicket(data) {
//     try {
//         const response = await fetch(`${URL}/ticket/solution/${id}`, {
//             method: 'PUT', 
//             headers: {
//                 'Content-Type': 'application/json' 
//             },
//             body: JSON.stringify(data)
//         });

//         // se verifica si la respuesta fue exitosa
//         if (!response.ok) {
//             throw new Error('Error en la solicitud: ' + response.statusText);
//         }

//         // se espera a la respuesta del back la respuesta como JSON
//         const respuesta = await response.json();
//         console.log('Respuesta de la API:', respuesta);
//     } catch (error) {
//         console.error('Error al enviar datos:', error);
//     }
// }

// //se crea una función que obtiene la fecha actual
// const fechaResponderTicket = ()=>{
//     //Crear un objeto con la api de fecha para obtener la fecha actual
//     let fecha = new Date();

//     let dia = fecha.getDate();
//     let mes = fecha.getMonth() + 1;
//     let año = fecha.getFullYear();

//     //Agregar un cero a la fecha en caso que su tamaño sea menor a 2
//     if (dia.toString().length < 2){
//         dia = `0${dia}`;
//     }

//     if (mes.toString().length < 2){
//         mes = `0${mes}`;
//     }

//     //Retornar la fecha actual
//     return `${dia}/${mes}/${año}`;
// }

// sendTicketResponseBtn.addEventListener('click', ()=>{
//     const ticketRespondedId = document.querySelector('.resolve--title-number');
// })