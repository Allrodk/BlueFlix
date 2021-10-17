// Script do Select Classificação
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

