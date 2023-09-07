import { getAuth } from "firebase/auth"
import app, { firestore } from "../firebase/config.ts"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

export interface VideoData {
    _id: string,
    category: string,
    lesson: number,
    description: string,
    title: string,
    vdoChiperId: string,
    courseName: string,
}

class Admin {
    auth = getAuth(app)
    video_collection = "courses"
    user_collection = "user"

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
    async updateVideo(data: VideoData) {
        if (data._id) {
            const docRef = doc(firestore, this.video_collection, data._id)
            await updateDoc(docRef, {}).catch(err => {
                console.log(err);
            })
        } else {
            console.log(`Can not read video`);
        }
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