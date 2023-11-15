var strInput = document.getElementById('string');
var outputParagraph = document.getElementById('output');

function eliminateSpace() {
	var str = strInput.value;
	str=str.replace(/\s/g, '');
	
		
	outputParagraph.innerHTML = str ;
}