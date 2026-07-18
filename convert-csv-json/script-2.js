// Exemplo 2 - Distribuição dos usuários entre os VUs
// Se houver mais VUs do que usuários:

import http from 'k6/http';
import { check } from 'k6';

const users = JSON.parse(open('./glbids.json'));

export const options = {
    vus: 50,
    duration: '1m',
};

export default function () {

    const index = (__VU - 1) % users.length;
    const user = users[index];

    const params = {
        headers: {
            Authorization: user.autorization,
        },
    };

    const res = http.get(
        `https://api.seusite.com/users/${user.userId}`,
        params
    );

    check(res, {
        'status 200': (r) => r.status === 200,
    });
}
