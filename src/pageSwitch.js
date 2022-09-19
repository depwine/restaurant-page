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

    // create new
    const body = document.getElementById("content");

    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("bodyDiv");

    
    const floatCenter = document.createElement("div");
    floatCenter.classList.add("floatCenter");

    
    //add some images
    const rectOne = document.createElement("div");
    rectOne.classList.add("rectOne");

    const rectTwo = document.createElement("div");
    rectTwo.classList.add("rectTwo");

    const rectThree = document.createElement("div");
    rectThree.classList.add("rectThree");

    const rectFour = document.createElement("div");
    rectFour.classList.add("rectFour");

    const bodyCopy = document.createElement("p");
    bodyCopy.classList.add("bodyText");

    const menuOne = document.createElement("p");
    menuOne.classList.add("menuOne");

    const menuTwo = document.createElement("p");
    menuTwo.classList.add("menuTwo");

    const menuThree = document.createElement("p");
    menuThree.classList.add("menuThree");

    const menuFour = document.createElement("p");
    menuFour.classList.add("menuFour");

    const menuOneText = document.createTextNode("Menu Item #1");
    const menuTwoText = document.createTextNode("Menu Item #2");
    const menuThreeText = document.createTextNode("Menu Item #3");
    const menuFourText = document.createTextNode("Menu Item #4");


    const text = document.createTextNode("This is-a da pizza menu");

    bodyCopy.appendChild(text);

    menuOne.appendChild(menuOneText);
    menuTwo.appendChild(menuTwoText);
    menuThree.appendChild(menuThreeText);
    menuFour.appendChild(menuFourText);



    floatCenter.appendChild(bodyCopy);

    floatCenter.appendChild(rectOne);
    floatCenter.appendChild(menuOne);

    floatCenter.appendChild(rectTwo);
    floatCenter.appendChild(menuTwo);

    floatCenter.appendChild(rectThree);
    floatCenter.appendChild(menuThree);

    floatCenter.appendChild(rectFour);
    floatCenter.appendChild(menuFour);
    
    bodyDiv.appendChild(floatCenter);
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





    

    






