require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { router } = require('./src/sheetAPI')

const app = express();
const port = process.env.PORT || 3000

app.use(cors())
app.use(router)

app.listen(port || process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${port}`);
});