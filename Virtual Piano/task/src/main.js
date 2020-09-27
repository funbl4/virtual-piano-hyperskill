document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA") {
        let audioA = new Audio("music/A.mp3");
        audioA.play();
    } else if (event.code == "KeyS") {
        let audioS = new Audio("music/S.mp3");
        audioS.play();
    } else if (event.code == "KeyD") {
        let audioD = new Audio("music/D.mp3");
        audioD.play();
    } else if (event.code == "KeyF") {
        let audioF = new Audio("music/F.mp3");
        audioF.play();
    } else if (event.code == "KeyG") {
        let audioG = new Audio("music/G.mp3");
        audioG.play();
    } else if (event.code == "KeyH") {
        let audioH = new Audio("music/H.mp3");
        audioH.play();
    } else if (event.code == "KeyJ") {
        let audioJ = new Audio("music/J.mp3");
        audioJ.play();
    } else if (event.code == "KeyW") {
        let audioW = new Audio("music/W.mp3");
        audioW.play();
    } else if (event.code == "KeyE") {
        let audioE = new Audio("music/E.mp3");
        audioE.play();
    } else if (event.code == "KeyT") {
        let audioT = new Audio("music/T.mp3");
        audioT.play();
    } else if (event.code == "KeyY") {
        let audioY = new Audio("music/Y.mp3");
        audioY.play();
    } else if (event.code == "KeyU") {
        let audioU = new Audio("music/U.mp3");
        audioU.play();
    } else {
        console.log("Warning message!")
    }
})