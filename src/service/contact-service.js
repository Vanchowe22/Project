const baseUrl = 'http://localhost:5000/contact/email'

export const sendEmail = (data) => fetch(baseUrl, {
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data),
})
