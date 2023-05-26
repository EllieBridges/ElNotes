const rawnotes = [
    {
        id: 1,
        title: 'My dream',
        content: 'I had a very weird dream last night.'
    },
    {
        id: 2,
        title: 'Shopping List',
        content: '-Apples -Banana -Cheese'
    },
    {
        id: 3,
        title: 'Reasons why we should move to Kimberley',
        content: 'Kimberley'
    },]



export const notes = rawnotes.map(note => {
    note['charLen'] = note.content.length;
    return note
})
