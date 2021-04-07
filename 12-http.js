const http = require('http')

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end('Welcome to our home page')
    console.log('hello')
  } else if (req.url == '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    `)
  }
})
const port=6789;
//listen(()=>{console.log('server is live')},5000)

server.listen(port,()=>{
  console.log(`server is running on port ${port}`);
})
