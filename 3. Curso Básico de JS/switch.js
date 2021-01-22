var rock = "rock"
var paper = "paper"
var scissor = "scissor"

function rockPaperScissor(me, laptop_choice) {

    switch (true) {
        case (me == laptop_choice):
            console.log("Jinks")
            break;
        case ((me == rock) && (laptop_choice == paper)):
            console.log("You Lose")
            break;
        case ((me == rock) && (laptop_choice == scissor)):
            console.log("You Win")
            break;
        case ((me == paper) && (laptop_choice == rock)):
            console.log("You Win")
            break;
        case ((me == paper) && (laptop_choice == scissor)):
            console.log("You Lose")
            break;
        case ((me == scissor) && (laptop_choice == rock)):
            console.log("You Lose")
            break;
        case ((me == scissor) && (laptop_choice == paper)):
            console.log("You Win")
            break;
    }
}