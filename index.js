const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const completeSound = document.querySelector("#completeSound");

// functie om een 'task' toe te voegen
function addTask() {
    // foutmelding test
    if (inputBox.value === '') {
        alert("Je moet iets invullen!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // voegt iten toe aan lijstje
        listContainer.appendChild(li);
        // kruisje/verwijderen
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    // invoerveld leeg maken
    inputBox.value = "";
}

// afvinken/verwijderen
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        completeSound.play();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});

// bronnen hoe ik een to do lijstje kan maken
// https://www.youtube.com/watch?v=G0jO8kUrg-I
// https://www.w3schools.com/howto/howto_js_todolist.asp

// bronnen verschillende elementen in JavaScript
// kennisclips algemeen dlo
// https://www.w3schools.com/js/js_if_else.asp
// https://www.w3schools.com/js/js_array_const.asp
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp

// geluidje toegevoegd bronnen
// https://pixabay.com/sound-effects/search/finish/
// https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984#:~:text=The%20simplest%20way%20to%20add,starts%20playing%20the%20current%20audio.
