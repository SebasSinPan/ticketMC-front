const loginFormForToken = document.getElementById('login__form');

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
//además, almacena la respuesta en el localstorage, pues es la autenticación
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
            document.getElementById('correoLog').style.display = 'block'; // Muestra el mensaje antes de lanzar el error
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        // Procesamos la respuesta como JSON
        const respuesta = await response.json();

        // Almacenamos los datos en localStorage
        localStorage.setItem('validationCode', respuesta.access_token);
        localStorage.setItem('token_type', respuesta.token_type);
        console.log('Respuesta de la API:', respuesta);

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
            
    
        } catch (error) {
            alert('Error al ingresar:', error);
        }

    } catch (error) {
        alert('Error al ingresar:', error);
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