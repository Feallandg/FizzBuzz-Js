const resultado = fizzBuzz(1);
console.log(resultado);

function fizzBuzz(entrada) {
    if(typeof entrada !== 'number')
        return 'ñ e um numero';
    if(entrada % 3 === 0)
        return 'fizz';
    if(entrada % 5 === 0)
        return 'buzz';
    if((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'fizzbuzz';
    return entrada;

}