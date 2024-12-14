import { EventEmitter } from "events"

const myEmitter =  new EventEmitter()

function greetHandler(name) {
    console.log("HelloWorld " + name)
}

function goodByeHandler(name) {
    console.log("Gooood Bye World " + name)
}

myEmitter.on("greet", greetHandler)
myEmitter.on("goodbye", goodByeHandler)

myEmitter.emit("greet", "john")
myEmitter.emit("goodbye", "Greg")

myEmitter.on("error", (err) => {
    console.log("An error occurred", err)
})

myEmitter.emit("error", new Error("O ou"))