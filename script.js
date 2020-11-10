function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('corpo').style
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    periodo = ""

    if (minutos >= 0 && minutos < 10) {
        minutos = `0${minutos}`
    } else {
        minutos = minutos
    }

    if (hora >= 0 && hora < 12) {
        periodo  = "Bom dia"
        img.background = "url('manha.jpg') center center"
    } else if (hora >= 12 && hora < 18) {
        periodo  = "Boa tarde"
        img.background = "url('tarde.jpg') center center" 
    } else {
        periodo  = "Boa noite"
        img.background = "url('noite.jpg') center center"
    }

    msg.innerHTML = `${periodo}, agora são ${hora}:${minutos}`
}