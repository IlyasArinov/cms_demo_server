const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

let pages = [
    {
        id: 1,
        components: [
            {
                grid: {x: 4, y: 1, w: 1, h: 2},
                content: null,
                blockType: 'Text',
                id: 1
            },
            {
                grid: {x: 4, y: 2, w: 4, h: 2},
                content: null,
                blockType: 'Text',
                id: 2
            },
            {
                grid: {x: 4, y: 3, w: 6, h: 2},
                content: null,
                blockType: 'Text',
                id: 3
            }
        ]
    }
    ];

app.get('/api/pages', (req, res) => {
    res.json(pages)
});

app.get('/api/pages/:id', (request, response) => {
    const id = Number(request.params.id)
    const page = pages.find(page => page.id === id)

    if (page) {
        response.json(page)
    } else {
        response.status(404).end()
    }
});

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    pages = pages.filter(page => page.id !== id)

    response.status(204).end()
})

app.put('/api/pages/:id', (req, res) => {
    const body = req.body;
    let modifiedPage = {
        components: body.components
    }
    const foundPageIndex = pages.findIndex(page => page.id === Number(req.params.id));
    const foundPage = pages[foundPageIndex];
    pages[foundPageIndex] = {...foundPage, ...modifiedPage};
    res.json(pages[foundPageIndex]);
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});