var cTable = [{keyword: "for", nesFields: "3"},
				{keyword: "while"}];



var typeCast = [{keyword: "int"},{keyword: "long"},{keyword: "double"},{keyword: "string"},{keyword: "char"},{keyword: "float"}];

var letter = new RegExp(/^[A-Za-z]+$/);

var number = new RegExp(/^[0-9]+$/);
var word1 = "or";
var word2 = "and";
var alphOp = new RegExp('\\b'+ word1 + word2 + '\\b');

var operator = new RegExp(/^[<>=]+$/);

var logic = new RegExp(/^[|&]+$/);

//var specialChar = new RegExp(/^[+-*/^]+$/);

var equal = new RegExp(/^[=]+$/);

var alphaNum = new RegExp(/^[A-Za-z0-9]+$/);

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "user",
	database: "functionDB"
});
con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");
	// con.query("SELECT * FROM cFunctions", function(err, result, fields){
	// if(err) throw err;
	// console.log(result);
	//})
});

// function swapBox(){
// 	var temp = document.getElementById("iCode").innerHTML;
// 	document.getElementById("iCode").innerHTML = document.getElementById("oCode").innerHTML;
// 	document.getElementById("oCode").innerHTML = temp;

// }

function makeQuery(){
	var name;
	var id;
	$.ajax ({
		url: 'api.php',
		data: "",

		dataType: 'json',
		success: function(data){
			 id = data[0];
			name = data[1];

		}
	});
}


//Creating list stuff for user input






function parse(){

	class Node {
		constructor(value, next, prev) {
			this.value = value;
			this.next = next;
			this.prev = prev;
		}
	}
	class LinkedList {
		constructor() {
			this.head = null;
			this.tail = null;
			
		}
		addToHead(value) {
			const newNode = new Node(value, this.head, null);
			if (this.head)
				this.head.prev = newNode;
			else
				this.tail = newNode;
			this.head = newNode;
		}
		addToTail(value) {
			const newNode = new Node(value, null, this.tail);
			if (this.tail)
				this.tail.next = newNode;
			else
				this.head = newNode;
			this.tail = newNode;
		}
	}

	const list = new LinkedList();
	var input = document.getElementById("inputText").value;
	var counter = 0;
	//document.getElementById("outputText").value = document.getElementById("inputText").value;
	for(var i = 0; i < input.length; i++){
		var tempWord = "";
		while(input[i] != null && input[i].match(letter) ){
			
			tempWord += input[i];
			i++;
		}
		//document.getElementById("outputText").value = tempWord;
		if(tempWord != ""){
			//document.getElementById("outputText").value = tempWord;
			break;
		}
	}

	transpile(tempWord);
	// con.connect(function(err){
	// 	if(err) throw err;
	// 	con.query("SELECT keyword FROM cFunctions", function(err, result, fields){
	// 		if(err) throw err;
	// 		tempQ = console.log(result[1]);
	// 	});
	// });
	
	//document.getElementById("iCode").innerHTML = input;
}

function transpile(word){
	//document.getElementById("outputText").value = "";
	//var temp2 = document.getElementById("inputText").value;
	//document.getElementById("outputText").value = word;
	for(var i = 0; i < cTable.length; i++){
		switch(word){
			case "for":
				forSwitch();
				break;
			case "if":
				ifSwitch();
				break;
			case "while":
				whileSwitch();
				break;
		}
	}
}
var pTable = [{keyword: "for", nesFields: "2"},
				{keyword: "if"},
				{keyword: "while"}];
