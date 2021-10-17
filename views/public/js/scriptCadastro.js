const s = document.getElementById("classificacao");
const options = ["Livre", "10", "12", "14", "16", "18"];

options.forEach((elemento, chave) => {
  
    s.options[s.options.length] = new Option(elemento, elemento, false, false);

});