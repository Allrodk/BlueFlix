const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");


// Select via DOM
// const languagesSelect = document.getElementById("listaClassificacao");
// const languagesList = ["Livre", "10", "12", "14", "16", "18"];

// languagesList.forEach((language) => {
//   option = new Option(language, language.toLowerCase());
//   languagesSelect.options[languagesSelect.options.length] = option;
// });

const s = document.getElementById('classificacao');

const options = ["Livre", "10", "12", "14", "16", "18"];

alert(s.value)

options.forEach((elemento, chave) => {
  if (elemento !== s.value) {
    s.options[s.options.length] = new Option(elemento, elemento, false, false);
  }
  else {
    s.options[s.options.length] = new Option(elemento, elemento, false, true);
  }
});

/* <select name="classificacao" id="classificacao">                    
<option value="Livre">Livre</option>   
<option value="10">10 anos</option>   
<option value="12">12 anos</option>   
<option value="14">14 anos</option>   
<option value="16">16 anos</option>   
<option value="18">18 anos</option>                    
</select> */




// closeMessage.addEventListener("click", function () {
//   message.style.display = "none";
// });

// setTimeout(() => {
//   message.style.display = "none";
// }, 5000);



// setTimeout(() => {
//   message.style.display = "none";
// }, 5000);
