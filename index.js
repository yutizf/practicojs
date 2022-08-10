function inicio(){
    var textoInput = document.getElementById("textoInput");
    var caracteres = document.getElementById("caracteres");
    var botonInput = document.getElementById("botonInput");
    var zonaInput = document.getElementById("zonaInput");
    
    textoInput.addEventListener("keyup",()=>{
        const cant=textoInput.value.length;
        if(cant>0){
            caracteres.innerHTML=`${cant} caracteres`;
            caracteres.classList.remove("hide");
        }else{
            caracteres.classList.add("hide");
        }
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
