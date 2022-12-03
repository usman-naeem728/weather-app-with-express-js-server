// console.log("my first server");
import express from 'express';
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000


app.use(cors())

app.get('/', (req, res) => {

    console.log("ip", req.ip)
    res.send(
        'helllo world' + new Date().toString())
})
app.get('/weather', (req, res) => {

    console.log("ip", req.ip)
    res.send({
        temp:30,
        humiity: 70,
        serverTime: new Date().toString()
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})