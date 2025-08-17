let userPromptWay = true;
let useLoops = false;


if (userPromptWay) {
    while (true) {
        // Show input dialog
        let userInput = prompt("Please enter a number (or type 'exit' to quit):");

        // Check if the user wants to exit
        if (userInput === null || userInput.toLowerCase() === 'exit') {
            break;
        }

        if (isNaN(userInput)) {
            alert("That's not a valid number. Please try again.");
            continue;
        }

        let msg = `You entered: ${userInput}\n`;
        if (userInput % 2 === 0) {
            msg += "The number is even.";
        } else {
            msg += "The number is odd.";
        }

        console.log(msg);
        alert(msg);
    }
}

else if (useLoops) {
    for (let num = 0; num <= 100; num++) {
        if (num % 2 === 0) {
            console.log("The number (" + num + ") is even.");
        } else {
            console.log("The number (" + num + ") is odd.");
        }
    }
}

else {
    let num = 15; //change this number to test with different inputs

    if (num % 2 === 0) {
        console.log("The number (" + num + ") is even.");
    }
    else {
        console.log("The number (" + num + ") is odd.");
    }
}

