// function store (skates, coffee){
//   var skateStrings = String(skates)
//     while(skateStrings.length < 3)
//     skateStrings = "0" + skateStrings
//     document.write(skateStrings + "skateboards")
//   var coffeeStrings = String(coffee)
//     while(coffeeStrings.lenght < 3)
//     coffeeStrings = "0" + coffeeStrings
//     document.write(coffeeStrings + "coffee")
// }
// store(4,1)

// function labelPrint(number,label) {
//   var numberString = String(number)
//   while (numberString.lenght < 3)
//     numberString = numberString
//   console.log(numberString + " " + label);
// }
//
// document.write(labelPrint(3,5))

// function noOne(a){
//   return document.write(44)
// }
//
// noOne()
//
// function pushes() {
//   var newArray = []
//   newArray.push("<br/>"+ "hello2")
//   console.log(pushes('peter'));
//   document.write(newArray)
// }
//
// pushes("hello")

// var arra = []
//
// arra.push("no1","no2","no3","no4")
//
// console.log(arra);
// document.write(arra)
//
// arra.join(" ")
//
// console.log('join',  arra.join(" "));
// console.log('pop', arra.pop("no2"))
// console.log('pop try thinky', arra.pop([3]))
// console.log('push new stuff', arra.push("new shit"));
//
// document.write("<br/>",arra);

// var person = {
//   name: "peter",
//   surname: "kona",
//   car: ['tesla',
//        'vw',
//        'ford',
//        'mustang',
//        'skoda']
// }

// function vlogLog(){
// console.log(person.peter + ' ' + person.car[0]);
// }

// function getName(){
//   document.write(person.name + " " + person.surname)
// }
//
// getName()
//
// vlogLog()
//
//
// var anObject = {
//   left:1,
//   right:2
// }
//
// delete anObject.left
//
// document.write(" ", anObject.right)
// console.log(anObject);

// var book = []
//
// function addEntry(events,days){
//   book.push({
//     events: events,
//     days: days
//   })
// }
//
// addEntry(["work", "touched tree", "pizza", "running",
//           "television"], ["1:10","2:30","5:20"]);
//
//
// var days = []
// function addDays(day,hours) {
//   days.push({
//     days:days,
//     hours:hours
//   })
// }
//
// addDays(["monday", "tuesday",'saturday'],["1:10","2:30","5:20"])
//
// document.write(days)
var array = [1,2,3,4]
for (var i = 0; i < array.length; i++){
  var current = array[i]
  console.log(current);
}

var names = ["peter", "nani", "kubo", "yvetka", "ludo"]

function getAllNames() {
  for(var i = 0;i < names.length;i++){
    var newNam = names[0] + " " + names[2]
    document.write(newNam)
    console.log(newNam)
  }
  for(var j = 0;j < names.length;j++){
    var newFam = names[4] + " " + names[2]
      document.write(newFam)
      console.log(newFam)
  }
}
function getFam(){
  for(var j = 0;j < names.length;j++){
    var newFam = names[j]
      document.write(newFam)
      console.log(newFam);
  }
}

// getAllNames()
// getFam()

var arr1 = ['x','x','x','x']
var arr2 = ['o','o','o','o']

function fun(){
  for (var i = 0;i<arr1.length;i++){
    var newOne = arr1[i]
      document.write(newOne)
      console.log(newOne)
      for (var j=0;j<arr2.length;j++){
        var newTwo = arr2[i]
          document.write(newTwo)
          console.log(newTwo)
   }
   console.log('hello', newTwo)
   console.log('from two', newOne)
     document.write(newTwo)
          document.write(newOne)
    }
}

// fun()

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

forEach(["Peter", "Kona", "Granfalloon"], console.log);

// var numbers = [1,2], sum = 0
// forEach(numbers, function(number){
//   sum += number
// })
document.write(sum);

var names = ["Peter Kona", "Nani Kona"],sum = 0
  forEach(names,function(number){
    sum += number
  })
  document.write('<br/>' + sum);
