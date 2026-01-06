
import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
    stages: [
        { duration: '10s', target: 10 }
    ],
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_failed: ['rate < 0.01'],
        http_req_duration: ['p(95) < 500']
    }
};

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "loadTestRegister.html": htmlReport(data),
    };
  }


export default function () {

    const base_URL = 'https://test-api.k6.io';
    const USER = `${Math.random()}@gmail.com`;
    const PASS = 'user123';

    console.log(USER + PASS)

    const res = http.post(`${base_URL}/user/register/`, {
        username: USER,
        first_name: 'crocodilo',
        last_name: 'dino',
        email: USER,
        password: PASS
    });

    check(res, {
        'sucesso ao registrar': (r) => r.status === 201
    });

    sleep(1)
}