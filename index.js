$.getJSON("colors.json", function(data) {
    console.log(data);
    // data is a JavaScript object now. Handle it as such

});

// function mutation(err) {
//   var word1 = arr[0].toLowerCase()
//   arr[1].toLowerCase()
//   for (var i = 0; i < word2.length; i++) {
//     var value = word1.indexOf(word2[i])
//       if(value===-1){
//         return false
//       }
//   }
//   return true
// }
//
// mutation(['hello', 'hey'])
// function slasher(arr, howMany) {
//   arr.splice(0,howMany)
//   return arr
// }
//
// console.log(slasher([1, 2, 3], 2))
// console.log(slasher([1, 2, 3], 1))
// console.log(slasher([1, 2, 3], 0))
//
// function mutation(arr) {
//   var wordOne = arr[0].toLowerCase()
//   var wordTwo = arr[1].toLowerCase()
//
//   for(var i=0; i<wordTwo.length; i++)
// }
//   return arr
// }
// document.write('arr', arr)
// var family = ['Nani', 'Peter', 'Kubo']
//
// console.log('this is a family before a push: ', family);
//
// family.push('Cloud')
//
// console.log('this is a family: ', family);
//
// family.unshift('Peterer')
//
// console.log('this is unshift: ', family);
//
// document.write(family)


// function where(coll, src) {
//   return coll.filter(function(obj) {
//     for (var key in source) {
//       if (!obj.hasOwnProperty(key) || obj[key] != src[key]) {
//         return false;
//       }
//     }
//     return true;
//   });
// }
// function partial(digit, pos) {
//   var values = {
//     1: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
//     2: ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
//     3: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
//     4: ["", "M", "MM", "MMM"]
//   };
//   return values[pos][digit];
// }
// function convertToRoman(num) {
//   var p = 1;
//   var d = num.toString().split("");
//   var parts = [];
//   while (d.length > 0) {
//     var d = ds.pop();
//     parts.unshift(partial(d, pos));
//     pos++;
//   }
//  return parts.join("");
// }
// var newWord = 'This is four amazing shit nananananan'
// var strWord = newWord.split(' ')
//
// var array = strWord.map(function(a){
//   return a.length
// })
//
// var nani= Math.max.apply(Math, array)
//
// document.write('Find max',nani, '<br/>')
//
// var revertNumber = nani.toString()
//
// console.log('revert number', revertNumber);
//
// var reduceArray = strWord.reduce(function(count,x) {
//   return count += x.length
// },0)
//
// var s = ['4d44']
// function reverse(s) {
//   return s.reverse().join('');
// }
//
// console.log(reverse(s));
//
// console.log(reverse(array));
//
// console.log('sum of all numbers <br/>', reduceArray);
//
// document.write('this is array: ', array)
//
//
// console.log('this is string', strWord);
// console.log('new array', array);
//
// var x = new Array(10)
// for (var i = 0; i < 10; i++) {
//   x[i] = new Array(5)
// }
//
// x[5][12] = 3.0;
//
// console.log(x);
//
// function dArray(rows) {
//   var arr = ['x']
//   for (var i = 0; i < rows; i++) {
//     arr[i] = []
//   }
//   return arr
// }
//
// function array2d(rows){
//   var arra = []
//   for(var i = 0;i <rows; i++){
//     arra[i] = []
// }
// return arra
// }
//
// console.log(dArray(3));
// console.log(array2d(6));
// document.write(array2d(5));
//
// var ab = []
// while(ab.push([])<10)
//
// console.log(ab);

// function maxWord(str) {
//   var word = str.split(' ')
//   var biggestWord = ''
//   for (var i = 0; i < word.length; i++) {
//   if(biggestWord.length < word[i].length) {
//     biggestWord = word[i]
//   }
//   }
//   str = biggestWord
//   return str.length
// }

