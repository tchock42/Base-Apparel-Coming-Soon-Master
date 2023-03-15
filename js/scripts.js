const datos={
    email: ''
};
const emailInput = document.querySelector('#email');
const errorDiv = document.querySelector('.error');
emailInput.addEventListener('input', leerTexto);

function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
}

const form = document.querySelector('.form');
form.addEventListener('submit', function(evento){
    evento.preventDefault();

    //validate the form
    const {email} = datos;
    // console.log(email);
    const at = email.indexOf('@');
    const dotcom = email.indexOf('.com');
    if(at === -1 || dotcom ===  -1){
        mostrarError("Please provide a valid email", true);
        return;
    } else if( email === '' ){
        mostrarError('Please provide a valid email', true);
        return;
    }
    mostrarMensaje("Mensaje enviado correctamente", false);
});

function mostrarError(mensaje){
    //create the alert
    const alert = document.createElement('P');
    alert.textContent = mensaje;
    alert.classList.add('error_text');
    form.appendChild(alert);

    //insert the image
    const image = document.createElement('PICTURE');
    image.innerHTML = `
    <img src="images/icon-error.svg" alt="error icon" class="error_icon">
    `;
    errorDiv.appendChild(image);
    setTimeout(()=>{
        alert.remove();
        image.remove();
    }, 3000);
}
function mostrarMensaje(mensaje){
    console.log(mensaje);
}