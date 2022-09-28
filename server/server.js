const express = require("express")
const app = express()

const PORT = 1128

app.listen(PORT, () => {
    console.log(`Server is on PORT Number ${PORT}`)
})