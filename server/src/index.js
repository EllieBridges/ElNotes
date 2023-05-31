//import for the unique id - key for the 'notes' map
const { v4: uuidv4 } = require('uuid');
//import express web framework
const express = require('express')
const app = express()

//used as an alternative to a database. 
const notes = new Map()
notes.set("993865e8-1797-4491-82d5-ce9286e98b76", {
    title: 'My dream',
    content: 'I had a very weird dream last night.'
})

//Always the same 'payload data type' - apply as a middleware - load BEFORE handlers
app.use(express.json())


// create handlers for each part of the app - http request methods - for creating, reading, editing and deleting 'register routes'
const noteById = (id) => {
    const note = notes.get(id)
    return note;
}


app.post('/notes', (req, res) => {
    const newNote = req.body;
    notes.set(uuidv4(), newNote)
    res.send({ data: [...notes], message: 'Post - new note created' })
});

app.get('/notes', (req, res) => {
    res.send({ data: [...notes], message: 'Get - notes retrieved' })
});

app.get('/notes/:noteId', (req, res) => {
    const foundNote = noteById(req.params.noteId);
    res.send({ data: foundNote, message: 'Get - note retrieved' })
});

app.put('/notes/:noteId', (req, res) => {
    const newNote = req.body;
    notes.set(req.params.noteId, { title: newNote.title, content: newNote.content })
    res.send({ data: [...notes], message: 'Put - Note editor' })
});

app.delete('/notes/:noteId', (req, res) => {
    const noteId = req.params.noteId
    notes.delete(noteId)
    res.send({ data: [...notes], message: 'Delete - Note instance deleted' })
})

//ensure ports for frontend and back end are different
app.listen(3001, () => {
    console.log('Server is working')
})
