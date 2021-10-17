const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");


// Select via DOM
const languagesSelect = document.getElementById("listaClassificacao");
const languagesList = ["Livre", "10", "12", "14", "16", "18"];

languagesList.forEach((language) => {
  option = new Option(language, language.toLowerCase());
  languagesSelect.options[languagesSelect.options.length] = option;
});

{/* <select name="classificacao" id="classificacao">                    
<option value="Livre">Livre</option>   
<option value="10">10 anos</option>   
<option value="12">12 anos</option>   
<option value="14">14 anos</option>   
<option value="16">16 anos</option>   
<option value="18">18 anos</option>                    
</select> */}




closeMessage.addEventListener("click", function () {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 5000);



