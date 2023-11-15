var strInput = document.getElementById('number');
var outputParagraph = document.getElementById('output');

function createMultiplicationTable(){
    var str = strInput.value;
	var tabel="";
 
    //creating a multiplication table
for(var i = 1; i <= 10; i++) {
    const result = i * str;
    console.log(`${str} * ${i} = ${result}`);
    //trb salvate valorile recurente ,fara buacat urm iti afiseaza 
    var multiplicare =`${str} * ${i} = ${result}`;
    var tabel=tabel+"<br>"+multiplicare;
   
}
outputParagraph.innerHTML =tabel;
	
}
