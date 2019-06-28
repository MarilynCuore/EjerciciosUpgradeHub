function createNotice(){
    //Crear
    //Article
    var article = document.createElement('article');
    //h1
    var titulo = document.createElement('h1')
    titulo.innerText = document.getElementById("title").value
    article.appendChild(titulo)
    //img
    var img = document.createElement('img')
    img.src = document.getElementById("url").value
    article.appendChild(img)

    //Meter en la columna Izquierda
    //Article
    var card = document.querySelector('.card');
    card.appendChild(article)
    //Img

}