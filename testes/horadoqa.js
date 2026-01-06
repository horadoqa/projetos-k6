import http from 'k6/http';

export const options = {
	stages: [
	  { duration: '30s', target: 100 },
	  { duration: '10m', target: 100 },
	  { duration: '20s', target: 0 },
	],
  
  };
export default function () {
	const res = http.get('https://www.horadoqa.com.br/');
	console.log('Response time was ' + String(res.timings.duration) + ' ms');
    console.log('Response size: ' + String(res.body.length) + ' bytes');
    console.log('Status code was ' + String(res.status));
    console.log('-----------------------------------');
};
