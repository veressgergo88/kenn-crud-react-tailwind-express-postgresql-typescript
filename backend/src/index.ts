import express from 'express'

const app = express()
const port: number = 3000

app.get('/', (req, res) =>{
    res.send('<h1>Hello Backend</h1>')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})