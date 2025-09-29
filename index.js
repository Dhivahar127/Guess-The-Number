
const min=1;
const max=100;
let ans=Math.floor(Math.random()*(max-min+1))+min;

 
 let submit=document.getElementById("submit")
 let exit=document.getElementById("exit")


let attempt=0;
let wincount=0;
let playround=1;

let run=true;
let print=document.getElementById("print");
 
submit.onclick=function(){
 if(!run) return;
 
 
 let guess1=document.getElementById("input");
 


 
  
    //guess=window.prompt(`guess the num `);
    guess=parseInt(guess1.value);
    
   

    if(guess<min||guess>max){
    print.textContent="please enter the valid number";
  }
  else{
    attempt++;
    if(attempt===10 && guess !== ans){
      print.textContent=`you failed ${attempt} attempt:Try again`;
      run=false;
      return;
    }
    
     if(guess < ans){
        print.textContent= ("This is too low! Try again");
    }
    else if(guess > ans){
        print.textContent=("This is too high! Try again");
    }
    else{
      wincount++
        print.textContent=(`Congartulation! You won. In the ${attempt} attempt `);
        run=false;
        }
  }


}
exit.onclick=function(){
 
  
  //playround++;
  print.textContent=`You have won ${wincount}  Games Out of ${playround} rounds`
}
reset.onclick=function(){
  attempt=0;
  playround++;
  run=true;
  print.textContent="Gmae Restarted";
  ans=Math.floor(Math.random()*(max-min+1))+min;
}