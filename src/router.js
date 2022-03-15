import VueRouter from "vue-router";
import Vue from 'vue';
import Playground from "@/views/Playground";


Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        component: Playground,
    },
    {
        path: '/:question',
        name: 'questions',
        component: Playground,
        props: (route) => {
            return {
                question: route.params.question
            }
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router
