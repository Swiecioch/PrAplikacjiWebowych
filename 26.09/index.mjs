import http from 'http'
const port = 3000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World!')
})

server.listen(port, hostname, ()=>{
    console.log(`Server listening. http://${hostname}:${port}`)
})