import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({mode: 'history', routes});

export const createLinkFromState = (componentName, variables) => {

    const propsWithValues = {};
    for(const key in variables) {
        if(variables.hasOwnProperty(key)) {
            if(variables[key]) {
                propsWithValues[key] = variables[key];
            }
        }
    }
    const {href} = router.resolve({name: componentName, query: propsWithValues});
    return `${process.env.VUE_APP_BASE_URL}${href}`;
}

export default router;
