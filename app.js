require('dotenv').config();
const express = require('express');
const app = express();
const { router } = require('./src/sheetAPI')
const port = process.env.PORT || 3000

app.use(router)

app.listen(port || process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${port}`);
});