const listaEditar = [
  "titulo",
  "ano",
  "duracao",
  "classificacao",
  "categoria",
  "atores",
  "imagembg",
  "thumb",
  "video",
];
let vazio = "";

function validaEditar() {
  listaEditar.forEach((item) => {
    valor = document.getElementById(item);
    if ((valor.value == "") & (vazio == "")) {
      vazio = item;
      alert(valor.value);
    }
  });
  if (vazio != "") {
    alert(vazio);
    document.getElementById(vazio).focus();
    return false;
  }
}
