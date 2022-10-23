 


// function reparticionPropina() {
//     let persona = prompt ("dinos tu nombre por favor: ");
//     while (persona == " ") {
//         persona = prompt ("dinos tu nnombre por favor: ");
        
//      }

//   alert (persona + " la hora de llegada es a las 5");

//   let horaDellegada = prompt ( persona + " Por favor presiona 1 si llegaste a la hora, presiona 2 si llegaste luego:  ")

//   while (horaDellegada == " " || horaDellegada != 1 && horaDellegada != 2) {
//       horaDellegada = prompt("hey, por favor indica a que hora llegaste, presiona 1 si llegaste a la hora, presiona 2 si llegaste luego: ");
//   }
//   entradaTrabajo(persona, horaDellegada)
//   }
//   reparticionPropina()

// function entradaTrabajo(persona, horaDellegada) {

//     const llegadaTarde = x => x * 0.2

//     const divicion = (a,b) => a / b; 

//     const resta = (a,b) => a - b;

//     if (horaDellegada == 1) {
//         let totalPropina = 10000;
//         let totalPersonas = 5; 
//         let total = divicion (totalPropina, totalPersonas);
//         alert (" gracias " + persona + " el total de su propina es: " + total);
        
//     }
//     else if (horaDellegada == 2) {
//         let totalPropina = 10000;
//         let totalPersonas = 5; 
//        let descuentoPropina = 0 
//         let total2 = divicion (resta( llegadaTarde (totalPropina),descuentoPropina ), totalPersonas);
//         alert (" gracias " + persona + " el total de su propina es: " + total2);
        
//     }
//     else {
//         alert ("no a ingresado una opcion valida")
//         reparticionPropina();
//     }
// }




// const mesas = [
//     {numero: 1, cantidad: 10, estado: "disponible"},
//     {numero: 2, cantidad: 5, estado: "disponible"},
//     {numero: 3, cantidad: 2, estado: "disponible"},
//     {numero: 4, cantidad: 4, estado: "disponible"},
//     {numero: 5, cantidad: 8, estado: "disponible"},
//     {numero: 6, cantidad: 7, estado: "disponible"},
// ]
//  let reservasDemesa = [];
//  let persona = prompt ("hola dinos tu nombre: ");

//  let seleccion = prompt( "hola " + persona +  " bienvenido desea reservar una mesa? si o no")

//  while (seleccion != "si" && seleccion != "no") {
//     alert( "por favor dinos si o no");
//     seleccion = prompt ("hola " + persona +  " bienvenido desea reservar una mesa? si o no");
//  }

//  if (seleccion == "si") {
//     alert("estas son las mesas que tenemos disponibles: ");
//     let totasLasMesas = mesas.map ((mesa) =>" mesa numero "+  mesa.numero + " catidad " + mesa.cantidad + " personas " + " estado "+ mesa.estado); 
//     alert( totasLasMesas.join (" - "));

//  }else if (seleccion == "no") {
//     alert ("muchas gracias por su visita hasta luego ");
    
//  }
// while (seleccion != "no") {
//     let suMesa = prompt ("indiquenos que mesa le gustaria escoger")
//     if (
//         suMesa == 1||
//         suMesa == 2 ||
//         suMesa == 3 ||
//         suMesa == 4 ||
//         suMesa == 5||
//         suMesa == 6
//         )  {
//         alert ( "gracias por escoger esa mesa");
//     }else {
//         alert( " esa mesa no esta disponible");
//     }
//     seleccion = prompt( "desea cambiar su mesa? si o no" )
//     while (seleccion == "no") {
//         alert( "gracias por elegir esa mesa")

//       break;  
//     }
    
// }
const mesasDisponibles = [
    {
        "id": 1,
        "nombre": "salon 1",
        "img": "./img/mesa3.jpg",
        "cantidad": 20,
        "estado":"disponible"
    },
    {
        "id": 2,
        "nombre": "salon 2",
        "img": "./img/mesa3.jpg",
        "cantidad": 10,
        "estado":"disponible"
    },
    {
        "id": 3,
        "nombre": "salon 3",
        "img": "./img/mesa1.jpg",
        "cantidad": 4,
        "estado":"disponible"
    },
    {
        "id": 4,
        "nombre": "salon 4",
        "img": "./img/mesa1.jpg",
        "cantidad": 5,
        "estado":"dispinible"
    },
    {
        "id": 5,
        "nombre": "patio 1",
        "img": "./img/mesa1.jpg",
        "cantidad": 6,
        "estado":"disponible"
    },
    {
        "id": 6,
        "nombre": "patio 2",
        "img": "./img/mesa1.jpg",
        "cantidad": 7,
        "estado":"disponible"
    },
    {
        "id": 7,
        "nombre": "patio 3",
        "img": "./img/mesa1.jpg",
        "cantidad": 2,
        "estado":"disponible"
    },
    {
        "id": 8,
        "nombre": "terraza 1",
        "img": "./img/mesa4.jpg",
        "cantidad": 4,
        "estado":"disponible"
    },
    {
        "id": 9,
        "nombre": "terraza 2",
        "img": "./img/mesa4.jpg",
        "cantidad": 8,
        "estado":"disponible"
    },
    {
        "id": 10,
        "nombre": "terraza 3",
        "img": "./img/mesa4.jpg",
        "cantidad": 11,
        "estado":"disponible"
    },
    {
        "id": 11,
        "nombre": "barra 1",
        "img": "./img/mesa2.jpg",
        "cantidad": 2,
        "estado":"disponible"
    },
    {
        "id": 12,
        "nombre": "barra 2",
        "img": "./img/mesa2.jpg",
        "cantidad": 2,
        "estado":"disponible"
    }
]



