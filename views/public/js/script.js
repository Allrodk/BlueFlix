const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");


// Select via DOM
const languagesSelect = document.getElementById("languages-select");
const languagesList = ["Ruby", "JavaScript", "Python", "GoLang"];

languagesList.forEach((language) => {
  option = new Option(language, language.toLowerCase());
  languagesSelect.options[languagesSelect.options.length] = option;
});



closeMessage.addEventListener("click", function () {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 5000);



