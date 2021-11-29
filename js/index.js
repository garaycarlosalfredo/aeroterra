
function checkCoordenadas(){
    //Obtengo los datos del formulario
    const form = document.getElementById("formulario")
    const coordenadasForm = form.elements['coordenadas'].value

    //Gestion de coordenadas
    const coordenadas = coordenadasForm.split(',')
    const latitude = coordenadas[0]
    const longitude = coordenadas[1]   

    var button= document.getElementById('BotonAgregarPunto')

    if(latitude <= 180 && latitude >= -180 ){     
        button.removeAttribute('disabled') 
    }else{              
        button.setAttribute("disabled", "");
        alert("Latitud debe estar dentro del rago de -180 a 180")
    };

    if( longitude <= 90 && longitude >= -90){ 
    }else{
        button.setAttribute("disabled", "");
        alert("Latitud debe estar dentro del rago de -90 a 90")        
    };
}

function checkCategoria(){
    //Obtengo los datos del formulario
    const form = document.getElementById("formulario")
    const categoria = form.elements['categoria'].value
    console.log(categoria)

    var button= document.getElementById('BotonAgregarPunto')
    if(categoria !== 'Seleccionar'){     
        button.removeAttribute('disabled') 
    }else{              
        button.setAttribute("disabled", "");
        alert("Debe seleccionar una categoría")
    };
    
}