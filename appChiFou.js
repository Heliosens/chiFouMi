// get player to display player & computer choice
let player = document.getElementsByClassName('player');

// get hands to listen player choice
let hands = document.getElementById("hand").getElementsByTagName('div');

// set hands background img url
let img = [
    "url('paper.png')",
    "url('scissor.png')",
    "url('stone.png')"
];

// to display result
let result = document.getElementById('result').getElementsByTagName("span");     // red frame
let points = document.getElementsByClassName('point');    // number of points
let chrono = document.getElementById('chrono');    // choice user & comp + winner
let countGame = document.getElementById('countGame');
// display symbols
for(let i = 0 ; i < hands.length ; i++){
    hands[i].style.backgroundImage = img[i];
}

// on click : u = user choice display user & computer choice
// count point -> display
// display result
let count = 0;
for( let u = 0 ; u < hands.length ; u++){
    hands[u].addEventListener('click', function (){
        count++;
        countGame.innerHTML = count.toString();
        for(let span of result){
            span.style.visibility = "hidden"
        }
        // user choice
        player[0].style.backgroundImage = hands[u].style.backgroundImage;
        // computer random
        let x = Math.floor(Math.random() * hands.length);   // x = comp. choice
        player[1].style.backgroundImage = img[x];           // url[x];

        // check winner
        if (u === x){
            result[1].style.visibility = "visible"
            addTime(u, x, "0");
        }
        else {
            let w = u === 0 && x === 1 ? 1 : u === 1 && x === 2 ? 1 : u === 2 && x === 0 ? 1 : 0;
            addPoint(w);
            addTime(u, x, w)
        }
    })
}

/**
 * display who is the winner and
 * add 1 pt to winner w = 0 for player & w = 1 for computer
 * @param w
 */
function addPoint (w){
    points[w].innerHTML = (parseInt(points[w].innerHTML) + 1).toString();
    w === 0 ? result[0].style.visibility = "visible" : result[2].style.visibility = "visible";
}

// create an element for user or comp
function addTime (u, c, w){
    let triple = document.createElement('div');
    let user = document.createElement('div');
    let comp = document.createElement('div');
    let win = document.createElement('div');
    let inWin = document.createElement('i');

    triple.className = 'time';
    user.style.backgroundImage = img[u];
    comp.style.backgroundImage = img[c];
    inWin.className = w === "0" ? "fas fa-equals" : w === 0 ? "far fa-smile" : "fas fa-robot";
    // add each in big one
    triple.appendChild(user);
    triple.appendChild(comp);
    triple.appendChild(win).appendChild(inWin);
    // big div in historic
    chrono.prepend(triple);
}
