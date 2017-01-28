fetch('https://api.spotify.com/v1/search?query=psytrance&offset=0&limit=20&type=artist')
.then(response =>response.json())
.then(data=> {
  const uris = data.artists.items.map(item=> {
    return item.uri
  }).slice(0,5)
  console.log(uris)
  document.write(uris)

  const tasks = uris.map(uri => fetch('https://api.spotify.com/v1/artists/' +   uri.split(':')[2]))
  return Promise.all(tasks)
}).then (responses => {
  return Promise.all(responses.map(response => response.json()))
}).then(artists => {
  console.log(artists);
})

function Fruit(){
  var name, family
  this.getName = function(){return name}
  this.setName = function(value){return name = value}
  this.getFamily = function(){return family}
  this.setFamily = function(value){return family = value}
}

var apple = new Fruit()
  apple.setName("Normal aplenesus")
  apple.setFamily("Brendeur")

  console.log(apple.getName())


function Car(){
  let color
  this.getColor = function(){return color}
  this.setColor = function(value){value = color}
}

let audia= new Car()
  audia.setColor("quatro")

console.log(audia.getColor());

function Colors(){
  var name,code
  this.gtName = fucntion(){return name}
}
