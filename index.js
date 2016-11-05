// function rev(word) {
//   var newWord = word.split('')
//                     .reverse()
//                     .join('')
//   return newWord
// }
// document.write(rev('nani'))


// switch (prompt("give me a number")) {
//   case '1':
//     document.write('I')
//     break;
//   case '2':
//     document.write('II')
//     break;
//   case '3':
//     document.write('III')
//     break;
//   case '4':
//     document.write('IV')
//     break;
//   case '5':
//     document.write('IV')
//     break;
//   case '6':
//     document.write('VI')
//     break;
//   case '8':
//     document.write('VIII')
//     break;
//   case '9':
//     document.write('IV')
//     break;
//   case '10':
//     document.write('X')
//     break;
// }

var romanNumber = new Array();
roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
var decimal = new Array();
decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
function decimalToRomanSimple(value) {
  if (value <= 0 || value >= 4000) return value;
    var romanNumeral = "";
    for (var i=0; i<roman.length; i++) {
      while (value >= decimal[i]) {
        value = value - decimal[i];
        romanNumeral = romanNumeral + roman[i];
      }
    }
    return romanNumeral;
}

document.write(decimalToRomanSimple(33))
