// Øvelser med JavaScript events, objects og DOM

console.log("Script running...");

function smile() {
    let smiley = document.getElementById("smiley"); 
    smiley.appendChild(document.createTextNode("🎃"));
    smiley.style.fontSize = "100px";
    smiley.style.margin = 0;
}