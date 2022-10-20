


 const menuDisponible = document.getElementById('tienda2');
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
                <p>${p.cantidad} personas</p>
                <p>${p.estado}</p>
                
                <button class="btn btn-primary" id="${p.id}">reservar mesa</button>
            </div>
        </div>
        `
        
        menuDisponible.appendChild(producto)




        } ) 
    };


 //  async function pedirPosts() {
 //  };
  pedirPosts();
