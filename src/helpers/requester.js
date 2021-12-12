const request = (method, url, data, token) => {
    const options = {
        method,
    };

    if (['POST', 'PUT', 'DELETE'].includes(method)) {
        if (method == 'DELETE') {
            options.headers = {
                'X-Authorization': token,
            }
        } else {
            options.headers = {
                'Content-Type': 'application/json'
            }

            if (token) {
                options.headers['X-Authorization'] = token;
            }

            options.body = JSON.stringify(data);
        }
    }
    return fetch(url, options).then(handleRespond);
}

async function handleRespond(res) {
    let result = await res.json();
    if (!res.ok) {
        throw result;
    }

    return result;
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');