import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';


import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "loadTest.html": htmlReport(data),
    };
  }

export const options = {
    stages: [
        { duration: '10s', target: 10 }, 
        { duration: '10s', target: 10 },
        { duration: '10s', target: 0 }
    ],
    thresholds: {
        http_req_duration:['p(95) < 200'],
        checks: ['rate > 0.95']
    }
}

const data = new SharedArray('Leitura do Json', function() {
    return JSON.parse(open('./fixtures/dados.json')).crocodilos
})

export default function() {
    const crocodilo = data[Math.floor(Math.random() * data.length)].id
    console.log(crocodilo)

    const base_URL = `https://test-api.k6.io/public/crocodiles/${crocodilo}`;

    const res = http.get(base_URL);

    check(res, {
        'status code é 200': (r) => r.status === 200
    });
    
    sleep(1)
}