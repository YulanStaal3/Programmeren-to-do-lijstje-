const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Je moet iets invullen!");
    }
    else{
        let li = document.createElement ("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // kruisje/verwijderen
        let span = document.createElement ("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
}

// afvinken/verwijderen
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);


// bronnen
// https://www.youtube.com/watch?v=G0jO8kUrg-I
// https://www.w3schools.com/howto/howto_js_todolist.asp
// https://www.w3schools.com/js/js_if_else.asp
// https://www.w3schools.com/js/js_array_const.asp
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
