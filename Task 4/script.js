/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
function cars() {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((result) => {

      for (let i = 0; i < result.length; i++) {
        const createCard = document.createElement("div");
        createCard.style = "border: 1px solid black; border-radius: 5px; width: 90%; margin: 10px"
        const carBrand = document.createElement("h5");
        carBrand.innerText = result[i].brand;
        carBrand.style = "background-color: grey; padding: 10px; border: 3px solid grey; border-radius: 5px"
        createCard.appendChild(carBrand);
        const carModel = document.createElement("p");
        carModel.innerText = result[i].models.join(", ");
        carModel.style = "padding: 10px"
        createCard.appendChild(carModel);
        output.appendChild(createCard);
      }

    });
}
cars();

// finished