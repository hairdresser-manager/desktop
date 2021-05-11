import axios from 'axios'

const API = 'https://hairdresser-manager.azurewebsites.net/api/v1'

const state = {
    employeeId: null,
    employees: []
}

const getters = {
    getEmployees(state) {
        return state.employees
    },
    getEmployeeId(state) {
        return state.employeeId
    },
    getEmployee(state) {
        return state.employees[state.employeeId-1]
    }
}

const actions = {

    editEmployee(context, { id, data }){
        console.log(data)
        return new Promise((resolve, reject) => {
            axios.put(`${API}/employees/${id}`, data)
                .then(result => {  
                    resolve(result)
                    context.commit('editEmployee', { id, data })
                    
                })
                .catch(error => {
                    reject(error)
                })
            }) 
    },

    addEmployee({commit}, data){
        return new Promise((resolve, reject) => {
            axios.post(`${API}/employees`, data)
                .then(result => {
                    resolve(result)
                    commit('setEmployeeId', result.data.employeeId)
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
    setEmployeeId(state, id){
        state.employeeId = id
    },
    editEmployee(state, {id, data}){
        const index = state.employees.findIndex( employee => employee.id === id )
        Object.assign(state.employees[index], data)
    },
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