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
        component: Playground,
        props: (route) => {
            return {
                question: route.params.question
            }
        },
    },
    {
        path: '/1',
        component: index1
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router
