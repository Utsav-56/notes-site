import { defineStore } from "pinia";
import axios from "axios";
import myAxios from "@/customAxios.js";
import createFormData from "@/useful_functions/createFormData.js";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        userName: null,
        userid: null,
        email: null,
        isLoggedIn: false,
    }),

    actions: {
        // Login User
         login(credentials) {

             myAxios.post(registerUrl, createFormData(credentials))
                 .then((res) => {
                            const data =  res.data;
                            const { message, user } = data;

                            console.log(message);
                            console.log(user);

                            this.user = user;
                            this.isLoggedIn = true;
                            this.userName = user.name;
                            this.userid = user.id;
                            this.email = user.email;



                 })
                 .catch((err) => {
                     const { response } = err;
                     const { message } = response.data;

                     console.log(response);
                     console.log(`Message from server: ${message}`);


                 });

        },

        async checkAuth() {
            try {
                const response = await axios.get("/api/me"); // Create this endpoint in your backend
                this.user = response.data;
                this.isLoggedIn = true;
            } catch (error) {
                this.user = null;
                this.isLoggedIn = false;
            }
        },

        // Logout User
        async logout() {
            try {
                await axios.post("/api/logout");
                this.user = null;
                this.isLoggedIn = false;
            } catch (error) {
                console.error("Logout failed:", error);
            }
        },
    },
});
