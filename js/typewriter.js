// JavaScript Document

var i = 0;
var txt = 'Hello, I\'m Omar Nasr.'; // Text to show
var speed = 100; // Speed of the typewriting effect
var ii = 0;
var txt1 = "I\'m a front-end developer."; // Text to show
var speed1 = 50; // Speed of the typewriting effect

function typeWriter() {
  if (i < txt.length) { // If var i is less that the length of the text. Ex. Omar=4. if i=0 is less than 4 then do the below
    document.getElementById("first").innerHTML += txt.charAt(i); // Get element with ID first and get the inner HTML and add to it the value of var txt character of i. Example if i=1, then only 'H' will be added to ID first. if i=2 then 'He' will be added and so on. 
    i++; // Increase the var i by 1. if i=0 it will become i=1.
    setTimeout(typeWriter, speed); // To apply the speed to the above.
  }else if (ii < txt1.length) { // if the above is not met, then it will start the below. In this case, once the above text is written, afterward the below text will be written.
    document.getElementById("second").innerHTML += txt1.charAt(ii);
    ii++;
    setTimeout(typeWriter, speed1);
    }
}
