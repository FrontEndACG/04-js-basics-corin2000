var strInput = document.getElementById('string');
const substring = document.getElementById("substring");
var outputParagraph = document.getElementById('output');

var str = strInput.value;
const valueSubstring=substring.value;


function checkSubstring() {
for (var i = 0; i <= str.length - 1; i++) {
    if ( valueSubstring === str[i]) {
      
	}
    console.log(str);
	outputParagraph.innerHTML ='The string contains the substring' +"valueSubstring";
}
}