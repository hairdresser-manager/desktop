import axios from 'axios'

const API = 'http://localhost:8080/api/v1'

const state = {
    employees: []
}

const getters = {
    getEmployees(state) {
        return state.employees
    }
}

const actions = {

    fetchEmployees({commit}){
        return new Promise((resolve, reject) => {
            axios.get(`${API}/employees`)
                .then(result => {
                    resolve(result)
                    commit('setEmployees', result.data)
                })
                .catch(error => reject(error))
        })
    }
}

const mutations = {
    setEmployees(state, employee){
        state.employees = employee
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}