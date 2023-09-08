import { getAuth } from "firebase/auth"
import app, { firestore } from "../firebase/config.ts"
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

export interface UserInfo {
    name: string
    phone: string
    address: string
}

class Profile {
    auth = getAuth(app)
    user_collection = "user"

    async addUser(data: UserInfo, email: string) {
        const docRef = doc(firestore, this.user_collection, email)

        await setDoc(docRef, {
            name: data.name,
            phone: data.phone,
            address: data.address
        }).then(() => {
            console.log(`User doc added`);
        }).catch(err => { console.log(err) })
    }

    async readUser(email: string, callBack: (data: any) => void) {
        const docRef = doc(firestore, this.user_collection, email)

        await getDoc(docRef).then((doc) => {
            const data = doc.data()
            callBack(data)
        }).catch(err => { console.log(err) })
    }

    async updateUser(uid: string, data: UserInfo) {
        const docRef = doc(firestore, this.user_collection, uid)

        await updateDoc(docRef, {
            name: data.name,
            phone: data.phone,
            address: data.address
        }).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
    }
}

export default new Profile()