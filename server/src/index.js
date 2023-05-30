const { notes } = require('./notes')

const express = require('express') //import
const app = express()


// middleware - authentication/ logging - define before handlers
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next();
})

app.use(express.json())


//route handlers
app.post('/', (req, res) => {
    notes.push(req.body)
    res.send('Create endpoint')
})

app.get('/', (req, res) => {
    res.send(notes)
})

// app.put('/', (req, res) => {
//     res.send('Put endpoint')
// })

app.delete('/', (req, res) => {
    notes.pop()
    res.send('Delete endpoint')
})

app.listen(3001, () => { console.log('Server started') }) //serve


// create new note POST, list existing notes GET and make changes to an existing note PUT, delete an existing note DELETE - if successful 200/201