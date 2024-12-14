import fs from "fs"
/*
fs.readFile("./test.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data)
})
*/

//const data = fs.readFileSync("./test.txt", "utf-8",)
//console.log(data)

//fs.readFile("./test.txt", "utf-8")
    //.then((data) => console.log(data))
    //.catch((err) => console.log(err))

const readFile = async () => {
    try {
        const data = await fs.readFile("./test.txt", "utf8", (err, data) => {
            console.log(data)
            if (err) throw err;
        })
    } catch (error) {
        console.log(error)
    }
}

const writeFile = async () => {
    try {
        await fs.writeFile(".test.txt", "Writing to file", () => {
            console.log("File written")
        })
    } catch (error) {
        console.log(error)
    }
}

const appendFile = async () => {
    try {
        await fs.appendFile(".test.txt", "Appended file \n", () => {
            console.log("File written")
        })
    } catch (error) {
        console.log(error)
    }
}

writeFile()
appendFile()
readFile()