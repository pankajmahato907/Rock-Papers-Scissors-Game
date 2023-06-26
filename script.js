let winMsg = 'Victory';
let loseMsg = 'Defeat';
let tieMsg = 'Tie';
let moveDisplays = document.querySelectorAll(".move-display h2");
let moveList = ['Rock', 'Paper', 'Scissors'];
let btns = document.querySelectorAll("button");
let moves = {};

let startGame = () =>{
    document.getElementById("status-head").innerHTML = "Choose";
    for (i = 0; i < btns.length; i++) {
        btns[i].removeEventListener("click", startGame);
        btns[i].addEventListener("click", endGame);
        btns[i].style.visibility = 'visible';
        btns[i].innerHTML = moveList[i];
        btns[i].style.display = 'inline-block';
    }
    for (i = 0; i < moveDisplays.length; i++) {
        moveDisplays[i].style.visibility = 'hidden';
    }
}

let endGame = (event) =>{
    let userText = event.target.innerHTML;
    let userMove = moveList.indexOf(userText);
    let comMove = randomMove();
    let moves = calculate(userMove, comMove);
    document.getElementById("status-head").innerHTML = moves["Message"];
    for (i = 0; i < btns.length; i = i + 2) {
        btns[i].style.visibility = 'hidden';
    }
    document.querySelectorAll("button")[1].innerHTML = "Play Again";
    btns[1].addEventListener("click", startGame);
    for (i = 0; i < moveDisplays.length; i++) {
        moveDisplays[i].style.visibility = 'visible';
    }
    
    moveDisplays[0].innerHTML = "Your played " + moveList[parseInt(moves["User"])];
    moveDisplays[1].innerHTML = "Computer played " + moveList[parseInt(moves["Computer"])];
}

let randomMove = () =>{
    return Math.floor(Math.random() * 3);
}

let calculate = (move1, move2) =>{
    if (move1 == move2){
        return {
            "Message" : tieMsg,
            "User": move1,
            "Computer" :move2};
    } else if ((move1 == "0" && move2 == "2") || (move1 == "1" && move2 == "0") || (move1 == "2" && move2 == "1")){
        return {
            "Message": winMsg,
            "User": move1,
            "Computer": move2
        };
    } else{
        return {
            "Message": loseMsg,
            "User": move1,
            "Computer": move2
        };
    }
}

document.addEventListener("onload", startGame());