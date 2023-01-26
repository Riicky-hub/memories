/* eslint-disable prettier/prettier */
import axios from 'axios';

const API = axios.create({ baseURL: 'https://memories-riickyhub.up.railway.app' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${ JSON.parse(localStorage.getItem('profile')).token }`;
  }
  return req;
});

const postsRoute = '/posts';
const usersRoute = '/user';

export const fetchPosts = () => API.get(postsRoute);
export const createPost = (newPost) => API.post(postsRoute, newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`${postsRoute}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`${postsRoute}/${id}`);
export const likePost = (id) => API.patch(`${postsRoute}/${id}/likePost`);

export const signIn = (formData) => API.post(`${usersRoute}/signin`, formData);
export const signUp = (formData) => API.post(`${usersRoute}/signup`, formData);
