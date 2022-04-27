import client from '../../client';

export const getList = (userId) => {
    return client.get(`/${userId}/microposts`);
  };