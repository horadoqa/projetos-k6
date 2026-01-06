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
    let res = http.get('http://random-status-code.herokuapp.com/');
check(res, { 'status was 200': (r) => r.status == 200 });
console.log(res.status)
  sleep(1);
}
