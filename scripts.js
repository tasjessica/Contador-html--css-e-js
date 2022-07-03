let count = 0;

const CURRENT_NUMBER = document.getElementById('numero');

function aumentar() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
	colorirNumero();
}

function diminuir() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	colorirNumero();
}

function test() {
	kdowkdpo;
}

// menor do que zero vai ficar vermelho e maior ficará verde 

function colorirNumero(){
	if (count < 0){
		document.getElementById('numero').style.color="#990000";
	}else if(count >0){
		document.getElementById('numero').style.color="#009900";
	}else{
		document.getElementById('numero').style.color="black";
	}
}
