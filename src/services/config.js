import axios from 'axios'

//const token = process.env.VUE_APP_ACCESS_TOKEN

export const instance = axios.create({
    baseURL: 'https://gorest.co.in/public/v2/',
    headers: {        
        'Authorization': 'Bearer c5b962bb78f0345de73bd4ab12f29883c1367c017ccfee2d3b3f25c04aad9419'
    }
})
