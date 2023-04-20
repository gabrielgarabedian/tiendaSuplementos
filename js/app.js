/* DOM para carrousel */

let imagenes = ['assets/carrusel_1.png', 'assets/carrusel_2.jpg', 'assets/carrusel_3.jpg'],
    cont = 0

function carrousel(contenedor){
    contenedor.addEventListener('click', e => {
        let izq = contenedor.querySelector('.left'),
            der = contenedor.querySelector('.right'),
            img = contenedor.querySelector('img'),
            trg = e.target;


        if(trg == izq){
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length -1];
                cont = imagenes.length -1;
            }
        }else if(trg == der){
            if (cont < imagenes.length -1) {
                img.src = imagenes[cont + 1];
                cont++;
            }else{
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded",()=>{
    let contenedor = document.querySelector('.contenedor');

    carrousel(contenedor);
});


