var canvas = document.getElementById("canvas"); // get the id  canvas with id canvas
var context = canvas.getContext("2d");


var radius = 5; // initialisation of value ( default value of width of brush )
var dragging = false;
canvas.width = window.innerWidth/3; // width of canvas, dependent on window width
canvas.height= (9.3*window.innerHeight)/10; // height of canvas
context.lineWidth= radius*2;


               // when mouse pointer is engaged, that is left click of mouse, so, dragging true, putpoint : used to draw on the canvas
var putPoint = function(e){

if(dragging){

context.lineTo(e.clientX, e.clientY);// x and y coordinates of where to create the line to, from the top left corner of canvas.
context.stroke();//  create lines
context.beginPath();// begins a path or resets the current path

context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2); //x coor of center of circle, y coord of center of circle, radius , start angle in rad(0 deg pos),end angle in rad 

context.fill();//fills the current drawing or path, default color is black
context.beginPath();
context.moveTo(e.clientX, e.clientY);//The moveTo() method moves the path to the specified point in the canvas, without creating a line.
}
}

var engage = function(e){  // on mousedown
if(e.button==0){ //left click of mouse 
dragging = true;
 
 putPoint(e); // drawing is made
 }
 }

var disengage = function(e){  // on mouseup, from left click of mouse
if(e.button==0){
dragging = false;   
context.beginPath();
}
}

canvas.addEventListener('mousedown',engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup',disengage);



