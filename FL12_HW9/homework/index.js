// function convert()
function convert(...arg){
    let arr = [];
    for(let i = 0; i< arg.length; i++){
       if(typeof arg[i] === 'string'){
           arr.push(+arg[i])
       }else{
           arr.push(`${arg[i]}`)
       }
    }
    return arr
}
console.log(convert('1', 2, 3, '4'))
// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // logs 2 4 6
function executeforEach(arg, callback) {
    for(let i = 0; i < arg.length; i++) {
       callback(arg[i]);
    } 
}
executeforEach([1,2,3], function(el) { 
    console.log(el*2);
});
//mapArray([2, '5', 8], function(el) {return el + 3}) // returns [5, 8, 11]
function mapArray(arg,callback){
    let mapped = [];
    for(let i =0; i< arg.length; i++){
        mapped.push(callback(parseInt(arg[i])))
    }
    return mapped
}
console.log(mapArray([2, '5', 8], function(el) { 
    return el + 3 
}))
//filterArray([2, 5, 8], function(el) { return el % 2 === 0 }) 
function filterArray(arg,callback){
    let passed=[];
    for (let i=0; i<arg.length; i++){
      if (callback(arg[i])){
        passed.push(arg[i]);   
      }  
    }
    return passed;
}
console.log(filterArray([2, 5, 8],function(el){
    return el%2 === 0
}))
// function flipOver
function flipOver(str){
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}    
console.log(flipOver('hey world'))
//function makeListFromRange
function makeListFromRange(arg){
    let arr =[arg[0]];
    for(let i=arg[0]; i<arg[arg.length-1]; i++){
        let plus = arr[arr.length-1] + 1;
        arr.push(plus)
    }
    return arr
}
console.log(makeListFromRange([2, 7]))
//function getArrayOfKeys
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];
function getArrayOfKeys(){
    let arg = [];
    executeforEach(actors, function(el){
        arg.push(el.name)
    })    
    return arg
}
console.log(getArrayOfKeys())
// substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']
function substitute(arg){
    let mapped = [];
    let i = 0;
    mapArray(arg, function (el) {
        if (el > 30) {
            mapped[i] = el;
        } else {
            mapped[i] = '*';
        }
        i++;
    });
    return mapped;
}
substitute([58, 14, 48, 2, 31, 29]);
//function getPastDay
function getPastDay(date, daysPast){
    let oldDate = date.getDate() - daysPast;
    let newDate = new Date();
    newDate.setDate(oldDate);
    return newDate;
//function formatDate
