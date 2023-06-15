let comando;
while (comando !='Salir'){
comando = prompt('Ingrese el comando:\n\n- Asesor Natura\n- Enviar consulta\n- Salir');
switch (comando) {
    case 'Salir':
        alert("Usted esta saliendo de la consola de comandos de Natura");
        break;
    case 'Enviar consulta':
        let remitente = prompt('Ingrese el nombre del Remitente');
        let consulta = prompt('Ingrese la consulta que desea enviar');
        alert("La Consulta es  '" + consulta + "' fue enviada correctamente por " + remitente);
        break;
        // case 'Ver productos':
        //     for (let i = 1; i <= 11; i++){
        //         alert('Producto Nº ' + i);
        //     }
        //     break;
            case 'Asesor Natura':
                alert('Conectandose A Natura ... Aguarde un momento por favor');
            let clave = prompt('Ingrese la clave de asesor por favor:');
        if (clave == 2566) {
            alert('Conectado a la base de datos de la Natura . Obteniendo información ...');
            comando = 'Salir';
        }
    break;
default:
    alert('Comando inválido.');
break;            }
}







class Carrito {
    constructor() {
      this.productos = [];
      this.total = 0;
      this.envio = 600;
    }
  
   
    enCarrito(nuevoProducto) {
      return this.productos.find((producto) => {
        if (producto.nombre == nuevoProducto.nombre && producto.precio == nuevoProducto.precio) {
          return true;
        }
        return false;
      });
    }
  
    
    agregar(nuevoProducto) {
     
      let productoEncontrado = this.enCarrito(nuevoProducto);
      if (productoEncontrado) {
        
        productoEncontrado.cantidad += 1;
        productoEncontrado.precio = nuevoProducto.precio;
        productoEncontrado.subtotal = nuevoProducto.precio * productoEncontrado.cantidad;
      } else {
        
        this.productos.push(nuevoProducto);
        alert("El producto " + nuevoProducto.nombre + " fue agregado al carrito.");
      }
      
      this.lista();
    }
  
    
    lista() {
      console.clear();
      console.log("Mis productos en el carrito:");
      
      this.productos.forEach((producto) => {
        console.log("------");
        console.log("Nombre: " + producto.nombre);
        console.log("Precio: " + producto.precio);
        console.log("Cantidad: " + producto.cantidad);
        console.log("Subtotal: " + producto.subtotal);
      });
  
      
      this.total = this.productos.reduce(
        (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
        0
      );
      console.log("------");
      console.log("TOTAL DEl CARRITO: $" + this.total + " Sin Envio con retiro en sucursal");
      console.log("TOTAL DEl CARRITO CON ENVIO : $" + parseInt(this.envio + this.total)  + " Con Envio a cualquier parte del Paìs");
    }
  
    
    quitar(producto) {
      
      let productoEncontrado = this.enCarrito(producto);
      if (productoEncontrado) {
        
        let indice = this.productos.indexOf(productoEncontrado);
        this.productos.splice(indice, 1); 
        alert("El producto " + producto.nombre + " fue borrado del carrito");
        this.lista();
      }
    }
  
    
    buscar(nombreProducto) {
      
      let resultado = this.productos.filter((producto) =>
        
        producto.nombre.includes(nombreProducto)
      );
      
      console.clear();
      console.log("Productos encontrados:");
      resultado.forEach((producto) => {
        console.log("------");
        console.log("Nombre: " + producto.nombre);
        console.log("Precio: " + producto.precio);
        console.log("Cantidad: " + producto.cantidad);
        console.log("Subtotal: " + producto.subtotal);
      });
    }
  }
  

  const carrito = new Carrito();
  
  
  
  function agregarProducto() {
    
    let nombre = prompt("Introduzca el nombre del producto");
    
    if (nombre == "") {
      alert("El nombre ingresado es inválido, ingrese los datos de nuevo.");
      return;
    }
  
    let precio = prompt("Introduzca el precio del producto");
    
    if (precio == "" || parseInt(precio) <= 0) {
      alert("El precio ingresado es inválido, ingrese los datos de nuevo.");
      return;
    }

    const nuevoProducto = {
      nombre: nombre,
      precio: parseInt(precio),
      cantidad: 1,
      subtotal: parseInt(precio),
    };
  
    carrito.agregar(nuevoProducto);
  }
  
  function quitarProducto() {
    let nombre = prompt("Introduzca el nombre del producto que desea quitar");
    let precio = prompt("Introduzca el precio del producto que desea quitar");
  
    carrito.quitar({ nombre: nombre, precio: precio });
  }
  
  function buscarProducto() {

    let nombre = prompt("Introduzca el nombre del producto que desea buscar");
    carrito.buscar(nombre);
  }