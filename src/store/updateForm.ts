// stores/counter.js
import { defineStore } from 'pinia'
import { VideoData } from '../components/firebase/admin';

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
            }
        }
    }, 
    actions: {
        getVdoData() {
            return this.vdoData;
        },
        handleVdoData(data: VideoData) {
            this.vdoData = data;
        }
    },
})