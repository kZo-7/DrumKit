const btnArr = document.querySelectorAll("button.drum");
btnArr.forEach(el => {
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("click", handleClick);
    el.addEventListener("mouseup", handleMouseUp);
});

//events when we press one of the [w, a, s, d, j, k, l] keys
document.addEventListener("keydown",(ev) => {
    var keyPressed = ev.key;
    btnAnimationOn(keyPressed);
    makeSound(keyPressed);
});

//events when we release one of the [w, a, s, d, j, k, l] keys
document.addEventListener("keyup", (ev) => {
    var keyReleased = ev.key;
    btnAnimationOff(keyReleased);
});


//when we press left mouse button (and before we release it)
function handleMouseDown() {
    const btnClassPressed = this.textContent;
    btnAnimationOn(btnClassPressed);
}

//when we release left button
function handleMouseUp() {
    const btnClassReleased = this.textContent;
    btnAnimationOff(btnClassReleased);
}

// events for a whole click
function handleClick() {
    const btnID = this.innerHTML;
    makeSound(btnID);
}

//play the appropriate sound
function makeSound(btn) {
    switch (btn) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            return;
    }
}

//change the clicked/pressed button's appearance
function btnAnimationOn(btnPressed) {
    switch (btnPressed) {
        case "w":
            var keyAttrPres = document.querySelector("button.w");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.borderColor = "#FFD56F";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "a":
            var keyAttrPres = document.querySelector("button.a");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.borderColor = "#FFD56F";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "s":
            var keyAttrPres = document.querySelector("button.s");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.borderColor = "#FFD56F";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "d":
            var keyAttrPres = document.querySelector("button.d");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.borderColor = "#FFD56F";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "j":
            var keyAttrPres = document.querySelector("button.j");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.borderColor = "#FFD56F";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "k":
            var keyAttrPres = document.querySelector("button.k");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.borderColor = "#FFD56F";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "l":
            var keyAttrPres = document.querySelector("button.l");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.borderColor = "#FFD56F";
            keyAttrPres.style.backgroundImage = "none";
            break;
        default:
            return;
    }
}

//cancel off clicked/pressed button's appearance
function btnAnimationOff(btnReleased) {
    switch (btnReleased) {
        case "w":
            var keyAttrRel = document.querySelector("button.w");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.borderColor = "#485159";
            keyAttrRel.style.backgroundImage = "url('images/tom1.png')";
            break;
        case "a":
            var keyAttrRel = document.querySelector("button.a");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.borderColor = "#485159";
            keyAttrRel.style.backgroundImage = "url('images/tom2.png')";
            break;
        case "s":
            var keyAttrRel = document.querySelector("button.s");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.borderColor = "#485159";
            keyAttrRel.style.backgroundImage = "url('images/tom3.png')";
            break;
        case "d":
            var keyAttrRel = document.querySelector("button.d");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.borderColor = "#485159";
            keyAttrRel.style.backgroundImage = "url('images/tom4.png')";
            break;
        case "j":
            var keyAttrRel = document.querySelector("button.j");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.borderColor = "#485159";
            keyAttrRel.style.backgroundImage = "url('images/snare.png')";
            break;
        case "k":
            var keyAttrRel = document.querySelector("button.k");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.borderColor = "#485159";
            keyAttrRel.style.backgroundImage = "url('images/crash.png')";
            break;
        case "l":
            var keyAttrRel = document.querySelector("button.l");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.borderColor = "#485159";
            keyAttrRel.style.backgroundImage = "url('images/kick.png')";
            break;
        default:
            return;
    }
}