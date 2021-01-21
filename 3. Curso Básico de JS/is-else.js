var rock = "rock"
var paper = "paper"
var scissor = "scissor"

function RockPaperScissor(me, laptop) {
    if (me == laptop) {
        console.log("Jinks")
    } else if ((me == rock) && (laptop == paper)) {
        console.log("You Lose")
    } else if ((me == rock) && (laptop == scissor)) {
        console.log("You Win")
    } else if ((me == paper) && (laptop == rock)) {
        console.log("You Win")
    } else if ((me == paper) && (laptop == scissor)) {
        console.log("You Lose")
    } else if ((me == scissor) && (laptop == rock)) {
        console.log("You Lose")
    } else if ((me == scissor) && (laptop == paper)) {
        console.log("You Win")
    }
}