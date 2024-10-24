const display = document.querySelector('.display'); 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body'); 
const lastNumber = display.value[display.value.length - 1]; 
const regexCalculate = /^[(0-9)*\(\)\+\/-]+$/; 

display.maxLength = 15;

body.addEventListener('keypress', function(event) {
    const char = String.fromCharCode(event.keyCode);
	const keyCodeEvent = event.keyCode === 13;
	const validateRegex = regexCalculate.test(display.value + char);
	
	if (!validateRegex) {
		event.preventDefault();
    } else {
        display.value;
    }
	
	if(keyCodeEvent) {
		showResults(); 
	};
});

function clearDisplay() {
	display.value = ''; 
}; 

function showResults() {
	let result = display.value; 
	result = eval(result); 

	if(!result) return; 

	display.value = result; 
};

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
		const element = event.target
		
		if(element.classList.contains('button-num')) { 
			display.value += element.innerText; 
		}

		else if (element.classList.contains('clear')) {
			if (!display.value) return; 
			clearDisplay(); 
		}

		else if(element.classList.contains('del')) {
			if (!display.value) return; 
				display.value = display.value.slice(0, -1); 
		}

		else if(element.classList.contains('equals')) {
			showResults();  
		}

		else if(element.classList.contains('point')) {
			if(!display.value.includes('.') & display.value.trim() != '') {
				display.value += element.innerText;
			}

			return; 
		};
	});
});
