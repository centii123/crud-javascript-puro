let local=JSON.parse(localStorage.getItem('animales')) || []
const boton= document.getElementById("boton")
const listAnimales= document.getElementById("animales")
//let hola= document.querySelectorAll
const PEditar=document.querySelector('#PEditar')
const inputEdit=document.getElementById("animalEdit")
const botonEdit=document.querySelector("#botonEdit")
const formulario= document.getElementById("form")
const formularioEdit= document.getElementById("forEdit")








let agregar = (array)=>{
    formulario.addEventListener('submit',(e)=>{
        e.preventDefault()
        let animal=e.target.animal.value
        let convertidorMayus=convertir(animal)
        array.push(convertidorMayus)
        localStorage.setItem('animales', JSON.stringify(array))
        e.target.animal.value=""
        html()
        
    })

}



let convertir=(hola)=>{
    let otra=""
    for (let a = 0; a < hola.length; a++) {

        if(a==0){
            let con=hola[a].toUpperCase()
            otra= otra + con
            continue
        }
        otra= otra + hola[a]
        
    }
    return otra
}


let html=()=>{
    listAnimales.innerHTML=""
    for (let i = 0; i < local.length; i++) {
    
        listAnimales.insertAdjacentHTML('afterbegin',`<div class="opcionAnimal">
        <h4><li>${local[i]}</li></h4>
        <p class="valores">${i}</p>
        <div>
            <button class="borrar" onclick="eliminar(event)">Borrar</button>
            <button class="editar" onclick="editar(event)">Editar</button>
        </div>
    </div>`)  //event pasa el evento
    
    }


    
}

let eliminar=(evento)=>{
    const boton = evento.target;
    let div= boton.parentElement.parentElement
    let variable=div.getElementsByClassName("valores")[0].textContent

    local.splice(variable,1)
    localStorage.setItem('animales', JSON.stringify(local))
    html()


}

let editar=(evento)=>{
    
    const boton = evento.target;
    let div= boton.parentElement.parentElement
    let variable=div.getElementsByClassName("valores")[0].textContent
    console.log(div.getElementsByClassName("valores")[0])
    

    PEditar.classList.add('active')
    inputEdit.value=local[variable]
    formularioEdit.addEventListener('submit',(e)=>{
        
        e.preventDefault()
        let papa= e.target.animalEdit.value
        local[variable]=convertir(papa)
        //localStorage.setItem('animales', JSON.stringify(local))
        html()
        variable=undefined
        console.log(variable)
        PEditar.classList.remove("active")
    })
}

let regresar=()=>{
    PEditar.classList.remove("active")
}


window.addEventListener('DOMContentLoaded',html)
agregar(local)








