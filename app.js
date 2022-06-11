const keys = document.querySelector('.calc-keys');
const display = document.getElementById('display');

keys.addEventListener('click' , (event) =>{
  let target = event.target;
  if(!target.matches('button')) {return  false;}
  //display.value += target.value;
  
  if(target.classList.contains('equal')){
    try {
    let result =eval(display.value);
    display.value=result;
  }catch(e){
    if(e instanceof SyntaxError){
      alert('you have a wrong entry')
    }
  }
  }else if(target.classList.contains('all-clear')){
    display.value='';
  
  }else {
    display.value += target.value;
  }
});