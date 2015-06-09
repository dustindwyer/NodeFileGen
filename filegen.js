var fs = require("fs"),
	readline = require("readline"),
    rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt("$$ ");
console.log("------------------------------------------");
console.log("How many files would you like to generate?");
console.log("------------------------------------------");
rl.prompt();

rl.on('line',function(line){

 	var inputNum;
 	inputNum = parseInt(line);
 	
 	if(inputNum) {
 		console.log("generating files....");
 		console.log("------------------------------------------");
 		for (var i = 0; i < line; i++) {
 			fs.writeFile("file"+(i+1),"");
 		};
 		console.log("Type \'exit\' to end program......................");
 		console.log("or, How many files would you like to generate?");
 		console.log("------------------------------------------");
 		rl.prompt();

 	} else if (line === "exit") {
 		console.log("Goodbye!");
 		console.log("------------------------------------------");
		process.exit(0); 
 	} else {
 		console.log("Input was not a number.");
 		console.log("------------------------------------------");
 		console.log("How many files would you like to generate?");
 		console.log("------------------------------------------");
		rl.prompt(); 		
 	}

});
