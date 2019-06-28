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
    //p
    var autor = document.createElement('autor')
    autor.innerText = document.getElementById("autor").value
    article.appendChild(autor)
    //2 p
    var texto = document.createElement('texto')
    texto.innerText = document.getElementById("text").value
    article.appendChild(texto)
    
    //Meter en la columna Izquierda
    //Article
    var card = document.querySelector('.card');
    card.appendChild(article)
}