document.addEventListener('DOMContentLoaded',()=>{

    let parrafo = document.querySelector("#parrafo");
    let boton = document.querySelector("#boton");

   /**
    * boton permite activar un evento cuando doy click en el objeto boton
    */
   //CODIGO PARA CAMBIAR TEXTO
    boton.addEventListener("click", ()=>{
        parrafo.textContent ="CAMBIO DESDE JAVA SCRIPT";
    });

    //CODIGO PARA CAMBIAR EL COLOR
    const datosInformativos = document.querySelectorAll("#cambio");

    datosInformativos.forEach((datos)=>{
            datos.addEventListener('mouseover',()=>{
                datos.style.color = 'red';
                datos.style.fontSize = '50px';

            })
            datos.addEventListener('mouseout',()=>{
                datos.style.color = 'black';
                datos.style.fontSize = '20px';
            })

    })

    //OCULTAR INFORMACION
    const ocultar = document.querySelector("#ocultar");
    const botonOcultar = document.querySelector("#botonOculto");

    botonOcultar.addEventListener("click", ()=>{

        if(ocultar.style.display === 'none'){
            ocultar.style.display = 'block';
            botonOcultar.textContent ="OCULTAR"
            botonOcultar.style.backgroundColor = 'red'
            botonOcultar.style.color = 'white'

        }else{
            ocultar.style.display = 'none';
            botonOcultar.textContent ="VER"
            botonOcultar.style.backgroundColor = 'green'
            botonOcultar.style.color = 'white'
        }
    })

    //PRACTICA DE ===  Y ==

    const signos = document.querySelector("#practicaSignos")
    let numero = '6';
    //=== evalua el tipo de dato y el dato 
    //== evalua solo el dato
    if(numero === 6){
            signos.textContent = "VERDADERO"
    }else{
             signos.textContent = "FALSO"
    }

    //CREACION DE ETIQUETAS DE MANERA DINAMICA
    const datoIngreso = document.querySelector(".datoIngreso");
    const listado = document.querySelector(".listado");
    const botonIngreso = document.querySelector(".botonIngreso");

    botonIngreso.addEventListener("click", ()=>{
        const dato = datoIngreso.value.trim();

        if(dato !== ''){
            const li = document.createElement("li");
            li.textContent = dato;
            listado.appendChild(li);
            datoIngreso.value = "";
        }
        
    })

    //PRUEBA TECNICA PARA DESARROLLADOR FRONTEND JR
    /**Requerimientos Funcionales(creacion de script dinamico para ingresar datos a una tabla)
     * 1. Cuando ingrese un nuevo dato en una caja de texto se cree una nueva fila en mi tabla y que tenga un titulo 
     * 2. Para crear ese dato en mi tabla debe existir un boton el cual al hace click me genera esa accion
     * 3. Cuando vaya ingresar el dato el boton debe decir ingresar y toner un color verde con letras blanca
     * 4. Cuando haga la accion de click quiero que el nombre del boton diga ingresado y cambie a color rojo con letras blancas
     */



})