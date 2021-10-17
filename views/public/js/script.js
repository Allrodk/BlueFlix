const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");

const atual = document.getElementById("classificacaoAtual").value;
const lista = document.getElementById("classificacao");
const options = ["Livre", "10", "12", "14", "16", "18"];

options.forEach((elemento, chave) => {
  if (elemento !== atual) {
    lista.options[lista.options.length] = new Option(elemento, elemento, false, false);
  }
  else {
    lista.options[lista.options.length] = new Option(elemento, elemento, false, true);
  }
});

closeMessage.addEventListener("click", function () {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 5000);
