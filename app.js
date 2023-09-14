const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const fetch = require('node-fetch')

dotenv.config()
const port = process.env.PORT || 7002

const app = express()

app.use(cors())

app.get("/", async (req, res) => {
    const vdoId = "48860640a4d64b4d809158abd872e5ef";
    // const vdoId = req.query.vdoChiperId

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
        res.json({ status: data })
    }).catch(err => {
        res.send(err)
    })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var message = 'It works! Santo.\n',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();
