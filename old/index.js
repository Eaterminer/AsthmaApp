const express = require('express')
const app = express()
const port = 3000

app.get('/', (res, req) => {
    res.send('asdas')
})

app.listen(port, () => {
    console.log(`AsthmaApp listining on port ${port}`)
})
