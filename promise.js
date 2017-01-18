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
