import { instance } from './config'

export default {

    create:(comment) => {
        return instance.post('comments', comment)
    },

    list:() => {
        return instance.get('comments')
    }
}