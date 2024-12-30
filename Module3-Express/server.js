const config = require("dotenv/config")
const express = require("express")
const posts = require("./routes/posts")
const logger = require("./middleware/logger")
const errorHandler = require("./middleware/error")
const notFound = require("./middleware/notFound")
const path = require("path")
PORT = process.env.PORT || 8000

const app = express()

// Body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// Logger middleware
app.use(logger)

// static folder
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/api/posts", posts)

// Error handle middleware
app.use(notFound)
app.use(errorHandler)




app.listen(PORT, () => {
    console.log("Server running on: " + PORT)
})