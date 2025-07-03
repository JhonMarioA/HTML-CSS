
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

// ---------------------------------------------------------------- Bucle While

const luckyNumber = 7
let guess = Math.floor(Math.random() * 10) + 1;


while(luckyNumber != guess){
  console.log("Nope, it isn´t " + guess)
  guess = Math.floor(Math.random() * 10) + 1
}

console.log("My lucky number is " + luckyNumber)


// ---------------------------------------------------------------- Bucle for

for(let i=0; i <= 100; i++){
  console.log("I Must Not Tell Lies")
}

// ---------------------------------------------------------------- Continue, Break


for(let i=1; i <= 50; i++){

   if(i % 2 != 0){
     continue
   }

   if(i === 42){
     break
   }

   console.log(i)
}

// ----------------------------------------------------------------- Binary Number

const myNumber = 30;
let binary = "";

// With for loop
for (let i = myNumber; i >= 1 ; i = Math.floor(i/2)) {
  if (i % 2 == 0) {
    binary = "0" + binary;
  } else {
    binary = "1" + binary;
  }
}
console.log('With for loop: ' + binary);


// ----------------------------------------------------------------- Arrays


let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];


groceryList[2] = "🧈 Butter"
groceryList[4] = "🧼 Laundry soap"

console.log(groceryList)




const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];

for (let i = 0; i < musicNotes.length; i++) {
  console.log(musicNotes[i]);
}




let multiple = 5
let number = [1,2,3,4,5,6,7,8,9]

for(let i = 0; i<=number.length; i++){
   
       console.log(multiple + " x " + i + " = " + multiple*i)
}



// _____________________________________________________ Metodos

const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping"
];

musicPlaylist.shift()
musicPlaylist.pop()

musicPlaylist.push("La pelea con el diablo")
musicPlaylist.unshift("Hola beba remix")
musicPlaylist.unshift("Osito gominola")

console.log(musicPlaylist)

// -----------------------------------------------------

const characters = [
  "The Wally Watchers",
  "Wilma",
  "Fritz",
  "Wizard Whitebeard",
  "Odlaw",
  "Waldo",
  "Woof"
];

if(characters.includes("Waldo")){

  let waldoIndex = characters.indexOf("Waldo")
  console.log("Found Waldo at index " + waldoIndex)

} else{
  console.log("Not found")
}

// -----------------------------------------------------

const dnaPieces = ["A", "C", "G", "T"]
let myDNA = []
let cont = 1


while(cont <= 24){

  let word = ""

  for(let i=1; i<=3; i++){
   
      let index = Math.floor(Math.random() * 4)
      let indexL = dnaPieces[index]
      word += indexL

  }

  myDNA.push(word)
  cont++
}

console.log(myDNA)

// -----------------------------------------------------

const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean(viewsArray) {
  let totalViews = 0;

  for(let i = 0; i < viewsArray.length; i++) {
    totalViews += viewsArray[i];
  }

  return totalViews / viewsArray.length;
}

function median(viewsArray) {
  const sortedStats = viewsArray.sort(function(a, b) { return a - b; });
  const middleIndex = Math.floor(viewsArray.length / 2);
  
  return sortedStats[middleIndex];
}

// TikTok
console.log("TikTok");
console.log("Mean:", mean(recentTikTokViews));
console.log("Median:", median(recentTikTokViews));
console.log();

// Instagram
console.log("Instagram");
console.log("Mean:", mean(recentInstagramViews));
console.log("Median:", median(recentInstagramViews));
console.log();

// YouTube
console.log("YouTube");
console.log("Mean:", mean(recentYouTubeViews));
console.log("Median:", median(recentYouTubeViews));
console.log();
// ----------------------------------------------------- functions practice


isPalindrome("racecar")

function isPalindrome(word) {
  let wordB = word
  let wordM = ""

  for (let i = 0; i < word.length; i++) {
    wordM = wordB[i] + wordM 
  }

  if (word === wordM) {
    console.log("Is a palindrome")
  } else {
    console.log("Is not a palindrome")
  }
}

// ----------------------------------------------------- objects
const car = {

  model: "Porsche 911 GT3",
  year: 2025,
  color: "Black",
  used: false
};

console.log("I'm looking for a " + car.year + " " + car.model + " that is new")


// ----------------------------------------------------- objects - methods // Functions inside objects

const pig = {
 
  name: "Jorge",
  type: "pig",
  age: 3,
  makeSound: function(){
    console.log("oigk")
  }
}

const sheep = {

  name: "Suzy",
  type: "sheep",
  age: 2,
  makeSound: function(){
    console.log("meeeggg")
  }
}

const dog = {

  name: "Danny",
  type: "dog",
  age: 4,
  makeSound: function(){
    return(console.log(dog.name + " is a " + dog.age + " year old " + dog.type + " that goes woof!"))
  }
}

dog.makeSound()