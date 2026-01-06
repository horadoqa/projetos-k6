import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '1m',
}

export default function() {
  const res = http.get('https://www.globo.com/');
  console.log('Response time was ' + String(res.timings.duration) + ' ms');
  console.log('Response size: ' + String(res.body.length) + ' bytes');
  console.log('Status code was ' + String(res.status));
  console.log('-----------------------------------');
  sleep(1);
}
