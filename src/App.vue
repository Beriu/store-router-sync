<template>
    <main>
        <h1>Synchronize state with query params</h1>
        <p>Params in data(): <code>{{ params }}</code></p>
        <input v-for="(value, key) of params" v-model="params[key]" :placeholder="key" :key="key">
        <button @click="generateLinkMethod()">Generate link</button>
        <br>
        <hr>
        <a :href="generatedLink">{{ generatedLink }}</a>
    </main>
</template>

<script>
import {coreQueryParams} from "@/config";
import {createLinkFromState} from "@/router";

export default {
    name: 'App',

    data() {
        return {
            generatedLink: 'example.com',
            params: Object.keys(coreQueryParams).reduce((p, c) => ({...p, [c]: null}), {})
        };
    },

    methods: {
        generateLinkMethod() {
            this.generatedLink = createLinkFromState(this.$route.name, this.params);
        }
    }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body, html {
    margin: 0;
    padding: 0;
}

body {
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
}

main {
    > * {
        margin: 0.5rem 1rem;
    }
}

a {
    font-size: 22px;
}
</style>
