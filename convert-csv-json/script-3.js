// Exemplo 3 - Cada iteração usa um usuário diferente (recomendado)
// Este é o mais interessante quando você quer percorrer todos os registros do JSON.
// Ele garante que cada registro seja utilizado exatamente uma vez, mesmo que haja mais VUs do que usuários.

import http from 'k6/http';
import { scenario } from 'k6/execution';

const users = JSON.parse(open('./glbids.json'));

export const options = {
    scenarios: {
        usuarios: {
            executor: 'shared-iterations',
            vus: 20,
            iterations: users.length,
        },
    },
};

export default function () {

    const index = scenario.iterationInTest;
    const user = users[index];

    const params = {
        headers: {
            Authorization: user.autorization,
        },
    };

    http.get(
        `https://api.seusite.com/users/${user.userId}`,
        params
    );
}
