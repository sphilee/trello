import axios from 'axios';

export const createList = ({title}) => axios.post('/list', {title});
export const getInitialList = () => axios.get('/list/?_sort=id'); 
export const getRecentList = (cursor) => axios.get(`/list/?id_gte=${cursor+1}&_sort=id`); 
export const updateList = ({id, list: {title}}) => axios.put(`/list/${id}`, {title});
export const deleteList = (id) => axios.delete(`/list/${id}`);