function quedaBaratheon() {
    var brasaoDiv = document.getElementById("brasao");
    brasaoDiv.classList.add("queda-Baratheon");
  
    setTimeout(function() {
      brasaoDiv.classList.remove("queda-Baratheon");
    }, 3000);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var brasaoElement = document.getElementById("brasao");
    brasaoElement.addEventListener("click", quedaBaratheon);
  });
  
function winter() {
    snowStorm.toggleSnow();
    alert("O inverno chegou!");
}

function mudarTexto(texto) {
    document.getElementById("textoMenu").innerHTML = texto;

    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < imagens.length; i++) {
        if (imagens[i].classList.contains("highlight")) {
            imagens[i].classList.remove("highlight");
            imagens[i].classList.add("custom-fade");
        }
        if (imagens[i].src === event.target.src) {
            imagens[i].classList.remove("custom-fade");
            imagens[i].classList.add("highlight");
        }
    }
}

    
  
  