// Script da Mensagem
const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");

if (message != null) {
  closeMessage.addEventListener("click", function () {
    message.style.display = "none";
  });

  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
}
