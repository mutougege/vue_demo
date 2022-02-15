import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Setting from "@/views/Setting";
import App from "@/App";
import Account from "@/views/Account";
import Other from "@/views/Other";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: 'home',
        component: App,
        children:
            [
                {
                    path: "/home",
                    name: "home",
                    component: Home
                },
                {
                    path: "/setting",
                    name: "setting",
                    component: Setting,
                    children: [
                        {
                            path: "/account",
                            name: "account",
                            component: Account
                        },
                        {
                            path: "/other",
                            name: "other",
                            component: Other
                        }
                    ]
                }
            ]
    }]

})
