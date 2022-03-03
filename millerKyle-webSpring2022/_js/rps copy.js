// let user = prompt("choose: rock, paper, or scissors");
// creates a prompting textbox to type an input as the webpage loads
// let cpu = choices[2];
// 2 is used because the computer counts 0,1,2
let user;
let score = 0;
        // function userRock(){
        //     user = "rock";
        // }
        // function userPaper() {
        //     user = "paper";
        // }
        // function userScissors() {
        //     user = "scissors";
        // }
            // these reference to the buttons in the html document
let choices = ["rock", "paper", "scissors"];

function userChoice (choice) {
    user = choice;
    compare();
        // performs the function written for compare below
}

function randNum(things){
    return Math.floor(Math.random()*things.length)
}
    // simplifies the avove functions into one
// function getInputValue() {
//     let inputVal = document.getElementById("inputID").value
//     alert(user);
//     return user;
// }
// function addThings(x, y) {
//     return (x + y)
// }
// console.log(addThings(2, 2));

function cpuChoice(){
return choices [randNum(choices)];
// random function
}
console.log(cpuChoice());

// console.log("the user choice is " + user);
// console.log("the randnum is " + randnum)
// console.log("the computer choice is " + cpu);
    
function drawImg(pic, width, height, alt, id) {
    var x = document.createElement("IMG");
    x.setAttribute("src", pic);
    x.setAttribute("width", width);
    x.setAttribute("height", height);
    x.setAttribute("alt", alt);
    document.body.appendChild(x);
    document.getElementById(id).appendChild(x);
}

function removeChild(id){
    let identity = document.getElementById(id);
    while (identity.firstChild){
        identity.removeChild(identity.firstChild);
    }
}

function compare(){
// these are the computer winning situations
let cpu = cpuChoice();

// these arguments allow images to be drawn based on computer/user selection
if (user == "rock"){
drawImg("_img/rock.jpg", "200", "200", "rock", "player");
}
if (user == "paper"){
drawImg("_img/paper.jpg", "200", "200", "paper", "player");
}
if (user == "scissors"){
drawImg("_img/scissors.jpg", "200", "200", "scissors", "player");
}
if (cpu == "rock"){
drawImg("_img/rock.jpg", "200", "200", "rock", "cpu");
}
if (cpu == "paper"){
drawImg("_img/paper.jpg", "200", "200", "paper", "cpu");
}
if (cpu == "scissors"){
drawImg("_img/scissors.jpg", "200", "200", "scissors", "cpu");
}

    if (user == "rock" && cpu == "scissors" ||
        user == "paper" && cpu == "rock" ||
    // || means or
        user == "scissors" && cpu == "paper") {
    // curly braces indicate if this statement is true, do what is in the braces
    console.log("user wins the game");
    // adds a resulting statement
    // return "user wins";
    // if those conditions are met, the computer stops, and returns this value
    score = score + 1;
    }
    // user wins situations are above
    else if (cpu == "rock" && user == "scissors" ||
        cpu == "paper" && user == "rock" ||
        // || means or
        cpu == "scissors" && user == "paper") {
        // curly braces indicate if this statement is true, do what is in the braces
    console.log("computer wins the game");
}
    else if (cpu == user) {
    console.log("tie game");
        // i would do the same thing as the if function here with the else if function to create the losing scenarios
    }
}