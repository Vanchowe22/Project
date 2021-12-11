const baseUrl = 'http://localhost:5000/auth'

export const register = (data) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => res.json());
};

export const login = (data) => {
    return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(getRes);
};

async function getRes(res) {
    const result = await res.json();
    if (!res.ok) {
        throw result;
    }

    return result;
}