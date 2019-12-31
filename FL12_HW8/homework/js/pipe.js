function addOne(x){
    return x + 1;
}
function pipe(number, ...pipeFunc){
    for(let j = 0; j < pipeFunc.length; j++){
        number = pipeFunc[j](number)
    }
    return number
}
pipe(1, addOne); //=> 2
pipe(1, addOne, addOne); //=> 3
