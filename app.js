class Producto{
    constructor(nombre,precio,año){
    this.nombre=nombre;
    this.precio=precio;
    this.año=año;
    }
};

const producto=new Producto('hola',10,1999);
alert(producto);