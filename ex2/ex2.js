

function calculateAverage() {
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
    let average = 0;
    for (var i = 0; i <= inputArray.length-1; i++) {
      average = (average+ Number(inputArray[i])/inputArray.length);
    }
  
    
    outputParagraph.innerHTML = "Rezultatul este " + average;
  }