
import http from 'k6/http';
import { check } from 'k6';


export const options = {
    vus: 1,
    duration: '30s',
    thresholds: {
        http_req_duration:['p(95)<200'],
        checks: ['rate > 0.99']
    }
}

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "smokeTest.html": htmlReport(data),
    };
  }


export default function() {
    const base_URL = 'https://test-api.k6.io/public/crocodiles/';

    const res = http.get(base_URL);

    check(res, {
        'status code é 200': (r) => r.status === 200
    });
    
}