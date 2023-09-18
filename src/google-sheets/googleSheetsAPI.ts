export default async function getSheetsData(callBack: (data: any) => void) {
    const URL = "https://api.goxupport.com/"
    await fetch(URL).catch(err => {
        throw err
    }).then(res => res.json()).then(data => {
        callBack(data)
    })
}