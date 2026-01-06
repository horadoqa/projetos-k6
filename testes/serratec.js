import http from 'k6/http';
import { check } from 'k6';

export const options = {
	stages: [
	  { duration: '30s', target: 10 },
	  { duration: '30s', target: 10 },
	  { duration: '20s', target: 0 },
	],
  
  };
export default function () {
	const res = http.get('https://serratec.org/');
    check(res, { 'status was 200': (r) => r.status == 200 });
	console.log('Response time was ' + String(res.timings.duration) + ' ms');
    console.log('Response size: ' + String(res.body.length) + ' bytes');
    console.log('Status code was ' + String(res.status));
    console.log('-----------------------------------');
};