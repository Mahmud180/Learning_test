//var ques1 = prompt("What is your age?");
//var ques2 = prompt("What is your best game?");

//console.log("you are " + ques1 + " years old");
//console.log("your best game is " + ques2);

console.log("Hello, Welcome to our store");
console.log("We offer games for 3$ retro and console for 60$ each");

var q1 = prompt("How many gmaes do you want? ");
var q2 = prompt("How many colsole would you want? ");
var q3 = prompt("Tip any? ");

q1 = parseInt(q1);
q2 = parseInt(q2);
q3 = parseInt(q3);

c1 = q1 * 3;
c2 = q2 * 60;

var taxes = (c1+c2)*0.05;

var total = c1+c2+q3+taxes;

console.log("Your total value will be "+total+"$");