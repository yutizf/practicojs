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

inicio();
