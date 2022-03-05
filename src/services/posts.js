import { instance } from './config'

export default {

    list:() => {
        return instance.get('posts')
    },

    create:(post) => {
        return instance.post('posts', post)
    }

}