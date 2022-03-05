import { instance } from './config'

export default {

    create:(user) => {
        return instance.post('users', user)
    },

    list:() => {
        return instance.get('users')
    },

    update:(user) => {
        return instance.patch(`users/${user.id}`, user)
    }
}