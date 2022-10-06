/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */


let button = document.getElementById("btn__element");
let skaiciavimas = document.getElementById("btn__state"),
  count = 0;
button.onclick = function() {
  count += 1;
  skaiciavimas.innerHTML = count;
};