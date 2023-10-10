import http from 'http'
import {readFile} from 'fs/promises'

const port = 3000
const hostname = '127.0.0.1'

const server = http.createServer(async (req,res)=>{
    const filepath = './index.html'

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    const content = await readFile(filepath)
    res.end(content, 'utf-8')
})


server.listen(port, hostname, ()=>{
    console.log(`Server listening: http://${hostname}:${port}`)
})
// piotr rozczka enjoy
