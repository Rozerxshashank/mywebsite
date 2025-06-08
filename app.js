let boxx=document.querySelectorAll(".box");
let resetbut=document.querySelector("#reset");
let ngamebut=document.querySelector("#ngame");
let ending=document.querySelector(".ending");
let end=document.querySelector("#end");
let turnX=true;
 const audio = document.getElementById('myAudio');
 const winaudio = document.getElementById('myAudio3');
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const rstgame=(s)=>{

}
let boxcount=0;

boxx.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX){
        box.innerText="X";
        turnX=false;
    }else{
        box.innerText="O";
        turnX=true;
    }
    box.disabled=true;
    boxcount++;
    let winden =check();
    if (boxcount===9 && !winden){
      draw();
    };
  })});
  const close=()=>{
    for (let box of boxx){
      box.disabled=true;
    }};
  const start=()=>{
    for (let box of boxx){ 
      box.disabled=false;
      box.innerText="";}
  };
  const reset=()=>{
    turnX=true;
    ending.classList.add("lll");
    boxcount=0;

    start();

  };
 
  const draw=()=>{
    end.innerText="It's a Draw";
    ending.classList.remove("lll");
    close();
  };
  
  const wnr=(winner)=>{
    end.innerText=(`Congrats The Winner is "${winner}"`);
    ending.classList.remove("lll");
    close();
    winaudio.play();
  };
const check=()=>{
    for (let pattern of win){
    
          let pv1=boxx[pattern[0]].innerText;
          let pv2=boxx[pattern[1]].innerText;
          let pv3=boxx[pattern[2]].innerText;
          if(pv1!="" && pv2!="" && pv3!=""){
            if (pv1===pv2 && pv2===pv3){
              console.log(`${pv1} is the winner`);
              wnr(pv1);
              return true;

              
            }
          }
        
    }
}
   boxx.forEach(box => {
    box.addEventListener('click', () => {
      audio.currentTime = 0; // rewind to start if already playing
      audio.play();
    });
  });

 


ngamebut.addEventListener("click",reset);
resetbut.addEventListener("click",reset);
//950101  3D0000  FF0000  000000
