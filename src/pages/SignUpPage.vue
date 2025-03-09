<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import myAxios from "@/customAxios.js";
import createFormData from "@/useful_functions/createFormData.js";

const router = useRouter();

const name = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const validationError = ref({
    containsError: false,
    message: {
        username: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    },
});

function clearValidationErrors() {
    validationError.value = {
        containsError: false,
        message: {
            username: "",
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    };
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {

    //for testinmg
    return true;



    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(password);
}

function validateForm() {
    clearValidationErrors();

    if (!name.value) {
        validationError.value.message.name = "Name is required";
        validationError.value.containsError = true;
    }

    if (!username.value) {
        validationError.value.message.username = "Username is required";
        validationError.value.containsError = true;
    }

    if (!email.value) {
        validationError.value.message.email = "Email is required";
        validationError.value.containsError = true;
    }
    if (!validateEmail(email.value)) {
        validationError.value.message.email = "Invalid email";
        validationError.value.containsError = true;
    }
    if (!password.value) {
        validationError.value.message.password = "Password is required";
        validationError.value.containsError = true;
    }
    if (!validatePassword(password.value)) {
        validationError.value.message.password =
            "Password must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters";
        validationError.value.containsError = true;
    }
    if (password.value !== confirmPassword.value) {
        validationError.value.message.confirmPassword =
            "Passwords do not match";
        validationError.value.containsError = true;
    }

    return !validationError.value.containsError;
}

function handleSubmit(e) {
    if (!validateForm()) {
        return false;
    }

    const formBody = {
        name: name.value,
        username: username.value,
        email: email.value,
        password: password.value,
    }

    const form =  createFormData(formBody)

    myAxios
        .post("/register.php", form)
        .then((res) => {
            console.log(res);
            // router.push("/login");
        })
        .catch((err) => {
            console.log(err);
            // if (err.response.data.message === "Email already exists") {
            //     validationError.value.message.email = "Email already exists";
            //     validationError.value.containsError = true;
            // }
        });





}
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div
            class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form
                        class="space-y-4 md:space-y-6"
                        action="#"
                        method="POST"
                        @submit.prevent="handleSubmit">
                        <div>
                            <label for="name">Full Name</label>
                            <input
                                type="text"
                                v-model="name"
                                name="name"
                                id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John Doe" />
                            <p
                                v-if="validationError.message.name"
                                class="text-red-500 text-xs italic">
                                {{ validationError.message.name }}
                            </p>
                        </div>
                        <div>
                            <label
                                for="username"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Username (Optional)
                            </label>
                            <input
                                v-model="username"
                                type="text"
                                name="username"
                                id="username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="johndoe123" />
                            <p
                                v-if="validationError.message.username"
                                class="text-red-500 text-xs italic">
                                {{ validationError.message.username }}
                            </p>
                        </div>

                        <div>
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your email
                            </label>
                            <input
                                v-model="email"
                                type="email"
                                name="email"
                                id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" />
                            <p
                                v-if="validationError.message.email"
                                class="text-red-500 text-xs italic">
                                {{ validationError.message.email }}
                            </p>
                        </div>
                        <div>
                            <label
                                for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <input
                                v-model="password"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <p
                                v-if="validationError.message.password"
                                class="text-red-500 text-xs italic">
                                {{ validationError.message.password }}
                            </p>
                        </div>
                        <div>
                            <label
                                for="confirm-password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Confirm password
                            </label>
                            <input
                                v-model="confirmPassword"
                                type="password"
                                name="confirm-password"
                                id="confirm-password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <p
                                v-if="validationError.message.confirmPassword"
                                class="text-red-500 text-xs italic">
                                {{ validationError.message.confirmPassword }}
                            </p>
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input
                                    id="terms"
                                    aria-describedby="terms"
                                    type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label
                                    for="terms"
                                    class="font-light text-gray-500 dark:text-gray-300">
                                    I accept the
                                    <a
                                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#">
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Create an account
                        </button>
                        <p
                            class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?
                            <a
                                href="#"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Login here
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
