// console.log("my first server");

import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {

    console.log("ip", req.ip)
    res.send(
        'helllo world' + new Date().toString())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})