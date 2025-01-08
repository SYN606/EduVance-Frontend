export const refreshToken = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/token/refresh/', {
            method: 'POST',
            credentials: 'include',
        });

        if (response.ok) {
            // Token refreshed successfully
            return true;
        } else {
            // Token refresh failed, user needs to log in again
            return false;
        }
    } catch (error) {
        console.error('Token refresh failed:', error);
        return false;
    }
};
