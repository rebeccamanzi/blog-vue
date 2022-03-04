import { instance } from './config'

export default {

    create:(user) => {
        return instance.post('users', user)
    }
}