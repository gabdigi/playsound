let clap    = new Audio("sound/Clap-Baby.ogg");
let kick    = new Audio("sound/Kick-Base.ogg");
let snare   = new Audio("sound/Snare-Young-Thug.ogg");
let hihat   = new Audio("sound/Hihat-Short-Closed.ogg");
let keyA    = document.querySelector('#keyA');
let keyZ    = document.querySelector('#keyZ');
let keyE    = document.querySelector('#keyE');
let keyR    = document.querySelector('#keyR');


document.addEventListener('keyup', function(e){
    if (e.keyCode == 65){
        clap.play();
        keyA.style.borderColor = "grey";
        keyA.style.borderRadius = '5px';
    }
    else if (e.keyCode == 90){
        kick.play();
        keyZ.style.borderColor = "grey";
        keyZ.style.borderRadius = '5px';
    }
    else if (e.keyCode == 69){
        snare.play();
        keyE.style.borderColor = "grey";
        keyE.style.borderRadius = '5px';
    }
    else if (e.keyCode == 82){
        hihat.play();
        keyR.style.borderColor = "grey";
        keyR.style.borderRadius = '5px';
    }
     else{
         keyA.style.borderColor = "grey";
         keyZ.style.borderColor = "grey";
         keyE.style.borderColor = "grey";
         keyR.style.borderColor = "grey";

    }
    
});

document.addEventListener('keydown', function(e){
    if (e.keyCode == 65){
        clap.play();
        keyA.style.borderColor = "red";
        keyA.style.borderRadius = '5px';
    } 
    else if (e.keyCode == 90){
        kick.play();
        keyZ.style.borderColor = "purple";
        keyZ.style.borderRadius = '5px';
    }
    else if (e.keyCode == 69){
        snare.play();
        keyE.style.borderColor = "turquoise";
        keyE.style.borderRadius = '5px';
    }
    else if (e.keyCode == 82){
        hihat.play();
        keyR.style.borderColor = "yellow";
        keyR.style.borderRadius = '5px';
    }
    else{
         keyA.style.borderColor = "grey";
         keyZ.style.borderColor = "grey";
         keyE.style.borderColor = "grey";
         keyR.style.borderColor = "grey";
    }
    
});





