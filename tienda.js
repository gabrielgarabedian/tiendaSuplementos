class Products{
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
        
/*borrar luego
const productsList =[
    new Products(1,"BCAA 228gr","BCAA power instant de la marca HachSport, 60 servicios", 4500,10,"../assets/bcaa_power.webp","BCAA HardSport"),
    new Products(2,"MUTANT MASS 1.5kg","Ganador de peso de la marca StarNutrition, 100 servicios", 6500,15,"../assets/mutant.webp","Mutant SN"),
    new Products(3,"PUMP 285g","Pre-entreno de la marca StarNutrition, 30 servicios", 2500,23,"../assets/preentreno.webp","PUMP SN"),
    new Products(4,"Whey Protein WOMEN 500g","Proteina para mujer de la marca Ultra Tech, 50 servicios", 8500,12,"../assets/proteinultra.webp","Mujer ultra"),
    new Products(5,"HYDROXY MAX ENA","Quemador de grasa de la marca ENA, 100 servicios", 7300,5,"../assets/reductor.webp","quemador ENA"),
    new Products(6,"ANTIOXIDANTE comprimidos","Antioxidante plus de la marca Vivatech, 30 comprimidos", 900,50,"../assets/vita.webp","Antioxidante"),
    new Products(7,"ENACCION","Vitaminas de la marca StarNutrition, 60 capsulas", 5500,8,"../assets/vitamina.webp","Vitaminas"),
    new Products(8,"Whey Protein Platinum","Proteina isolada de la marca StarNutrition, 30 servicios", 7200,19,"../assets/whey1.webp","proteina SN"),
    new Products(9,"Whey Protein Alto Rendimiento","Proteina 7900 de alto rendimiento de la marca Gentech, 60 servicios", 8900,15,"../assets/wheyProte.webp","gentech"),
]*/

class ControllerProductos{
    constructor(){
        this.productList = []
    }
            
    loader() {
        this.productList= [
            new Products(1,"BCAA 228gr","BCAA power instant de la marca HachSport, 60 servicios", 4500,10,"../assets/bcaa_power.webp","BCAA HardSport"),
            new Products(2,"MUTANT MASS 1.5kg","Ganador de peso de la marca StarNutrition, 100 servicios", 6500,15,"../assets/mutant.webp","Mutant SN"),
            new Products(3,"PUMP 285g","Pre-entreno de la marca StarNutrition, 30 servicios", 2500,23,"../assets/preentreno.webp","PUMP SN"),
            new Products(4,"Whey Protein WOMEN 500g","Proteina para mujer de la marca Ultra Tech, 50 servicios", 8500,12,"../assets/proteinultra.webp","Mujer ultra"),
            new Products(5,"HYDROXY MAX ENA","Quemador de grasa de la marca ENA, 100 servicios", 7300,5,"../assets/reductor.webp","quemador ENA"),
            new Products(6,"ANTIOXIDANTE comprimidos","Antioxidante plus de la marca Vivatech, 30 comprimidos", 900,50,"../assets/vita.webp","Antioxidante"),
            new Products(7,"ENACCION","Vitaminas de la marca StarNutrition, 60 capsulas", 5500,8,"../assets/vitamina.webp","Vitaminas"),
            new Products(8,"Whey Protein Platinum","Proteina isolada de la marca StarNutrition, 30 servicios", 7200,19,"../assets/whey1.webp","proteina SN"),
            new Products(9,"Whey Protein Alto Rendimiento","Proteina 7900 de alto rendimiento de la marca Gentech, 60 servicios", 8900,15,"../assets/wheyProte.webp","gentech"),
        ]
    }
            
    /*actualizar(){
        let acum= ""
        this.productList.forEach(products =>{
            acum += "\nCod" + products.id + " "+ "el precio actual es $"+ Math.round(products.price * 1.10) + "\n"
                    
        })
        return acum
            
    }*/
        
    mostrar(container_list){
        this.productList.map(product => {
            container_list.innerHTML += `
            <div class="card border-warning" style="width: 18rem;">
                <img src="${product.img}" class="card-img-top" alt="${product.alt}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">Precio $ ${product.price}</p>
                    <a href="#" id="Art-${product.id}" class="btn btn-danger container justify-content-center " style=" background-color: rgb(252, 59, 1)">Agregar al carrito</a>
                </div>
            </div> `
        })
        
    }
        
    search(id){
        return this.productList.find(el => el.id == id)
    }
        
}

const controladorProductos= new ControllerProductos()
controladorProductos.loader()

let listCompra;

//DOM de tienda
const container_list = document.getElementById("container_list")
const container_listCompras = document.getElementById("container_listCompras")

controladorProductos.mostrar(container_list)

/*if(localStorage.getItem("listCompra")){
    let listCompraJSON = localStorage.getItem("listCompra")
    listCompra = JSON.parse(listCompraJSON)

    listCompra.map(product => {
        container_listCompra.innerHTML +=`
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${product.img}" class="img-fluid rounded-start" alt="${product.alt}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text"><small class="text-body-secondary">Unidades: ${product.cantidad}</small></p>
                            <p class="card-text"><small class="text-body-secondary">$${product.price}</small></p>
                        </div>
                    </div>
                </div>
            </div>`
        })

}else{
    listCompra = []
}

/*se muestran
productsList.map(product => {
    container_list.innerHTML += `
    <div class="card border-warning" style="width: 18rem;">
        <img src="${product.img}" class="card-img-top" alt="${product.alt}">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">Precio $ ${product.price}</p>
            <a href="#" id="Art-${product.id}" class="btn btn-danger container justify-content-center " style=" background-color: rgb(252, 59, 1)">Agregar al carrito</a>
        </div>
    </div> `
})*/

/*productsList.map(product =>{
    const btnUp= document.getElementById(`Art-${product.id}`)
    btnUp.addEventListener("click", ()=>{

        listCompra.push(product)

        let listCompraJSON = JSON.stringify(listCompra)
        localStorage.setItem("listCompra",listCompraJSON)

        container_listCompra.innerHTML =""

        
    })

})

/*class ControllerProductos{
    constructor(){
        this.listProductos = []
    }
            
    cargar() {
        this.listProductos= [
            new Productos(1000, "Whey Protein ENA", "Proteina de la marca ENA\nSabores: Frutilla - Manzana Verde - Chocolate",1500,125),
            new Productos(500, "Whey Protein ENA", "Proteina de la marca Ultra tech\nSabores: Cookie - Vainilla - Chocolate",1000,70),
            new Productos(1500, "Whey Protein StarNutrition","Proteina de leche de la marca StarNutrition",8000,55),
            new Productos(750, "Creatina ENA 500g", "Creatina de la marca ENA de 500g\nSabor: Frutilla - Mango - Maracuya",790,10),
        ]
    }
            
    actualizar(){
        let acum= ""
        this.listProductos.forEach(productos =>{
            acum += "\nCod" + productos.id + " "+ "el precio actual es $"+ Math.round(productos.price * 1.10) + "\n"
                    
        })
        return acum
            
    }
        
    mostrar(){
        let acum ="" 
        this.listProductos.map(productos =>{
            acum += "\ncod"+ productos.id +" "+ productos.name +"\n"+productos.description +"\n"+"$"+ productos.price +"\n"
        })
        return acum;
    }
        
    buscar(id){
        return this.listProductos.find(el => el.id == id)
    }
        
}
        
class CarritoController{
    constructor(){
        this.listCompras= []
    }
        
    selector(productos){
        this.listCompras.push(productos)
    }
        
    eliminate(producto){
        this.listCompras.pop(producto)
    }
            
    totalCalculate(){
        let acumulado= 0
        this.listCompras.forEach(productos =>{
            acumulado += productos.price * productos.cantidad
        })
        return acumulado;
    }
            
    detalle(){
        let list="" 
        this.listCompras.map(productos =>{
            list += "\ncod"+ productos.id +" "+ productos.name +"\nUnidades:"+productos.cantidad +"\n"+"$"+ productos.price +"\n"
        })
        return list;
    }
}
        
const controladorProductos= new ControllerProductos()
const controladorCarrito= new CarritoController()
controladorProductos.cargar()
controladorProductos.actualizar()
        
let rta= ""
let salida= ""
        
        
do{
            
    alert("Lista de productos:\n"+ controladorProductos.mostrar())
            
    let id =prompt("cod-1000 Whey Protein ENA\n\ncod-500 Whey Protein ENA\n\ncod-1500 Whey Protein StarNutrition \n\ncod-750 Creatina ENA 500g \n\nIngrese el codigo del producto deseado")
            
    const producto = controladorProductos.buscar(id)
            
            
    if (producto){
                
        controladorCarrito.selector(producto)
        let opcion = Number(prompt (" Elige:\n1 - para confirmar el producto al carrito\n2 - para eliminar el producto del carrito"))

        if (opcion == 1){
                        
                alert("el producto se cargo al carrito exitosamente")
                        
        }else if  (opcion == 2){
                alert("se ha quitado del carrito")
                controladorCarrito.eliminate(producto)
        }
        else {
                alert("la opcion es invalida")
            }
    
    }
    else{
        alert("el codigo de producto es incorrecto o inexistente")
    }
            
    rta = prompt("ingrese pagar para terminar la compra \no presione cualquier tecla para continuar comprando").toLowerCase()
            
}while (rta != "pagar")
        
alert("El valor abonar es $" + controladorCarrito.totalCalculate() + "\nDetalle :\n " + controladorCarrito.detalle())

if (controladorCarrito.totalCalculate() > 0){
            
                let pago= prompt("Seleccione el medio de pago:\nAhora3\nAhora6\nEfectivo").toLowerCase()
                        
                do{
                    switch (pago) {
                        case "ahora3":
                            montoApagar = controladorCarrito.totalCalculate() /3
                            alert("El monto a pagar por cuota es $ "+ montoApagar.toFixed(2) + " en 3 cuotas sin interes")
                            console.log("El monto a pagar por cuota es $ "+ montoApagar.toFixed(2) +"\n El pago esta siendo procesado")
                            break;
                                    
                            case "ahora6":
                                montoApagar = controladorCarrito.totalCalculate() /6
                                alert("El monto a pagar por cuota es $ "+ montoApagar.toFixed(2) + " en 6 cuotas sin interes")
                                console.log("El monto a pagar por cuota es $ "+ montoApagar.toFixed(2) + "\nEl pago esta siendo procesado")
                                break;
                                        
                                case "efectivo":
                                    montoApagar = controladorCarrito.totalCalculate() 
                                    alert("El monto a pagar es $"+ montoApagar + "\nPuede abonar con transferencia bancaria o al retirar")
                                    console.log("El monto a pagar en efectivo es $ "+ montoApagar )
                                    break;
                                            
                        default:
                            alert("El medio de pago elegido o dato es incorrecto")
                            break;
                        }
                        rta =prompt("ingrese esc para salir o cualquier tecla para volver a ver el monto a pagar")
                } while (rta != "esc")
           
}
else{
    alert("No hay nada para abonar")
}
        
        
alert("Los precios de los productos se actualizaran \npor una suba en de la tasa aduanera, pasando a costar:\n"+ controladorProductos.actualizar())
                

*/

