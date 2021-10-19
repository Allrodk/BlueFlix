const background = document.querySelector(".imagembg");
const imagemAtual = document.getElementById("imagemAtual").value;

background.style.setProperty("background-image", `url('${imagemAtual}')`);

window.addEventListener("scroll", () => {
  background.style.backgroundPosition = +window.pageYOffset + "px";
});
