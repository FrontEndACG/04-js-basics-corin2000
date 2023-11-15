function searchElement() {
  // Initialize an empty array
  const inputArray = [];
  var outputParagraph = document.getElementById("output");

  // Get the input elements
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const input4 = document.getElementById("input4");
  const input5 = document.getElementById("input5");
  const element = document.getElementById("element");

  // Get the values of the input elements
  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  const value4 = input4.value;
  const value5 = input5.value;
  const valueElement=element.value;
  // Add the values to the array
  inputArray.push(value1, value2, value3, value4, value5);

  // function
  var pozitie =  "";

  for (var i = 0; i <= inputArray.length - 1; i++) {
    if ( Number(valueElement) === Number(inputArray[i])) {
      pozitie=i;
      break;
    }
      else { var pozitie="Elementul nu poate fi gasit" ;
    
      }
 
    }

     
  outputParagraph.innerHTML = "Elementul este pe pozitia :" + pozitie;
}
