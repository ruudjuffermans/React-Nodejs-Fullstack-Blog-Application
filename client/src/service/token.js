export default class TokenStore {
  storeAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  storeTokens(refresh, access) {
    document.cookie = `refreshToken=${refresh};path=/;max-age=86400;secure;samesite=strict`; // 86400 seconds = 1 day
    localStorage.setItem("accessToken", access);
  }

  getRefreshToken() {
    const cookies = document.cookie.split(";");
    const refreshTokenCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("refreshToken=")
    );
    if (refreshTokenCookie) {
      return refreshTokenCookie.split("=")[1];
    }
    return null;
  }
}
