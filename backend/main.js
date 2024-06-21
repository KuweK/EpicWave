const express = require("express")
const app = express()

const PORT = 8080

app.listen(PORT, (err) => {
    console.log("Done!")
})

app.get("/test", (req, resp) => {
    resp.json({
        text: "Hello World in backend!"
    })
    }
)