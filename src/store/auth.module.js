import axios from 'axios'

const API = 'http://localhost:8080/api/v1'

const state = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  accountUser: {},
  reviews: [],
  errors: null,
  appointments: [],
  teamMembers: [],
  availableDates: [],
  services: [],
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
  },
  getServices(state){
    return state.services
  }
}

const actions = {

  fetchServices({commit}){
    return new Promise((resolve, reject) => {
      axios.get(`${API}/offers/services`)
        .then(result => {
          resolve(result)
          commit('setServices', result.data)
        })
        .catch(error => reject(error))
      })
  },

  changePassword({commit}, data){
    return new Promise((resolve, reject) => {
      axios.post(`${API}/accounts/change-password`, data)
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          commit('setError', error.response.data.errors)
          reject(error)
        })
    })
  },

  updateUser(context, data){
    return new Promise((resolve, reject) => {
      axios.put(`${API}/accounts`, data)
        .then(result => {
          resolve(result)
        })
        .catch(error => reject(error))
      })
  },

  fetchUser({commit}){
    return new Promise((resolve, reject) => {
      axios.get(`${API}/accounts/me`)
        .then(result => {
          resolve(result)
          commit('setAccountUser', result.data)
        })
        .catch(error => reject(error))
    })
  },

  fetchDates({commit}) {
    return new Promise((resolve,reject) => {
      axios.get(`${API}/appointments/available-dates`)
        .then(result => {
          console.log(result.data)
          resolve(result)
          commit('setDates', result.data)
        })
        .catch(error => reject(error))
    })
  },

  fetchMembers({commit}) {
      return new Promise((resolve, reject) => {
      axios.get(`${API}/offers/team-members`)
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

  resetPassword(email) {
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

  fetchReviews({commit}, pagination){
    return new Promise((resolve, reject) => {
      axios.get(`${API}/reviews?Page=${pagination.page}&PerPage=${pagination.perPage}`)
        .then(result => {
          commit('setReviews', result.data)
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  verifyEmail(context, data){
    return new Promise((resolve, reject) => {
      axios.post(`${API}/register/verify-email`, data)
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
      })
  },

  register({commit}, data) {
    return new Promise((resolve, reject) => {
      axios.post(`${API}/register`, data)
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          console.log(error.response)
          commit('setError', error.response.data.errors)
          reject(error)
        })
    })
  },

  login ({commit}, data) {
    return new Promise((resolve, reject) => {
      axios.post(`${API}/login`, data)
        .then(result => {
          localStorage.setItem('user', JSON.stringify(result.data))
          commit('setUser', result.data)
          resolve(result)
        })
        .catch(error => {
          console.log(error.response)
          commit('setError', error.response.data.errors || error.response.data)
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
  setServices(state, service){
    state.services = service
  },
  updateFirstName(state, value){
    state.accountUser.firstName = value
  },
  updateLastName(state, value){
    state.accountUser.lastName = value
  },
  updateMobilePhone(state, value){
    state.accountUser.mobilePhone = value
  },
  setAccountUser(state, user){
    state.accountUser = user
  },
  setUser(state, user){
    state.user = user
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

export default {
  state,
  getters,
  actions,
  mutations
}