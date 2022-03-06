import { instance } from './config'

export default {

    list:(page) => {
        return instance.get(`posts?page=${page}`)
    },

    create:(post) => {
        return instance.post('posts', post)
    },

    listId:(id) => {
        return instance.get(`posts/${id}`)
    }

}