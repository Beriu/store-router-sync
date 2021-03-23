import Vue from 'vue';
import Vuex from 'vuex';
import {coreQueryParams} from './config';

Vue.use(Vuex);

export const mutationPrefix = 'set_';

const generateStore = (queryParams) => {

    const state = {};
    const mutations = {};
    const getters = {};

    for (const paramKey in queryParams) {
        if(queryParams.hasOwnProperty(paramKey)) {
            const { type, defaultValue } = queryParams[paramKey];

            state[paramKey] = defaultValue ? defaultValue() : type();

            mutations[`${mutationPrefix}${paramKey}`] = (state, payload) => state[paramKey] = payload;
            getters[paramKey] = (state) => state[paramKey];
        }
    }
    return new Vuex.Store({state, mutations, getters});
};

export default generateStore(coreQueryParams);
