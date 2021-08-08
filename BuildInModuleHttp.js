const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req);

if(req.url==='/'){
    res.end('Well come to our home page')
}

if(req.url === '/service'){
    res.end('Well come to our service page')
}

if(req.url==='/about'){
    res.end('Here our short history!')
}


res.end(`
  <h1>Oops!</h1>
  <p>This is an error, server can't find page that you're looking for </p>
  <a href="/">Back to home page</a>
`)

})

server.listen(5000)