const multiply = require('./multipier.js');

class ViewManager {

	connectEventHandlers() {
		document.getElementById('form-numbers')
		.addEventListener(
			'submit', 
			this.onSubmit.bind(this));
	}

	onSubmit(event) {
		event.preventDefault();

		let num1 = document.getElementById(
			'input-num1').value;
		let num2 = document.getElementById(
			'input-num2').value;

		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);

		let product = multiply(num1, num2);		

		let idIndex = 3;

		while(document.getElementById('input-num' + idIndex)){		
			let num = document.getElementById(
			'input-num' + idIndex).value;
			console.log(num);
			num = parseInt(num, 10);

			product = multiply(product, num);

			idIndex++;
		}

		this.renderProduct([product]);
	}
	
	renderProduct(product) {
		document.querySelector('.product').textContent = product;
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();