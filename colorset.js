var swatches = document.getElementsByClassName('swatch'); // element with class name swatch is passed to var swatches

for(var i =0,n=swatches.length;i<n;i++){   // a number(n)  of swatches are included

swatches[i].addEventListener('click',setSwatch);   // on click of a color with class name swatch, setSwatch function is called, so now, the new class of the clicked color is  swatch active 

}
function setColor(color){   


context.fillStyle = color; 

context.strokeStyle = color;  

var active = document.getElementsByClassName('active')[0];  // element with class name active, is passed to var active, in drawing.html, the default chosen color is yellow

if(active){
active.className='swatch'; // if var active, classname is given as swatch

}

}

function setSwatch(e){  
//identify swatch 

var swatch = e.target;

// set color

setColor(swatch.style.backgroundColor);
//give active class

swatch.className += ' active';
}