import express from 'express'
import path from 'path'

const __dirname = path.resolve(path.dirname(''));
const PORT = 3000;
const app = express()
app.use(express.static('L2/public'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/html/index.html'))
})
app.get('/contact', (req,res)=>{
    res.sendFile(path.join(__dirname, '/html/contact.html'))
})

app.listen(PORT,()=>{
    console.log(`server on`)
})