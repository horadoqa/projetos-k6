import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '10s', target: 10 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
    let res = http.get('https://httpstat.us/Random/200,201,404,500-504');
check(res, { 'status was 200': (r) => r.status == 200 });
check(res, { 'status was 201': (r) => r.status == 201 });
check(res, { 'status was 500': (r) => r.status == 500 });
check(res, { 'status was 501': (r) => r.status == 501 });
console.log(res.status)
  sleep(1);
}