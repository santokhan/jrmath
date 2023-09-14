require('dotenv').config();
const { google } = require('googleapis');
const express = require('express')
const spreadsheetId = process.env.DATABASE_ID;
const router = express.Router()

// --- helper functions ---
// get auth token
function getAuth() {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'credentials.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
    return auth;
}

// proccure googleSheet method
async function getGoogleSheet(auth) {
    const client = await auth.getClient();
    const googleSheet = google.sheets({ version: 'v4', auth: client });
    return googleSheet;
}
// --- helper functions ---

//fetches data from the spreadsheet
router.get('/', async (req, res) => {
    const auth = getAuth();
    const googleSheet = await getGoogleSheet(auth);

    // const getMetaData = await googleSheet.spreadsheets.get({
    //   auth,
    //   spreadsheetId,
    // });

    const getSheetData = await googleSheet.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'R1C1:R500C500',
    });

    const dataList = getSheetData.data.values

    function arrayToObject(list) {
        const keys = list.splice(0, 1)[0]
        const data = list.map((e) => {
            const obj = {}
            e.map((ele, ind) => {
                const key = keys[ind]
                obj[key] = ele
                return obj
            })

            return obj
        }).filter(e => e?.university)
        return data;
    }

    const data = arrayToObject(dataList)

    res.send(data);
});

// //posts data to cell
// router.post('/post', async (req, res) => {
//   const auth = getAuth();
//   const googleSheet = await getGoogleSheet(auth);

//   await googleSheet.spreadsheets.values.append({
//     auth,
//     spreadsheetId,
//     range: 'Sheet1!A2:B',
//     valueInputOption: 'USER_ENTERED',
//     resource: {
//       values: [['NextJS', 'The framework of the future']],
//     },
//   });

//   res.send('Submitted Successfully');
// });

// // deletes cell data
// router.post('/delete', async (req, res) => {
//   const auth = getAuth();
//   const googleSheet = await getGoogleSheet(auth);

//   await googleSheet.spreadsheets.values.clear({
//     auth,
//     spreadsheetId,
//     range: 'Sheet1!A5:B5',
//   });

//   res.send('Deleted Successfully');
// });

// // update cell data
// router.put('/update', async (req, res) => {
//   const auth = getAuth();
//   const googleSheet = await getGoogleSheet(auth);

//   await googleSheet.spreadsheets.values.update({
//     auth,
//     spreadsheetId,
//     range: 'Sheet1!A2:B2',
//     valueInputOption: 'USER_ENTERED',
//     resource: {
//       values: [['Elon', 'Make a spaceship']],
//     },
//   });

//   res.send('Updated Successfully');
// });

module.exports = { router }