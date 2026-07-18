// Exemplo 1 - Cada VU utiliza um usuário diferente
// Se a quantidade de VUs for menor ou igual à quantidade de registros:

import http from 'k6/http';
import { check, sleep } from 'k6';

const users = JSON.parse(open('./glbids.json'));

export const options = {
    vus: 10,
    iterations: 10,
};

export default function () {
    const user = users[__VU - 1];

    if (!user) {
        throw new Error(`Não existe usuário para o VU ${__VU}`);
    }

    const params = {
        headers: {
            'Authorization': user.autorization,
            'Content-Type': 'application/json',
        },
    };

    const url = `https://api.seusite.com/users/${user.userId}`;

    const res = http.get(url, params);

    check(res, {
        'status 200': (r) => r.status === 200,
    });

    sleep(1);
}
