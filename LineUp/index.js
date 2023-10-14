$(document).ready(function() {
	changeColor();
	$('#start').click(function(){
		start();
	})

	async function start() {
		let seconds = 10;
		let count = 5;

		$.get('dataController.php?get_data', function(data) {
			data = JSON.parse(data);
			seconds = data[0];
			count = data[1];
		})

		for (let i = 0; i < count; i++) {
			await asyncCall(seconds);
			await rest();
		}

		return;
	}

	function resolveAfter1Second() {
	  return new Promise(resolve => {
	    setTimeout(() => {
	      resolve('resolved');
	    }, 1000);
	  });
	}

	async function asyncCall(x) {
	  changeColor();
	  while (x > -1) {
	  	$('#timer').text(x);
	    let result = await resolveAfter1Second();
	    x--;
	  }
	}

	async function rest() {
	  changeColor(true);
	  x = 5;
	  while (x > -1) {
	  	$('#timer').text(x);
	    let result = await resolveAfter1Second();
	    x--;
	  }
	}

	function changeColor(isWait = false) {
		let backColor   = '#282b4e';
		let fontColor   = '#edceff';
		let buttonColor = '#5c5a98';

console.log(isWait);
		if (isWait) {
			backColor   = '#ff9a06';
		 	fontColor   = '#fffba1';
			buttonColor = '#ffce57';
		}

		$('#timer').css('color', fontColor)
		$('#start').css('color', fontColor)
		$('#start').css('background-color', buttonColor)
		$('#start').css('border-color', fontColor)
		$('.content').css('background-color', backColor)
	}
})