export const URLS = {
    BASE_URL: 'https://automaticityacademy.ngrok.app',
}

export const ENDPOINTS = {
    LOGIN: '/login',
    REGISTER: '/register',
    DASHBOARD: '/dashboard',
    CUSTOMERS_ENDPOINT: '/customers',
};
export const BASE_API_URL = "https://automaticityacademy.ngrok.app/api/v1/auth";

export const API_ENDPOINTS = {
    BASE_API_URL,
    REGISTER_ENDPOINT: `${BASE_API_URL}${ENDPOINTS["REGISTER"]}`,
    LOGIN_ENDPOINT: `${BASE_API_URL}${ENDPOINTS["LOGIN"]}`,
    DASHBOARD_ENDPOINT: `${BASE_API_URL}${ENDPOINTS["DASHBOARD"]}`,
    PRODUCTS_ENDPOINT: "/api/v1/products",
    CUSTOMERS_ENDPOINT: "/api/v1/customers",
  };


