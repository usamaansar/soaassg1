var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')   //the problem with single variable is that it reads all the data as a single file thats why when we want to request data from server it takes long time whereas in streams data is recovered in chunks so, it is convinient to use streams to read and write data on internet
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)            //stream.pipe writes the read data read by read stream into chunks
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
