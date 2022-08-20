import axios from "axios";

const api = "http://localhost:4000";

export const postTasks = (payload) => axios.post(`${api}/tasks`, payload);

export const getTasks = () => axios.get(`${api}/tasks`).then((res) => res.data);
