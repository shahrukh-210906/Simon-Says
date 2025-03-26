const body = document.querySelector("body");
const inst = document.querySelector("h2");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const salmon = document.querySelector("salmon");
const pink = document.querySelector(".pink");
let btn = document.querySelector(".btn")
let btns = ["blue", "green", "pink", "salmon" ];
 

let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

document.addEventListener("click", ()=>{
    if (started === false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});


function btnFlash(btn){
        btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");

    }, 500);
}
 
function userFlash(btn){
    btn.classList.add("user-flash");
setTimeout(()=>{
    btn.classList.remove("user-flash");

}, 300);
}


function levelUp(){
    userSeq = [];
    level = level + 1;
    inst.innerHTML = "level : " + level;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
    
    
}

function checkAns(idx){
    if (userSeq[idx]===gameSeq[idx]){
        if (userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1500)
        }
    }else{
        inst.innerHTML = `Game Over!! Your score is ${level-1}`
        setTimeout(resetgame,2000)
    }  
}

function resetgame(){
    started = false;
    gameSeq= [];
    userSeq = [];
    level = 0;
    inst.innerHTML = "click anywhere to start the game"
}

function btnPress (){
    console.log(this);
    let btn = this;
    userFlash(btn); 

    userClr = btn.getAttribute("id");
    userSeq.push(userClr);
    checkAns(userSeq.length-1);
    
}


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}