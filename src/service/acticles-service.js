const baseUrl = 'http://localhost:5000/data/blog'

export const getAll = () => fetch(baseUrl).then(res => res.json());

export const getOne = (id) => fetch(`${baseUrl}/${id}`).then(res => res.json());