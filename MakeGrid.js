function MakeGrid() 
{ 
var elements = document.getElementsByClassName("box");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
}
var Lenght= document.getElementById("Lenght").value;
var Width= document.getElementById("Width").value;

document.getElementById("Grid").style.gridTemplateRows = "repeat("+Lenght+", 1fr)";
document.getElementById("Grid").style.gridTemplateColumns = "repeat("+Width+", 1fr)";

var CellsTotall= Width*Lenght;
for (i = 0; i < CellsTotall; i++) {
var div = document.createElement('div');
div.textContent= i; 
div.setAttribute('class', 'box');
document.getElementById('Grid').appendChild(div);


}
}