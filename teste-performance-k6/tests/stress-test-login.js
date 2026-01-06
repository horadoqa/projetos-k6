
import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js'


export const options = {
    stages: [
        { duration: '5s', target: 5 },
        { duration: '5s', target: 5 },
        { duration: '2s', target: 50 },
        { duration: '2s', target: 50 },
        { duration: '5s', target: 0 }
    ],
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_failed: ['rate < 0.01']
        
    }
};

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
      "StressTestLogin.html": htmlReport(data),
    };
  } 

const csvData = new SharedArray('Ler dados', function () {
    return papaparse.parse(open('./fixtures/usuarios.csv'), {header:true}).data;
});


export default function () {
    const USER = csvData[Math.floor(Math.random() * csvData.length)].email;
    const PASS = 'user123';
    const base_URL = 'https://test-api.k6.io';
    

    console.log(USER)

    const res = http.post(`${base_URL}/auth/token/login/`, {
        username: USER,
        password: PASS
    });

    check(res, {
        'sucesso ao registrar': (r) => r.status === 200,
        'token gerado': (r) => r.json('acess') !== ''
    });

    sleep(1)
}