// Declare all the variables
const colorPicker = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');

// Add a click event for grid generator
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = inputHeight.value;
    const width = inputWidth.value;
    pixelCanvas.innerHTML = '';
    makeGrid(height, width);
});


// Draw a table grid and add a click event for color to cells
function makeGrid(height, width) {
    for (let x = 0; x < height; x++) {
        let row = document.createElement('tr');
        for (let y = 0; y < width; y++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
            cell.addEventListener('click', function(event) {
                cell.style.backgroundColor = colorPicker.value;
            })
        };
        pixelCanvas.appendChild(row);
    };
};
// Call the makeGrid() function
makeGrid();
