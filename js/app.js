//variables

const carrito = document.queryselector('#carrito');
const contenedorCarrito = document.queryselector('#lista-carrito tbody');
const vaciarCarritoBtn = document.queryselector('#vaciar-carrito');
const listaCursos  = document.queryselector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //cuandro agregas un curso precionanado agregar
    listaCursos.addEventListener('click',agregarCurso);
}



//funciones

function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
         const cursoSeleccionado = e.target.parentElement.parentElement;

         leerDatosCurso(cursoSeleccionado);
        
    }

   
}

//lee el contenido del html y extrae la informacion del curso

function leerDatosCurso(curso){
   // console.log(curso);

    //crear un objeto con el contenido del curso actual 

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso. querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),   
        cantidad:1
    }
 //agrega elementos al arreglo de carrito 
 articulosCarrito = [...articulosCarrito,infoCurso];
 
 console.log(articulosCarrito);

 carritoHTML ;
}

//muestra el carrito de compras en el Html
function carritoHTML(){

    //limpiar el HTML 
    limpiarHTML();

    // recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML =  ` 
        <td>
        ${curso.titulo}
        </td>
        `;
        //agrega el HTML del carrito en el body
        contenedorCarrito.appendChild(row);
    });
}

//elimina los cursos del tbody 
function limpiarHTML(){
    //forma lenta de limpiar el HTML
    //contenedorCarrito.innerHTML = "";
  
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);


    }
}