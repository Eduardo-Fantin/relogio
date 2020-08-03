function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.toLocaleTimeString()
    
    //olá, mundo!
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>=6 && hora<12){
        document.body.style.background = '#F0E68C'
        img.src = 'fotomanha.png'
        
    } else if(hora>=12 && hora<18){
        document.body.style.background = '#FF8C00'
        img.src = 'fototarde.png'
    } else {
        document.body.style.background = '#191970'
        img.src = 'fotonoite.png'
    }
    setTimeout(carregar, 1000)
}