const mesas = [];

function mostrarMesas() {
    const tienda = document.getElementById("tienda");
    tienda.innerHTML = '';

    const btnFiltros = [ "redes sociales", "Horarios", "Info via whatsapp"];

    const divContainer = document.createElement ("div");
    divContainer.classList.add ("container", "text-center");
    btnFiltros.forEach((btn) =>{
    const boton = document.createElement( "button");
    boton.textContent = btn;
    boton.classList.add ("btn", "btn-primary" , "m-3");

    tienda.appendChild (boton);

    })
    const btnMenu = document.querySelector('button:nth-child(1)');
    btnMenu.addEventListener ("click" ,() => {
        Swal.fire({
            imageUrl: "./img/lasmorochasnegro.png",
            imageHeight: 250,
             imageAlt: 'A tall image',
            title: 'redes',
            text: 'buscanos en instagram como @lasmorochascantina',
            
          })
        
    
    });

    const btnHorarios = document.querySelector('button:nth-child(2)');
    btnHorarios.addEventListener ("click" ,() => {

        Swal.fire({
            imageUrl: "./img/lasmorochasnegro.png",
            imageHeight: 250,
             imageAlt: 'A tall image',
            title: 'Horarios',
            text: 'todos lod dias de 17:00 a 00:00',
            
          })
        
    });
    
    const btnContactoViaWhatsapp = document.querySelector('button:nth-child(3)');
    btnContactoViaWhatsapp.addEventListener ("click" ,() => {
        Swal.fire({
            imageUrl: "./img/lasmorochasnegro.png",
            imageHeight: 250,
             imageAlt: 'A tall image',
            title: 'Whastapp',
            text: 'escribenos al 11 2345678',
            
          })
    

    });






    mesasDisponibles.forEach( (p) => {
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
                <p>${p.cantidad} personas</p>
                <p>${p.estado}</p>
                
                <button class="btn btn-primary" id="${p.id}">reservar mesa</button>
            </div>
        </div>
        `
        
        tienda.appendChild(producto)

        producto.querySelector("button").addEventListener("click", () =>{
            tuMesa(p.id);


        } ) 
    }

    )
    
    // controller();
    
}
mostrarMesas();

function tuMesa(id) {
    let producto = mesasDisponibles.find ( producto => producto.id === id);
   let productoDeMesa = mesas.find ( producto => producto.id === id);

   if (productoDeMesa) {
    productoDeMesa.estado == "disponible";
    Swal.fire({
        imageUrl: "./img/lasmorochasnegro.png",
        imageHeight: 250,
         imageAlt: 'A tall image',
        text: 'su reserva fue tomada con exito',
        
      })
   
    
   }else{
    producto.estado = "disponible";
    

    mesas.push(producto);
    Swal.fire({
        icon: 'success',
        text: 'su reserva fue tomada con exito, pulsa en el logo para ver tus mesas',
        
      })

    console.log(mesas);
   }
   mostrarTuMesa();
   seña();
   guardarMesasStorage(mesas);
   obtenerMesasStorage();
  
   
   
}

function mostrarTuMesa() {
    const d = document;
    let mesaHTML = d.querySelector ("#mesa");

    mesaHTML.innerHTML = "";

    mesas.forEach((p, index) => {
        let producto = document.createElement('div');
        producto.classList.add('col-12');
        producto.classList.add('col-md-4');
        producto.classList.add('mb-5');
        producto.classList.add('d-flex');
        producto.classList.add('justify-content-center');

        producto.innerHTML = `
        
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="mesa image cap">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p>${p.cantidad} personas</p>
                <button class="btn btn-danger">Eliminar</button>
            </div>
        </div>

        `
        producto.querySelector("button").addEventListener("click", () => {

            eliminarTumesa(index);
            guardarMesasStorage(mesas);
            obtenerMesasStorage();
            
            
            
        })

        mesaHTML.appendChild (producto);
        
      
    }
    ) 
}
 function eliminarTumesa(indice) {
    mesas[indice].estado--;

    if (mesas[indice].estado != "disponible") {
        mesas.splice (indice, 1);
        
                     Swal.fire({
                        imageUrl: "./img/lasmorochasnegro.png",
                        imageHeight: 250,
                         imageAlt: 'A tall image',
                         text: "su reserva a sido eliminada"

                     }
                    
                        
                                         )
 }

       
    
    
    mostrarTuMesa();
    seña();
    guardarMesasStorage(mesas);
    obtenerMesasStorage();
    
 }

 function seña() {
    let total = 0;
    let seña1 = 500
    let seña2 = 500
    mesas.forEach( (p) =>{
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


 



    function guardarMesasStorage(mesas) {
        localStorage.setItem ("mesas", JSON.stringify (mesas));
    };
        
    function obtenerMesasStorage() {
        const storageMesas = JSON.parse (localStorage.getItem ("mesas"));
        
        return storageMesas;
        
    };
//    function controller() {
    
//     let homeController = async () => {
//         try {
//             const response = await fetch('../main.json');
//             const data = await response.json();
    
//             return data;
//         } catch (error) {
//             console.log('Hubo un error', error)
//         };
//     };

    
//         let productoNombre = inputSearch = document.getElementById('buscarMesa');
//         console.log(productoNombre);
        
//         const buscarMesas = async (productoNombre) => {
//             const table = await homeController();

//             const productoFiltrados = table.filter (
//                 producto => producto.nombre.includes (productoNombre)
//             );
//             mostrarMesas (productoFiltrados);

//         }


//         inputSearch.addEventListener ( "input", (e) =>{

//             buscarMesas(e.target.value);
    
//         } )
//     };
    
    
    