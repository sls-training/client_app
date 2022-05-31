import client from '../../client';
import Cookies from 'js-cookie';

export const getList = (userId, pageNumber, perPage) => {
  return client.get(`/users/${userId}/microposts?page=${pageNumber}&per_page=${perPage}`,{ headers: {'Authorization': Cookies.get("access_token")} });
};
