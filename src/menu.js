import "./styles.css";

const body = document.getElementById("content");

const bodyDiv = document.createElement("div");
bodyDiv.classList.add("bodyDiv");

const bodyCopy = document.createElement("p");
bodyCopy.classList.add("bodyText");

const text = document.createTextNode("This is-a da pizza menu");

bodyCopy.appendChild(text);
bodyDiv.appendChild(bodyCopy);
body.appendChild(bodyDiv);