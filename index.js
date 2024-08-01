const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()* (maxNum - minNum + 1)) + minNum;

let attepmts = 0;
let guess ;
let running = true;

while(running == true){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess)
    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }
    else if(guess < minNum || guess > maxNum){
            window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
    }
    else{
        attepmts++;
        if(guess < answer){
            window.alert('Too low Try again');
        }
        
        else if(guess > answer){
            window.alert('Too high Try again');
        }
        else{
            window.alert(`You found the number in ${attepmts} attempts.The answer was been ${answer}`)
            running = false;
        }
    }
}