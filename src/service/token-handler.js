export const saveuserInfo = (user) => {
    localStorage.setItem('userEmail', user.email);
    localStorage.setItem('userId', user._id);
    localStorage.setItem('userToken', user.token);
};

export const getUserInfo = () => {
    return {
        email:localStorage.getItem('userEmail'),
        _id:localStorage.getItem('userId'),
        token:localStorage.getItem('userToken'),
    }    
};