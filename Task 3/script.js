/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users'

document.getElementById('btn').addEventListener('click', function () {

    fetch(ENDPOINT)
    .then(response => response.json())
    .then(result => {
        for (let i = 0; i < result.length; i++) {

            document.getElementById('message').innerHTML = ""

            const randomColor = Math.floor(Math.random()*16777215).toString(16)
            document.getElementById('output').style.backgroundColor = "#" + randomColor

            document.getElementById('output').innerHTML += result[i].login + "___________" + result[i].avatar_url + "<br>"
        }
    })
})

// finished
