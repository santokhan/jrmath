// stores/counter.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userData', {
    state: (): any => {
        return {
            multipleUser: false,
        }
    },
    actions: {
        getMultipleUser() {
            return this.multipleUser;
        },
        handleMultipleUser() {
            this.multipleUser = true;
        },
    },
})