import axios from "axios";

const API = "http://localhost:8080/api/students";

export const getAllStudents = () => {
    return axios.get(`${API}/getall`);
};

export const getStudentById = (id) => {
    return axios.get(`${API}/get?id=${id}`);
};

export const createStudent = (student) => {
    return axios.post(`${API}/create`, student);
};

export const updateStudent = (id, student) => {
    return axios.put(`${API}/update?id=${id}`, student);
};

export const deleteStudent = (id) => {
    return axios.delete(`${API}/delete?id=${id}`);
};

export const softDeleteStudent = (id) => {
    return axios.patch(`${API}/soft-delete?id=${id}`);
};