alert('Hello, welcome to Build-A-Story!')
let charName = prompt("Let's not dilly-dally any longer, what's your name?")
let charQuest = prompt(`I see.. your name is ${charName}. Now, what are you here for? Your quest, mayhaps?`)
let charOcc = prompt("Is that so? Then, what is your occupation?")
let occInfo = prompt('What does your occupation actually mean?')
let charRace = prompt('What is your character\'s species?')
let favAnim = prompt("What's your favorite animal?")
let userNotFav = prompt('What\'s your least favorite animal?')
let userNotMons = prompt("What's your least favorite monster?")
let charaAge = prompt('How old is your character? (Use "young", "young adult", "old", etc.)')
let charGen = prompt('What is the gender of your character? (This is to determine the pronouns used in the story)')

let pnounOne = ''
let pnounTwo = ''
let pnounThree = ''
let pnounFour = ''
let pnounFive = ''

let pnounOneOther = ''
let pnounTwoOther = ''
let pnounThreeOther = ''

let introRem = ''

let myStory = ` <p>Your character is a ${charaAge} ${charRace} named ${charName}${introRem}, who owns a pet ${favAnim}; and ${pnounOne} quest is to ${charQuest}. ${charName} and ${pnounThree} ${favAnim} packed up and got ready for an adventure, of course, not before telling ${pnounThree} family goodbye.</p> `


if (charaAge === 'young'){
    introRem = ''
} else if (charaAge === 'young adult'){
    introRem = `, a <a class="tooltipster" title="${occInfo}">${charOcc}</a>`
} else {
    introRem = `, a <a class="tooltipster" title="${occInfo}">${charOcc}</a>`
}

if (charGen === 'male'){
    pnounOne = 'he';
    pnounTwo = 'him';
    pnounThree = 'his';
    pnounFour = 'he\'s';
    pnounFive = 'himself'
} else if (charGen === 'female'){
    pnounOne = 'she';
    pnounTwo = 'her';
    pnounThree = 'her';
    pnounFour = 'she\'s';
    pnounFive = 'herself'
} else {
    pnounOne = 'they';
    pnounTwo = 'them';
    pnounThree = 'their';
    pnounFour = 'they\'re';
    pnounFive = 'themself'
}

if (charGen === 'male'){
    pnounOneOther = 'he is';
    pnounTwoOther = 'he was';
    pnounThreeOther = 'himself was';
} else if (charGen === 'female'){
    pnounOneOther = 'she is';
    pnounTwoOther = 'she was';
    pnounThreeOther = 'herself was';
} else {
    pnounOneOther = 'they are';
    pnounTwoOther = 'they were';
    pnounThreeOther = 'themself were';
}


console.log(story)

document.getElementById('story').innerHTML = myStory