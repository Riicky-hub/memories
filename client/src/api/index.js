import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
const postsRoute = '/posts';
const usersRoute = '/user';

export const fetchPosts = () => API.get(postsRoute);
export const createPost = (newPost) => API.post(postsRoute, newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`${postsRoute}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`${postsRoute}/${id}`);
export const likePost = (id) => API.patch(`${postsRoute}/${id}/likePost`);

export const googleUserData = (token) =>
  axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const signIn = (formData) => API.post(`${usersRoute}/signin`, formData);
export const signUp = (formData) => API.post(`${usersRoute}/signup`, formData);