function forSwitch(){
	var lang = document.getElementById("iCode").innerHTML;
	var variable1 = ""; // user variable 1 name
	var startVal = ""; // starting value of variable 1
	var opVar = "";
	var limit = "";
	var increment = "";
	var i = 0;
	var checker = 0; // boolean for if variable 1 has a preset value
	var userIn = document.getElementById("inputText").value;

	if(lang == "INSERT C CODE"){
		//document.getElementById("outputText").value = "Check 1";
			while(userIn[i] != "("){
				i++
				if(i-1 == userIn.length){
					document.getElementById("outputText").value = "Invalid";
					return;
					break;
				}
			}
			while(userIn[i] != null && !userIn[i].match(letter)){
				i++; //Moving through whitespace
			}
			while(userIn[i] != null && userIn[i].match(letter)){					
				variable1 += userIn[i]; //Collecting first variable or type cast
				i++;
			}
			//document.getElementById("outputText").value = variable1;
			for(var j = 0; j < typeCast.length; j++){ //Dealing with type cast (we don't need it)					
				if(variable1 == typeCast[j].keyword){
					variable1 = "";	
					while(userIn[i] != null && !userIn[i].match(letter)){
						i++;
					}
					while(userIn[i] != null && userIn[i].match(letter)){
						variable1 += userIn[i];
						i++;
					}
					break;
				}
			}
			//document.getElementById("outputText").value = variable1;
			

			//checker = 0 for no start value
			//checker = 1 for starting value
			while(1){
				if(userIn[i] != null && userIn[i].match(equal)){
					checker = 1;
					//document.getElementById("outputText").value = checker;
				}
				if(userIn[i] != null && userIn[i].match(number) && checker == 1){
					while(userIn[i] != null && userIn[i].match(number)){
						startVal += userIn[i];
						i++;
						//document.getElementById("outputText").value = startVal;
					}
					checker = 0;
					break;
				}
				if(userIn[i] == ";"){
					break;
				}
				i++;
			}
			while(1){
				if(userIn[i] != null && userIn[i].match(operator)){
					opVar += userIn[i];
					i++;
					if(userIn[i] != null && userIn[i].match(operator)){
						opVar += userIn[i];
						i++;
					}
					while(userIn[i] != ";"){
						limit += userIn[i];
						i++;
					}
					i++;
					//document.getElementById("outputText").value = "i";
					break;
				}
				i++;
			}
			while(userIn[i] != ")"){
				increment += userIn[i];
				i++;
		   }
		   	//document.getElementById("outputText").value = variable1 + startVal + opVar+ limit + increment;

		document.getElementById("outputText").value = "for " + variable1;
		if(startVal != ""){
			if(limit > startVal){
				document.getElementById("outputText").value += " in range (" + limit + ", " + startVal + "):";
			}
			else{
				document.getElementById("outputText").value += " in range (" + startVal + "," + limit + "):";
			}
		}
		else{
			document.getElementById("outputText").value += "in range (" + limit + "):";
		}

		document.getElementById("outputText").value += "       " + increment + " ...";

	}
	else{
		while(userIn[i] != null && !userIn[i].match(letter)){
			i++;
		}
		while(userIn[i] != null && userIn[i].match(letter)){
			i++;
		}
		while(userIn[i] != null && !userIn[i].match(letter)){
			i++;
		}
		while(userIn[i] != null && userIn[i].match(letter)){
			variable1 += userIn[i]; 
			i++;
		}
		while(userIn[i] != "("){
			i++;
			if(i+1 > userIn.length){
				document.getElementById("outputText").value = "Invalid";
				return;
			}
		}
		
		
		while(userIn[i] != null && !userIn[i].match(alphaNum)){
			i++;
		}
		while(userIn[i] != null && userIn[i].match(alphaNum)){
			limit += userIn[i];
			i++;
		}
		while(1){
			if(userIn[i] == ","){
				startVal = limit;
				limit = "";
				while(userIn[i] != null && !userIn[i].match(alphaNum)){
					i++;
				}
				while(userIn[i] != ")"){
					limit += userIn[i];
					i++;
				}
				break;
			}
			else if(userIn[i] == ")"){
				break;
			}
			i++;
		}
		document.getElementById("outputText").value = "for( " + variable1;
		if(startVal != ""){
			document.getElementById("outputText").value += " = " + startVal + "; " + variable1 + " <= " + limit + " ; " + variable1 + "++){ ... }";
		}
		else{
			document.getElementById("outputText").value += "; " + variable1 + " <= " + limit + "; " + variable1 + "++) {...}"; 
		}
	}

}



