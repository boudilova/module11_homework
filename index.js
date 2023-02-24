/*
задача из тренажера, но я ее немного поменяла, найдем цифры в строке и выведелм их
поскольку тут все зависит от того как будет использоваться эта функция, 
то предположу что нам нужно найти цифры в строке и если они есть то все ок, что-то потом мы с ними сделаем
*/
function containsDigit (str) {
    if (typeof(str)!= "string"){
        return false;
    }
    let regexp = /\d/;
    if(str.match(regexp) == null){
     return false; 
    }else{
      return true;
    };
};
  module.exports = containsDigit;