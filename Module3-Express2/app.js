import express from "express"

const app = express()

// Config ejs
app.set("view engine", "ejs")
app.set("views", "views")

app.get("/", (req, res) => {
    res.render("index", {
        title: "welcome",
        message: "Hello from ejs",
        people: ["john, jayne, jaakko"]
    })
})  

app.listen(8000, () => {
    console.log("Server started on port: 8000")
})