let clap = new Audio("sound/Clap-Baby.ogg");
let keyA    = document.getElementById('clapsound');

keyA.addEventListener('onkeyup', function(e){
    if (e.keyCode == 65){
        console("ok");
        clap.play();
    }
    console("nope");
})

/**
 * 
 * let clap = new Audio;
clap.src = "sound/Clap-Baby.ogg";
//clap.webkit-playsinline="true";
clap.playsinline="true";
 function test() {
    clap.play();
    console.log("coucou");
  }

test();

methode 2 
let clap = new Audio("sound/Clap-Baby.ogg");
//clap.webkit-playsinline="true";
clap.playsinline="true";

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
        clap.play();
    }
  });

methode 3
let clap = new Audio("sound/Clap-Baby.ogg");
clap.playsinline="true";
 function test() {
    clap.play();
    console.log("coucou");
}
 */