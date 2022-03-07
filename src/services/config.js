import axios from 'axios'

//const token = process.env.VUE_APP_ACCESS_TOKEN

export const instance = axios.create({
    baseURL: 'https://gorest.co.in/public/v2/',
    headers: {        
        'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
    }
})
