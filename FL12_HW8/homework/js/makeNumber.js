function makeNumber (string){
var number = '';
	for (let i = 0; i < string.length; i++) {
        if (Number.isInteger(parseInt(string[i]))) {
            number = number + string[i];
        }
    }
    return number;
}   
makeNumber('erer384jjjfd123'); 
makeNumber('123098h76gfdd'); 
makeNumber('ijifjgdj');