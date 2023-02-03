/* WHY THE SCREEN DOESNT SHOWING THE VALUE I AM ENTERING 
PLEASE HELP I CANT SOLVE IT*/



let  buffer = '0';
const screen= document.querySelector('.calc-scr'); //it sets the '.calc-scr' class element to screen (its our output screen )
init();
function init(){  // initilising the main
    document.querySelector('.calc-btn') //selecting every for event buttons 
    .addEventListener("click", function (event) { //setting the event of button click to call the a  function 
        buttonClick(event.target.innerText); // when '.calc-btn' clicks the buttonClick function will be called
    });
};
function buttonClick(value){    //initilising the ffunction 
    if(isNaN(parseInt(value))){ // checking if the value is a symbol or number
        handleSymbol(value); // if it's not  a number, it will call handleSymbol() fun 
    }
    else{
        handleNumber(value); // if it's  a number, it will call handleNumber() fun 
    }
    rerender();   
};

function handleNumber(number){ //if  buffer is zero, it will set buffer to string and then it will make string as number to add other (tens, hundred, thousands) places in it
    if(buffer==='0'){
        buffer= number;
    }else{
        buffer += number;
    }
};
function handleSymbol(symbol){
    console.log('symbol');
};
 
function rerender(){    // we will assigning the buffer value to acreen to show the numbers entered
    screen.innerText = buffer; 
};