import "./styles.css";
import  { add, conLog, homeSwitch, menuSwitch, contactSwitch } from "./pageSwitch.js";

//page body:


const body = document.getElementById("content");

const bodyDiv = document.createElement("div");
bodyDiv.classList.add("bodyDiv");

const bodyCopy = document.createElement("p");
bodyCopy.classList.add("bodyText");

const text = document.createTextNode("Please select an option from the navigation menu.");

bodyCopy.appendChild(text);
bodyDiv.appendChild(bodyCopy);
body.appendChild(bodyDiv);


/*
function homeSwitch(){
    console.log("homeswitch");

    //remove existing
    var el = document.getElementById("content");
    while ( el.firstChild ) el.removeChild( el.firstChild );


    //add more
    const body = document.getElementById("content");

    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("bodyDiv");

    const bodyCopy = document.createElement("p");
    bodyCopy.classList.add("bodyText");

    const text = document.createTextNode("This-a pizza place, it's-a so good. She make-a-da cheese a-melt in-a your mouth-a.");

    bodyCopy.appendChild(text);
    bodyDiv.appendChild(bodyCopy);
    body.appendChild(bodyDiv);
}

function menuSwitch(){
    console.log("menuswitch");

    //remove existing
    var el = document.getElementById("content");
    while ( el.firstChild ) el.removeChild( el.firstChild );

    const body = document.getElementById("content");

    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("bodyDiv");

    const bodyCopy = document.createElement("p");
    bodyCopy.classList.add("bodyText");

    const text = document.createTextNode("This is-a da pizza menu");

    bodyCopy.appendChild(text);
    bodyDiv.appendChild(bodyCopy);
    body.appendChild(bodyDiv);
}

function contactSwitch(){
    console.log("contactswitch");

    //remove existing
    var el = document.getElementById("content");
    while ( el.firstChild ) el.removeChild( el.firstChild );

    const body = document.getElementById("content");

    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("bodyDiv");

    const bodyCopy = document.createElement("p");
    bodyCopy.classList.add("bodyText");

    const text = document.createTextNode("Contact-a da chef");

    bodyCopy.appendChild(text);
    bodyDiv.appendChild(bodyCopy);
    body.appendChild(bodyDiv);
}
*/


//event listeners for menu
const homeButton = document.getElementsByClassName("homeButton");
homeButton[0].addEventListener(`click`, function(){
    homeSwitch()});

const menuButton = document.getElementsByClassName("menuButton");
menuButton[0].addEventListener(`click`, function(){
    menuSwitch()});

const contactButton = document.getElementsByClassName("contactButton");
contactButton[0].addEventListener(`click`, function(){
    contactSwitch()});


