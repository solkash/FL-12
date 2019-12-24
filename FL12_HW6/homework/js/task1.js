let a = parseFloat(prompt('Please enter a',''));
let b = parseFloat(prompt('Please enter b',''));
let c = parseFloat(prompt('Please enter c',''));
let n=4;
let i = 2;
let d =b * b - n * a * c;
let sqrD = Math.sqrt(d);
let x,x1,x2;
    if (a === 0 || b===0 || c===0){
        console.log('Invalid input data');
    }else if (d > 0){
        x1 = (-b+sqrD) / i*a;
        x2 = (-b-sqrD) / i*a;
        console.log(`x1 = ${Math.round(x1)}; x2 = ${Math.round(x2)}`);
    }else if (d === 0){
        x =(- b - sqrD) / (i*a);    
        console.log(`x = ${Math.round(x)}`);
    }else {
        console.log('No solution');  
    }  