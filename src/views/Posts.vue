<template>
    <h1>
        Last Posts
    </h1>

    <tbody>
        <tr v-for="post of posts" :key="post.id">
            <td> {{post.title}} </td>
            <td> {{post.body}} </td>
            
        </tr>
    </tbody>

</template>


<script>
import Title from '../components/Title.vue'
import Posts from '../services/posts'

export default {

    //retornar atributos do componente
    data(){
        return {
            posts: []
        }
    },

    mounted(){
        Posts.list().then(response => {
            console.log(response.data)
            this.posts = response.data
        })
    }

}

</script>

