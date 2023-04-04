const { Console } = require('console');
const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const result1 = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const result2 = result;
    writeFile('./content/result-async.txt', `Here is an async result: ${result2}  ${result1}`, (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      console.log('done with this')
    })
  })
})

console.log ('Starting next one')