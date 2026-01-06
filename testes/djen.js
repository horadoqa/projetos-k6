import http from 'k6/http';

export const options = {
	  vus: 100,
	  duration: '30s',
};

export default function () {
	    http.get('https://www.tjmsp.jus.br/diario-de-justica-eletronico-nacional-djen/');
	    
};
