const lista = document.getElementById("classificacao");
const options = ["Livre", "10", "12", "14", "16", "18"];

options.forEach((elemento, chave) => {
  
    lista.options[lista.options.length] = new Option(elemento, elemento, false, false);

});