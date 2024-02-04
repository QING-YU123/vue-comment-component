import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('user', () => {
    const username = ref('游客')
    
    function setUsername(name: string) {
        username.value = name
    }

    function getUsername() {
        return username.value
    }

    return { username, setUsername, getUsername}
})
