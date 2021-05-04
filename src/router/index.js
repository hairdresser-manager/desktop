import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/UserBoard'
import SignUp from '../components/auth/SignUp'
import Login from '../components/auth/Login'
import Logout from '../components/auth/Logout'
import PasswordRecovery from '../components/auth/PasswordRecovery'
import UserProfile from '../components/userboard/UserProfile'
import UserAppointments from '../components/userboard/UserAppointments'
import UserReviews from '../components/userboard/UserReviews'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/userboard',
    name: 'userboard',
    component: Profile,
      children: [
        {
          path: 'userprofile',
          name: 'userprofile',
          component: UserProfile
        },
        {
          path: 'userappointments',
          name: 'userappointments',
          component: UserAppointments
        },
        {
          path: 'userreviews',
          name: 'userreviews',
          component: UserReviews
        },
      ]
  },
  {
    path: '/passwordrecovery',
    name: 'passwordrecovery',
    component: PasswordRecovery
  },
  
    
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
