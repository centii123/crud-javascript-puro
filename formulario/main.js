let formulario=document.querySelector('#formulario')

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    let datos=new FormData(formulario)
    console.log(datos.get("nombre"))
})