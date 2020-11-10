function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('corpo').style
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    var simular = document.getElementById('periodo').value
    var periodo = ""

    if (minutos >= 0 && minutos < 10) {
        minutos = `0${minutos}`
    } else {
        minutos = minutos
    }
    
    if (segundos >= 0 && segundos < 10) {
        segundos = `0${segundos}`
    } else {
        segundos = segundos
    }

    if (hora >= 0 && hora < 12 || simular == "manha")  {
        periodo  = "Bom dia"
        img.background = "url('manha.jpg') center center"
    } else if (hora >= 12 && hora <= 18 || simular == "tarde") {
        periodo  = "Boa tarde"
        img.background = "url('tarde.jpg') center center" 
    } else {
        periodo  = "Boa noite"
        img.background = "url('noite.jpg') center center"
    }

    if (simular == "noite") {
        hora = 22
        periodo  = "Boa noite"
        img.background = "url('noite.jpg') center center"
    } else if (simular == "tarde") {
        hora = 15
    } else if (simular == "manha") {
        hora = 9
    }

    msg.innerHTML = `${periodo}, agora são ${hora}:${minutos}:${segundos}`
   
}

window.setInterval('carregar()', 1000)

   
