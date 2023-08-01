// function to display
function display(value){
    document.querySelector('input[name="display"]').value += value;
}

// function to evaluate case
function calculate(){
    try{    
        const display = document.querySelector('input[name="display"]');
        display.value = eval(display.value);
    }catch(error){
        document.querySelector('input[name="display"]').value = 'Error';
    }
}
// function AC
function allClear(){
    document.querySelector('input[name="display"]').value = "";
}

// function to clear character
function clearChar(){
    const display = document.querySelector('input[name="display"]');
    display.value = display.value.toString().slice(0,-1);
}

// adding event listener to buttns

document.addEventListener('DOMContentLoaded',function(){
    const buttons = document.querySelectorAll('.calculator input[type="button"]');
    buttons.forEach(function(button){
        button.addEventListener('click',function(){
            const value = display.value;
            switch(value){
                case 'AC':
                    allClear();
                    break;
                case 'DEL':
                    clearChar();
                    break;
                case '=':
                    calculate();
                    break;
                default: 
                    display(value);
                    break;
            }
        });
    });
});