// console.log(maxWord('Improve your brain health and performance',
// 'Build your Personalized Training Program'))
// const foo = ['d','e']
// const bar = ['a','b','c', ...foo,'f','g','h']
// const foobar = [...bar,'i','j','k','l']
//
// const numbers = ['2','3','5','5','2','22']
//
// var maxArray = Math.max.apply(Math, numbers)
//
// document.write('Biggest numbers <br/>', maxArray)
// console.log('Biggest numbers <br/>', maxArray);
//
// console.log('numbers <br/>', numbers);
//
//
// console.log('this is foobar <br/>', foobar);
//
// console.log('this is bar <br/>', bar);;
//
// var randomString = 'Improve your brain health and performance'
//
// console.log(randomString);
//
// var bgstWrd = randomString.split(' ')
//
// var filterWords = bgstWrd.map(function(a){
//   return a.length
// })
//
// var reduceWords = bgstWrd.map(function(a){
//   return a.length
// })
//
// var empty = []
// var pushFilter = empty.push(filterWords)
// var maxArray = Math.max.apply(Math, empty)
// console.log(Math.max(bgstWrd))
//
// console.log(empty);
//
// var minReduce = Math.min(reduceWords)
// console.log('reduce my words this is it <br/>', reduceWords)
// console.log('reduce my words <br/>', minReduce)
//
// function arrayMax(array) {
//   return reduceWords.reduce((a, b) => Math.max(a, b));
// }
//
// console.log('Array max please <br/>', arrayMax);
//
// // var filterType = cars.filter(function(hatch){
// //   return hatch.type === 'hatchback'
// // })
//
// console.log(bgstWrd);
// console.log('filter <br/>', filterWords);
//
// var maxArray = Math.max.apply(Math, filterWords)
// console.log('<br/> This is real shit ', maxArray);
// document.write('<br/> This is max number: ', maxArray)

// var cars = [
//   {name: 'skoda', type:'hatchback'},
//   {name:'toyota', type:'sport'},
//   {name:'skoda', type:'sedan'},
//   {name:'chevrolet', type:'sedan'},
//   {name:'chevrolet', type:'sedan'},
//   {name:'chevrolet', type:'shit'},
//   {name:'toyota', type:'4x4'}
// ]
//
// var orders = [
//   {amount: 200},
//   {amount: 200},
//   {amount: 440},
//   {amount: 6640},
//   {amount: 3220},
//   {amount: 300},
//   {amount: 5400},
//   {amount: 5500},
//   {amount: 6640},
//   {amount: 3220},
//   {amount: 300},
//   {amount: 5400},
//   {amount: 5500},
//   {amount: 6640},
//   {amount: 3220},
//   {amount: 300},
//   {amount: 5400},
//   {amount: 5500},
//   {amount: 6640},
//   {amount: 5400},
//   {amount: 5500},
//   {amount: 6640},
//   {amount: 3220},
//   {amount: 300},
//   {amount: 5400},
//   {amount: 5500}
// ]


// var newOrd = orders.filter(function(sum,fil){
//   return sum + fil.orders
// })
//
// var filterMe = orders.filter(function(x){
//   return x.orders
// })
// document.write(filterMe);
//
// var filterType = cars.filter(function(hatch){
//   return hatch.type === 'hatchback'
// })
// var redType = cars.reduce(function(hatch){
//   return hatch.type === 'hatchback'
// })
//
// console.log('this is type reduce', redType);
//
// console.log('this is a filter', filterType);
//
// var find = cars.find(function(x){
//   return x.type === 'shit'
// })
//
// console.log('find', find);
// var skoda = []
//   for(var kubo =0; kubo<cars.length;kubo++)
//     if(cars[kubo].name === 'skoda')
//     skoda.push(cars[kubo])
// console.log('this is skoda', skoda);
//
// var sedan = []
//   for (var i = 0;i<cars.length;i++)
//     if(cars[i].type === 'sedan')
//     sedan.push(cars[i])
//
// console.log('this is sedan', sedan);
//
// var filterSedan = cars.filter(function(x){
//   return x.type === 'sedan'
// })
//
//   console.log('this is sedan filter', filterSedan);
// const sedan = []
//   for(var i=0;i<cars.length;i++)
//     if(cars[i].type === 'sedan')
//     sedan.push(cars[i])
//
//   console.log('find sedan', sedan[0], sedan[1]);
//
//   var anotherFilter = cars.filter(function(x){
//     return x.type === 'sport'
//   })
//
// var newDog = function(x){
//   return x.name === 'toyota'
// }
//
// var dogs = cars.filter(newDog)
//
// console.log('this is dog', dogs);
//
// console.log('this are other cars exept toyota', otherCars);
//
//   console.log('new filter', anotherFilter)
//
//   var sports = []
//   for(var i=0;i<cars.length;i++)
//     if(cars[i].type === 'sport')
//     sports.push(cars[i])
//
//     console.log('this are sports cars', sports);
//
//     var filterSedan = cars.filter(function(x){
//       return x.type ==='sedan'
//     })
//
//     console.log('filter sedan', filterSedan[0]);
// var skodaName = []
// for (var i = 0; i < cars.length; i++)
//   if(cars[i].name === 'skoda')
//   skodaName.push(cars[i])
//
//    console.log('this is skoda name', skodaName[0]);

