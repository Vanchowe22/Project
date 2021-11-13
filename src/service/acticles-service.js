const baseUrl = 'http://localhost:5000/data/blog'

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json());
};