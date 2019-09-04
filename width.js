var setRadius = function(newRadius){ 

if(newRadius<minRad)             
                            
 newRadius = minRad;      
 
 else if(newRadius>maxRad)
 
  newRadius = maxRad;
  
  radius = newRadius;
  
  context.lineWidth = radius*2;
  
  radSpan.innerHTML = radius; 
  
  }
  
  var minRad = 0, // min radius is set to zero
  
      maxRad = 50,  //max radius is set to 50
	  
	  defaultRad=10, // default value, appearing on top left corner of page.
	  interval = 1, // increment or decrement value, value by which width can increase or decrease
	  radSpan=document.getElementById('radval'), //radius value
	  decRad=document.getElementById('decrad'),   // derived from element in html file, with id decrad
	  incRad=document.getElementById('incrad');   // derived from element in html file, with id incrad
	  
	  decRad.addEventListener('click',function(){  
	  setRadius(radius-interval)    // new radius is radius - interval
	  }) ; 
	  
	   incRad.addEventListener('click',function(){
	  setRadius(radius+interval)  // new radius is radius + interval
	  }) ;
	  
	  
	  setRadius(defaultRad); // set as 10 