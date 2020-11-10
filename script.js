function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('corpo')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
}