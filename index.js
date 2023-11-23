
// Iteration 1: Names and Input
let hacker1 = "Jorge"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Mohammed"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let hackerDriver = "";


for(let i=0 ; i<hacker1.length ; i++){
    hackerDriver+= hacker1[i].toUpperCase() + " ";
    // hackerDriver = hackerDriver + hacker1[i].toUpperCase() + " ";
}
// J O R G E
console.log(hackerDriver)

console.log(hacker2.length)


let hackerNavigator = ""
for(let i = hacker2.length -1 ; i >= 0 ;i--){
    hackerNavigator += hacker2[i]
}
console.log(hackerNavigator)

let alohaOrder = hacker1.localeCompare(hacker2)

if (alohaOrder < 0){
    console.log(`The driver's name goes first.`)
}else if (alohaOrder >0){
    console.log(`Yo, the navigator goes first, definitely.`)
}else{
    console.log('falseWhat?! You both have the same name?')
}



//Bonus 1:

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum vulputate nisl. Ut sed malesuada magna. Cras quis nulla semper, consectetur sem vitae, tempor justo. Nam semper eros nisl, eget sollicitudin nisi tempor eu. Duis varius sem ut arcu rhoncus, non tincidunt lorem iaculis. Curabitur volutpat est vitae eleifend convallis. Sed ante nisi, malesuada ac libero quis, gravida varius enim. Donec sed lacus id lorem sodales dapibus in et lectus. Duis elementum tincidunt nisl id laoreet.

Cras interdum vehicula felis, quis consectetur nibh vestibulum at. Nullam eleifend viverra justo. Nullam vehicula orci id sollicitudin posuere. Donec faucibus, ipsum non commodo facilisis, turpis felis iaculis lorem, consectetur varius magna purus id nunc. Praesent ac cursus ipsum. Morbi non congue purus, ut rhoncus odio. Integer commodo neque ex, sit amet bibendum dui eleifend a. Nullam nec lorem diam.

Proin gravida ligula at aliquam hendrerit. Praesent elementum pellentesque mi vulputate gravida. Nam id imperdiet neque, et sollicitudin orci. Phasellus vitae convallis metus. Suspendisse potenti. Pellentesque ac interdum augue, a congue est. Praesent faucibus in massa et malesuada. Integer quis justo id lectus pulvinar maximus eget id elit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum vulputate nisl. Ut sed malesuada magna. Cras quis nulla semper, consectetur sem vitae, tempor justo. Nam semper eros nisl, eget sollicitudin nisi tempor eu. Duis varius sem ut arcu rhoncus, non tincidunt lorem iaculis. Curabitur volutpat est vitae eleifend convallis. Sed ante nisi, malesuada ac libero quis, gravida varius enim. Donec sed lacus id lorem sodales dapibus in et lectus. Duis elementum tincidunt nisl id laoreet.

Cras interdum vehicula felis, quis consectetur nibh vestibulum at. Nullam eleifend viverra justo. Nullam vehicula orci id sollicitudin posuere. Donec faucibus, ipsum non commodo facilisis, turpis felis iaculis lorem, consectetur varius magna purus id nunc. Praesent ac cursus ipsum. Morbi non congue purus, ut rhoncus odio. Integer commodo neque ex, sit amet bibendum dui eleifend a. Nullam nec lorem diam.

Proin gravida ligula at aliquam hendrerit. Praesent elementum pellentesque mi vulputate gravida. Nam id imperdiet neque, et sollicitudin orci. Phasellus vitae convallis metus. Suspendisse potenti. Pellentesque ac interdum augue, a congue est. Praesent faucibus in massa et malesuada. Integer quis justo id lectus pulvinar maximus eget id elit.`

// let longText = `Lorem ipsum dolor sit amet`

let isMatch = false
let wordCounter = 1
for(let i = 0; i < longText.length;i++){
    isMatch = longText[i].includes(" ")
    if(isMatch){
        wordCounter +=1
    }
}

console.log('word counter : ' + wordCounter)


//Bonus 2: