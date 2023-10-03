// Øvelser med JavaScript events, objects og DOM

console.log("Script running...");

/* Opsamling af hvad I lærte */  

// let const var
// comparaison operators == === != !== > < >= <=
// null undefined NaN
// objekter 
// loops og if sætninger
// arrays
// functions

/* Gennemgang af Visual Studio Code */  
// Installer Copilot evt LiveServer 


/* Events */  

/* Objects */  

/* DOM */

document.getElementById("smileBtn").addEventListener("dblclick", smile);
document.querySelector("h1").addEventListener("mouseover", smile);


function smile() {
    let smiley = document.getElementById("smiley"); 
    smiley.appendChild(document.createTextNode("🎃"));
    smiley.style.fontSize = "100px";
    smiley.style.margin = 0;
}

// skud ud til bekir og daniel og marcus og nicklas