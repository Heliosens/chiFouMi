// get frame to display gamer choice
let frames = document.getElementById('frame').getElementsByTagName('div');
console.log(frames)
// get hands to listen
let hands = document.getElementsByClassName('hand');
// get display to display result
let user = document.getElementById('user');
let comp = document.getElementById('comp');
let win = document.getElementById('win');

// on click display user & computer choice
// check winner
// count point -> display
// display result
for( let hand of hands){
    hand.addEventListener('click', function (){
        frames[0].style.backgroundImage = "url('stone.png')"; // user choice url;
        frames[1].style.backgroundImage = "url('paper.png')"; // random choice url;
    })
}

// function computer choice
function computerChoice () {
    // random on hands
    return Math.floor(Math.random() * hands.length);
}
