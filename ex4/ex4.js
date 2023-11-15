

function reverseArray() {
    // Initialize an empty array
    const array = [];
    var outputParagraph=document.getElementById("output")
  
    
    // Get the input elements
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");
    const input5 = document.getElementById("input5");
  
    // Get the values of the input elements
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const value4 = input4.value;
    const value5 = input5.value;
    
    // Add the values to the array
    array.push(value1, value2, value3,value4, value5);
    
     // function
    
     

const reversedArray = [];

for(var  i = array.length - 1; i >= 0; i--) {
  
  reversedArray.push(array[i]);
}

console.log(reversedArray);
outputParagraph.innerHTML=reversedArray;
  }
