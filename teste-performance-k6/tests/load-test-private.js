
import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
    vus: 100,
    duration: '10s',
    thresholds: {
        http_req_duration:['p(95) < 500'],
        http_req_failed:['rate < 0.01'],
        checks: ['rate > 0.99']
    }
}


import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "loadTestPrivate.html": htmlReport(data),
    };
  } 

const base_URL = 'https://test-api.k6.io';

export function setup() {
    const loginRes = http.post(`${base_URL}/auth/token/login/`, {
        username: '0.9332935654637439@gmail.com',
        password: 'user123'
    });

    const token = loginRes.json('access');
    return token;
}


export default function(token) {

    const params = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }

    const res = http.get(`${base_URL}/my/crocodiles/`, params);

    check(res, {
        'status code é 200': (r) => r.status === 200
    });
    
}