const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");


// Select via DOM
// const languagesSelect = document.getElementById("listaClassificacao");
// const languagesList = ["Livre", "10", "12", "14", "16", "18"];

// languagesList.forEach((language) => {
//   option = new Option(language, language.toLowerCase());
//   languagesSelect.options[languagesSelect.options.length] = option;
// });

var s = document.getElementById('listaClassificacao');
var options = ["Livre", "10", "12", "14", "16", "18"];

options.forEach((elemento, chave) => {
  if (elemento !== s.value) {
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



