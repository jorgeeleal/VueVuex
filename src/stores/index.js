import {createStore} from 'vuex';

export default createStore({
    state: {
        paises: [],
        paisesFiltrados: []
    },
    mutations: {
        setPaises(state, payload) {
            state.paises = payload
        },
        setPaisesFiltrados(state, payload){
            state.paisesFiltrados = payload
        }
    }, 
    actions: {
        async getPaises({commit}){
            try {
                const response = await fetch('https://restcountries.com/v3.1/all')
                const data = await response.json();
                commit('setPaises', data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        topPaisesPoblacion(state){
            return state.paises.sort((a, b) => {
                return a.population < b.population ? 1 : -1
            })
        }
    },
    modules: {

    }
})