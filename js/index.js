var usuario = ''

console.log(key)

try {
    usuario = localStorage.getItem("Nombre");  
} catch (error) {

}
if(usuario === null){
    usuario = prompt('Nos dirías tu nombre?', 'nombre');
    alert("Bienvenido = " + usuario)
}


function hacerClick() {
    console.log( "Ejecutando función test()" );
}