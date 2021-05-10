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

    editEmployee(context,{ id, data }){
        console.log(data)
        return new Promise((resolve, reject) => {
            axios.put(`${API}/employees/${id}`, data)
                .then(result => {
                    console.log(data)
                    resolve(result)
                    console.log(result)
                })
                .catch(error => {
                    console.log(error.response)
                    reject(error)
                })
            }) 
    },

    addEmployee({commit}, data){
        return new Promise((resolve, reject) => {
            axios.post(`${API}/employees`, data)
                .then(result => {
                    resolve(result)
                    commit('addEmployee', data)
                })
                .catch(error => {
                    reject(error)
                })
            })   
    },
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
    },
    addEmployee(state, employee){
        state.employees = state.employees.concat(employee)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}