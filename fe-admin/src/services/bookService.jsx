import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/books"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const getBooks = () => API.get("/");
export const createBook = (data) => API.post("/", data);
export const updateBook = (id, data) => API.put(`/${id}`, data);
export const deleteBook = (id) => API.delete(`/${id}`);