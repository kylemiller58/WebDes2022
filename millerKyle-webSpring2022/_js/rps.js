console.log("test");

// user interface discussion
    /* clicking on buttons
    keyboard 
    image on screen
    mouse
    touch
    */
        // multi line comment
let choices = ["rock", "paper", "scissors"]
    // allows me to recall these names later to create a function with them
let userChoice;

console.log("this thing works!");
let cpu = (Math.floor(Math.random()*choices.length));
    // creates a random result, specifically numbers
console.log ("the cpu choice value was" + cpu);
    // the + allows me to put a message before the number occurs
    // what if the function could draw any image

function Input() {
    let userChoice = "rock";
    console.log("the user chose rock");
        // what the user sees as a result of their choice
    playRps();
}

function Input2(){
    let userChoice = "paper";
    console.log("the user chose paper");
    playRps();
}

function Input3() {
    let userChoice="scissors";
    console.log("the user chose scissors");
    playRps();
}
// let c1="rock"
// let c2="paper"
// let c3="scissors"
    // allows me to assign a name to the 1,2,3 results

function playRps(){
        console.log ("the computer chose...:" + choices[cpu]);
        if (cpu==0) {
            // createImage();
                // allows js to put a rock image in the html document
            console.log ("computer chose rock...");
            const para=document.createElement("p")
            para.innerText='computer chose rock...';
            document.body.appendChild(para);
            endGame();
    }
        else if (cpu==1) {
            console.log("the computer chose paper");
            const para=document.createElement("p")
            para.innerText='computer chose paper...';
            document.body.appendChild(para);
            endGame();
    }
        else if (cpu==2) {
            console.log('the computer chose scissors');
            const para=document.createElement("p")
            para.innerText='computer chose scissors...';
            document.body.appendChild(para);
            endGame();
    }
    // these allow me to create a statement for the game result. This is what makes the game function and assigns a statement to 1,2,3
}
// results
function endGame(){
    if (cpu == 0 && userChoice == "paper") {
        console.log ("the user wins");
        const para = document.createElement("p");
        para.innerText = "the user beats rock with paper";
        document.body.appendChild(para);
    }
    else if (cpu == 0 && userChoice == "scissors") {
        console.log ("the computer wins");
        const para = document.createElement("p");
        para.innerText = "the computer beats scissors with rock";
        document.body.appendChild(para);
    }
    else if (cpu == 1 && userChoice == "scissors") {
        console.log ("the user wins");
        const para = document.createElement("p");
        para.innerText = "the user beats paper with scissors";
        document.body.appendChild(para);
    }
    else if (cpu == 1 && userChoice == "rock") {
        console.log ("the computer wins");
        const para = document.createElement("p");
        para.innerText = "the computer beats rock with paper";
        document.body.appendChild(para);
    }
    else if (cpu == 2 && userChoice == "rock") {
        console.log ("the computer wins");
        const para = document.createElement("p");
        para.innerText = "the user beats paper with scissors";
        document.body.appendChild(para);
    }
    else if (cpu == 2 && userChoice == "paper") {
        console.log ("the computer wins");
        const para = document.createElement("p");
        para.innerText = "the computer beats paper with scissors";
        document.body.appendChild(para);
    }
    else if (cpu == userChoice) {
        console.log ("tie");
        const para = document.createElement("p");
        para.innerText = "this results in a tie";
        document.body.appendChild(para);
    }
}

// allows me to add an image when user selects
// function createImage(){
    // var x = document.createElement("IMG");
    // x.setAttribute("src", "_images/rock.jpg");
    // x.setAttribute("width", "304");
    // x.setAttribute("heigh", "228");
    // x.setAttribute("alt", "The Rock");
    // document.body.appendChild(x);
// }

// need to figure out how to create a new computer result without refreshing
// need to figure out why endgame won't work, why can't I see results