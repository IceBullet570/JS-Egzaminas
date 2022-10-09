/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json'

function cars() {
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(result => {
        for (let i = 0; i < result.length; i++) {

            const randomColor = Math.floor(Math.random()*16777215).toString(16)
            document.getElementById('output').style.backgroundColor = "#" + randomColor
            document.getElementById('output').style.fontSize = "20px"
            const brand = result[i].brand
            const models = result[i].models

            const brandCard = document.getElementById('output').innerHTML += brand + ":" + "_________" + models + "<br>"
            // brandCard.innerHTML = `<h1>${brand}</h1>`
            // brandCard.style.border = '1px solid black'
            // brandCard.style.margin = '5px'
            // brandCard.style.padding = '5px'
            // document.body.appendChild(brandCard)
            // const modelsCard = document.createElement("H2")
            // modelsCard.style.fontStyle = "bold"
            // modelsCard.innerHTML = `<h2>${models}</h2>`
            // document.body.appendChild(modelsCard)
            console.log(result[i])
        }    
    })
}

cars()