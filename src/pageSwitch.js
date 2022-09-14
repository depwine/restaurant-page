export var conLog = function(){
    return console.log("works!");
}

export var homeSwitch = function(){
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

        const text = document.createTextNode("This-a pizza place, it's-a so good. "+
        "She make-a-da cheese a-melt in-a your mouth-a. ");

        const spacer = document.createElement("br");

        const textTwo = document.createTextNode("This is really honestly just placeholder content to show you that "+
        "the nav buttons work");


        bodyCopy.appendChild(text);
        bodyCopy.appendChild(spacer);
        bodyCopy.appendChild(textTwo);
        bodyDiv.appendChild(bodyCopy);
        body.appendChild(bodyDiv);
    }

export var menuSwitch =  function(){
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

export var contactSwitch =  function(){
    console.log("contactswitch");

    //remove existing
    var el = document.getElementById("content");
    while ( el.firstChild ) el.removeChild( el.firstChild );

    const body = document.getElementById("content");

    const bodyDivMap = document.createElement("div");
    bodyDivMap.classList.add("bodyDivMap");

    const map = document.createElement("img");
    map.src = "./map2.png";
    map.classList.add("imageMap");

    bodyDivMap.appendChild(map);
    body.appendChild(bodyDivMap);
}





    

    






