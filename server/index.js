const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/' , (req, res) => {
    res.send('AwesomeSauce')
})

app.listen(8080, () => {
    console.log('sever listening on port 8080');
})