// DOM Elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const idName = document.getElementById("name");
const focus = document.getElementById("focus");

// Show Time
function showTime(){
    let today = new Date();
    let hour = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds(); 

    // Set AM or PM
    let amPm = hour >= 12 ? "PM" : "AM";

    // 12hr format
    hour = hour % 12 || 12

    //Output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`
    
    setTimeout(showTime, 1000);
}

// Add zeros ot the minutes and the seconds
function addZero(n){
    return(parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Create a function to change the background base on the time of the day
function setBg(){
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('./morning-landscape-pic.jpg')";
        greeting.textContent = 'Good morning';
    } else if(hour < 18){
        // Afternoon
        document.body.style.backgroundImage = "url('./afternoon-the-landscape-pic.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('./night-landscape-pic.jpg')";
        document.body.style.color = "white";
        greeting.textContent = 'Good Evening';
    }
}

// Get Name
function getName(){
    if(localStorage.getItem('name')=== null){
        idName.textContent = '[Enter Name]'
    } else {
        idName.textContent = localStorage.getItem('name')
    }
};

// Set Name
function setName(e){
    if(e.type === "keypress"){
        // Make sure "enter" key is presses
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText)
            idName.blur()
        }
    } else {
        localStorage.setItem("name", e.target.innerText)
    }
}

// Get Focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter focus]'
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
};

// Set Focus
function setFocus(e){
    if(e.type === "keypress"){
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText)
            focus.blur()
        }
    } else {
        localStorage.setItem("focus", e.target.innerText)
    }
}

// Adding eventlistener to update the DOM
idName.addEventListener("keypress", setName);
idName.addEventListener("blur", setName)
focus.addEventListener("keypress", setFocus)
focus.addEventListener("blur", setFocus)

// Run
showTime();
setBg();
getName();
getFocus();