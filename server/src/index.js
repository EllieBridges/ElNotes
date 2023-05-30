const { notes } = require('./notes')
//import express web framework
const express = require('express')
const app = express()

//Always the same 'payload data type' - apply as a middleware - load BEFORE handlers
app.use(express.json())

// create handlers for each part of the app - http request methods - for creating, reading, editing and deleting 'register routes'

app.post('/notes', (req, res) => {
    // TODO: generate ID here, then save to notes array
    notes.push(req.body)
    res.send('Post - Note creation')
});

app.get('/notes', (req, res) => {
    res.send({ data: notes, message: 'Get - notes retrieved' })
});

app.get('/notes/:noteId', (req, res) => {
    const foundNote = notes.find(note => Number(req.params.noteId) === note.id)
    console.log(foundNote)
    res.send({ data: foundNote, message: 'Get - note retrieved' })
});

app.put('/notes/:noteId', (req, res) => {
    // TODO: update an existing note by ID
    res.send('Put - Note editor')
});

app.delete('/notes/:noteId', (req, res) => {
    // TODO: delete note by ID
    notes.pop()
    res.send('Delete - Note instance deleted')
})

//ensure ports for frontend and back end are different
app.listen(3001, () => {
    console.log('Server is working')
})
