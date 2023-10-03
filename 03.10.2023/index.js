//PIOTR ROZCZKA HELPED WITH CODE
import http from 'http'
import {readFile, writeFile} from 'fs/promises'
const port = 3000;
const hostname = '127.0.0.1'

const data = [{imie: 'wojtek', imie: 'piotrek'}]

const server = http.createServer(async(req, res)=>{
        if(req.url === '/'){
        const html = await readFile('./index.html')
        res.statusCode = 200
        res.setHeader('content-type', 'text/html')
        return res.end(html, 'utf-8')
    }

    else if(req.url === '/kontakt' && req.method === 'POST'){
        const body = [];

        req.on('data',(chunk)=>{
            body.push(chunk)
        })

        req.on('end', async()=>{
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            await writeFile(`./contact/message-${Date.now().toString()}.txt`, message)
            res.statusCode = 302
            res.setHeader('Location', 'dziekujemy')
            return res.end();

        })
    }
    else if(req.url === '/dziekujemy'){
        const html = await readFile('./dziekujemy.html')
        res.statusCode = 200
        res.setHeader('content-type', 'text/html')
        return res.end(html, 'utf-8')
    }
    else if(req.url === '/api'){
        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        return res.end(JSON.stringify(data))
    }
    else{
        res.statusCode = 404
        res.setHeader('content-type', 'application/json')
        return res.end(JSON.stringify({error:{
            message: 'nie znaleziono zasobu',
            code: 404
        }}))
    }
})

server.listen(port, hostname,() => {
    console.log('ez')
})