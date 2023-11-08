// Iteration 1: Names and Input
const hacker1 = "Santiago R"
const hacker2 = "Karina C"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Iteration 3: Loops

//Long Way

let spacedDriver ="";
for (let i = 0, i < hacker1.length; i++) {
    spacedDriver += hacker1[i].toUpperCase() + " ";
}
console.log("For loop method: ", spacedDriver)

let reversed = "";
for (let i = hacker1.length - 1; i >= 0 ; i--) {
  reversed += hacker1[i]
}
console.log("For loop method: ", reversed)


//Short Way

const spacedDriver = hacker1.split('').join(' ').toUpperCase();
console.log ("String method: ", spacedDriver);

const reversedNavigator = hacker2.split('').reverse().join('');
console.log ("String method: ", reversedNavigator);

//Part 3.3
//Option 1
let order = hacker1.localeCompare(hacker2)

if (order === 1) {
  console.log("The drivers name goes first")
} else if (order === -1) {
  console.log("Yo, the navigator goes first, definitely")
} else {
  console.log("Wow, you both have the same name?")
}

//Option 2
if (hacker1 < hacker2) {
    console.log ("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log ("Yo, the navigator goes first, definitely.");
} else {
    console.log ("What?! You both have the same name?";)
}