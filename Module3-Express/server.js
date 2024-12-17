const express = require("express")

const app = express()
PORT = 8000

app.get("/", (req, res) => {
    
})

app.listen(PORT, () => {
    console.log("Server running on: " + PORT)
})