var strInput = document.getElementById('string');
var outputParagraph = document.getElementById('output');

function countingUpper() {
    var cuvant = strInput.value;
   
    

        var nrLitereMari=0;
       
         

        for ( i = 0; i <= cuvant.length-1; i++ ) {
          if (cuvant[i].toUpperCase() === cuvant[i] && cuvant[i]!=" ")
        {
            nrLitereMari=Number(nrLitereMari)+1;
            
          }
        }
        outputParagraph.innerHTML =  "Exista"+ nrLitereMari + "majuscule" ;
    }

	
	
	
