import {createServer} from "http"
import "dotenv/config"

const PORT = process.env.PORT

const users = [
    {id: 1, Name: "John"},
    {id: 2, Name: "Jane"},
    {id: 3, Name: "Jim"},
]

//Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}

//JSON middleware
const jsonMiddleware = (req, res, next) =>{
    res.setHeader("Content-Type", "application/json")
    next()
}

//Route handler for GET api/users
const getUsersHnadler = (req, res) => {
    res.write(JSON.stringify(users))
    res.end()
}

// GET api/users/:id handler
const getUserByIdHandler = (req, res) => {
    const id = req.url.split("/")[3]
    const user = users.find((user) => user.id === parseInt(id))

    if (user) {
        res.write(JSON.stringify(user))
    } else { 
        res.statusCode = 404
        res.write(JSON.stringify({message: "User nt found"}))    
    }
    res.end()
}

// Not foound handler
const notFooundHandler = (req,res) => {
    res.statusCode = 404
    res.write(JSON.stringify({message: "Route not found"}))
    res.end()
}

// Rooute handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = ""

    req.on("data", (chunk) => {
        body += chunk.toString()
    })
    req.on("end", () => {
        const newUser = JSON.parse(body)
        users.push(newUser)
        res.statusCode = 201
        res.write(JSON.stringify(newUser))
        res.end()
    })
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === "/api/users" && req.method === "GET"){
                getUsersHnadler(req, res)
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET"){
                getUserByIdHandler(req, res)
            } else if (req.url === "/api/users" && req.method === "POST") {
                createUserHandler(req,res)
            } else {
                notFooundHandler(req, res)
            }
        })
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})