const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const axios = require('axios')

dotenv.config()
const port = process.env.PORT || 7005

const app = express()

app.use(cors())

app.get("/", async (req, res) => {
    const vdoId = "48860640a4d64b4d809158abd872e5ef";
    // const vdoId = req.query.vdoChiperId

    const response = await axios.post(`https://dev.vdocipher.com/api/videos/${vdoId}/otp`, { ttl: 300 }, {
        headers: {
            Authorization: "Apisecret e2v0ojeaus1EMJWsLru61ztYD5Hj7k9fJKkACeg1XbxbarZ3KwXP4HvnlY6VTpGd",
            "Content-Type": "application/json",
        },
    })

    res.json(response.data)
})

app.get("/api", async (req, res) => {
    const vdoId = "48860640a4d64b4d809158abd872e5ef";
    // const vdoId = req.query.vdoChiperId
    res.json(vdoId)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

