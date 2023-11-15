var strInput = document.getElementById('string');
var outputParagraph = document.getElementById('output');

function reverseString() {
	var str = strInput.value;
	
	// obtinem un vector de caractere din string
	var v = str.split("");

	// inversam vectorul
	for (var i = 0; i < str.length/2; i++)  
	{      // temp variable use to temporary hold the string  unde temp=a;a=b;b=temp; dar tu poti scrie ca b =ultima val e de fapt length-1-i;la inceput i=o=>length[n]=n-1;

	    var temp = v[i];  
	    v[i] = v[str.length - i - 1];  
	    v[str.length - i - 1] = temp;  
		
		 console.log("pentru pozitia "+i+" avem caracterul v[i]= "+v[i]+"\n");
// "\n" inseamna sfarsit de linie, adica urmatorul log o sa apara pe linia urmatoare
	} 
	
	// afisam string-ul obtinut din vectorul de caractere; v.join("") ne da un string
	outputParagraph.innerHTML=v.join(""); 
}
 
// //Function reversingString(str) {
        
//     // empty string
//     let aNewString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         aNewString += str[i];
//     }
//     return aNewString;
// }
        
// // take input from the user
// const string = prompt('Enter a string: ');
        
// const result = reversingString(string);
// console.log(result);
