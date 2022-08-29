function insertCalculator(val) {

	if($('#calculatorValue').val() != 0)
	{
		$('#calculatorValue').val($('#calculatorValue').val()+val);
	}
	
	else{
		$('#calculatorValue').val(val);	
	}
}

function calculate(operand1, operator, operand2){

	var answer = 10*10;
	$('#calculatorValue').val(answer);
}

function clearCalculator(){
	$('#calculatorValue').val('0');
}

function invertCalculator(){
	$('#calculatorValue').val(-$('#calculatorValue').val());
}