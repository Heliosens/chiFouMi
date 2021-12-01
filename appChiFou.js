// get frame to display gamer choice
let frame = document.getElementById('frame');

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


// function computer choice
function computerChoice () {
    // random on hands
    return Math.floor(Math.random() * hands.length);
}
