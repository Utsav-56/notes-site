<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const { login } = useAuth();

const isLoading = ref(false);
const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'farmer',
});

const handleSubmit = async () => {
  try {
    isLoading.value = true;
    if (formData.value.password !== formData.value.confirmPassword) {
      showToast('Password do not match', 'warn');
      return;
    }
    const { name, email, password, role } = formData.value;
    const response = await customAxios.post('/auth/signup.php', { name, email, password, role });
    if (response.status === 200) {
      router.push('/login');
      showToast('User Created Successfully !! Please Login', 'success');
    }
  } catch (error) {
    handleCatchError(error, router);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  document.title = 'FuGrow | Signup';
});
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-10 w-full max-w-md text-center">
      <div class="mb-6">
        <h1 class="text-2xl font-semibold text-dark">Join Fugrow</h1>
        <p class="text-sm text-gray-600">
          Create an account to explore the future of agriculture.
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="text-left">
          <label for="name" class="block text-sm text-gray-700">Full Name</label>
          <input
            v-model="formData.name"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div class="text-left">
          <label for="email" class="block text-sm text-gray-700">Email</label>
          <input
            v-model="formData.email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div class="text-left">
          <label for="password" class="block text-sm text-gray-700">Password</label>
          <input
            v-model="formData.password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div class="text-left">
          <label for="confirmPassword" class="block text-sm text-gray-700">Confirm Password</label>
          <input
            v-model="formData.confirmPassword"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div class="text-left">
          <label for="role" class="block text-sm text-gray-700">Role</label>
          <select
            v-model="formData.role"
            id="role"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="farmer">Farmer</option>
            <option value="vendor">Vendor</option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          {{ isLoading ? 'Signing up...' : 'Sign Up' }}
        </button>
      </form>

      <div class="mt-4 text-sm text-gray-600">
        <p>
          Already have an account?
          <router-link to="/login" class="text-green-600 hover:underline">
            Log in
          </router-link>
        </p>
        <router-link to="/" class="text-green-600 hover:underline block mt-2">
          Go to home
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add additional styling here if needed */
</style>
