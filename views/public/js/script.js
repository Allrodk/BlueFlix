// Script do Select Classificação
const classe = document.getElementById("inputClassificacao").value;
const s = document.getElementById("classificacao");
const options = ["Livre", "10", "12", "14", "16", "18"];

options.forEach((elemento, chave) => {
  if (elemento !== atual) {
    lista.options[lista.options.length] = new Option(elemento, elemento, false, false);
  }
  else {
    lista.options[lista.options.length] = new Option(elemento, elemento, false, true);
  }
});

