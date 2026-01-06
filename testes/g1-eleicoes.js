import http from 'k6/http';

export const options = {
	stages: [
	  { duration: '30s', target: 10 },
	  { duration: '1m30s', target: 100 },
	  { duration: '20s', target: 0 },
	],
  
  };
export default function () {
	const res = http.get('https://g1.globo.com/politica/eleicoes/2024/');
	// console.log(res.status)
};
