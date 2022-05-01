function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var forano = document.getElementById("data")
    var res = document.querySelector("div#resul")
    if (forano.value.length == 0 || Number(forano.value) > ano) {
        window.alert ("[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE")
    }else 
    var fsexo = document.getElementsByName("sexo")
    var idade = ano - Number(forano.value)
    var img = document.createElement("img")
    img.setAttribute("id","foto")
    var genero = "" 

    if ( fsexo[0].checked) {
        genero = "homem"
      if (idade >= 0 && idade < 10){
        //criaça
        img.setAttribute("src","menino.jpg")
       }else if (idade < 21){
        // jovem
        img.setAttribute(`src`, `jovem homem.jpg`)
       }else if (idade < 50){
        // homen
        img.setAttribute("src","homem.jpg")
       }else {
        img.setAttribute(`src`,`idoso home.jpg`)}
    
    }else if (fsexo [1].checked){
        genero ="mulher"
       if (idade >= 0 && idade < 10){
        //criança
        img.setAttribute("src","menina criança.jpg")}
        else if (idade < 21){
        //jovem
        img.setAttribute("src","~jovem menna.jpg")
        }else if (idade < 50){
        //mulher
        img.setAttribute("src","")
        }
        else {
            img.setAttribute("src","idosa.jpg")
        }
    }

    res.style.textAlign = `center`
    res.innerHTML = `detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}