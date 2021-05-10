import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/UserBoard'
import SignUp from '../components/auth/SignUp'
import Login from '../components/auth/Login'
import Logout from '../components/auth/Logout'
import PasswordRecovery from '../components/auth/PasswordRecovery'
import UserProfile from '../components/userboard/Profile'
import UserAppointments from '../components/userboard/Appointments'
import UserReviews from '../components/userboard/Reviews'
import UserSchedule from '../components/userboard/Schedule'
import UserEmployees from '../components/userboard/Employee/Employees'
import UserServices from '../components/userboard/Services'

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
          path: 'profile',
          name: 'profile',
          component: UserProfile
        },
        {
          path: 'appointments',
          name: 'appointments',
          component: UserAppointments
        },
        {
          path: 'reviews',
          name: 'reviews',
          component: UserReviews
        },
        {
          path: 'services',
          name: 'services',
          component: UserServices
        },
        {
          path: 'schedule',
          name: 'schedule',
          component: UserSchedule
        },
        {
          path: 'employess',
          name: 'employess',
          component: UserEmployees
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
