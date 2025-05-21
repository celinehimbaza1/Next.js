import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/books';

export const getAllBooks = () => axios.get(BASE_URL);
export const getBookById = (id: string) => axios.get(`${BASE_URL}/${id}`);
export const addBook = (data: any) => axios.post(BASE_URL, data);
export const updateBook = (id: string, data: any) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteBook = (id: string) => axios.delete(`${BASE_URL}/${id}`);
