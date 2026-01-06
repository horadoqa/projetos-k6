import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {

    const request = http.get('http://test.k6.io');

    check(request, {
        "Status Code 200": (r) => r.status === 200,
    });

    // console.log('Status Code: ', request.status)

    sleep(1);
    
};


