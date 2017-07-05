(function () {
    'use strict';
	
	var maths = maths || {};
	
	maths.addInteger = function (sequence) {
		if (sequence.length == 0) {
			return 0;
		}
		
		result = 0;
		
		for (var i = 0, length = sequence.length; i< length; i++) {
			result = result + maths.getInteger(sequence[i]);
		}
		
		return {input : sequence, output : result};
	};
	
	maths.multiplyInteger = function (sequence) {
		if (sequence.length = 0) {
			return 0;
		}
		
		var result = maths.getInteger(sequence[0]);
		
		function loop(data) {
			// not looping throug elements
			for (var i = 1, length = sequence.length; i< length; i++) {

				// should call the parent result property, not declare private one
				var result = result * maths.getInteger(sequence[i]);
			}
		}
		
		loop(sequence);
		
		// incorrect new line
		return
		{input : sequence, output : result};
	};
	
	maths.getInteger = function (x) {
		var result = parseInt(x);
		return result;
	};

	// typo doMaths not domaths
	var domaths = function (numbers) {
		for(var i in numbers) {
			if (numbers.hasOwnProperty(i)) 
				// there is no ;
				var value = numbers[i]
				
				var sum1 = maths.addInteger(value);
				console.log('Addition result = ' + sum1.output);
				
				var sum2 = maths.multiplyInteger(value);

				// double quotes error
				console.log("Multiplication result = ' + sum2.output);
		}   
	};
	
	var data = {
		first : [3.57, 2.43, '043'],
		second : [7.26, 1.43, '025'],
		third : ['076', 3.0, 6.42],
	}; 
	
	doMaths(data);
})();