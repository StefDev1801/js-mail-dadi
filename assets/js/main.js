console.log('Hi');
//MAIL
// - write a mail iside an input box

const emailsRegistered = ['andre.caponi@libero.it', 'rebecca420@gmail.com', 'stefano200118@gmail.com', 'agnese95spam@outlook.it']
//console.log(emailsRegistered);

//submit email
const mailCostumer = prompt("If you're already signed in please write your email")
console.log(mailCostumer);

let checkEmail = 0;

// - check if the mail is already inside the system (for)
for (let index = 0; index < emailsRegistered.length; index++) {
    const listEmail = emailsRegistered[index];
    console.log(listEmail);
    //     - if === true 
    if (listEmail == mailCostumer) {//the mail is in the array
        //       - start plaing dice
        console.log(mailCostumer);
        alert('You have an account');
        checkEmail++;
    }
}
if (checkEmail != 1) {
    alert ("You don't have an account")
}else{
    // - DICE GAME:
//     - generate random number from 1 to 6 (var com)
const diceCOM = Math.floor(Math.random() * 10)+1;
console.log("COMPUTER: " + diceCOM);
//     - generate random number from 1 to 6 (var player)
const dicePLAYER = Math.floor(Math.random() * 10)+1;
console.log("PLAYER: " + dicePLAYER);
alert ("Your dice: " + dicePLAYER + ", the computer dice: " + diceCOM)
//         if com>player
if (diceCOM > dicePLAYER) {
    alert('YOU LOST')
}else if(diceCOM == dicePLAYER){
    alert("It's a tie")
}else{
    alert("YOU WIN")
}
//             com win
//         else 
//             player win
}




