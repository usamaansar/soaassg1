const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size-------- the size we wznt our segment to be as file is readed into stream in the form of segments


const stream = createReadStream('./content/big.txt', { highWaterMark: 1700000,encoding: 'utf8' })


 //const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })  //to get data in decodedd form
//const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))
