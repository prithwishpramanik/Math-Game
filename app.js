document.querySelector('.container').style.display='none'


let container=document.querySelector('.container')
let time=document.querySelector("#time");
let start =  document.querySelector("#start")
let userInput=document.querySelector("#user_input")
let score=document.querySelector("#score")
let answer = 2
let gametime = 60
let fnum,snum,operator
const op=["+","-","*","/"]

let fnumUI=document.querySelector("#fnumUI");
let snumUI=document.querySelector("#snumUI");
let opUI=document.querySelector("#opUI");

let marks = 0

document.querySelector('#start').addEventListener('click',function (){
   container.style.display="block";
  start.style.display="none";
  score.style.display="none";



    timer();
})

userInput.addEventListener('keypress',function (e){
    if (e.which===13){

        if (answer===Number(userInput.value)){

            marks=marks+3;


            document.querySelector("#response").textContent="Correct"
            document.querySelector("#marks").textContent = marks
            document.querySelector("#response").style.color="green"



        }else{

            marks = marks-3
            document.querySelector("#response").textContent="Incorrect"
            document.querySelector("#response").style.color="red"

            document.querySelector("#marks").textContent = marks


        }
        userInput.value='';
        fnum=Math.floor(Math.random() * 20);
        snum=Math.floor(Math.random() * 20);// returns a random integer from 0 to 9
        operator=op[Math.floor(Math.random()*op.length)];

        fnumUI.textContent=fnum;
        snumUI.textContent=snum;
        opUI.textContent=operator;

        if (operator==="+"){
            answer=fnum+snum;
        }else if (operator==="-"){
            answer = fnum-snum;
        }else if (operator==="*"){
            answer = fnum*snum;
        }else if(operator === "/"){
            answer = fnum/snum;
        }


    }
})

function timer(){
   let x= setInterval(function (){
        if (time.innerText>0){

            let newTime = time.innerText - 1;
            time.innerText = newTime;


        }else{
            clearInterval(x);
            container.style.display="none";
            start.style.display = "block";
            time.innerText = gametime;
            score.style.display="block"
            score.innerText="your score is  "+ marks
            marks = 0;
            document.querySelector('#response').style.color="black"
            document.querySelector('#response').innerText="----"
            document.querySelector("#marks").textContent="0"



        }

    },1000)
}