// utils/auth.js

// Check if the user is authenticated by looking for the access token in cookies
export const isAuthenticated = () => {
    const accessToken = getAuthToken();
    return !!accessToken; // Return true if the token exists, otherwise false
};

// Get the authentication token (access_token) from cookies
export const getAuthToken = () => {
    // Retrieve cookies and split them into key-value pairs
    const cookies = document.cookie.split('; ');

    // Find the access_token cookie
    const accessToken = cookies.find(cookie => cookie.startsWith('access_token='));

    // Return the token value if found, otherwise return null
    return accessToken ? accessToken.split('=')[1] : null;
};

// Logout the user by deleting the access_token and refresh_token cookies
export const logout = () => {
    // Setting cookies with a past expiration date to remove them
    document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "refresh_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
};

// Set cookies with options like Secure and HttpOnly (for security purposes)
// The `expires` date should be set according to the token's expiration time
export const setAuthToken = (accessToken, refreshToken) => {
    const expiryDate = new Date();
    expiryDate.setMinutes(expiryDate.getMinutes() + 5); // Access token expires in 5 minutes
    document.cookie = `access_token=${accessToken}; path=/; expires=${expiryDate.toUTCString()}; secure; samesite=strict`;

    const refreshExpiryDate = new Date();
    refreshExpiryDate.setDate(refreshExpiryDate.getDate() + 30); // Refresh token expires in 30 days
    document.cookie = `refresh_token=${refreshToken}; path=/; expires=${refreshExpiryDate.toUTCString()}; secure; samesite=strict`;
};
