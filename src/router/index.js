import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsersView from "../views/UsersView.vue";
import SettingsView from "../views/SettingsView.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/", name: "Home", component: HomeView },
        { path: "/users", name: "Users", component: UsersView },
        { path: "/settings", name: "Settings", component: SettingsView },
    ],
});
