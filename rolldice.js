function rollDice() {

    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var result = document.getElementById("result");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;

        if (diceTotal == 1) {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Best Consumer Solution";
        } 
        else if (diceTotal == 2) {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Best Enterprise Solution";
        } 
        else if (diceTotal == 3) {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Best African Solution";
        }
        else if (diceTotal == 4) {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Most Innovative Solution";
        }
        else if (diceTotal == 5) {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Best Gaming Solution";
        }
        else if (diceTotal == 6) {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Best Health Solution";
        }
        else if (diceTotal == 7) {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Best Agriculture Solution";
        }
        else if (diceTotal == 8) {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Best Educational Solution";
        }
        else if (diceTotal == 9) {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Best Financial Solution";
        }
        else if (diceTotal == 10) {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Best Hackathon Solution";
        }
        else if (diceTotal == 11) {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Best South African Solution";
        }
        else {
            result.innerHTML = "The winning category for MTN App of the Year in 2022 will be Best Campus Cup Solution";
        }
}
