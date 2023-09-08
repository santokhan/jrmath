// stores/counter.js
import { defineStore } from 'pinia'
import { type VideoDataWith_Id } from '../components/firebase/admin';

export const useUpdateFormStore = defineStore('updateVdoData', {
    state: () => {
        return {
            vdoData: {
                _id: "",
                category: "",
                lesson: -1,
                description: "",
                title: "",
                vdoChiperId: "",
                courseName: "",
                vdoStorage: ""
            }
        }
    },
    actions: {
        getVdoData() {
            return this.vdoData;
        },
        handleVdoData(data: VideoDataWith_Id) {
            this.vdoData = data;
        }
    },
})