// get frame to display player & computer choice
let frames = document.getElementById('frame').getElementsByTagName('div');

// get hands to listen player choice
let hands = document.getElementsByClassName('hand');

// set hands background img url
let img = [
    "url('paper.png')",
    "url('scissor.png')",
    "url('stone.png')"
];

// to display result
let result = document.getElementById('result');
let points = document.getElementsByClassName('point');

// in historic
let user = document.getElementById('user');
let comp = document.getElementById('comp');
let win = document.getElementById('win');

for(let i = 0 ; i < hands.length ; i++){
    hands[i].style.backgroundImage = img[i];
}

// on click display user & computer choice
// count point -> display
// display result
for( let hand of hands){
    hand.addEventListener('click', function (){
        // user choice
        frames[0].style.backgroundImage = hand.style.backgroundImage;
        // computer random
        frames[1].style.backgroundImage = img[Math.floor(Math.random() * hands.length)]; // random choice url;

        // check winner
        if (frames[0].style.backgroundImage === frames[1].style.backgroundImage){
            result.innerHTML = "Match nul";
        }
        else {
            switch (hand.style.backgroundImage){        // switch of player choice
                case hands[0].style.backgroundImage :                                           // case paper
                    if(frames[1].style.backgroundImage === hands[1].style.backgroundImage){     // vs scissor
                        result.innerHTML = "Computer win";
                        points[1].innerHTML = (parseInt(points[1].innerHTML) + 1).toString();
                    }
                    else if (frames[1].style.backgroundImage === hands[2].style.backgroundImage){   // vs stone
                        result.innerHTML = "You win !!!";
                        points[0].innerHTML = (parseInt(points[0].innerHTML) + 1).toString();
                    }
                    break;
                case hands[1].style.backgroundImage :                                           // case scissor
                    if(frames[1].style.backgroundImage === hands[0].style.backgroundImage){     // vs paper
                        result.innerHTML = "You win !!!";
                        points[0].innerHTML = (parseInt(points[0].innerHTML) + 1).toString();
                    }
                    else if (frames[1].style.backgroundImage === hands[2].style.backgroundImage){   // vs stone
                        result.innerHTML = "Computer win";
                        points[1].innerHTML = (parseInt(points[1].innerHTML) + 1).toString();
                    }
                    break;
                case hands[2].style.backgroundImage :                                           // case stone
                    if(frames[1].style.backgroundImage === hands[0].style.backgroundImage){     // vs paper
                        result.innerHTML = "Computer win";
                        points[1].innerHTML = (parseInt(points[1].innerHTML) + 1).toString();
                    }
                    else if (frames[1].style.backgroundImage === hands[1].style.backgroundImage){   // vs scissor
                        result.innerHTML = "You win !!!";
                        points[0].innerHTML = (parseInt(points[0].innerHTML) + 1).toString();
                    }
                    break;
            }
        }
    })
}

