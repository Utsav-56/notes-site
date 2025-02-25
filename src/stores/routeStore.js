//pinia store to store current and previous route

import { defineStore } from "pinia";

export const useRouteStore = defineStore("userSelection", {
    state: () => ({
        currentRoute: null,
        previousRoute: null,
    }),
    actions: {
        setCurrentRoute(route) {
            this.previousRoute = this.currentRoute;
            this.currentRoute = route;
        },
    },
});
