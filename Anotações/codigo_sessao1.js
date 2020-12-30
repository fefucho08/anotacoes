function resgata(){
    var anotacao = localStorage.getItem("sessao1");
    var texto= document.getElementById("merda")
    texto.innerHTML= `${anotacao}`;
}

function salva_1(){
    
    var texto= document.getElementById("merda")
    var salvando = texto.value;

    if(typeof(Storage) !== "undefined") {
        
        localStorage.clear("sessao1");
        localStorage.setItem("sessao1",salvando);
        location.reload;

    } else{
    
    }
}