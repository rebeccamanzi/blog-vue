import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import CreateUser from '../views/CreateUser.vue'
import CreatePost from '../views/CreatePost.vue'
import UpdateStatus from '../views/UpdateStatus.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/createuser',
      name: 'createuser',
      component: CreateUser
    },
    {
      path: '/createpost',
      name: 'createpost',
      component: CreatePost
    },
    {
      path: '/updatestatus',
      name: 'updatestatus',
      component: UpdateStatus
    }
  ]
})

export default router