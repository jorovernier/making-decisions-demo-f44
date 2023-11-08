/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Pikachu and
    Onix.
*/ 

let pikachuAttack = 25
let onixAttack = 35

// Onix and Pikachu are sizing each other up.

if(pikachuAttack > onixAttack){
    console.log('Pikachu has a higher attack than Onix.')
} else if(onixAttack > pikachuAttack) {
    console.log('Onix has a higher attack than Pikachu.')
} else {
    console.log('It appears that they are evenly matched!')
}

// Onix sees Pikachu is weaker, so he initiates a battle.

let pikachuHealth = 100
let pikachuDefense = 0

// Onix surprise attacks Pikachu.
if(pikachuHealth <= onixAttack){
    console.log('Pikachu has fainted.')
} else {
    // These lines of code do the same thing, one is just easier to type.
    // pikachuHealth = pikachuHealth - onixAttack
    pikachuHealth -= onixAttack
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
}

// Pikachu, after being sucker punched, is now ready for the rerst of the battle.

pikachuDefense += 25
// pikachuDefense = pikachuDefense + 25

// Onix is going to attack Pikachu again.
if(pikachuHealth <= onixAttack - pikachuDefense){
    console.log('Pikachu has fainted.')
} else {
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
}

// Pikachu's health is getting low so Ash gives him a super potion to regain health.
if(pikachuHealth + 50 >= 100){
    pikachuHealth = 100
} else {
    pikachuHealth += 50
}

// Onix is going to see if Iron Tail hits. If it does, he will continue the battle. If not, he will flee.
let ironTailHits = true

// if(ironTailHits === true){
//     console.log('The battle continues!')
// } else {
//     console.log('The wild Onix fled.')
// }

if(ironTailHits !== false){
    console.log('The battle continues!')
} else {
    console.log('The wild Onix fled.')
}

console.log(`Pikachu's health is now ${pikachuHealth}.`)

// Onix and Pikachu are continuing the battle.
for(let i = 0; i < 5; i++){
    if(pikachuHealth <= onixAttack - pikachuDefense){
        console.log('Pikachu has fainted.')
    } else {
        pikachuHealth -= (onixAttack - pikachuDefense)
        console.log(`Pikachu's health is down to ${pikachuHealth}.`)
    }
}

console.log('while')
while(pikachuHealth > 0){
    pikachuHealth -= (onixAttack - pikachuDefense)
    console.log(`Pikachu's health is down to ${pikachuHealth}.`)
    if(pikachuHealth <= 0){
        console.log('Pikachu had fainted! The battle is over.')
    }
}