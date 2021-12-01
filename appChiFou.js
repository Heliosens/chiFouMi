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
let result = document.getElementById('result');
let points = document.getElementsByClassName('point');
let historic = document.getElementById('historic');

// display symbols
for(let i = 0 ; i < hands.length ; i++){
    hands[i].style.backgroundImage = img[i];
}

// on click display user & computer choice
// count point -> display
// display result
for( let i = 0 ; i < hands.length ; i++){
    hands[i].addEventListener('click', function (){
        // user choice
        frames[0].style.backgroundImage = hands[i].style.backgroundImage;
        // computer random
        let x = Math.floor(Math.random() * hands.length);
        frames[1].style.backgroundImage = img[x]; // random choice url;

        // check winner
        if (i === x){
            result.innerHTML = "Match nul";
        }
        else {
            switch (i){        // switch of player choice
                case 0 :                                           // case paper
                    if(x === 1){     // vs scissor
                        result.innerHTML = "Computer win";
                        points[1].innerHTML = (parseInt(points[1].innerHTML) + 1).toString();
                    }
                    else if (x === 2){   // vs stone
                        result.innerHTML = "You win !!!";
                        points[0].innerHTML = (parseInt(points[0].innerHTML) + 1).toString();
                    }
                    break;
                case 1 :                                           // case scissor
                    if(x === 0){     // vs paper
                        result.innerHTML = "You win !!!";
                        points[0].innerHTML = (parseInt(points[0].innerHTML) + 1).toString();
                    }
                    else if (x === 2){   // vs stone
                        result.innerHTML = "Computer win";
                        points[1].innerHTML = (parseInt(points[1].innerHTML) + 1).toString();
                    }
                    break;
                case 2 :                                           // case stone
                    if(x === 0){     // vs paper
                        result.innerHTML = "Computer win";
                        points[1].innerHTML = (parseInt(points[1].innerHTML) + 1).toString();
                    }
                    else if (x === 1){   // vs scissor
                        result.innerHTML = "You win !!!";
                        points[0].innerHTML = (parseInt(points[0].innerHTML) + 1).toString();
                    }
                    break;
            }
        }
    })
}

function addResult (x,i,w){
    let items = [x, i];
    for(let item of items){
        let div = document.createElement("div");
        div.style.backgroundImage = hands[item].style.backgroundImage;
        historic.appendChild(div);
    }
}
