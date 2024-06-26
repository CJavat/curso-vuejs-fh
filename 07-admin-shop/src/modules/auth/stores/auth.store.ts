import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

import { checkAuthAction, loginAction, registerAction } from '../actions';

import { AuthStatus, type User } from '../interfaces';

export const useAuthStore = defineStore('auth', () => {
  const authStatus = ref<AuthStatus>(AuthStatus.Checking);
  const user = ref<User | undefined>();
  const token = ref(useLocalStorage('token', ''));

  const login = async (email: string, password: string) => {
    try {
      const loginResponse = await loginAction(email, password);
      if (!loginResponse.ok) {
        logOut();
        return false;
      }

      user.value = loginResponse.user;
      token.value = loginResponse.token;
      authStatus.value = AuthStatus.Authenticated;
      return true;
    } catch (error) {
      console.log(error);

      return logOut();
    }
  };

  const register = async (fullName: string, email: string, password: string) => {
    try {
      const registerResponse = await registerAction(fullName, email, password);

      if (!registerResponse.ok) {
        logOut();
        return { ok: false, message: registerResponse.message };
      }

      user.value = registerResponse.user;
      token.value = registerResponse.token;
      authStatus.value = AuthStatus.Authenticated;

      return { ok: true, message: '' };
    } catch (error) {
      //TODO: Arreglar el manejo de errores
      console.log(error);
      return { ok: false, message: 'Error al registrar el usuario' };
    }
  };

  const logOut = () => {
    localStorage.removeItem('token');

    authStatus.value = AuthStatus.Unauthenticated;
    user.value = undefined;
    token.value = '';
    return false;
  };

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      const statusResp = await checkAuthAction();
      if (!statusResp.ok) {
        logOut();
        return false;
      }

      authStatus.value = AuthStatus.Authenticated;
      user.value = statusResp.user;
      token.value = statusResp.token;
      return true;
    } catch (error) {
      logOut();
      return false;
    }
  };

  return {
    user,
    token,
    authStatus,

    //* Getters
    isChecking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),

    isAdmin: computed(() => user.value?.roles.includes('admin') ?? false),
    userName: computed(() => user.value?.fullName),

    // Actions
    login,
    register,
    logOut,
    checkAuthStatus,
  };
});
