const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/subfolder/first.txt', 'utf8', (e, result) => {
  if (e) {
    console.log(e)
    return
  }
  const first = result
  readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
    
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('done with function')
console.log('starting next task')
console.log('starting next task')