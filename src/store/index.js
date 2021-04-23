import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
//axios.default.baseURL = 'http://localhost:8080/api/v1'

const state = {
  token: localStorage.getItem('accessToken') || null,
  refreshToken: localStorage.getItem('refreshToken') || null
}

const getters = {
  loggedIn(state) {
    return state.token !== null
  }

}

const actions = {
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
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})