function ifSwitch(){
	var lang = document.getElementById("iCode").innerHTML;
	var i = 0;
	var userIn = document.getElementById("inputText").value;
	var variable1 = "";
	var opVar = "";
	var varLim = "";
	var extra1 = "";
	var el1 = "";
	var extra2 = "";
	var el2 = "";
	if(lang == "INSERT C CODE"){
		while(userIn[i] != "("){
			if(i+1 == userIn.length){
				document.getElementById("outputText").value = "Invalid";
				return;
			}
			i++;
		}
		while(userIn[i] != null && !userIn[i].match(alphaNum)){
			i++;
		}
		while(userIn[i] != null && userIn[i].match(alphaNum)){
			variable1 += userIn[i];
			i++;
		}
		while(userIn[i] != null && !userIn[i].match(alphaNum)){
			if(userIn[i] != null && userIn[i].match(operator)){
				opVar += userIn[i];
				i++;

				if(userIn[i] != null && userIn[i].match(operator)){
					opVar += userIn[i];
					i++;
				}
			}
			if(userIn[i] == ")"){
				break;
			}
			i++;
		}
		while(userIn[i] != null && userIn[i].match(alphaNum)){ 
			varLim += userIn[i];
			i++;
		}
		 //document.getElementById("outputText").value = "Here";
		while(userIn[i] != null && !userIn[i].match(alphaNum)){
			if(userIn[i] == ")"){
				break;
			}
			else if(userIn[i] != null && userIn[i].match(logic)){
				el1 = userIn[i];
				i+=2;
				break;
			}
		 	i++;
		}
		//document.getElementById("outputText").value = "extra1";

		while(userIn[i] != null && !userIn[i].match(alphaNum)){
			i++;
			
		}
		//document.getElementById("outputText").value = "extra1";
		while(userIn[i] != null && !userIn[i].match(logic)){
			if(userIn[i] == ")"){
				break;
			}
			extra1 += userIn[i];
			i++;
		}
		//document.getElementById("outputText").value = extra1;
		while(userIn[i] !=null && (!userIn[i].match(logic) || !userIn[i].match(alphaNum))){
			if(userIn[i] == ")"){
				break;
			}
			else if(userIn[i] != null && userIn[i].match(logic)){
				el2 = userIn[i];
				i+=2;
				break;
			}
			i++;
		}
		//document.getElementById("outputText").value = el2;
		while(userIn[i] != null && !userIn[i].match(logic)){
			if(userIn[i] == ")"){
				break;
			}
			extra2 += userIn[i];
			i++;
		}
		if(userIn[i] != null && userIn[i].match(logic)){
			document.getElementById("outputText").value = "Too many operators, we quit";
			return;
		}
		if(el1 == "&"){
			el1 = "and";
		}
		else if(el1 == "|"){
			el1 = "or";
		}
		if(el2 == "&"){
			el2 = "and";
		}
		else if(el2 == "|"){
			el2 = "or";
		}
		document.getElementById("outputText").value = "if " + variable1 +  " " + opVar + " " + varLim + " " + el1 + " " + extra1 + el2 + extra2 + ":   ...";
	
	}
	else{
		while(1){
			while(userIn[i] != null && !userIn[i].match(alphaNum)){
				i++;
			}
			while(userIn[i] != null && userIn[i].match(alphaNum)){
				i++;
			}
			while(userIn[i] != null && !userIn[i].match(alphaNum)){
				i++;
			}//Start at first variable
			while(userIn[i] != null){
				if(!userIn[i+2] == "d" || !userIn[i+1] == "r"){
					break;
				}
				if(userIn == ":"){
					break;
				}
				variable1 += userIn[i]; 
				i++;
			}
			
			if(userIn == ":"){
				break;
			}
			while(userIn[i] != null && userIn[i].match(alphaNum)){
				el1 += user[i];
				i++;
			}
			while(userIn[i] != null && !userIn[i].match(alphaNum)){
				i++;
			}
			while(userIn[i] != null){
				if(!userIn[i+2] == "d" || !userIn[i+1] == "r"){
					break;
				}
				if(userIn == ":"){
					break;
				}
				extra1 += userIn[i]; 
				i++;
			}
			if(userIn == ":"){
				break;
			}
			while(userIn[i] != null && userIn[i].match(alphaNum)){
				el2 += user[i];
				i++;
			}
			while(userIn[i] != null && !userIn[i].match(alphaNum)){
				i++;
			}
			while(userIn[i] != null){
				if(userIn[i+2] == "d" && userIn[i+1] == "r"){
					break;
				}
				if(userIn[i] == ":"){
					break;
				}
				extra2 += userIn[i]; 
				i++;
			}
			if(el1 == "and"){
				el1 = "&&";
			}
			else if(el1 == "or"){
				el1 = "||";
			}
			if(el2 == "and"){
				el2 = "&&";
			}
			else if(el2 == "or"){
				el2 = "||";
			}
			if(userIn[i-1] == ":"){
				break;
			}
			document.getElementById("outputText").value = "Too many operators, we quit";
			return;
		}
		
		//document.getElementById("outputText").value = "if( " + variable1 + " " + el1 + extra1 + el2 + extra2 + "){...}";
	}
	
}
function whileSwitch(){

}



function myFunction() {
	var x = document.getElementById("iCode");
	var y = document.getElementById("oCode");
	if (x.innerHTML === "INSERT C CODE") {
	  x.innerHTML = "INSERT PYTHON";
	  y.innerHTML = "C CODE OUTPUT";
	} else {
	  x.innerHTML = "INSERT C CODE";
	  y.innerHTML = "PYTHON OUTPUT";
	}
  }
