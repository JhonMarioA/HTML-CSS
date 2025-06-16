
// --------------------------------------------------------------------------------
console.log("=================================")
console.log("        ICE CREAM PARLOR         ")
console.log("---------------------------------")
console.log("          Order Details          ")
console.log("---------------------------------")
console.log("Item          Quantity     Price")
console.log("---------------------------------")
console.log("Ice cream gd       2        6.000")
console.log("Ice cream po       1        4.000")
console.log("---------------------------------")
console.log("Total:                     16.000")
console.log("=================================")



// --------------------------------------------------------------------------------
let mass = 96
let height = 1.85
bmi = mass/height ** 2

console.log(bmi)



// --------------------------------------------------------------------------------
const Fahrenheit = 69
celsius = (Fahrenheit - 32)/1.8

console.log(celsius)



// --------------------------------------------------------------------------------
let earthWeight = 210 // weight on pounds

let marsWeight = earthWeight * 0.38

console.log("Your weight on Earth is ", earthWeight, " pounds.")
console.log("Your weight on Mars is ", marsWeight, " pounds.")



// --------------------------------------------------------------------------------
let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}


// --------------------------------------------------------------------------------
let grade = 93;

if (grade > 90) {
  console.log("A");
} else if (grade > 80) {
  console.log("B");
} else if (grade > 70) {
  console.log("C");
} else if (grade > 60) {
  console.log("D");
} else {
  console.log("F");
}


// --------------------------------------------------------------------------------

console.log(Math.random())
console.log(Math.floor(Math.random() * 10));


// --------------------------------------------------------------------------------

let question = "Is Messi better than Cristiano?"
console.log(" ")
console.log("Is Messi better than Cristiano?")

number = Math.floor(Math.random() * 9) + 1;

if(number === 1){
   console.log("Yes - definitely.")
} else if(number === 2){
   console.log("It is decidedly so.")
} else if(number === 3){
   console.log("Without a doubt")
} else if(number === 4){
   console.log("Reply hazy, try again.")
} else if(number === 5){
   console.log("Ask again later.")
} else if(number === 6){
   console.log("Better not tell you now.")
}  else if(number === 7){
   console.log("My sources say no.")
} else if(number === 8){
   console.log("Outlook not so good.")
} else if(number === 9){
   console.log("Very doubtful.")
} 


// --------------------------------------------------------------------------------

const aqi = 45;

if (aqi >= 0 && aqi <= 50) {
  console.log("Good");
} else if (aqi >= 51 && aqi <= 100) {
  console.log("Moderate");
} else if (aqi >= 101 && aqi <= 150) {
  console.log("Unhealthy (Sensitive Groups)");
} else if (aqi >= 151 && aqi <= 200) {
  console.log("Unhealthy");
} else if (aqi >= 201 && aqi <= 300) {
  console.log("Very Unhealthy");
} else {
  console.log("Hazardous");
}

// -------------------------------------------------------------------------------- (Tener en cuenta para proj)


let player = 0 // 0: rock, 1: paper, 2: scissors
let computer = Math.floor(Math.random() * 3) // 0, 1 o 2
let winner; // true: player, false: computer



if(player === computer){
  winner = null // empate
} else if(
  (player === 0 && computer === 2) ||
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1)
){
  winner = true
} else {
  winner = false
}


const choices = ["Rock", "Paper", "Scissors"]
console.log("Player picked: " + choices[player])
console.log("Computer picked: " + choices[computer])
console.log(" ")

if(winner === true){
    console.log("The player won!")
} else if(winner === false){
    console.log("The computer won!")
} else {
    console.log("It's a tie!")
}


