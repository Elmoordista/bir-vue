import { defineStore } from "pinia";
import HttpClient from "@/plugins/axios";
import VueCookies from "vue-cookies";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            isAuthenticated: false,
            user: {
                roles: [],
            },
        };
    },
    getters: {
        isLoggedIn: (state) => state.isAuthenticated,
        userInfo: (state) => state.user,
        userRoles: (state) => state.user.roles.map((role) => role.name),
        defaultRole: (state) =>
            state.user.roles.length ? state.user.roles[0].name : "",
    },
    actions: {
        async setUserInfo() {
            // location.reload();
            if (!VueCookies.get("token")) return;

            try {
                const { data } = await HttpClient.get("v1/users/me");
                this.user = data;
            } catch (err) {
                if (err.response) {
                    console.log(error);
                }
            }
        },
    },
});
