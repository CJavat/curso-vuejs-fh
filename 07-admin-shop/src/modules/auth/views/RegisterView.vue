<template>
  <h1 class="text-2xl font-semibold mb-4">Nueva Cuenta</h1>
  <form @submit.prevent="onRegister">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-600">Nombre</label>
      <input
        v-model="myForm.fullName"
        ref="fullNameInputRef"
        type="text"
        id="name"
        name="name"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Username Input -->
    <div class="mb-4">
      <label for="email" class="block text-gray-600">Correo</label>
      <input
        v-model="myForm.email"
        ref="emailInputRef"
        type="text"
        id="email"
        name="email"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Contraseña</label>
      <input
        v-model="myForm.password"
        ref="passwordInputRef"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">¿Olvidaste la contraseña?</a>
    </div>
    <!-- Login Button -->
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Crear Cuenta
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Ingresar Aquí</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useToast } from 'vue-toastification';
import { useAuthStore } from '../stores/auth.store';

const authStore = useAuthStore();
const toast = useToast();

const fullNameInputRef = ref<HTMLInputElement | null>();
const emailInputRef = ref<HTMLInputElement | null>();
const passwordInputRef = ref<HTMLInputElement | null>();

const myForm = reactive({
  fullName: '',
  email: '',
  password: '',
});

const onRegister = async () => {
  if (myForm.fullName === '') return fullNameInputRef.value?.focus();
  if (myForm.email === '') return emailInputRef.value?.focus();
  if (myForm.password.length < 6) return passwordInputRef.value?.focus();

  const { ok, message } = await authStore.register(myForm.fullName, myForm.email, myForm.password);

  if (ok) return;
  
  //TODO: Arreglar el manejo de errores
  toast.error(message);
};
</script>
