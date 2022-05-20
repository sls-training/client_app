import client from '../../client';

export const getList = (userId, pageNumber, perPage) => {
  return client.get(`/${userId}/microposts?page=${pageNumber}&per_page=${perPage}`);
};