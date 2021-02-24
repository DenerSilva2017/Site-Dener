// Tela incial do Gif Loading
function carregar(){
    var i = setInterval(function () {
        clearInterval(i);

        document.getElementById("loading").style.display = "none";
        document.getElementById("conteudo").style.display = "inline";
    
    }, 1300);
}
