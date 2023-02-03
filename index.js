/* WHY THE SCREEN DOESNT SHOWING THE VALUE I AM ENTERING 
PLEASE HELP I CANT SOLVE IT*/



let  buffer = '0';
const screen = document.querySelector('.calc-scr');
if (!screen) {
    console.error('The .calc-scr class element was not found');
}

//const screen= document.querySelector('.calc-scr'); //it sets the '.calc-scr' class element to screen (its our output screen )
init();
function init(){  // initilising the main
    document.querySelector('.calc-btn') //selecting every for event buttons 
    .addEventListener("click", function (event) { //setting the event of button click to call the a  function
        buttonClick(event.target.innerText); // when '.calc-btn' clicks the buttonClick function will be called
    });
};
function buttonClick(value){    
    if(isNaN(parseInt(value))){ 
        handleSymbol(value); 
    } // if it's not  a number, it will call handleSymbol() fun 
    // checking if the value is a symbol or number
    else{
        handleNumber(value);  
    } // if it's  a number, it will call handleNumber() fun
    rerender();   
}; //initilising the function

function handleNumber(number){ 
    if(buffer==='0'){
        buffer= number;
    }else{
        buffer += number;
    }
};//if  buffer is zero, it will set buffer to string and then it will make string as number to add other (tens, hundred, thousands) places in it

function handleSymbol(symbol){
    buffer += symbol;
    rerender();
};
 //algorithm to be added 
 
function rerender(){    
    screen.value = buffer; 
}; // we will assigning the buffer value to acreen to show the numbers entered