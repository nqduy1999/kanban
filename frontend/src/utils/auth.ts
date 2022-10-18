import { verifyToken } from '@/services';
import store from 'store';

export const setAccessToken = (token: string) => {
  return store.set('accessToken', token)
}

export const removeAccessToken = () => {
  return localStorage.removeItem('accessToken')
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

export const setAuth = (isAuth: boolean) => {
  return store.set('isAuth', isAuth)
}

export const getAuth = () => {
  return store.get('isAuth');
}

export const isAuthencated = async () => {
  try {
    const isAuth = await verifyToken();
    if (isAuth) {
      setAuth(true);
      return true;
    }
    return null;
  } catch (error) {
    setAuth(false);
    removeAccessToken()
    return false;
  }
}

export const onCheckAuthencated = async () => {
  const isAuth = await isAuthencated();
  return isAuth
}