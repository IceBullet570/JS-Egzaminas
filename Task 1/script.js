/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


const form = document.querySelector("form");

  form.addEventListener('submit', function(e) {
    e.preventDefault();
      const input = document.querySelector("input");
        document.getElementById("outputPounds").innerHTML=input.value*2.2046;
        document.getElementById("outputGrams").innerHTML=input.value/0.001;
        document.getElementById("outputOz").innerHTML=input.value*35.274;
    }
  )
  let enterInput = document.getElementById("submit-btn");
    enterInput.addEventListener("keyup", function(event) {
      document.getElementById("submit-btn").click();
      }
    )
    // finished