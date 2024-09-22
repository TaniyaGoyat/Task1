const playButton=document.getElementsByClassName("play")[0];
const lapButton=document.getElementsByClassName("lap")[0];
const resetButton=document.getElementsByClassName("reset")[0];
const second=document.getElementsByClassName("sec")[0];
const minute=document.getElementsByClassName("min")[0];
const msec=document.getElementsByClassName("msec")[0];
const laps=document.getElementsByClassName("laps")[0];
const clearButton=document.getElementsByClassName("lap-clear-button")[0];
const outer=document.getElementsByClassName("outer-circle")[0];
 
// ************CODE for Timer Working-
// variables
let isPlay=false; 
let secCnt=0;
let sec;
let centiCnt=0;
let centiSec;
let min;
let minCnt=0;
let isReset=false;

const toggleButton=()=>{
    lapButton.classList.remove("hidden")
    resetButton.classList.remove("hidden")
}
const play=()=>{
    if(!isPlay){
        playButton.innerHTML="Pause";
        outer.classList.add("animation-bg");
        //minute
        min=setInterval(()=>{
            if(minCnt===60){
                minCnt=0;
            }
        minute.innerText=`${++minCnt} : `;
    },1000*60);
        //second
        sec=setInterval(()=>{
            if(secCnt===60){
                secCnt=0;
            }
        second.innerText=`${++secCnt} : `;
    },1000);
    //mSecond
    centiSec=setInterval(()=>{
        if(centiCnt===100){
            centiCnt=0;
        }
    msec.innerText=`${++centiCnt}`;
    },10);
        isPlay=true;
    }else{
        playButton.innerHTML="Play";
         clearInterval(sec);
         clearInterval(centiSec);
         clearInterval(min);
        isPlay=false;
        outer.classList.remove("animation-bg");
    }
    toggleButton();
  
}
const playSec=()=>{
    setInterval(()=>{
        second.innerHTML=secCnt++;
    },1000); 
}


const reset=()=>{
    play();
    playButton.HTML="Play";
    lapButton.classList.add("hidden")
    resetButton.classList.add("hidden") ;
    minute.innerHTML=' 0 :'  
    second.innerHTML=' 0 :'; 
    msec.innerHTML=' 0'  
   
}

//***********
//*******CODE for Laps working-
let count=0;
const lap =()=>{

const li=document.createElement("li");
const cnt=document.createElement("span");
const timeStamp=document.createElement("span");

li.setAttribute("class","lap-item");
cnt.setAttribute("class","cnt");
timeStamp.setAttribute("class","time-stamp");

cnt.innerHTML=`#${++count}`;
timeStamp.innerHTML=`${minCnt} : ${secCnt} : ${centiCnt}`;
li.append(cnt,timeStamp);
laps.append(li);

clearButton.classList.remove("hidden");
}
const clearAll=()=>{
laps.innerHTML='';
laps.append(clearButton);
clearButton.classList.add("hidden");
}

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
lapButton.addEventListener("click",lap);
clearButton.addEventListener("click",clearAll);