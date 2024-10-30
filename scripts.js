
let botaosom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
 


/*Ligar o som */ 
botaosom.addEventListener("click", ligasom)

function ligasom(){
    video.muted = false
}
// mostrar o modal

botao.addEventListener("click", mostrarmodal)
modal.addEventListener("click", escondermodal)
function mostrarmodal(){
    modal.style.display = "block"
}
function escondermodal(){
    modal.style.display = "none"
}