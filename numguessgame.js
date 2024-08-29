const maxnum = 100;
const minnum = 1;
const rand = Math.floor(Math.random()*maxnum)+minnum;
let userint;
let guess = 0;
let gamerun = true;
while(gamerun){
    userint=window.prompt("guess a number between 1 and 100");
    userint = Number(userint);
    if(userint<rand){
        alert("too low! try again");
        guess+=1;
    }
    else if(userint>rand){
        alert("too high!  try again");
        guess+=1;
    }
    else{
        alert("congrats!!! you won");
        alert(`it took you ${guess} guesses.`);
        gamerun=false;
    }
}