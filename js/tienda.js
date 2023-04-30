const cardCarrito = document.getElementById("container_listCompra")
const precioTotal = document.querySelector('#precioTotal')

class Product{
    constructor(id,name,description,price,stock,img,alt){
        this.id= id
        this.name= name
        this.description= description
        this.price= price
        this.stock= stock
        this.cantidad= 1
        this.img= img 
        this.alt= alt
    }
}

class ControllerProducto{
    constructor(){
        this.productList = []
        this.container_list = document.getElementById("container_list")    
    }

    /*loader() {
        this.productList= [
            new Product(1,"BCAA 228gr","BCAA power instant de la marca HachSport, 60 servicios", 4500,10,"../assets/bcaa_power.webp","BCAA HardSport"),
            new Product(2,"MUTANT MASS 1.5kg","Ganador de peso de la marca StarNutrition, 100 servicios", 6500,15,"../assets/mutant.webp","Mutant SN"),
            new Product(3,"PUMP 285g","Pre-entreno de la marca StarNutrition, 30 servicios", 2500,23,"../assets/preentreno.webp","PUMP SN"),
            new Product(4,"Whey Protein WOMEN 500g","Proteina para mujer de la marca Ultra Tech, 50 servicios", 8500,12,"../assets/proteinultra.webp","Mujer ultra"),
            new Product(5,"HYDROXY MAX ENA","Quemador de grasa de la marca ENA, 100 servicios", 7300,5,"../assets/reductor.webp","quemador ENA"),
            new Product(6,"ANTIOXIDANTE comprimidos","Antioxidante plus de la marca Vivatech, 30 comprimidos", 900,50,"../assets/vita.webp","Antioxidante"),
            new Product(7,"ENACCION","Vitaminas de la marca StarNutrition, 60 capsulas", 5500,8,"../assets/vitamina.webp","Vitaminas"),
            new Product(8,"Whey Protein Platinum","Proteina isolada de la marca StarNutrition, 30 servicios", 7200,19,"../assets/whey1.webp","proteina SN"),
            new Product(9,"Whey Protein Alto Rendimiento","Proteina 7900 de alto rendimiento de la marca Gentech, 60 servicios", 8900,15,"../assets/wheyProte.webp","gentech"),
        ]
    }*/

    async loader(controladorCarrito){
        const respuesta = await fetch('../lista.json')
        this.productList = await respuesta.json()
        this.mostrar()
        this.click(controladorCarrito)
    }
    mostrar(){
        this.productList.map(product => {
            const {id,name,description,price,stock,img,alt} = product
            this.container_list.innerHTML += `
            <div class="card border-warning" style="width: 18rem;">
                <img src="${img}" class="card-img-top" alt="${alt}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description}</p>
                    <p class="card-text">Precio $ ${price}</p>
                    <a href="#" id="Art-${id}" class="btn btn-danger container justify-content-center " style=" background-color: rgb(252, 59, 1)">Agregar al carrito</a>
                </div>
            </div> `
        })
    }
    click(controladorCarrito){
        this.productList.map(product =>{
            const {id} = product
            const btnUp= document.getElementById(`Art-${id}`)
            btnUp.addEventListener("click", ()=>{
                controladorCarrito.up(product)
                controladorCarrito.saveStorage()    
                controladorCarrito.agregado(container_listCompra)    
                Toastify({
                    text: `Se agrego ${product.name}\nal carrito`,
                    duration: 1800,
                    gravity: "bottom",
                    position: "right",
                    stopOnFocus: false,
                    style: {
                        background: "linear-gradient(to right, #ff2600, #96c93d)",
                        opacity: 0.9,
                    },
                }).showToast(); 
            })
        })
    }
    /*click(controladorCarrito){     
    const {id} = product
        const existe = this.productList.some(product => product.id === id)
            if (existe){
                const product = this.productList.map(product => {  
                    if (product.id === id ){
                        product.cantidad ++
                        console.log(product.name + "unidades" +product.cantidad)
                    }
                })
                }else{
                    this.productList.map(product =>{
                        const {id} = product
                        const btnUp= document.getElementById(`Art-${id}`)
                        const existe = this.productList.some(product => product.id === id)
                        btnUp.addEventListener("click", ()=>{

                            if (existe){
                                const product= this.productList.map(prod => {
                                    if(product.id === id){
                                      product.cantidad++
                                    }
                                  })
                                console.log(product.name + "unidades" +product.cantidad)

                            }else{
                                const product = product.find((prod) => prod.id === id)

                                controladorCarrito.up(product)
                                
                                controladorCarrito.agregado(container_listCompra)        
                                controladorCarrito.saveStorage()
                            }   
                        })
                    })
    }*/        
}

