import { isAxiosError } from 'axios';
import type { AuthResponse, User } from '../interfaces';
import { tesloApi } from '@/api/tesloApi';

interface RegisterError {
  ok: false;
  message: string;
}

interface RegisterSuccess {
  ok: true;
  user: User;
  token: string;
}

export const registerAction = async (
  fullName: string,
  email: string,
  password: string,
): Promise<RegisterSuccess | RegisterError> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
      fullName,
      email,
      password,
    });

    return {
      ok: true,
      user: data.user,
      token: data.token,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 400) {
      return { ok: false, message: 'No se pudo crear la cuenta' };
      //TODO: Arreglar el manejo de errores
      // return { ok: false, message: error.response.data.message };
    }

    console.log(error);
    throw new Error('No se pudo realizar la petición');
  }
};
