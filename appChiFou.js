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
        console.log(hand.style.backgroundImage)// user choice url;
        // computer random
        frames[1].style.backgroundImage = img[Math.floor(Math.random() * hands.length)]; // random choice url;
        // check winner
        switch (hand.style.backgroundImage){
            case img[0] :
                if(frames[1].style.backgroundImage === img[1]){     // computer => scissor
                    result.style.visibility = "visible";
                }
        }
    })
}

