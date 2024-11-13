alert('Hello, welcome to Build-A-Story!')
let userName = prompt("Let's not dilly-dally any longer, what's your name?")
let userQuest = prompt(`I see.. your name is ${userName}. Now, what are you here for? Your quest, mayhaps?`)
let userOcc = prompt("Is that so? Then, what is your occupation?")
let occInfo = prompt('What does your occupation actually mean?')
let userFavAnim = prompt("What's your favorite animal?")
let userNotMons = prompt("What's your least favorite monster?")


let myStory = ` <p>Once upon a time, a young <a class="tooltipster" title="${occInfo}">${userOcc}</a> named ${userName} sets off to ${userQuest} with their pet ${userFavAnim}.</p>
<p>On their journey to ${userQuest}, they encounter a(n) ${userNotMons}. Because it was a newbie at harassing humans, it was easily defeated.</p> `

console.log(myStory)

document.getElementById('story').innerHTML = myStory