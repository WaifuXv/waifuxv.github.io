// Codigo para la descarga de pdf

function customMeow() {  
    // Crear un contenedor para el cuadro de diálogo
    var container = document.createElement('div');
    container.id = 'confirm-container';
    container.style.position = 'fixed';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.background = 'white';
    container.style.padding = '20px';
    container.style.textAlign = 'center';
    container.style.fontFamily = 'Archivo Black';
    container.style.color = 'black';
    container.style.boxShadow = '0rem 0rem 2rem white';
    container.style.borderRadius = '2rem';

    // Crear un elemento overlay
    var overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.onclick = function() {
        return false;
    };

    // Agregar el overlay al documento
    document.body.appendChild(overlay);

    // Crear el título del cuadro de diálogo
    var title = document.createElement('h2');
    title.innerHTML = 'Walkthrough Meow';

    // Crear un mensaje
    var message = document.createElement('p');
    message.innerHTML = '¿Seguro que deseas ver este PDF?';
 
    // Crear botones de confirmación y cancelación
    var confirmButton = document.createElement('button');
    var okImg = document.createElement('img');
    okImg.src = 'IMG/verificado.png';
    confirmButton.appendChild(okImg);
    confirmButton.classList.add('ok');
    confirmButton.onclick = function() {
        container.remove();
        overlay.remove();
        window.open('PDF/Descargar.pdf', '_blank');
        return true;
    };
    
    var cancelButton = document.createElement('button');
    var cancelImg = document.createElement('img');
    cancelImg.src = 'IMG/boton-x.png';
    cancelButton.appendChild(cancelImg);
    cancelButton.classList.add('cancel');
    cancelButton.onclick = function() {
        container.remove();
        overlay.remove();
        return false;
    };
    
    // Agregar elementos al contenedor
    container.appendChild(title);
    container.appendChild(message);
    container.appendChild(confirmButton);
    container.appendChild(cancelButton);

    // Agregar el contenedor al documento
    document.body.appendChild(container);
 
    // Prevenir la descarga automática del archivo
    return false;
 }

function customFawm() {
    // Crear un contenedor para el cuadro de diálogo
    var container = document.createElement('div');
    container.id = 'confirm-container';
    container.style.position = 'fixed';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.background = 'white';
    container.style.padding = '20px';
    container.style.border = '1px solid white';
    container.style.textAlign = 'center';
    container.style.boxShadow = '0rem 1rem 4rem white';
    container.style.borderRadius = '2rem';

    // Crear un elemento overlay
    var overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.onclick = function() {
        return false;
    };

    // Agregar el overlay al documento
    document.body.appendChild(overlay);

    // Crear un mensaje
    var message = document.createElement('p');
    message.innerHTML = '¿Seguro que deseas descargar el archivo?';
 
    // Crear botones de confirmación y cancelación
    var confirmButton = document.createElement('button');
    confirmButton.innerHTML = 'OK';
    confirmButton.classList.add('ok');
    confirmButton.onclick = function() {
        container.remove();
        overlay.remove();
        window.open('PDF/Descargar.pdf', '_blank');
        return true;
    };

    var cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.classList.add('cancel');
    cancelButton.onclick = function() {
        container.remove();
        overlay.remove();
        return false;
     }; 
 
    // Agregar elementos al contenedor
    container.appendChild(message);
    container.appendChild(confirmButton);
    container.appendChild(cancelButton);

    // Agregar el contenedor al documento
    document.body.appendChild(container);
 
    // Prevenir la descarga automática del archivo
    return false;
 }

function customRedeemer() {
    // Crear un contenedor para el cuadro de diálogo
    var container = document.createElement('div');
    container.id = 'confirm-container';
    container.style.position = 'fixed';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.background = 'white';
    container.style.padding = '20px';
    container.style.border = '1px solid white';
    container.style.textAlign = 'center';
    container.style.boxShadow = '0rem 1rem 4rem white';
    container.style.borderRadius = '2rem';

    // Crear un elemento overlay
    var overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.onclick = function() {
        return false;
    };

    // Agregar el overlay al documento
    document.body.appendChild(overlay);

    // Crear un mensaje
    var message = document.createElement('p');
    message.innerHTML = '¿Seguro que deseas descargar el archivo?';
 
    // Crear botones de confirmación y cancelación
    var confirmButton = document.createElement('button');
    confirmButton.innerHTML = 'OK';
    confirmButton.classList.add('ok');
    confirmButton.onclick = function() {
        container.remove();
        overlay.remove();
        window.open('PDF/Descargar.pdf', '_blank');
        return true;
    };

    var cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.classList.add('cancel');
    cancelButton.onclick = function() {
        container.remove();
        overlay.remove();
        return false;
     }; 
 
    // Agregar elementos al contenedor
    container.appendChild(message);
    container.appendChild(confirmButton);
    container.appendChild(cancelButton);

    // Agregar el contenedor al documento
    document.body.appendChild(container);
 
    // Prevenir la descarga automática del archivo
    return false;
 }

function customDancing() {
    // Crear un contenedor para el cuadro de diálogo
    var container = document.createElement('div');
    container.id = 'confirm-container';
    container.style.position = 'fixed';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.background = 'white';
    container.style.padding = '20px';
    container.style.border = '1px solid white';
    container.style.textAlign = 'center';
    container.style.boxShadow = '0rem 1rem 4rem white'

    // Crear un mensaje
    var message = document.createElement('p');
    message.innerHTML = '¿Seguro que deseas descargar el archivo?';
 
    // Crear botones de confirmación y cancelación
    var confirmButton = document.createElement('button');
    confirmButton.innerHTML = 'OK';
    confirmButton.classList.add('ok');
    confirmButton.onclick = function() {
        container.remove();
        window.open('PDF/Descargar.pdf', '_blank');
        return true;
    };
    var cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.classList.add('cancel');
    cancelButton.onclick = function() {
       container.remove();
       return false;
    };
 
    // Agregar elementos al contenedor
    container.appendChild(message);
    container.appendChild(confirmButton);
    container.appendChild(cancelButton);
 
    // Agregar el contenedor al documento
    document.body.appendChild(container);
 
    // Prevenir la descarga automática del archivo
    return false;
 }
// let link = document.getElementsByClassName("D-None");

function changeStyleOnHoverClick() {
    let elements = document.getElementsByClassName("D-None");
    for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener("mouseover", function(){
            this.classList.add("hover-dn");
        });
        elements[i].addEventListener("mouseout", function(){
            this.classList.remove("hover-dn");
        });
        elements[i].addEventListener("click", function(){
            this.classList.add("clicked-dn");
            setTimeout(function(){
                for(let i = 0; i < elements.length; i++){
                    elements[i].classList.remove("clicked-dn");
                }
            }, 5000);
        });
    }
}
document.addEventListener('DOMContentLoaded', changeStyleOnHoverClick);

