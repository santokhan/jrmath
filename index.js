import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch'

dotenv.config()
const port = process.env.PORT || 7001

const app = express()

app.use(cors())

app.get("/", async (req, res) => {
    const dummyId = "4595b6ed1298443e9dd97dee7e407e66";
    const vdoId = req.query.vdoChiperId
    console.log(vdoId);
    await fetch(`https://dev.vdocipher.com/api/videos/${vdoId}/otp`, {
        method: "POST",
        headers: {
            Authorization: "Apisecret e2v0ojeaus1EMJWsLru61ztYD5Hj7k9fJKkACeg1XbxbarZ3KwXP4HvnlY6VTpGd",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ttl: 300
        }),
    }).then(res => res.json()).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})