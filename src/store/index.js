import { createStore } from 'vuex'

export default createStore({
  state: {
    input: {
      symbol: '',
      searchResults: []
    },
    portfolio: [],
    sandboxMode: true
  },
  getters: {
  },
  mutations: {
    addToPortfolio(state, symbol) {
      if (state.portfolio.includes(symbol)) {
        alert(symbol + " has already been added!")
      } else {
        state.portfolio.push(symbol)
      }
    },
    clearSearch(state) {
      state.input.symbol = ''
      state.input.searchResults = []
    },
    symbolToUpperCase(state, symbol) {
      state.input.symbol = symbol.toUpperCase()
    },
    updateSearchResults(state, results) {
      state.input.searchResults = results
    }
  },
  actions: {
  },
  modules: {
  }
})
