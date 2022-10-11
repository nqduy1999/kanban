import { verifyToken } from '@/services';
import store from 'store';

export const setAccessToken = (token: string) => {
  return store.set('accessToken', token)
}
export const getAccessToken = () => {
  const accessToken = store.get('accessToken');
  return accessToken;
};

export const getRefreshToken = () => {
  const refreshToken = store.get('refreshToken');
  return refreshToken;
};

export const setTheme = (currentTheme: string) => {
  return store.set('theme', currentTheme ? currentTheme : "dark")
}

export const getTheme = () => {
  return store.get('theme')
}

export const isAuthencated = async () => {
  try {
    await verifyToken();
    return true;
  } catch (error) {
    return false;
  }
}

export const onCheckAuthencated = async () => {
  const isAuth = await isAuthencated();
  return isAuth
}