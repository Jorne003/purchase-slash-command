const express =require('express') 
const bodyParser = require('body-parser')    

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.post('/Buy', async (req,res) => {
    console.log(req.body) 
    res.send('Okay')
})

const PORT = 9647
app.listen(PORT, () => {
    console.log('Slack Bot server has started on port ' + PORT)
});