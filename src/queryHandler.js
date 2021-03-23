import {mutationPrefix} from "./store";

export default function (coreQueryParams, router, store) {
    return function (route) {
        if(!route.query) return;

        for(const param in route.query) {
            if(route.query.hasOwnProperty(param)) {
                if(coreQueryParams.includes(param)) {
                    store.commit(`${mutationPrefix}${param}`, route.query[param]);
                }
            }
        }
        router.replace({ query: {}}).catch(error => error);
    }
}