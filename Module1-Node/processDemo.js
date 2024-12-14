console.log(process.argv)

console.log(process.argv[3])


console.log(process.env.PATH)

console.log(process.cwd())

console.log(process.pid)

console.log(process.uptime())

process.on("exit", (code) => {
    console.log(code)
})

process.exit(0)

console.log("after exiit")
