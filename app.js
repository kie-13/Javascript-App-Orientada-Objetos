class Producto{
    constructor(nombre,precio,año){
    this.nombre=nombre;
    this.precio=precio;
    this.año=año;
    }
};

class UI{
    añadirProducto(){
        const producto=new Producto();
        const ui =new UI(producto);

    }
    borrarProducto(){

    }
    mostrar(){

    }
};
// Eventos DOM
document.getElementById("formulario-productos").addEventListener('submit', function(e){
    const nombre=document.getElementById('nombre').value;
    const precio=document.getElementById('precio').value;
    const año=document.getElementById('year').value;
    console.log(nombre,precio,año);
});

