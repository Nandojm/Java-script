while (24){
function carregar(){
    
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src=  "manha.jpg"
    }else if ( hora >=12  && hora < 18) {
        //boa arde
    img.src = `tarde.jpg`
    }else {
        // boa noite
        img.src = `noite.jpg`}
        
    }
}
