import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const GALERIA_ELEM = document.querySelector(".galeria");
/* írd bele az összeálíltott html képsorozatot */
GALERIA_ELEM.innerHTML = htmlOsszeAllit(KEPEK);

/*2. feladat  A .nagykep divben lévő img elem megfogása */
/* A .nagykep div megfogása */
const NAGYKEP_ELEM = document.querySelector(".nagykep > div img");

/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const KISKEPEK_LISTA = document.querySelectorAll(".kep");
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */
let jelenlegiKep = 0;
for (let index = 0; index < KISKEPEK_LISTA.length; index++) {
  KISKEPEK_LISTA[index].addEventListener("click", function () {
    NAGYKEP_ELEM.src = KEPEK[index].kep;
    jelenlegiKep = index;
  });
}

/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
const BAL_GOMB = document.querySelector(".bal");
const JOBB_GOMB = document.querySelector(".jobb");

BAL_GOMB.addEventListener("click", function () {
  if (jelenlegiKep === 0) {
    NAGYKEP_ELEM.src = KEPEK[KEPEK.length - 1].kep;
    jelenlegiKep = KEPEK.length - 1;
  } else {
    NAGYKEP_ELEM.src = KEPEK[jelenlegiKep - 1].kep;
    jelenlegiKep = jelenlegiKep - 1;
  }
});

JOBB_GOMB.addEventListener("click", function () {
  if (jelenlegiKep === KEPEK.length - 1) {
    NAGYKEP_ELEM.src = KEPEK[0].kep;
    jelenlegiKep = 0;
  } else {
    NAGYKEP_ELEM.src = KEPEK[jelenlegiKep + 1].kep;
    jelenlegiKep = jelenlegiKep + 1;
  }
});
