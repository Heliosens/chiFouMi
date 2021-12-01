// get frame to display gamer choice
let frames = document.getElementById('frame').getElementsByTagName('div');

// get hands to listen
let hands = document.getElementsByClassName('hand');
// set background url
let img = [
    "url('paper.png')",
    "url('scissor.png')",
    "url('stone.png')"
];

// get display to display result
let result = document.getElementById('result');
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
        result.style.visibility = "hidden";
        // user choice
        frames[0].style.backgroundImage = hand.style.backgroundImage;
        // computer random
        frames[1].style.backgroundImage = img[Math.floor(Math.random() * hands.length)]; // random choice url;
        // check winner
        // console.log(hand.style.backgroundImage);
        switch (hand.style.backgroundImage){        // switch of player choice
            case hands[0].style.backgroundImage :      // case paper
                console.log('paper');
                if(frames[1].style.backgroundImage === hands[1].style.backgroundImage){
                    console.log("comp = scissor");
                }
                else if (frames[1].style.backgroundImage === hands[2].style.backgroundImage){
                    console.log("comp = stone");
                }
                break;
            case hands[1].style.backgroundImage :       // case scissor
                console.log('scissor');

                break;
            case hands[2].style.backgroundImage :       // case paper
                console.log('stone');
                break;
        }
    })
}

// case frames[1].style.backgroundImage :
// if(frames[1].style.backgroundImage === ){     // computer => scissor
//     result.style.visibility = "visible";
//     result.innerHTML = "Computer win";
// }
// else if (frames[1].style.backgroundImage === "url('stone.png')"){   // computer => stone
//     result.style.visibility = "visible";
//     result.innerHTML = "You win";
// }
// else {
//     result.style.visibility = "visible";
//     result.innerHTML = "Match nul";
// }