import { instance } from './config'

export default {

    list:(page) => {
        //return instance.get(`posts`)
        return instance.get(`posts?page=${page}`)
    },

    create:(post) => {
        return instance.post('posts', post)
    }

}