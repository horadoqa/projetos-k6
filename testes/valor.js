import http from 'k6/http';

export const options = {
	  vus: 100,
	  duration: '60s',
};

export default function () {
	    http.get('https://valor.globo.com/');
};
