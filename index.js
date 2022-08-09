function inicio(){
    var textoInput = document.getElementById("textoInput");
    var caracteres = document.getElementById("caracteres");
    var botonInput = document.getElementById("botonInput");
    var zonaInput = document.getElementById("zonaInput");
    
    textoInput.addEventListener("keyup",()=>{
        caracteres.innerHTML=`${textoInput.value.length} caracteres`;
    });
    
    botonInput.addEventListener("click",()=>{
        console.log("click");
        zonaInput.classList.toggle("hide");
    });

}
function crearDiv(){
    const miDiv = document.getElementById("miDiv");
    const parrafo1 = document.createElement("p");
    const parrafo2 = document.createElement("p");
    parrafo1.innerHTML="Hola Fernando";
    parrafo2.innerHTML="Chau Fernando";
    
    miDiv.appendChild(parrafo1);
    miDiv.appendChild(parrafo2);
}
inicio();
crearDiv();
