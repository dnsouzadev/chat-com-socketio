const express = require("express")
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)

io.on("connection", (stream) => {

    stream.on("disconnect", () => {
        console.log("X disconnected: ", stream.id)
    })

    stream.on("msg", (data) => {
        io.emit("showmsg", data)
        console.log(data)
    })
})

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

http.listen(3000, () => {
    console.log("the server is running")
})