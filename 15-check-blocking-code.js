const http = require('http')
const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end('Welcome to our home page')
    for(let i=0;i<1000;i++){
      for(let j=0;j<1000;j++){
        console.log('hello')}}
  } else if (req.url == '/about') {               // this code will not execute untill hello is printed till the end of for loop so this is how blocking code works
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    `)
  }
})
const port=6789;
server.listen(port,()=>{
  console.log(`server is running on port ${port}`);
})
