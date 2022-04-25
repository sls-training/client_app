import client from './client';

export const getList = (id) => {
    return client.get(`/${id}/microposts`);
  };