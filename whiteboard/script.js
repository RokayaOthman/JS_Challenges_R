
  /*Topics :
      mouseevent : offsetX property 
      stroke() applies the current style properties to the path that has been constructed since the last beginPath() call
          
  */

const canvas = document.getElementById('draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;  

const context = canvas.getContext('2d'); // a canvas can only have one rendering context type at a time
context.lineWidth = 5;
context.lineCap = 'round';

let isDrawing = false;

function startPosition(e){ // mousedown
  isDrawing = true;
  draw(e);
}

function endPosition(e){ // mouseup
 isDrawing = false;
 context.beginPath();
}

let hue = 0;
function draw(e)
{
  if(!isDrawing) return;
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue = (hue + 1) % 360; // smoothly loop colors
   context.lineTo(x, y);
  context.stroke();
  context.beginPath();  
  context.moveTo(x,y);
 
  
  // changing the color
 // use HSL color space for smooth rainbow effect
  
}

canvas
	.addEventListener('mousedown', startPosition);
canvas
	.addEventListener('mouseup', endPosition);
canvas
	.addEventListener('mousemove', draw);

/* Dotted : 
 context.beginPath();  
  context.moveTo(x,y);
  context.lineTo(x, y);
  context.stroke(); */

