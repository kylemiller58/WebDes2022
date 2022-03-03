let myName = "Kyle"
console.log(myName);
 
// this function logs a line of text in the browser
 console.log("Hello World!");
        // alert("welcome to the most obnoxious function in javascript...");
 
function init(){
    changeHeading();
    greeting();
}

 function changeHeading(string) {
    //  a function is a block of code that does stuff
    let myHeading=document.querySelector('h1');
    myHeading=document.querySelector ('h2')
    myHeading.textContent='Hello World!';
 }

 let greetingPrefix = "Hello there, ";

 function greeting(){
    // let myParagraph = document.querySelector('p')
    // myParagraph.textContent=myName
    const para = document.createElement("p");
    para.innerText = greetingPrefix + myName;
    document.body.appendChild(para);

 }

 