// var naniCalc = 0
//   for (var i = 0; i < orders.length; i++) {
//    naniCalc += orders[i].amount
// }
//
// console.log('thins nanis calc', naniCalc);
//
// var reduceNaniCalc = orders.reduce(function(start,order){
//   console.log('sum order', start, order)
// },0)
//
// var reducePeter = orders.reduce(function(y,x){
//
//   return y + x.amount
// },0)
//
// console.log('This is working as well', reducePeter);
//
// var kuboCalc = 0
// for (var i = 0; i < orders.length; i++) {
//   kuboCalc += orders[i].amount
// }
//
// console.log(kuboCalc)
//
// var ama = 0
// for (var i = 0; i < orders.length; i++) {
//   ama += orders[i].amount
// }
//
// var reduceOrder = orders.reduce(function(sum,order){
//   return sum += order.amount
// },0)
//
// console.log('reduce order', reduceOrder);
//
// var ta = 0
// for (var i = 0; i < orders.length; i++) {
//   ta += orders[i].amount + ama
// }
//
// console.log('this is tha', ta);
//
//
// console.log('log', ama);
//
// var am = 0
// for(var i=0;i<orders.length;i++){
//   am +=orders[i].amount
// }
//
// var totalAm = 0
// for(var i = 0;i<orders.length;i++){
//   totalAm += orders[i].amount
// }
//
// document.write('this is total am', totalAm)
//
// console.log('this is amount',am);
//
// var calul = orders.reduce(function(x,y){
//   console.log(x,y);
//   return x + y.amount
// })
// document.write('<br/> calcul', calul)
//
// var normalRed = orders.reduce(function(count,order){
//   return count + order.amount
// })
//
// console.log('normal red', normalRed);
// var totek = orders.reduce((x,y) => x + y.amount,0)
//
// var neqReduce = orders.reduce((x,y) => x + y.amount,0)
//
// document.write('this is fat arrow', totek);

// var loopMap = orders.map((x) => x.amount)
//
// // var ordersMap = orders.map((x) => document.write(x.amount + '<br/>'))
// var filterOrder = orders.map((x) => document.write('<br/>' + 'Amount is: ' + '$' + x.amount))
//
// var totalAmount = 0
// for (var i = 0; i < orders.length; i++){
//   totalAmount += orders[i].amount
// }
//
// var iSedan = function(car){
//   return car.type === 'sedan'
// }
//
// var carsList = cars.map((car) => car.name)
// document.write('<br/>' + 'Map all cars with map function: <br/>' + carsList)
//
// var mapTypes = cars.map((types) => types.type)
// document.write('Types of cars with map function: <br/>' + mapTypes.join('<br/>'))
//
// var typesOfCars = cars.map((x) => x.name)
//
// document.write('<br/> Types fo cars ES6' + typesOfCars)
//
// var namesCars = []
// for (var i = 0; i < cars.length; i++){
//   namesCars.push(cars[i].name)
// }
//
// document.write('<br/> Types of namesCars' + namesCars)
// var sport = cars.filter(iSedan)
//
// var testMe = cars.map((x)=>x.type)
//
// console.log('test me' + testMe);
//
// var listNames = cars.map((x) => x.name)
//
// console.log('List names' + listNames.join('<br/>'));
//
// var zeroOne = cars.map((y)=>y.type)
//
// console.log('This is 3 :' + zeroOne.join());
// document.write('This is zero One' + zeroOne.join('<br/>'))
//
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
//
// function labelPrint(number,label) {
//   var numberString = String(number)
//   while (numberString.lenght < 3)
//     numberString = numberString
//   console.log(numberString + " " + label);
// }
//
// document.write(labelPrint(3,5))
//
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
//
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
//
// var person = {
//   name: "peter",
//   surname: "kona",
//   car: ['tesla',
//        'vw',
//        'ford',
//        'mustang',
//        'skoda']
// }
//
// function vlogLog(){
// console.log(person.peter + ' ' + person.car[0]);
// }
//
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
//
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
//
// const persons = {
//   makeSound: function(){
//     console.log(this.sound);
//   }
// }
//
// const mark = Object.create(person)
//   mark.sound = "hello"
//   mark.makeSound()
//
// const waf = Object.create(person)
//   waf.sound = "hello2"
//   mark.makeSound()
//
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
//   add2(3); // 5
//   add2(4); // 6
//
// var add3 = addx(3);
//   add3(3); // 6
//   add3(5); // 8
//
// // can be passed
// function applyf(f, x, y) {
//   return f(x, y);
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
//
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
