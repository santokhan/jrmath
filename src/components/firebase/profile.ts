import { getAuth } from "firebase/auth"
import app, { firestore } from "../firebase/config.ts"
import { type DocumentData, addDoc, doc, getDoc, getDocs, setDoc, updateDoc, collection, query, where, deleteDoc } from 'firebase/firestore'
import hashLibrary from 'short-unique-id'

export interface UserInfo {
    name: string
    phone: string
    address: string
}

/**
 * `uid` is email here. Means email id doc _id.
 */
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
        }).then(result => { console.log(result) }).catch(err => { console.log(err) })
    }
    delete_user(uid: string) {
        const docRef = doc(firestore, this.user_collection, uid)
        return deleteDoc(docRef)
    }
}

const profile = new Profile()
export default profile

class ReferralLink {
    COLLECTION = "referral-link"
    colRef = collection(firestore, this.COLLECTION)
    async create(email: string, id: string, url: string) {
        await addDoc(this.colRef, { email, url, id }).catch(err => { console.log(err) })
    }
    /**
     * @param id uniqueId for referral link
     * @param callBack 
     */
    async read(id: string, callBack: (referral: any) => void) {
        const q = query(this.colRef, where('id', '==', id))

        await getDocs(q).then(res => {
            res.docs.forEach(e => {
                const data = e.data()
                if (data) {
                    data._id = e.id
                    callBack(data)
                }
            })
        }).catch(err => { console.log(err) })
    }
    async usedBy(docId: string, email: string) {
        if (docId && email) {
            const docRef = doc(firestore, this.COLLECTION, docId)
            await updateDoc(docRef, { usedBy: email }).catch(err => { console.log(err) })
        }
    }
}

export const referralLink = new ReferralLink()

class Coin {
    COLLECTION = "coin"
    colRef = collection(firestore, this.COLLECTION)
    async create(email: string, coin: number) {
        // read previous coin
        await addDoc(this.colRef, { email, coin }).catch(err => { console.log(err) })
    }
    async read(email: string, callBack: (data: any) => void) {
        const q = query(this.colRef, where('email', '==', email))

        await getDocs(q).then(res => {
            res.docs.forEach(e => {
                const data = e.data()
                if (data) {
                    data._id = e.id
                    callBack(data)
                }
            })
        }).catch(err => { console.log(err) })
    }
    async update(email: string, coin: number) {
        console.log(coin);

        // read uid before update
        const docRef = doc(firestore, this.COLLECTION, email)
        await updateDoc(docRef, { usedBy: email, coin }).catch(err => { console.log(err) })
    }
    async coinIncrease(email: string) {
        this.read(email, data => {
            const docRef = doc(firestore, this.COLLECTION, data._id)
            this.update(email, data.coin + 1)
        })
    }
}

export const coin = new Coin()