function carregar() {
    
  
var msg = window.document.getElementById("msg")
var foto = window.document.getElementById ("imagem")

var data = new Date
var hora = data.getHours()
var minu = data.getMinutes ()
var seg = data.getSeconds()
 
 if (hora >00 && hora<= 5){
    document.body.style.background ="black"
  foto.src = `madrugada.jpg`  
 msg.innerHTML= `boa madrugadatamente ${hora}:${minu}:${seg}`}

 else if (hora >= 6 && hora <12){
    foto.src = `manha.jpg`
    document.body.style.background ="#e2cd9c"
    msg.innerHTML=`Bom dia são exatamente ${hora}:${minu}:${seg}`
}else if(hora >= 12 && hora < 18){
    foto.src = "tarde.jpg"
    document.body.style.background = "#b9846f"
    msg.innerHTML = `boa tarde são exatamente ${hora}:${minu}:${seg}`
}else {
    foto.src = "noite.jpg"
    document.body.style.background = "#515154"
    msg.innerHTML = `boa noite! são exatamente ${hora}:${minu}:${seg}`
}
}