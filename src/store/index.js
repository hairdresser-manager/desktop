import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import parseJwt from '../helpers/jwtDecode'

Vue.use(Vuex)
//axios.default.baseURL = 'http://localhost:8080/api/v1'


const state = {
  token: localStorage.getItem('accessToken') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  user: {},
  reviews: [],
  message: []
}

const getters = {
  loggedIn(state) {
    return state.token !== null
  },
  getUser(state) {
    return state.user
  },
  getReviews(state) {
    return state.reviews
  },
  getMesasge(state) {
    return state.message
  }
}

const actions = {
  fetchReviews(context, pagination){
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:8080/api/v1/reviews?Page=${pagination.page}&PerPage=${pagination.perPage}`)
        .then(result => {
          context.commit('fetchReviews', result.data)
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  decodeToken({commit}) {
    try {
      const token = localStorage.getItem('accessToken') || null;
      const jwt = parseJwt(token);
      commit('decodeToken', jwt.name)
      console.log(jwt)
    } catch (error) {
      console.log(error)
    }
  },

  register(context, data) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:8080/api/v1/register', data)
        .then(result => {
          resolve(result)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  login (context, data) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:8080/api/v1/login', data)
        .then(result => {
          const token = result.data;
          const tokens = { access: token.accessToken, refresh: token.refreshToken}
          localStorage.setItem('accessToken', token.accessToken)
          localStorage.setItem('refreshToken', token.refreshToken)
          context.commit('retreiveTokens', tokens)
          
          resolve(result)
        })
        .catch(error => {
          reject(error)
          console.log(error.response)
          context.commit('message', error.response.data.errors)
        })
    })
  },


  logout(context) {
    if(context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8080/api/v1/logout', context.state.refreshToken)
          .then(response => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            context.commit('destroyTokens')
            resolve(response)
          })
          .catch(error => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            context.commit('destroyTokens')
            reject(error)
          })

      })  
    }
  },
}


const mutations = {
  retreiveTokens(state, accessToken) {
    state.token = accessToken.access,
    state.refreshToken = accessToken.refresh
  },
  destroyTokens(state) {
    state.token = null,
    state.refreshToken = null
  },
  decodeToken(state, user) {
    state.user = user
  },
  fetchReviews(state, reviews){
    state.reviews = reviews
  },
  message(state, errors){
    state.message = errors
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})