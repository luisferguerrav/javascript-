
const pedido = [];



 const MenuDisponible = document.getElementById('tienda2');
 
 
  const pedirPosts = async () => {
      const response = await fetch('./data.json');
      const data = await response.json();
      MenuDisponible.innerHTML = '';
      
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
                
                <p>${p.precio} Pesos</p>
                
                <button class="btn btn-primary" id="${p.id}">pedir</button>
            </div>
        </div>
        `
        
        MenuDisponible.appendChild(producto)
        producto.querySelector("button").addEventListener("click", () =>{
            tuPedido(p.id);
            // pedirPosts();
            
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
    productoDeMenu.cantidad++;

     Swal.fire({
         imageUrl: "./img/lasmorochasnegro.png",
         imageHeight: 250,
          imageAlt: 'A tall image',
         text:`La cantidad del producto ${producto.nombre} fue modificada`,
        
       })
    
   console.log(pedido);
    
   }else{
    producto.cantidad = 1;

    pedido.push(producto);
    Swal.fire({
        icon: 'success',
        text: 'su pedido fue tomado con exito, pulsa en el logo para ver tu pedidio',
        
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
                <p>${p.precio} Pesos</p>s
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
    pedido[indice].cantidad--;

    if (pedido[indice].cantidad === 0 ) {
        pedido.splice (indice, 1);
        
                     Swal.fire({
                        imageUrl: "./img/lasmorochasnegro.png",
                        imageHeight: 250,
                         imageAlt: 'A tall image',
                         text: "su producto a sido eliminado"

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
    
        pedido.forEach((p)=>{
        
            total += p.precio * p.cantidad;
        })
    
        console.log(total);
    

    const t = document.getElementById ("total")
    
    
t.innerHTML = `
                <h5>${total} Pesos</h5>
                <button class="btn btn-primary">hacer pedido</button

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