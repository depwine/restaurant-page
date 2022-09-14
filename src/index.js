import "./styles.css";
import "./pageSwitch";

//event listeners for menu
const homeButton = document.getElementsByClassName(".homeButton"[0]);
homeButton.addEventListener(`click`, pageSwitch.homeSwitch());

const menuButton = document.getElementsByClassName(".menuButton"[0]);
menuButton.addEventListener(`click`, pageSwitch.menuSwitch());

const contactButton = document.getElementsByClassName(".contactButton"[0]);
contactButton.addEventListener(`click`, pageSwitch.contactSwitch());

//page body:
const body = document.getElementById("content");

const bodyDiv = document.createElement("div");
bodyDiv.classList.add("bodyDiv");

const bodyCopy = document.createElement("p");
bodyCopy.classList.add("bodyText");

const text = document.createTextNode("This-a pizza place, it's-a so good. She make-a-da cheese a-melt in-a your mouth-a.");

bodyCopy.appendChild(text);
bodyDiv.appendChild(bodyCopy);
body.appendChild(bodyDiv);



