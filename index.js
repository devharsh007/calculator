
let  buffer = '0';
//const screen= document.querySelector('.calc-scr'); //it sets the '.calc-scr' class element to screen (its our output screen )
const screen = document.querySelector('.calc-scr');     
let runningTotal=0;     //showing the total after operation
let previousOperator=null; // yet to be committed


init();
function init(){  // initilising the main
    document.querySelector('.calc-btn') //selecting every for event buttons 
    .addEventListener("click", function (event) { //setting the event of button click to call the a  function
        buttonClick(event.target.innerText); // when '.calc-btn' clicks the buttonClick function will be called
    });
};
//initilising the function
function buttonClick(value){    
    if(isNaN(parseInt(value))){ 
        handleSymbol(value); 
    } // if it's not  a number, it will call handleSymbol() fun 
    // checking if the value is a symbol or number
    else{
        handleNumber(value);  
    } // if it's  a number, it will call handleNumber() fun
    rerender();   
}; 

//if  buffer is zero, it will set buffer to string and then it will make string as number to add other (tens, hundred, thousands) places in it
function handleNumber(number){ 
    if(buffer==='0'){
        buffer= number;
    }else{
        buffer += number;
    }
};

//algorithm to be added 
function handleSymbol(symbol){
    switch(symbol){     
        case 'C':       //if c is pressed screen should display '0'
            buffer='0';
            break;
        case '=':
            equals();   //will inhibit a function
            break;
        case '←':
            backarrow();    //will inhibit a function
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            handleMath(symbol);      //will inhibit a function
            break;        
    }
};

// we will assigning the buffer value to acreen to show the numbers entered
function rerender(){    
    screen.value = buffer;
}; 
//making function for backarrow
function backarrow(){
    if(buffer.length===1){
        buffer = "0";
    } else{
        buffer = buffer.substring(0,buffer.length-1);
    }
}

//for handling oprators
function handleMath(value){
    if(buffer===0){ 
        //do nothing
        return
    }
    const intbuffer= parseInt(buffer);  //changing the buffer str into intiger  
    if(runningTotal===0){
        runningTotal=intbuffer;        //changing the 0 to int so that opration with can also be done
    }else{
        flushOperation(intbuffer);      //calling a function
    }
    previousOperator=value;             //to remember what was ther previous operator was to add, etc.
    buffer='0';     // setting buffer to 0 so that another operation can also be started
}   
function flushOperation(intbuffer){
    switch(previousOperator){      //setting the operands for arthmetic operation
        case "+":   
        runningTotal+=parseInt(buffer);         
        break;
        case '-':
        runningTotal-=parseInt(buffer);
        break;
        case '*':
        runningTotal*=parseInt(buffer);
        break;
        case '/':
        runningTotal/=parseInt(buffer);
        break;
    }
}

function equals(){
    if(previousOperator===null){
        // need two numbers to do math
        return;
    }
    flushOperation(parseInt(buffer));       // doing operation after clicking = sign
    previousOperator = null;    // reseting all values
    buffer=+runningTotal;   //"" convert a number into a string cz string + num =str
    runningTotal=0;         // setting total to 0 again for another opration (reseting all values)

}




/* 

This JavaScript code is an implementation of a simple calculator. 
It has functions to handle numbers and symbols entered by the user and display the results on the screen.
 The screen is defined as an element with the class '.calc-scr'. 
 The code sets an event listener on the '.calc-btn' class element for click events, which calls the buttonClick function and passes the target inner text as a parameter. 
 This function then determines if the value is a symbol or number and calls the respective functions handleSymbol or handleNumber to handle it. 
 The rerender function updates the value of the screen element with the current value of the buffer variable. 
 The handleMath function performs arithmetic operations based on the symbol passed as a parameter and the flushOperation function executes the corresponding arithmetic operation. 
 The equals function performs the calculation when the equal sign (=) is pressed.
 
 
 */