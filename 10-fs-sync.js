const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/subfolder/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')


writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }         // we use this flag so that whenver we re-run this code previous data in the stored file is not lost and new data is stored next to previous data
)
const result = readFileSync('./content/result-sync.txt', 'utf8')
console.log(`${result}`)         //to display variable in console.log we use this sign ` not this ' it is before number 1 on key board
console.log('done with this task')
console.log('starting the next one')
