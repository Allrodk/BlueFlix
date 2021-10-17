const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");

const classe = document.getElementById("inputClassificacao").value;
const s = document.getElementById("classificacao");
const options = ["Livre", "10", "12", "14", "16", "18"];

options.forEach((elemento, chave) => {
  if (elemento !== classe) {
    s.options[s.options.length] = new Option(elemento, elemento, false, false);
  }
  else {
    s.options[s.options.length] = new Option(elemento, elemento, false, true);
  }
});

closeMessage.addEventListener("click", function () {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 5000);

setTimeout(() => {
  message.style.display = "none";
}, 5000);
