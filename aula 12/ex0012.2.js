var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes() 
var segundos = agora.getSeconds()
console.log (`agora sao exatamente ${hora}:${minuto}:${segundos}`)
if (hora < 12){
    console.log("Bom dia!")
}else if(hora < 18){
    console.log("Boa tarde")
}else ( hora < 24)
console.log("Boa noite")