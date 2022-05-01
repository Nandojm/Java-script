function contar (){
    var ini = document.getElementById("msg")
    var f = document.getElementById("fim")
    var passo = document.getElementById("pas")
    var r = document.getElementById("r")
    if (ini.value.length == 0 || f.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Corrija os dados e tente novamente")
    } else {
        r.innerHTML = ("Contando:") 
        var i = Number(ini.value)
        var f = Number(f.value)
        var p = Number(passo.value)
    G
         if (i < f){
            for (var c = i; c <= f; c +=p){
             r.innerHTML +=` ${c} \u{1F449}`}
        
            r.innerHTML += ` \u{1F3C1}`
        }else {
            for (var c = i; c >= f ; c -= p)
            r.innerHTML += ` ${c}`
        }
    }
}





