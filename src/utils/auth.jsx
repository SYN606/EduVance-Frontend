export const isAuthenticated = () => {
    const token = localStorage.getItem("access_token");
    return token !== null;
};

export const getAuthToken = () => {
    return localStorage.getItem("access_token");
};

export const logout = () => {
    localStorage.removeItem("access_token");
};