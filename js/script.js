function alerta ()
{
    alert ("Este artículo todavía está en proceso")
}

function validarFormulario() {
    const simbolosEspeciales = /[@#$%^&ñ*()+\-=\[\]{};':"\\|,<>\/?]/;
    const numeros = /\d/;
    const camposAValidar = ['nombre', 'mail']; 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    for (let campo of camposAValidar) {
        const input = document.getElementsByName(campo)[0];
        
        if (campo === 'nombre') {
            if (simbolosEspeciales.test(input.value)) {
                alert(`No se permiten símbolos especiales en el campo: ${campo}`);
                input.focus();
                return false;
            }
            
            if (numeros.test(input.value)) {
                alert(`No se permiten números en el campo: ${campo}`);
                input.focus();
                return false;
            }

        }
        
        if (campo === 'mail') {
            if (!emailRegex.test(input.value)) {
                alert('Ingresa un email válido (pepe@gmail.com)');
                input.focus();
                return false;
            }
        }
    }

    return true;
}