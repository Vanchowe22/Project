import { del, get, post, put } from "../helpers/requester";
import { uploadFile } from "../helpers/uploadFile";

const baseUrl = 'http://localhost:5000/data/blog'

export const getAll = () => get(baseUrl);

export const getOne = (id) => get(`${baseUrl}/${id}`);

export const create = (data) => {
    return uploadFile(data.imageUrl)
        .then(url => {
            data.imageUrl = url;
            return post(baseUrl, data);
        })
};

export const commentOne = (data, id) => post(`${baseUrl}/${id}`, data);

export const editOne = (id, data, authorization) => put(`${baseUrl}/${id}`, data, authorization);

export const deleteOne = (id, authorization) => del(`${baseUrl}/${id}`, null, authorization);

export const search = (query) => get(`http://localhost:5000/search?name=${query}`);

export const like = (userId, blogId) => post(`${baseUrl}/${blogId}/like/`, { userId })

export const unlike = (userId, blogId) => post(`${baseUrl}/${blogId}/unlike`, { userId })

export const getRelated = (genre, id) => get(`${baseUrl}/related/${genre}/${id}`);