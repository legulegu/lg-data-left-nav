import { getToken } from "./token";

export default function getUrl() {
  return process.env.NODE_ENV === 'development' ? getMockUrl() : getProdUrl();
}

function getMockUrl() {
  return 'http://localhost:8080/api/stockdata/sw-industry-2021/catelog?' + 'token=' + getToken();
}

function getProdUrl() {
  return '/api/stockdata/sw-industry-2021/catelog?' + 'token=' + getToken();
}
