const raimunda = "raimunda";
const lily = "lily";
const josias = "josias";
const luana = "luana";
const gabi = "gabi";


var investigador= localStorage.getItem("personagem")

if(investigador !== null){
    window.location.href= investigador+"/"+investigador+".html"
}else{

}

function setar(personagem){
    
    if(typeof(Storage) !== "undefined") {
        
        localStorage.setItem("personagem",personagem);
        location.reload();

    } else{
    
    }
}

