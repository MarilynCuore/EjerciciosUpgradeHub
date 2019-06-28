console.log('Cegardo script 1...');
function loadSrcipt(src, callback){
    let script = document.createElement('script');
    script.src = src;
    script.onload = function(){
        callback();
    };
    document.head.append(script);
}

loadSrcipt('./script2.js', function(){
    console.log('Callback script 2');
    saludar();
})

function makeRequest(){
    let httpRequest = new XMLHttpRequest();

function handleResponse(response){
    if(httpRequest.readyState === 4){
        if(httpRequest.status === 200){
            console.log(JSON.parse(httpRequest.responseText))
        }
    }else{
        alert('error')
    }
}
httpRequest.onreadystatechange = handleResponse;
httpRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/')
httpRequest.send();
};
makeRequest();