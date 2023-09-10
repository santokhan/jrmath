import { getAuth } from "firebase/auth"
import app, { firestore } from "../firebase/config.ts"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'

export interface VideoDataWith_Id {
    _id: string,
    category: string,
    lesson: number,
    description: string,
    title: string,
    vdoChiperId: string,
    courseName: string,
    vdoStorage: string,
    price: number,
    discountPrice: number
}

export interface VideoData {
    category: number,
    lesson: number,
    description: string,
    title: string,
    vdoChiperId: string,
    courseName: string,
    vdoStorage: string,
    price: number,
    discountPrice: number
}

class Admin {
    auth = getAuth(app)
    video_collection = "courses"
    user_collection = "user"
    role_collection = "role"

    // Check user role on Admin route
    async role(email: string, callBack: (role: any) => void) {
        if (email) {
            const docRef = doc(firestore, this.role_collection, email)
            await getDoc(docRef).then((doc) => {
                const role = doc.data()
                if (role) {
                    callBack(role.role)
                }
            }).catch(err => { console.log(err) })
        } else { console.log(`Can not get email`); }
    }

    async readUserData(callBack: (data: any) => void) {
        const colRef = collection(firestore, this.user_collection)

        await getDocs(colRef).then(docs => {
            const list: any = []
            docs.forEach(e => {
                const data = e.data()
                data._id = e.id
                list.push(data)
            })
            callBack(list)
        }).catch(err => { console.log(err) })
    }
    async editUserAccess(uid: string) {
        const docRef = doc(firestore, this.user_collection, uid)
        await updateDoc(docRef, { courseAccess: ["nuh"] }).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
    }

    async addVideo(data: VideoData) {
        if (data) {
            const colRef = collection(firestore, this.video_collection)
            await addDoc(colRef, data).catch(err => {
                console.log(err);
            })
        } else {
            console.log(`Can not read video`);
        }
    }
    async watchVideo(callBack: (data: any) => void) {
        const colRef = collection(firestore, this.video_collection)
        await getDocs(colRef).then(docs => {
            const list: any = []
            docs.forEach(vdoData => {
                const _id = vdoData.id
                const data = vdoData.data()
                data._id = _id
                list.push(data)
                // console.log(data);                
            })
            if (list.length > 0) {
                callBack(list)
            }
        }).catch(err => { console.log(err) })

        // console.log(videoSnapShot);
    }
    async watchSingleVideo(_id: string, callBack: (data: any) => void) {
        const docRef = doc(firestore, this.video_collection, _id)
        await getDoc(docRef).then(doc => {
            const data = doc.data()
            if (data) {
                callBack(data)
            }
        }).catch(err => { console.log(err) })
    }
    async updateVideo(data: VideoDataWith_Id, callBack: () => void) {
        if (data._id) {
            const docRef = doc(firestore, this.video_collection, data._id)
            await updateDoc(docRef, {
                title: data.title,
                category: data.category,
                lesson: data.lesson,
                courseName: data.courseName,
                vdoChiperId: data.vdoChiperId,
                description: data.description,
                price: data.description,
                discountPrice: data.discountPrice
            }).then(() => {
                callBack()
            }).catch(err => { console.log(err) })
        } else { console.log(`Can not read video`); }
    }
    async deleteVideo(videoId: string) {
        if (videoId) {
            const docRef = doc(firestore, this.video_collection, videoId)
            await deleteDoc(docRef).then(() => {
                console.log(`Video has been deleted.`);
            }).catch(err => { console.log(err) })
        }
    }
}

export default new Admin()