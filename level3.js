// 1. 'Love is the best thing in this world. Some found\
//  their love and some are still looking for their love.\
// ' Count the number of word love in this sentence
let sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let check = /love/gi 
console.log((sentence.match(check)).length)

// Getting because from the string
let name = "You cannot end a sentence with because because because is a conjunction"
let pattern = /because/gi
console.log(name.match(pattern))




// Calculate the total annual income of the person
//  by extracting the numbers from the following text.
let money = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month "
let show = /\d+/g
let solve = money.match(show)
let total = Number(solve[0]*12) +Number(solve[1])+Number(solve[2]*12)
console.log(total)
