export function htmlOsszeAllit(lista) {
  let txt = "";
  for (let index = 0; index < lista.length; index++) {
    txt += "<div  class='kep'>";
    txt += `<img src="${lista[index].kep}" alt="${lista[index].cim}">`;
    txt += "</div>";
  }
  return txt;
}
