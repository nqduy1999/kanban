import store from 'store';

export const getAccessToken = () => {
  const accessToken = store.get('accessToken');
  return accessToken;
};

export const getRefreshToken = () => {
  const refreshToken = store.get('refreshToken');
  return refreshToken;
};
