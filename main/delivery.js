
const pedido = [];



 const MenuDisponible = document.getElementById('tienda2');
  const pedirPosts = async () => {
      const response = await fetch('./data.json');
      const data = await response.json();
      
    data.forEach( (p) => {
        let producto = document.createElement ("div");
        producto.classList.add ("col-12");
        producto.classList.add ("col-md-5");
        producto.classList.add ("mb-5");
        producto.classList.add ("d-flex");
        producto.classList.add ("justify-content-center");

        producto.innerHTML = `
        <div class="card text-dark" style="width: 18rem;">
        <img class="card-img-top" src="${p.img}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${p.nombre}</h4>
                <p>${p.cantidad}</p>
                <p>${p.precio} Pesos</p>
                
                <button class="btn btn-primary" id="${p.id}">pedir</button>
            </div>
        </div>
        `
        
        MenuDisponible.appendChild(producto)
        producto.querySelector("button").addEventListener("click", () =>{
            tuPedido(p.id);
            pedirPosts();
        } ) 
        
        } ) 
    };

    pedirPosts();



async function tuPedido(id) {
    
        const response = await fetch('./data.json');
        const data = await response.json();

    let producto = data.find ( producto => producto.id === id);
   let productoDeMenu = pedido.find ( producto => producto.id === id);

   if (productoDeMenu) {
    productoDeMenu.estado == "disponible";
    Swal.fire({
        imageUrl: "./img/lasmorochasnegro.png",
        imageHeight: 250,
         imageAlt: 'A tall image',
        text: 'su reserva fue tomada con exito',
        
      })
   
    
   }else{
    producto.estado = "disponible";
    

    pedido.push(producto);
    Swal.fire({
        icon: 'success',
        text: 'su reserva fue tomada con exito, pulsa en el logo para ver tus mesas',
        
      })

    console.log(pedido);
   }
   mostrarTuPedido();
   seña();
   guardarMesasStorage(pedido);
   obtenerMesasStorage();
   pedirPosts();

   }
   


function mostrarTuPedido() {
    const d = document;
    let mesaHTML = d.querySelector ("#mesa");

    mesaHTML.innerHTML = "";

    pedido.forEach((p, index) => {
        let producto = document.createElement('div');
        producto.classList.add('col-12');
        producto.classList.add('col-md-4');
        producto.classList.add('mb-5');
        producto.classList.add('d-flex');
        producto.classList.add('justify-content-center');

        producto.innerHTML = `
        
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p>${p.precio} Pesos</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button class="btn btn-danger">Eliminar</button>
            </div>
        </div>
        `
        producto.querySelector("button").addEventListener("click", () => {

            eliminarTuPedido(index);
            guardarMesasStorage(pedido);
            obtenerMesasStorage();
            
            
            
        })

        mesaHTML.appendChild (producto);
        
      
    }
    ) 
}
 function eliminarTuPedido(indice) {
    pedido[indice].estado--;

    if (pedido[indice].estado != "disponible") {
        pedido.splice (indice, 1);
        
                     Swal.fire({
                        imageUrl: "./img/lasmorochasnegro.png",
                        imageHeight: 250,
                         imageAlt: 'A tall image',
                         text: "su reserva a sido eliminada"

                     }
                    
                        
                                         )
 }

       
    
    
    mostrarTuPedido();
    seña();
    guardarMesasStorage(pedido);
    obtenerMesasStorage();
    
 }

 function seña() {
    let total = 0;
    let seña1 = 500
    let seña2 = 500
    pedido.forEach( (p) =>{
       total += seña1 + seña2;
        console.log(total);

    })

    const t = document.getElementById ("total")
    
t.innerHTML = `
                <h5>${total} Pesos</h5>
                <button class="btn btn-primary">reservar mesa</button

                `
            t.querySelector ("button").addEventListener("click", () => {
                Swal.fire({
                    title: 'quiere hacer algun cambio?',
                    imageUrl: "./img/lasmorochasnegro.png",
                    imageHeight: 250,
                    imageAlt: 'A tall image',

                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'seguir con el pago',
                    cancelButtonText: 'hacer algun cambio'
                    }).then((result) => {
                         if (result.isConfirmed) {
                             Swal.fire({
                                title: 'Genial su pago fue tomado con exito',
                                imageUrl: "./img/lasmorochasnegro.png",
                                imageHeight: 250,
                                imageAlt: 'A tall image',
                             })
         }
     })

            })
 
 };


 



    function guardarMesasStorage(pedido) {
        localStorage.setItem ("pedido", JSON.stringify (pedido));
    };
        
    function obtenerMesasStorage() {
        const storageMesas = JSON.parse (localStorage.getItem ("pedido"));
        
        return storageMesas;
        
    };