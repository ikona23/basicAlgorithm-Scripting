function sync() {
  setTimeout(deferred,1000)
  console.log('sync');
}
function deferred() {
  console.log('deferred');
}
 sync()
 deferred()
