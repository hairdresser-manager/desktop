import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'

Vue.use(Vuex)

const types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

const state = {
  logged: localStorage.getItem('token')
}

const getters = {
  isLogged: state => state.logged
}

const actions = {
  login ({commit}, data) {
    axios.post('http://localhost:8080/api/v1/login', data)
      .then((result) => {
        localStorage.setItem('token', result.data.accessToken)
        commit(types.LOGIN)
        router.push({path: '/home'})
      })
  },

  logout({commit}) {
    localStorage.removeItem('token')
    commit(types.LOGOUT)
    router.push({path: '/login'})
  }
}

const mutations = {
  [types.LOGIN] (state) {
    state.logged = 1;
  },

  [types.LOGOUT] (state) {
    state.logged = 0;
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})