export const getToken = () : String => {
    return localStorage.getItem('token');
    }

export const removeToken = () : void  => {
    localStorage.removeItem('token');
    }

export const setToken = (val) : void  => {
    localStorage.setItem('token', val);
    }