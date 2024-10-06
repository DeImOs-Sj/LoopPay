const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("token");
  }
  return null;
};

// Function to create an authentication header
const createAuthHeader = () => {
  const token = getAccessToken();
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  } else {
    return {};
  }
};

export { getAccessToken, createAuthHeader };

export interface SignInRequest {
  authType: string;
  email: string;
  password: string;
  x: string;
  y: string;
}

export interface SignInResponse {
  token: string;
}
