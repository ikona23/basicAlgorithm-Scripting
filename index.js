// function palindrome(str) {
//
//   cleanString = str.toLowerCase()
//   reverseString = cleanString.split("").reverse().join("")
//   console.log(cleanString)
//   console.log("thisi s string", reverseString)
//
//   if(cleanString === reverseString) {
//     return true
//   }else{
//     return false
//   }
// }
//
// console.log(palindrome("Peter konam"))
// console.log(palindrome("eye "))
// console.log(palindrome("madam"))
// console.log(palindrome("0_0 (: /-\ :) 0-0"))

// function revString (str){
//   return str.split('').reverse().join('')
// }
//
// console.log(revString("peterkona"))

// function palindrome(str) {
//   return str.replace(/[\W_]/g, '').toLowerCase() ===
//       str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
// }
//
// console.log("this is palindrome", palindrome("peter"))

// function x(str) {
//   splitte = str.split(' ')
//   maxNum = 0
//   for (m in str){
//     if (m>maxNum){
//       maxNum=m
//     }
//   }
//
//   return m.length
//
// }
//
// console.log(x("peterkonaje cool typek"))

// function findLog(str){
//   var words =str.split('')
//   var maxLength = 0
//
//   for (var i=0; i<words.length;i++){
//     if(words[i].length>maxLength){
//       maxLength=words[i].length
//     }
//   }
//   return maxLength
// }

// findLog("peterkona je macher")

// function fndlog(xstr){
//   var words = xstr.split(" ")
//   var maxWords = 0
//
//   for(var i=0;i<words.length;i++) {
//     if (words[i].length>maxWords){
//       maxWords=words[i].length
//     }
//   }
//   return maxWords
// }
//
// console.log(fndlog("this is our name toto je najvascietotocisloje string"))
//
// function hihest(x){
//   var words = x.split(" ")
//   var maxWord = 0
//
//   for (var i in words) {
//     if (words[i].length>maxWord) {
//       maxWord=words[i].length
//     }
//   }
//   return maxWord
// }
//
// console.log(hihest("thi is longestestness number"))
// console.log(hihest("thi is longestestness number"))
//

// function m(str){
//   var w = str.split(' ')
//   var m = 0
//
//   for (var i in w) {
//     if (w.[i].length>m){
//       m=w.length
//     }
//   }
// }
//
// function findLongestWord(str) {
//   var words = str.split(' ')
//   var maxNo = 0;
//
//   for (i in words){
//     if (words[i].length<maxNo){
//       maxNo=words[i].length;
//     }
//   }
//   return maxNo;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

// function min(x) {
//   words = x.split(' ')
//   mien =  0
//
//   for (i in words) {
//     if (words[i].length>mien){
//       mien = words[i].length
//     }
//   }
// return mien
// }
//
// document.write((min("eee kjk  k j   j j k ji i ijddddddoj ")))


function palindrome(str) {
  word=str.toLowerCase()
  revWord= word.split(" ").reverse().join("")

  if(word===revWord) {
    return true
  }else{
  return false
  }
  }
document.write(palindrome("peter"))
