import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { loginAction } from '../actions';

import { AuthStatus, type User } from '../interfaces';

export const useAuthStore = defineStore('auth', () => {
  const authStatus = ref<AuthStatus>(AuthStatus.Checking);
  const user = ref<User | undefined>();
  const token = ref('');

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

  const logOut = () => {
    authStatus.value = AuthStatus.Unauthenticated;
    user.value = undefined;
    token.value = '';
    return false;
  };

  return {
    user,
    token,
    authStatus,

    //* Getters
    isChecking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),

    //TODO: Getter para saber si es un admin o no

    userName: computed(() => user.value?.fullName),

    // Actions
    login,
    logOut,
  };
});
