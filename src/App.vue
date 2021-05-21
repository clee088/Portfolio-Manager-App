<template>
    <div class="symbol-input">
        <input v-model="symbol" placeholder="Enter a symbol:" @keydown.enter="addToPortfolio(symbol); clearSearch();" @focus="clearSearch" @keyup="fetchSearchResults">
        <button @click="addToPortfolio(symbol); clearSearch();">Add</button>
    </div>
    <div class="search-results">
        <SearchResult v-for="result in this.input.searchResults" :key="result.id" :symbol="result.symbol" :security-name="result.securityName" />
<!--        <div v-for="result in this.searchResults['bestMatches']" :key="result.id">{{ result['1. symbol'] }} {{ result['2. name'] }}</div>-->
    </div>

    <div class="portfolio-list">
        <h3>Current Holdings</h3>
        <div v-for="stock in this.portfolio" :key="stock">{{ stock }}</div>
    </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex'
import SearchResult from "@/components/SearchResult";

export default {
    name: 'App',
    components: {
        SearchResult
    },
    computed: {
        ...mapState(['input', 'portfolio', 'sandboxMode']),
        symbol: {
            set(symbol) {
                this.symbolToUpperCase(symbol)
            },
            get() {
                return this.input.symbol
            }
        }
    },
    methods: {
        ...mapMutations(['addToPortfolio', 'clearSearch', 'symbolToUpperCase', 'updateSearchResults']),
        async fetchSearchResults() {
            if (this.symbol !== '') {
                if (this.sandboxMode) {
                    const response = await fetch(`https://sandbox.iexapis.com/stable/search/${this.symbol}?token=Tpk_40e51a7eb9b442aa87834a5071daed31`)
                    this.updateSearchResults(await response.json())
                } else {
                    const response = await fetch(`https://cloud.iexapis.com/stable/search/${this.symbol}?token=Tpk_40e51a7eb9b442aa87834a5071daed31`)
                    this.updateSearchResults(await response.json())
                }
            }
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin: 2rem 5rem 0;
}
</style>
