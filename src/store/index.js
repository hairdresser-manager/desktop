import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const API = 'http://localhost:8080/api/v1'


const state = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  reviews: [],
  errors: null,
  appointments: [],
  teamMembers: [],
  availableDates: [],
}

const getters = {
  loggedIn(state) {
    return state.user !== null
  },
  getUser(state) {
    return state.user
  },
  getReviews(state) {
    return state.reviews
  },
  getAppointments(state){
    return state.appointments
  },
  getTeamMembers(state){
    return state.teamMembers
  },
  getDates(state){
    return state.availableDates
  }
}

const actions = {

  fetchUser({commit}){
    return new Promise((resolve, reject) => {
      axios.get(`${API}/accounts/me`)
        .then(result => {
          resolve(result)
          commit('setUser', result.data)
        })
        .catch(error => reject(error))
    })
  },

  fetchDates({commit}) {
    return new Promise((resolve,reject) => {
      axios.get(`${API}/appointments/available-dates`)
        .then(result => {
          resolve(result)
          commit('setDates', result.data)
        })
        .catch(error => reject(error))
    })
  },

  fetchMembers({commit}) {
      return new Promise((resolve, reject) => {
      axios.get(`${API}/team-members`)
        .then(result => {
          resolve(result)
          commit('setMembers', result.data)
        })
        .catch(error => reject(error))
      })
  },

  fetchAppointments() {
    return new Promise((resolve, reject) => {
      axios.get(`${API}/appointments`)
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
  },

  resetPassword(context, email) {
    return new Promise((resolve, reject) => {
      axios.post(`${API}/remind-password`, email)
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  fetchReviews(context, pagination){
    return new Promise((resolve, reject) => {
      axios.get(`${API}/reviews?Page=${pagination.page}&PerPage=${pagination.perPage}`)
        .then(result => {
          context.commit('setReviews', result.data)
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  register(context, data) {
    return new Promise((resolve, reject) => {
      axios.post(`${API}/register`, data)
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          context.commit('setError', error.response.data.errors)
          reject(error)
        })
    })
  },

  login (context, data) {
    return new Promise((resolve, reject) => {
      axios.post(`${API}/login`, data)
        .then(result => {
          localStorage.setItem('user', JSON.stringify(result.data))
          context.commit('setUser', result.data)
          resolve(result)
        })
        .catch(error => {
          context.commit('setError', error.response.data.errors)
          reject(error)
        })
    })
  },


  logout (context) {
    if(context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post(`${API}/logout`, context.state.refreshToken)
          .then(response => {
            localStorage.removeItem('user')
            context.commit('deleteUser')
            resolve(response)
          })
          .catch(error => {
            localStorage.removeItem('user')
            context.commit('deleteUser')
            reject(error)
          })

      })  
    }
  },

}


const mutations = {
  setUser(state, user){
    state.user = user;
  },
  deleteUser(state){
    state.user = null
  },
  setReviews(state, reviews){
    state.reviews = reviews
  },
  setError(state, error){
    state.errors = error
  },
  clearError(state){
    state.errors = null
  },
  setAppointments(state, appointments){
    state.appointments = appointments
  },
  setMembers(state, members){
    state.teamMembers = members
  },
  setDates(state, dates){
    state.availableDates = dates
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})