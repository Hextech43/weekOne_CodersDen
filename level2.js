// 1. Using console.log() print out the following statement:

console.log("The quote 'There is no exercise better for the heart \
than reaching down and lifting people up.'\
 by John Holmes teaches us to help one another.")

//  2.Using console.log() print out the following quote by Mother Teresa:
console.log("Love is not patronizing and charity isn't about pity, \
it is about love. Charity and love are the same -- with charity you give love,\
 so don't just give money but reach out your hand instead.")

//  3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const num = "10"
const nums = 10
if(num===nums){
    console.log("correct")
}else{
    console.log(parseInt(num))
}
// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const num1 = 9.8
const nums1 = 10
if(num1===nums1){
    console.log("equal float")
}else{
    console.log(Math.round(num1))
}

// 5. Check if 'on' is found in both python and jargon

let check = "python"
console.log(check.includes("on"))

//6.  I hope this course is not full of jargon.
// Check if jargon is in the sentence.
let jack = "I hope this course is not full of jargon"
console.log(jack.includes("jargon"))

// 7. Generate a random number between 0 and 100 inclusively.
const rand = Math.floor(Math.random()*1000)
console.log(rand)

//8. Generate a random number between 50 and 100 inclusively


// 9. Generate a random number between 0 and 255 inclusively.
const rander = Math.floor(Math.random()*255)
console.log(rander)

// 10. Access the 'JavaScript' string characters using a random number.
let named = "Javascript"
let named2 = named.split("")
console.log(named2[3])

// 11. Use console.log() and escape characters to print the following pattern.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")

// 12. Use substr to slice out the phrase because 
// because because from the following 

let because = "You cannot end a sentence with because \
because because is a conjunction"
let changer = because.split(' ')
console.log(changer.slice(6,9))





// // Getting because from the string
// let name = "You cannot end a sentence with because because because is a conjunction"
// let pattern = /because/gi
// console.log(name.match(pattern))



