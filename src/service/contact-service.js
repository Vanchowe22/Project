const baseUrl = 'http://localhost:5000/contact/email'

export const sendEmail = (data) => {
    if (!data.email || !data.name || !data.subject || !data.message) {
        throw 'You didn\'t filled one of the textboxes';
    }

    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}