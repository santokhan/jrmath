<template>
    <teleport to="body">
        <div
            class="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] bg-black/50 max-h-full flex justify-center items-center">
            <div class="relative w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow">
                    <div class="px-6 py-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900">Update Your Profile</h3>
                        <form class="space-y-6" @submit="handleSubmit">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                                <input type="text" name="name" id="name" v-model="formData.name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                                    placeholder="" required>
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Your Phone</label>
                                <input type="text" name="phone" id="phone" v-model="formData.phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                                    placeholder="" required>
                            </div>
                            <div>
                                <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Your
                                    Address</label>
                                <input type="text" name="address" id="address" v-model="formData.address"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                                    placeholder="" required>
                            </div>
                            <button type="submit"
                                class="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import profile, { type UserInfo } from '../../firebase/profile';
import { getCurrentUser } from 'vuefire';

const props = defineProps<{ hideModal: () => void }>()

const email = ref<string>("")
const currentUser = getCurrentUser()
currentUser.then(user => {
    if (user?.email) {
        email.value = user.email
    }
}).catch(err => { console.log(err) })

const formData = reactive<UserInfo>({
    name: "",
    phone: "",
    address: ""
})

function handleSubmit(e: any) {
    e.preventDefault();
    if (email.value) {
        profile.addUser(formData, email.value)
        props.hideModal()
    }
}
</script>

