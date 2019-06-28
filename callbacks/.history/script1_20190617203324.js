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