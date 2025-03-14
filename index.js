import express from 'express'

const app = express()

const persons = [{
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
},
{
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
},
{
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
},
{
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
}
]

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.get("/api/persons", (req, res) => {
    res.json(persons)
})

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.post("/api/persons", (req, res) => {
    const data = req.body
    console.log(data)
    res.json(data)
    // const person = req.body
    // console.log(person)
    // if (!person.name || !person.number) {
    //     return res.status(400).json({
    //         error: "name or number missing"
    //     })
    // }
    // if (persons.find(person => person.name === person.name)) {
    //     return res.status(400).json({
    //         error: "name must be unique"
    //     })
    // }
    // const id = Math.floor(Math.random() * 10000)
    // const newPerson = {
    //     id,
    //     name: person.name,
    //     number: person.number
    // }
    // persons.push(newPerson)
    // res.json(newPerson)
})

app.delete("/api/persons/:id", (req, res) => {
    const id = req.params.id
    persons = persons.filter(per => per.id === id)
    res.status(204).end()
}
)

app.put("/api/persons:id", (req, res) => {
    const id = req.params.id
    const person = req.body
    persons = persons.map(per => per.id === id ? person : per)
    res.json(person)
})

app.patch("/api/persons:id", (req, res) => {
    const id = req.params.id
    const person = req.body
    persons = persons.map(per => per.id === id ? person : per)
    res.json(person)
})


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)