import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api"
});

export const getPosts = () => api.get("/posts");
export const getPost = (id) => api.get(`/posts/${id}`);

export const createPost = async (postData, token) =>
  api.post("/posts", postData, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const updatePost = async (id, postData, token) =>
  api.put(`/posts/${id}`, postData, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const deletePost = async (id, token) =>
  api.delete(`/posts/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const sendContactMessage = (data) => api.post("/contact", data);
