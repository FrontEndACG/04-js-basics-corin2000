

function calculateMaxAndMin() {
    // Initialize an empty array
    const inputArray = [];
    var outputParagraph=document.getElementById("output")
  
    
    // Get the input elements
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
  
    // Get the values of the input elements
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    
    // Add the values to the array
    inputArray.push(value1, value2, value3);
    
     // function
    var max=Number(inputArray[0]);
    for (var i = 1; i <= inputArray.length-1; i++) {
      if (Number(inputArray[i])>max){
        max=Number(inputArray[i]);
        
    }
}
    


    var min=Number(inputArray[0]);
    for (var j = 1; j <= inputArray.length-1; j++) {
      if (Number(inputArray[j])<min) {
        min=Number(inputArray[j]);
      }
      
      
  }
  outputParagraph.innerHTML = "Rezultatul maxim este  "  +max +"<br>"+ " " + "Rezultatul minim este" + min; 

}