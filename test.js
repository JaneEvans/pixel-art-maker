// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

// get canvas placeholder table
const canvas  = document.getElementById('pixelCanvas');

// Declare makeGrid() function to generate the pixel canvas
function makeGrid(event) {
  // Your code goes here!
//   let cHeight, cWidth, cTable, cRow, cCell;
  
  // get canvas info inputs
  let cHeight = document.getElementById('inputHeight').value; 
  let cWidth = document.getElementById('inputWidth').value;
  
  // create a table with customized height and width
  let cTable = document.createElement('table');
  for (let i=1; i<=cHeight;i++){
    // creata a row
    let cRow = document.createElement('tr');
    // create table cells for each row
    for (let j=1; j<=cWidth;j++) {
      let cCell = document.createElement('td');    
    // cCell.setAttribute('onclick',"this.style.backgroundColor='red'");
      cRow.appendChild(cCell);
    }
    //  add the row to the end of the table
    cTable.appendChild(cRow);
  }
  
  // replace canvas placeholder table with the new-created table
  canvas.innerHTML = cTable.innerHTML;

  let cellList = document.getElementsByTagName('td');
  
  for (let cell of cellList) {
    cell.onclick = function(){
      let selectedColor = document.getElementById('colorPicker').value;
      if(!this.style.backgroundColor){
        this.style.backgroundColor = selectedColor;
      }
      else {
        this.style.backgroundColor = '';
      }
        
    }
  }

  event.preventDefault(); 
  
}

// when size is submitted by the user, call makeGrid()
let submitCanvas = document.querySelector('#sizePicker [type=submit]');
submitCanvas.addEventListener('click', makeGrid);
