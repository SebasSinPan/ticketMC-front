const loginFormForToken = document.getElementById('login__form');
const loginAlertError = document.getElementById('registerAlertError');
const loginAlertErrorText = document.getElementById('registerAlertError__message');
const loginAlertValidated = document.getElementById('registerAlertValidated');
const loginAlertValidatedText = document.getElementById('registerAlertValidated__text');

//función que valida que la cadena del input email siga un patrón correcto
//De caso contrario, muestra un mensaje de error
const validateLoginCorreo = (correo)=>{
    let isValid = true;

    //patrón que debe seguir el input
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(correo)){
        isValid = false;
        document.getElementById('login__form--message').style.display = 'block';
    }else{
        document.getElementById('login__form--message').style.display = 'none';
    }

    return isValid;
}

//función que prepara los datos para enviarlos al back
//en caso que los datos no sean correctos o no válidos, maneja el error

//además, se obtiene el login y este se almacena  en el localstorage
async function enviarDatosLogin(data) {
    let URL = 'https://ticketproject-br3d.onrender.com';
    try {
        const response = await fetch(`${URL}/auth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
            // document.getElementById('correoLogin').style.display = 'block'; // Muestra el mensaje antes de lanzar el error
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        // Procesamos la respuesta como JSON
        const respuesta = await response.json();

        //alerta de la solicitud exitosa de la autenticación
        loginAlertValidated.showModal();
        loginAlertValidatedText.innerText = 'Datos validados. Accediendo al programa';
        setTimeout(()=>{
            loginAlertValidated.close();
        },2000)

        // Almacenamos los datos en localStorage
        localStorage.setItem('validationCode', respuesta.access_token);
        localStorage.setItem('token_type', respuesta.token_type);
        console.log('Respuesta de la API:', respuesta);

        //Petición que obtiene los datos del login del usuario
        try {
            const response = await fetch(`${URL}/auth/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    access_token: localStorage.getItem('validationCode'),
                    token_type: localStorage.getItem('token_type')
                })
            });
    
            // Verificamos si la respuesta fue exitosa
            if (!response.ok) {
                document.getElementById('correoLog').style.display = 'block'; // Muestra el mensaje antes de lanzar el error
                throw new Error('Error en la obtención del login: ' + response.statusText);
            }
    
            // Procesamos la respuesta como JSON
            const respuesta = await response.json();

            // Almacenamos los datos en localStorage
            localStorage.setItem('id', respuesta.id);
            localStorage.setItem('rol', respuesta.rol);
            console.log('Respuesta de la API:', respuesta);

            //Si la obtención de los datos es correcta, se redirige a la página
            //principal de tickets
            window.location.href = '/src/views/tickets/';
            
    
        } catch (error) {
            alert('Error al ingresar:', error);

            loginAlertError.showModal();
            loginAlertErrorText.innerText = 'Error en la obtención de datos';

            setTimeout(()=>{
                loginAlertError.close();
            },2000)
        }

    } catch (error) {
        console.log('Error al ingresar:', error);
        //alerta de la solicitud de autenticación
        loginAlertError.showModal();
        loginAlertErrorText.innerText = 'Correo o contraseña incorrectos';

        setTimeout(()=>{
            loginAlertError.close();
        },2000)
    }
}

//evento que llama la función que valida datos datos y enviar los datos al back
loginFormForToken.addEventListener('submit', async ev =>{
    ev.preventDefault();

    const correoLogin = document.getElementById('correoLogin').value;
    const passLogin = document.getElementById('passLogin').value;

    const validarCorreo = validateLoginCorreo(correoLogin);

    if (validarCorreo){
        const loginAcountData = {
            email : correoLogin,
            password : passLogin
        }

        enviarDatosLogin(loginAcountData)
    }

    // loginForm.reset();
})