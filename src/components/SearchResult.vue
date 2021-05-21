<template>
    <div class="search-result">
        <h4>{{ symbol }}</h4>
        <h4>{{ securityName }}</h4>
        <div class="add-button" @click="addToPortfolio(symbol); clearSearch();">Add</div>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
    name: "SearchResult",
    props: {
        symbol: String,
        securityName: String
    },
    computed: {
      ...mapState(['portfolio'])
    },
    methods: {
        ...mapMutations(['addToPortfolio', 'clearSearch']),
    }
}
</script>

<style scoped>
.search-result {
    width: 30%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: #2c3e50 10px;
    background-color: lightgray;
    margin: 0.8rem 0;
    padding: 0 1rem;
    border-radius: 0.5rem;
    align-items: center;
    box-shadow: 0 0 0.2rem #2c3e50;
}

.search-result:hover {
    background-color: #42b983;
}

.add-button {
    border: #2c3e50 0.1rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    background-color: lightcoral;
}
.add-button:hover {
    background-color: deeppink;
}

</style>