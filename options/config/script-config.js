import http from 'k6/http';

// export const options = {
//   userAgent: __ENV.MY_USER_AGENT,
// };

// k6 run script.js --env MY_USER_AGENT="hello"

export default function () {
  http.get('https://www.globo.com');
}