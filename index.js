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
                position: {
                    x: 100,
                    y: 100
                },
                size: {
                    width: 221,
                    height: 264
                },
                content: "Представим что это компонент. Его можно передвигать и ресайзить.",
                id: 1
            },
            {
                position: {
                    x: 343,
                    y: 100
                },
                size: {
                    width: 268,
                    height: 121
                },
                content: "Сохраните и обновите страницу. Изменения должны осхраниться.",
                id: 2
            },
            {
                position: {
                    x: 630,
                    y: 99
                },
                size: {
                    width: 200,
                    height: 261
                },
                content: "Компонент 3",
                id: 3
            },
            {
                position: {
                    x: 847,
                    y: 98
                },
                size: {
                    width: 470,
                    height: 102
                },
                content: "Компонент 4",
                id: 4
            },
            {
                position: {
                    x: 342,
                    y: 240
                },
                size: {
                    width: 270,
                    height: 123
                },
                content: "Компонент 5",
                id: 5
            },
            {
                position: {
                    x: 849,
                    y: 216
                },
                size: {
                    width: 468,
                    height: 148
                },
                content: "Компонент 6",
                id: 6
            },
            {
                position: {
                    x: 654,
                    y: 22
                },
                size: {
                    width: 200,
                    height: 47
                },
                content: "Базовая демка CMS",
                id: 7
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