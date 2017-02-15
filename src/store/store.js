import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

export const store = new Vuex.Store({
    state: {
        todos: [
            //{id: 1, name: 'Max', registered: false},
        ],
        currentTurn: 'phase'
    },
    getters,
    mutations,
    actions
})
