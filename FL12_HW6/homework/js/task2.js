const a=Number(prompt('Please enter a'));
const b=Number(prompt('Please enter b'));
const c=Number(prompt('Please enter c'));
    if(a===0 || b===0 || c===0){
    console.log('A triangle must have 3 sides with a positive definite length');
    }else if (a + b < c || b + c < a || a + c < b){
    console.log('Triangle doesn’t exist');
    } else if(a === b && b === c && c === a){
    console.log('Equilateral triangle');
    } else if(a === b && a !== c && c!== b){
    console.log('Isosceles triangle');
    }else { 
    console.log('Scalene triangle');
    }
