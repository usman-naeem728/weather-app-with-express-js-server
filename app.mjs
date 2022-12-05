// console.log("my first server");
import express from 'express';
import cors from 'cors';
import path from "path";

const app = express()
const port = process.env.PORT || 5000;


app.use(cors())

app.get('/fdsf', (req, res) => {

    console.log("ip", req.ip)
    res.send(
        'helllo world' + new Date().toString())
})
app.get('/weather', (req, res) => {

    console.log("ip", req.ip)
    res.send({
        temp:30,
        min:25,
        max:32,
        humiity: 70,
        serverTime: new Date().toString()
    })
})

const __dirname = path.resolve();

app.use('/', express.static(path.join(__dirname, './weather-api/build')))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})