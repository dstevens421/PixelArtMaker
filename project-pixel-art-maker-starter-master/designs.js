// Select color input
var color = document.getElementById("colorPicker");

// Select size input
var canvas = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
    for(var n = 0; n<height.value; n++){
        let row = canvas.insertRow(n);
        for(var m = 0; m<width.value; m++){
            let cell = row.insertCell(m);
            cell.addEventListener('click', paintCell);
        }
    }

}

//Clear the Grid
function clearGrid(){
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
}

//Color the Cell
function paintCell(){
    this.setAttribute("style", `background-color: ${color.value}`);
}