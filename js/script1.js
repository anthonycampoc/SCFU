document.addEventListener("DOMContentLoaded", ()=>{
   
   //CODIGO CAMBIAR TEXTO
    let parrafo =  document.querySelector("#parrafo");
    let boton = document.querySelector("#boton");

    boton.addEventListener("click", ()=>{
        parrafo.innerHTML = "Hola Mundo!";
    })

   //CODIGO CAMBIAR COLOR
    const itemResaltables = document.querySelectorAll("#resaltable");
    itemResaltables.forEach((item)=>{
        item.addEventListener('mouseover',()=>{
            item.style.color = 'red';
        })
        item.addEventListener('mouseout',()=>{
            item.style.color = 'black';
        })
    })

    //codigo para ocultar
    const sectionOcultar = document.querySelector("#ocultar");
    const botonOcultar = document.querySelector("#botonOcultar");
    botonOcultar.addEventListener('click',() =>{
        
        if (sectionOcultar.style.display === 'none') {
            sectionOcultar.style.display = 'block';
         
        } else {
            sectionOcultar.style.display = 'none';
      
        }
    })
    //codigo para agregar tareas de manera dinamica

    const nuevaTarea = document.querySelector("#nuevaTarea");
    const listado = document.querySelector("#listado");
    const botonAgregar = document.querySelector("#agregar");

    botonAgregar.addEventListener("click", ()=>{
        const addTarea = nuevaTarea.value.trim();

        if(addTarea !== ''){
            const nuevaLi = document.createElement("li");
            nuevaLi.textContent = addTarea;

            listado.appendChild(nuevaLi);
            nuevaTarea.value = '';
        }
    })

})