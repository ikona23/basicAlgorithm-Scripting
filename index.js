var cars = [
  {name: 'skoda', type:'hatchback'},
  {name:'toyota', type:'sport'},
  {name:'skoda', type:'sedan'},
  {name:'chevrolet', type:'sedan'},
  {name:'chevrolet', type:'sedan'},
  {name:'toyota', type:'4x4'}
]

const sedan = []
for(var i=0;i<cars.length;i++)
  if(cars[i].type === 'sedan')
  sedan.push(cars[i])

  console.log('find sedan', sedan[0], sedan[1]);

  const sports = []
  for(var i=0;i<cars.length;i++)
    if(cars[i].type === 'sport')
    sports.push(cars[i])

    console.log('this are sports cars', sports);




var skodaName = []
for (var i = 0; i < cars.length; i++)
  if(cars[i].name === 'skoda')
  skodaName.push(cars[i])

   console.log('this is skoda name', skodaName[0]);

var orders = [
  {amount: 200},
  {amount: 200},
  {amount: 440},
  {amount: 6640},
  {amount: 3220},
  {amount: 300},
  {amount: 5400},
  {amount: 5500},
  {amount: 4300},
]

var loopMap = orders.map((x) => x.amount)

// var ordersMap = orders.map((x) => document.write(x.amount + '<br/>'))
var filterOrder = orders.map((x) => document.write('<br/>' + 'Amount is: ' + '$' + x.amount))

var totalAmount = orders.reduce((sum, order) => document.write('<br/>'+ 'investigated' +sum + order.amount, 0))

var totalAmount = 0
for (var i = 0; i < orders.length; i++){
  totalAmount += orders[i].amount
}


// var hatchbacks = cars.map(function(car){
//   return car.type === 'hatchback'
// })
var iSedan = function(car){
  return car.type === 'sedan'
}
// document.write('<br/>' + 'this are hatchbacks' + iSedan)

var carsList = cars.map((car) => car.name)
document.write('<br/>' + 'Map all cars with map function: <br/>' + carsList)

var mapTypes = cars.map((types) => types.type)
document.write('Types of cars with map function: <br/>' + mapTypes.join('<br/>'))

var typesOfCars = cars.map((x) => x.name)

document.write('<br/> Types fo cars ES6' + typesOfCars)

var namesCars = []
for (var i = 0; i < cars.length; i++){
  namesCars.push(cars[i].name)
}

document.write('<br/> Types of namesCars' + namesCars)
var sport = cars.filter(iSedan)

var testMe = cars.map((x)=>x.type)

console.log('test me' + testMe);

var listNames = cars.map((x) => x.name)

console.log('List names' + listNames.join('<br/>'));

var zeroOne = cars.map((y)=>y.type)

console.log('This is 3 :' + zeroOne.join());
document.write('This is zero One' + zeroOne.join('<br/>'))

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
// var array = [1,2,3,4]
// for (var i = 0; i < array.length; i++){
//   var current = array[i]
//   console.log(current);
// }
//
// var names = ["peter", "nani", "kubo", "yvetka", "ludo"]
//
// function getAllNames() {
//   for(var i = 0;i < names.length;i++){
//     var newNam = names[0] + " " + names[2]
//     document.write(newNam)
//     console.log(newNam)
//   }
//   for(var j = 0;j < names.length;j++){
//     var newFam = names[4] + " " + names[2]
//       document.write(newFam)
//       console.log(newFam)
//   }
// }
// function getFam(){
//   for(var j = 0;j < names.length;j++){
//     var newFam = names[j]
//       document.write(newFam)
//       console.log(newFam);
//   }
// }
//
// // getAllNames()
// // getFam()
//
// var arr1 = ['x','x','x','x']
// var arr2 = ['o','o','o','o']
//
// function fun(){
//   for (var i = 0;i<arr1.length;i++){
//     var newOne = arr1[i]
//       document.write(newOne)
//       console.log(newOne)
//       for (var j=0;j<arr2.length;j++){
//         var newTwo = arr2[i]
//           document.write(newTwo)
//           console.log(newTwo)
//    }
//    console.log('hello', newTwo)
//    console.log('from two', newOne)
//      document.write(newTwo)
//           document.write(newOne)
//     }
// }
//
// // fun()
//
// function forEach(array, action) {
//   for (var i = 0; i < array.length; i++)
//     action(array[i]);
// }
//
// forEach(["Peter", "Kona", "Granfalloon"], console.log);
//
// // var numbers = [1,2], sum = 0
// // forEach(numbers, function(number){
// //   sum += number
// // })
// document.write(sum);
//
// var names = ["Peter Kona", "Nani Kona"],sum = 0
//   forEach(names,function(number){
//     sum += number
//   })
//   document.write('<br/>' + sum);

// const person = {
//   makeSound: function(){
//     console.log(this.sound);
//   }
// }
//
//
// const mark = Object.create(person)
// mark.sound = "hello"
// mark.makeSound()
//
// const waf = Object.create(person)
// waf.sound = "hello2"
// mark.makeSound()

// function foo(err, done) {
//     if (err) {
//         return done(err);
//     }
//     done();
// }
//
// function bar(err, send) {
//     if (err) {
//         return send.error(err);
//     }
//     send.success();
// }
//
// var add = function(a, b) { return a + b; }
// var anotherAdd = add;
// anotherAdd(2, 2); // 4
//
// // can be returned
// function addx(x) {
//     return function(y) {
//         return x + y;
//     }
// }
// var add2 = addx(2);
// add2(3); // 5
// add2(4); // 6
//
// var add3 = addx(3);
// add3(3); // 6
// add3(5); // 8
//
// // can be passed
// function applyf(f, x, y) {
//     return f(x, y);
// }
// applyf(function(a, b) { return a + b; }, 2, 2); // 4
// function finder(records,clbk){
//   setTimeout(function(){
//     records.push(3,4)
//     clbk(records)
//   },1000)
// }
// function process(records,clbk){
//   setTimeout(function(){
//     records.push(5,6)
//     clbk(records)
//   },1000)
// }
// finder([1, 2], function(records) {
//     process(records, function(records) {
//              console.log(records);
//     });
// });
// function onProcessorDone(records){
//     alert(records);
// }
//
// function onFinderDone(records) {
//     processor(records, onProcessorDone);
// }
//
// finder([1, 2], onFinderDone);

// var skoda = cars.map(function(car){
//   if (car.type === 'sedan')
//     document.write( 'sedan')
//   else if (car.type === 'sport')
//     document.write('Sports car')
//   else if (car.type === '4x4')
//     document.write('Four wheel drive')
//   else if (car.type === 'sedan' || car.name ==='skoda')
//     document.write('Skoda - best choice')
// })
//
// document.write(skoda);
//
// function Person(saying){
//   this.saying = saying
// }
//
// Person.prototype.talk=function(){
//   document.write('I say:', this.saying)
// }
//
// var cheese = new Person ('semicollons')
// cheese.talk()
