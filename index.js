const btnArr = document.querySelectorAll("button.drum");
btnArr.forEach(el => {
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("click", handleClick);
});
keyDown();
keyUp();

//events when we press left mouse button (and before we release it)
function handleMouseDown() {
    const btnClassPressed = this.textContent;
    switch (btnClassPressed) {
        case "w":
            var keyAttrPres = document.querySelector("button.w");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "a":
            var keyAttrPres = document.querySelector("button.a");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "s":
            var keyAttrPres = document.querySelector("button.s");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "d":
            var keyAttrPres = document.querySelector("button.d");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "j":
            var keyAttrPres = document.querySelector("button.j");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "k":
            var keyAttrPres = document.querySelector("button.k");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.backgroundImage = "none";
            break;
        case "l":
            var keyAttrPres = document.querySelector("button.l");
            keyAttrPres.style.color = "#284149";
            keyAttrPres.style.backgroundImage = "none";
            break;
        default:
            return;
    }
}

//events when we release left button
function handleMouseUp() {
    const btnClassReleased = this.textContent;
    switch (btnClassReleased) {
        case "w":
            var keyAttrRel = document.querySelector("button.w");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/tom1.png')";
            break;
        case "a":
            var keyAttrRel = document.querySelector("button.a");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/tom2.png')";
            break;
        case "s":
            var keyAttrRel = document.querySelector("button.s");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/tom3.png')";
            break;
        case "d":
            var keyAttrRel = document.querySelector("button.d");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/tom4.png')";
            break;
        case "j":
            var keyAttrRel = document.querySelector("button.j");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/snare.png')";
            break;
        case "k":
            var keyAttrRel = document.querySelector("button.k");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/crash.png')";
            break;
        case "l":
            var keyAttrRel = document.querySelector("button.l");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/kick.png')";
            break;
        default:
            return;
    }
}

// events for a whole click
function handleClick() {
    const btnID = this.innerHTML;
    switch (btnID) {
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

//events when we press one of the [w, a, s, d, j, k, l] keys
function keyDown() {
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "w":
            case "W":
            case "ς":
                var keyAttr = document.querySelector("button.w");
                keyAttr.style.color = "#284149";
                keyAttr.style.backgroundImage = "none";
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;  
        case "a":
        case "A":
        case "α":
        case "Α":
            var keyAttr = document.querySelector("button.a");
            keyAttr.style.color = "#284149";
            keyAttr.style.backgroundImage = "none";
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
        case "S":
        case "σ":
        case "Σ":
            var keyAttr = document.querySelector("button.s");
            keyAttr.style.color = "#284149";
            keyAttr.style.backgroundImage = "none";
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
        case "D":
        case "δ":
        case "Δ":
            var keyAttr = document.querySelector("button.d");
            keyAttr.style.color = "#284149v";
            keyAttr.style.backgroundImage = "none";
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
        case "J":
        case "ξ":
        case "Ξ":
            var keyAttr = document.querySelector("button.j");
            keyAttr.style.color = "#284149";
            keyAttr.style.backgroundImage = "none";
            keyAttr.style.backgroundImage = "none";
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
        case "K":
        case "κ":
        case "Κ":
            var keyAttr = document.querySelector("button.k");
            keyAttr.style.color = "#284149";
            keyAttr.style.backgroundImage = "none";
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
        case "L":
        case "λ":
        case "Λ":
            var keyAttr = document.querySelector("button.l");
            keyAttr.style.color = "#284149";
            keyAttr.style.backgroundImage = "none";
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            return;
        }
    })
}

//events when we release one of the [w, a, s, d, j, k, l] keys
function keyUp() {
    document.addEventListener("keyup", (event) => {
        switch (event.key) {
            case "w":
            case "W":
            case "ς":
                var keyAttrRel = document.querySelector("button.w");
                keyAttrRel.style.color = "#F3A333";
                keyAttrRel.style.backgroundImage = "url('images/tom1.png')";
            break;  
        case "a":
        case "A":
        case "α":
        case "Α":
            var keyAttrRel = document.querySelector("button.a");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/tom2.png')";
            break;
        case "s":
        case "S":
        case "σ":
        case "Σ":
            var keyAttrRel = document.querySelector("button.s");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/tom3.png')";
            break;
        case "d":
        case "D":
        case "δ":
        case "Δ":
            var keyAttrRel = document.querySelector("button.d");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/tom4.png')";
            break;
        case "j":
        case "J":
        case "ξ":
        case "Ξ":
            var keyAttrRel = document.querySelector("button.j");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/snare.png')";
            break;
        case "k":
        case "K":
        case "κ":
        case "Κ":
            var keyAttrRel = document.querySelector("button.k");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/crash.png')";
            break;
        case "l":
        case "L":
        case "λ":
        case "Λ":
            var keyAttrRel = document.querySelector("button.l");
            keyAttrRel.style.color = "#F3A333";
            keyAttrRel.style.backgroundImage = "url('images/kick.png')";
            break;
        default:
            return;
        }
    })
}