class CarritoController {
    constructor(){
        this.listCompra = []
        this.container_listCompra = document.getElementById("container_listCompra")
    }
    up(product){
            const artId = product.id
            const existe = this.listCompra.some(product => product.id === artId)
            if (existe){
                product.cantidad +=1
            }else{
                this.listCompra.push(product)
            }
    }
    down(product){
        this.listCompra.length = 0
    }
    saveStorage(){
        localStorage.setItem("listCompra",JSON.stringify(this.listCompra))
    }
    loading(){
        this.listCompra = JSON.parse(localStorage.getItem ("listCompra")) || []
    }
    clear(){
        this.container_listCompra.innerHTML = ""
        if (this.listCompra.length === 0){
            this.container_listCompra.innerHTML =`
            <p class="text-center text-primary parrafo">El carrito se encuentra vacio !!</p>`
            precioTotal.innerText = this.listCompra.reduce((acc,product)=> acc + product.cantidad * product.price, 0)
        }
    }
    agregado(){
            this.clear()
            this.listCompra.map(product => { 
            this.container_listCompra.innerHTML +=`
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${product.img}" class="img-fluid rounded-start" alt="${product.alt}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
    
                        <a href="#" id="Articulo-${product.id}" class="identificador container justify-content-center " ></a>
                        <p class="card-text"><small class="text-body-secondary">$${product.price}</small></p>
                        <p class="card-text"><small class="text-body-secondary">Unidades: ${product.cantidad}</small></p>
    
                    </div>
                </div>
            </div>
        </div>`})   
        precioTotal.innerText = this.listCompra.reduce((acc,product)=> acc + product.cantidad * product.price, 0)
    }    
    vaciarCarrito(){
        const botonVaciar = document.getElementById("eliminarCarrito")
        botonVaciar.addEventListener("click",() => {
            
            if(this.listCompra.length === 0){
                Swal.fire({
                    title: "¡Tu carrito esta se encuentra vacio!",
                    text: "Puedes ver nuestros productos en la tienda",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                })
            }else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'se ha vaciado el carro correctamente',
                showConfirmButton: false,
                timer: 2500
              })}
        precioTotal.innerText = this.listCompra.reduce((acc,product)=> acc + product.cantidad * 0, 0)
        this.down()
        this.clear()
        this.saveStorage()})
    }
    finalizarCompra(){
        const terminarCompra = document.getElementById("terminarCompra")
        terminarCompra.addEventListener("click",()=>{

            if(this.listCompra.length === 0){
                Swal.fire({
                    title: "¡Tu carrito esta vacio agrega un producto!",
                    text: "Puedes ver nuestros productos en la tienda",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                })
            }else{
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Muchas Gracias por tu compra',
                    imageUrl: '../assets/logo_final.png',
                    imageWidth: 400,
                    imageHeight: 400,
                    showConfirmButton: false,
                    timer: 4000
                })
                this.down()
                this.clear()
                this.saveStorage()
            }
        })
    }
}

const controladorProducto= new ControllerProducto()
const controladorCarrito= new CarritoController()
//carga los productos
controladorProducto.loader(controladorCarrito)
//muestra los productos
controladorProducto.mostrar()
//storage
controladorCarrito.loading()
//evento
controladorProducto.loader(controladorCarrito)
controladorCarrito.vaciarCarrito()
controladorCarrito.finalizarCompra()

if(localStorage.getItem("listCompra")){
    controladorCarrito.loading()
    controladorCarrito.agregado()
    
}else{
    listCompra = []
}
