alert('Hello, welcome to Build-A-Story!')
let charName = prompt("Let's not dilly-dally any longer, what's the name of your character?")
let charQuest = prompt(`I see.. your character's name is ${charName}. Now, what are they here for? their quest, mayhaps?`)
let charOcc = prompt("Is that so? Then, what is their occupation?")
let occInfo = prompt('What does the occupation actually mean?')
let charRace = prompt('What is your character\'s species?')
let favAnim = prompt("What's your favorite animal?")
let userNotFav = prompt('What\'s your least favorite animal?')
let userNotMons = prompt("What's your least favorite monster?")
let charaAge = prompt('How old is your character? (Use "young", "young adult", "old", etc.)')
let charGen = prompt('What is the gender of your character? (This is to determine the pronouns used in the story)')
alert('Thank you for your inputs, now enjoy your story!')

//Occupation
let introRem = ''

if (charaAge === 'young'){
    introRem = ''
} else if (charaAge === 'young adult'){
    introRem = `, a <a class="tooltipster" title="${occInfo}">${charOcc}</a>`
} else {
    introRem = `, a <a class="tooltipster" title="${occInfo}">${charOcc}</a>`
}

// For character pronouns
let pnounOne = ''
let pnounTwo = ''
let pnounThree = ''
let pnounFour = ''
let pnounFive = ''

let pnounOneOther = ''
let pnounTwoOther = ''
let pnounThreeOther = ''

if (charGen === 'male' || charGen === 'boy'){
    pnounOne = 'he';
    pnounTwo = 'him';
    pnounThree = 'his';
    pnounFour = 'he\'s';
    pnounFive = 'himself'
} else if (charGen === 'female' || charGen === 'girl'){
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

if (charGen === 'male' || charGen === 'boy'){
    pnounOneOther = 'he is';
    pnounTwoOther = 'he was';
    pnounThreeOther = 'himself was';
} else if (charGen === 'female' || charGen === 'girl'){
    pnounOneOther = 'she is';
    pnounTwoOther = 'she was';
    pnounThreeOther = 'herself was';
} else {
    pnounOneOther = 'they are';
    pnounTwoOther = 'they were';
    pnounThreeOther = 'themself were';
}

//Actual story

let start = ` <p>Your character is a ${charaAge} ${charRace} named ${charName}${introRem}, who owns a pet ${favAnim}; and ${pnounThree} quest is to ${charQuest}. ${charName} and ${pnounThree} ${favAnim} packed up and got ready for an adventure, of course, not before telling ${pnounThree} family goodbye.</p> `

let adv = ` <p>${charName} now finally sets off with ${pnounThree} ${favAnim} on their grand adventure. Not very long after entering a mysterious forest that surrounded their hometown, they pair finds a ${userNotMons}, seemingly injured. ${charName} tries to help the monster, but ${pnounThree} ${favAnim} had felt that something was off. The ${favAnim} kept trying to remove ${charName} from the ${userNotMons}, and just as ${pnounOne} had enough of ${pnounThree} pet's annoyance, the monster jumps up and strikes ${charName}.</p> <p>${charName}'s ${favAnim} leaps out at the ${userNotMons}, distracting it enough for ${charName} to subdue the monster. What would end up happening to it? Who knows.</p> <p>The adventure duo continue on their journey to ${charQuest}, and all was swell.. mostly.</p> `

let pdeath = ` <p>Along the way, the duo comes across a random guy who claims to be a wizard. ${charName} and ${pnounThree} ${favAnim} don't seem to be convinced, however, but little did they know that their lives will be changed by this encounter forever. The wizard was furious, how dare these adventurers doubt him? How dare they even defy him? He waves his wand and casts a spell, obliterating the ${favAnim} right in front of the ${charRace}'s eyes. Feeling like he'd achieved victory, the wizard skedaddles off, never to be seen again. ${charName}, now blaming ${pnounFive} for ${pnounThree} pet's death, heads on to the next town over to meet up with ${pnounThree} friend.</p> `

let npet = ` <p>Upon ${pnounThree} arrival, ${charName}'s friend asks what's happened, as ${pnounOne} seemed depressed. ${charName} explained the journey thus far, and ${pnounThree} seemed to light up a tiny bit. ${charName} asked why the friend had looked to giddy, to which ${pnounThree} friend revealed that they had a surprise for ${pnounTwo}!</p> <p>${charName}'s friend leads ${pnounTwo} to a pen, to which a ${userNotFav} was being held. The friend wanted to gift this animal as a pet to ${charName} as a pet, and was happy that there was a vacancy just in time! Yeah, sort of a bad friend, we know. But ${charName} takes the ${userNotFav} in, reluctantly of course.</p> <p>The newly formed pair heads off into the horizon, perhaps finally being able to ${charQuest} as ${charName} had planned, albeit with a newfound partner. What will become of their party? <i>That</i> will be for your imagination.</p> `

console.log(start) 

document.getElementById('start').innerHTML = start

console.log(adventure)

document.getElementById('adventure').innerHTML = adv

console.log(pdead)

document.getElementById('pdead').innerHTML = pdeath

console.log(npet)

document.getElementById('npet').innerHTML = newpet