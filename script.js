
function editProfile() {
    let h1 = document.getElementById("jane")
    h1.innerHTML = "Ardit Spahiu";
}

function removerequest() {
    let div = document.getElementById("1-request");
    div.outerHTML = "";
    
}

function removerequest2() {
    let div = document.getElementById("2-request");
    div.outerHTML = "";
    
}

function decreasevalue() {
    let input = document.getElementById("requests-value");
    let value = parseInt(input.value);
    input.value = value - 1;
    
}

function increasevalue() {
    let input = document.getElementById("coennection-value");
    let value = parseInt(input.value);
    input.value = value + 1;
}