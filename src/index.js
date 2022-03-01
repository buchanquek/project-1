function update(pic){
    document.getElementById("image").style.backgroundImage = "url(" + pic.src + ")";
    document.getElementById("image").innerHTML = pic.alt;
    document.getElementById("image").style.color = "white";
}

function undo(){
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here";
    document.getElementById("image").style.color = "black";
}