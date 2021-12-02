// get frame to display player & computer choice
let frames = document.getElementById('frame').getElementsByTagName('div');

// get hands to listen player choice
let hands = document.getElementById("hand").getElementsByTagName('div');

// set hands background img url
let img = [
    "url('paper.png')",
    "url('scissor.png')",
    "url('stone.png')"
];

// to display result
let result = document.getElementById('result');     // red frame
let points = document.getElementsByClassName('point');    // number of points
let historic = document.getElementById('historic');    // choice user & comp + winner

// display symbols
for(let i = 0 ; i < hands.length ; i++){
    hands[i].style.backgroundImage = img[i];
}

// on click : display user & computer choice
// count point -> display
// display result
for( let i = 0 ; i < hands.length ; i++){
    hands[i].addEventListener('click', function (){
        // user choice
        frames[0].style.backgroundImage = hands[i].style.backgroundImage;
        // computer random
        let x = Math.floor(Math.random() * hands.length);   // x = comp. choice
        frames[1].style.backgroundImage = img[x];           // url[x];

        // check winner
        if (i === x){
            result.innerHTML = "Match nul";
        }
        else {
            let w = i === 0 && x === 1 ? 1 : i === 1 && x === 2 ? 1 : i === 2 && x === 0 ? 1 : 0;
            // switch (i){        // switch of player choice
            //     case 0 :                                       // case paper
            //         w = x === 1 ? 1 : 0;
            //         break;
            //     case 1 :                                           // case scissor
            //         w = x === 0 ? 0 : 1;
            //         break;
            //     case 2 :                                           // case stone
            //         w = x === 0 ? 1 : 0;
            //         break;
            // }
            addPoint(w);
        }
    })
}

/**
 * display who is the winner and
 * add 1 pt to winner w = 0 for player & w = 1 for computer
 * @param w
 */
function addPoint (w){
    result.innerHTML = w === 0 ? "You win !!!" :  "Computer win";
    points[w].innerHTML = (parseInt(points[w].innerHTML) + 1).toString();
}

// create an element for user or comp
function addResult (){
    // big div in historic
    historic.appendChild(historic);
}
