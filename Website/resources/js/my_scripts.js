var cTable = [{keyword: "for"},//This needs more fields to contain the rest of the meaningful parts of the user code.
				{keyword: "if"},
				{keyword: "else if"},
				{keyword: "else"},
				{keyword: "switch"},
				{keyword: "case"},
				{keyword: "break"},
				{keyword: "while"}];

var pTable = [{keyword: "for"},//Update these tomorrow and move over appropriate variables.
				{keyword: "if"},
				{keyword: "elif"},
				{keyword: "else"},
				{keyword: "switch"},
				{keyword: "case"},
				{keyword: "break"},
				{keyword: "while"}];



function swapBox(){
	var temp = document.getElementById("cCode").innerHTML;
	document.getElementById("cCode").innerHTML = document.getElementById("pCode").innerHTML;
	document.getElementById("pCode").innerHTML = temp;

}


function transpile(){
	var temp2 = document.getElementById("inputText").value;

	//Run parse here
	//fill rest of table here
	//var psuedoFirstWord = "while";
	for(var i = 0; i < cTable.length; i++){
		if(cTable[i].keyword == temp2){
			document.getElementById("outputText").value = temp2 + " statement";
			break;
		}
		else{
			document.getElementById("outputText").value = "Invalid statement or Error";
		}
	}
}


