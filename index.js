         

const number=document.querySelector("#demo");
let counter=0;
number.textContent=counter;
number.style.color="#6495ED";


function counterIncrement () {
counter=counter+1;
number.textContent=counter;
colorPicker();
}

function counterDecrement () {
    counter=counter-1;
    number.textContent=counter;
    colorPicker();
}
 
  function reset(){
    counter=0;
    number.textContent=counter;
    colorPicker();
  }       

  function colorPicker(){
  if(counter>0){
    number.style.color="green";
  }
  else  if(counter<0){
    number.style.color="red";
  }
  else{
   number.style.color="#6495ED";
  }
  }
