var strInput = document.getElementById('number');
var outputParagraph = document.getElementById('output');

function verificaNrPrime(){
    var n = Number(strInput.value);
     var salvat="";
	
    for (var numar=1;numar<n;numar++) {
		y = 1; // puteai scrie y=88 orice ;y=1 ins ca consideram ca e prim;y=0 e neprim;
		for ( var j=2;j<=numar/2;j++) //j=2 pt nu imp la 1 
			if (numar % j == 0) {
				y = 0; //y=0=neprim;
			}
		if (y == 1)	//daca nr e prim ; nu se pune ";" dupa el e o rel de atribuire
        salvat=salvat + "<br>" + numar;
			
	}

    outputParagraph.innerHTML=salvat ;
}
