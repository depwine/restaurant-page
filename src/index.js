import "./styles.css";

const body = document.getElementById("content");

const bodyDiv = document.createElement("div");
bodyDiv.classList.add("bodyDiv");

const bodyCopy = document.createElement("p");
bodyCopy.classList.add("bodyText");

const text = document.createTextNode("This-a pizza place, it's-a so good. She make-a-da cheese a-melt in-a your mouth-a.");

bodyCopy.appendChild(text);
bodyDiv.appendChild(bodyCopy);
body.appendChild(bodyDiv);

