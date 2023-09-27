//removing the main using JavaScript and DOM
main.remove();

//Adding newHeader variable
let newHeader = document.createElement("h1");

//giving the newHeader id
newHeader.id = "victory";

//newHeader content 
newHeader.textContent = "YOUR-NAME is the champion";

//appending the newHeader to the body   
let parentElement = document.body;

parentElement.appendChild(newHeader);
// Write your code here!