const baseUrl = 'http://localhost:5000/data/blog'

export const getAll = () => fetch(baseUrl).then(res => res.json());

export const getOne = (id) => fetch(`${baseUrl}/${id}`).then(res => res.json());

export const create = (data) => fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then(res => res.json());

export const commentOne = (data, id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
}

export const editOne = (id, data, authorization) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': authorization,
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
};

export const deleteOne = (id, authorization) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': authorization,
        }
    })
        .then(res => res.json());
};

export const search = (query) => fetch(`http://localhost:5000/search?name=${query}`).then(res => res.json());

export const like = (userId, blogId) => {
    return fetch(`${baseUrl}/${blogId}/like/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId }),
    })
        .then(res => res.json());
};

export const unlike = (userId, blogId) => {
    return fetch(`${baseUrl}/${blogId}/unlike`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId }),
    })
        .then(res => res.json());
};