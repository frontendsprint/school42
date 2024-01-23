let variableNumber = 15;
let variableBigInt = 1000000000n;
let variableString = 'Some text';
let variableBoolean = true;
let variableNull = null;
let variableUndefined = undefined;
let variableObject = {}
let variableSymbol = Symbol('a');
let variableFunction = function(){console.log('Some text')}
alert('variableNumber is ' + typeof(variableNumber)+'\n'+
		'variableBigInt is ' + typeof(variableBigInt)+'\n'+
		'variableString is ' + typeof(variableString)+'\n'+
		'variableBoolean is ' + typeof(variableBoolean)+'\n'+
		'variableNull is ' + typeof(variableNull)+'\n'+
		'variableUndefined is ' + typeof(variableUndefined)+'\n'+
		'variableObject is ' + typeof(variableObject)+'\n'+
		'variableSymbol is ' + typeof(variableSymbol)+'\n'+
		'variableFunction is ' + typeof(variableFunction)+'\n'
);