import axios from 'axios';

export const createList = ({title}) => axios.post('/lists', {title});
export const createCard = ({listId, title}) => axios.post('/cards', {listId, title});
export const getInitialList = () => axios.get('/lists/?_sort=id'); 
export const getInitialCard = () => axios.get(`/cards/?_sort=id`); 
export const getRecentList = (cursor) => axios.get(`/lists/?id_gte=${cursor+1}&_sort=id`); 
export const getRecentCard = ({listId, cursor}) => axios.get(`/cards/?listId=${listId}&id_gte=${cursor+1}&_sort=id`); 
export const updateList = ({id, list: {title}}) => axios.put(`/lists/${id}`, {title});
export const deleteList = (id) => {
    axios.delete(`/cards/?listId=${id}`);
    axios.delete(`/lists/${id}`);
};
export const deleteCard = (id) => axios.delete(`/cards/${id}`);