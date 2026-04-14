// GREETING
function updateGreeting(){
let h=new Date().getHours();
let msg="Good Evening";
if(h<12) msg="Good Morning";
else if(h<17) msg="Good Afternoon";
document.getElementById("greeting").innerText=msg+" Pooja 🌸";
}

// DATE TIME
setInterval(()=>{
document.getElementById("datetime").innerText=new Date().toLocaleString();
},1000);

// MUSIC
function playMusic(){document.getElementById("focus-music").play();}
function pauseMusic(){document.getElementById("focus-music").pause();}

// STOPWATCH
let sw=0,int;
function toggleStopwatch(){
if(int){clearInterval(int);int=null;}
else int=setInterval(()=>{sw++;updateSW();},1000);
}
function updateSW(){
let h=Math.floor(sw/3600),m=Math.floor(sw%3600/60),s=sw%60;
document.getElementById("stopwatch").innerText=
`${h.toString().padStart(2,0)}:${m.toString().padStart(2,0)}:${s.toString().padStart(2,0)}`;
}
function resetStopwatch(){sw=0;updateSW();clearInterval(int);}

// ROTA AUTO
const shifts=["M1","M2","E1","E2","N1","N2","OFF","GEN"];
const start=new Date(localStorage.getItem("start")||new Date());
localStorage.setItem("start",start);

function getDay(){
let diff=Math.floor((new Date()-new Date(start))/(1000*60*60*24));
return diff%8;
}

function render(){
let d=getDay();
document.getElementById("rota-display-title").innerText=
`Rota Day ${d+1} (${shifts[d]})`;
}

render();
updateGreeting();