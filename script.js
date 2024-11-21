alert('Hello, welcome to Build-A-Story!')
let userName = prompt("Let's not dilly-dally any longer, what's your name?")
let userQuest = prompt(`I see.. your name is ${userName}. Now, what are you here for? Your quest, mayhaps?`)
let userOcc = prompt("Is that so? Then, what is your occupation?")
let occInfo = prompt('What does your occupation actually mean?')
let userFavAnim = prompt("What's your favorite animal?")
let userNotFav = prompt('What\'s your least favorite animal?')
let userNotMons = prompt("What's your least favorite monster?")
let charaAge = prompt('How old is your character? (Use "young", "young adult", "old", etc.)')


let myStory = ` <p>Once upon a time, a ${charaAge} <a class="tooltipster" title="${occInfo}">${userOcc}</a> named ${userName} sets off to ${userQuest} with their pet ${userFavAnim}.</p>
<p>On their journey to ${userQuest}, they encounter a(n) ${userNotMons}. Because it was a newbie at harassing humans, it was easily defeated. The pair continue on, but tragedy strikes when ${userName}'s pet ${userFavAnim} gets obliterated by some rando claiming to be a wizard. ${userName} manages to blow the rando up.. somehow, but will forever be changed by the loss of their beloved pet.</p> `
let storySec = ` <p>Lost in thought, ${userName} decides to go home and rest for a bit. Without their ${userFavAnim}, they feel no motivation to do anything. That was when their friend brought them a new pet ${userNotFav}! It was.. "repulsing", I guess. But it's their new partner now, and nothing will get in their way any longer!</p> `

console.log(myStory)
console.log(storySec)

document.getElementById('story').innerHTML = myStory

document.getElementById('cont').innerHTML = storySec

let pnounOne = ''
let pnounTwo = ''
let pnounThree = ''

let pnounOneOther = ''
let pnounTwoOther = ''
let pnounThreeOther = ''

//You are a ${charaAge} ${charRace} named ${charName}${introRem}, who owns a pet ${favAnim}. 

if (charaAge === young){
    console.log('')
} else if (charaAge === 'young adult'){
    console.log(`, a <a class="tooltipster" title="${occInfo}">${charOcc}</a>`)
} else {
    console.log(`, a <a class="tooltipster" title="${occInfo}">${charOcc}</a>`)
}

/* if (charGen === male){
    pnounOne = he;
    pnounTwo = him;
    pnounThree = himself
} else if (charGen === female){
    pnounOne = she;
    pnounTwo = her;
    pnounThree = herself
} else {
    pnounOne = they;
    pnounTwo = them;
    pnounThree = themself
}

if (charGen === male){
    pnounOneOther = he is;
    pnounTwoOther = he was;
    pnounThreeOther = himself was;
} else if (charGen === female){
    pnounOneOther = she is;
    pnounTwoOther = she was;
    pnounThreeOther = herself was;
} else {
    pnounOneOther = they are;
    pnounTwoOther = they were;
    pnounThreeOther = themself were;
} */