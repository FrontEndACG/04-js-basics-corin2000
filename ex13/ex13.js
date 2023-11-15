var strInput = document.getElementById('number');
var outputParagraph = document.getElementById('output');


    
	
    function serieFibonacci() {
        var n =Number(strInput.value);
        
        // x is representing the first term,
        // y is representing the second term, and
        // z is representing the sum of x and y.
        var x = 0;
        var y = 1;
        var z;
        var i = 2;
        var answer="";
         var answer= 0 +"<br>"+ 1 +"<br>";
        while (i < n) {
          z = x + y;
          x = y;
          y = z;
      
          i = i + 1;
         
          answer=answer+`${z}`+"<br>";
         
         
         
        }
        outputParagraph.innerHTML= answer;
        console.log("Fibonacci Series (first"+ n +" numbers):"+ answer);
      }
    
      
     
  

   
