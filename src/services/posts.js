import { instance } from './config'

export default {

    list:() => {
        return instance.get('posts')
    }

}