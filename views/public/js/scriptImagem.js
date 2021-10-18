const background = document.querySelector("body");
const imagemAtual = document.getElementById("imagemAtual").value;

background.style.setProperty("background-image", `url('${imagemAtual}')`);
