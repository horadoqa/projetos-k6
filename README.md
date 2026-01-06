# Projetos com o K6

Site oficial: https://k6.io

Documentação: https://grafana.com/docs/k6/latest/

Instalação: https://grafana.com/docs/k6/latest/set-up/install-k6/

## Saber a versão

```bash
k6 --version           
    k6 v1.4.2 (commit/5b725e8a6a, go1.25.4, linux/amd64)
```

## Criar um script

```bash
k6 new script.js
```

## Executar o k6

```bash
k6 run script.js
```

## Output do K6

```bash
k6 run testes/script.js

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: testes/script.js
        output: -

     scenarios: (100.00%) 1 scenario, 1 max VUs, 1m0s max duration (incl. graceful stop):
              * default: 1 looping VUs for 30s (gracefulStop: 30s)



  █ TOTAL RESULTS 

    checks_total.......: 25      0.807096/s
    checks_succeeded...: 100.00% 25 out of 25
    checks_failed......: 0.00%   0 out of 25

    ✓ Status Code 200

    HTTP
    http_req_duration..............: avg=72.76ms min=18.83ms med=27.26ms max=182.45ms p(90)=170.85ms p(95)=171.56ms
      { expected_response:true }...: avg=72.76ms min=18.83ms med=27.26ms max=182.45ms p(90)=170.85ms p(95)=171.56ms
    http_req_failed................: 0.00%  0 out of 75
    http_reqs......................: 75     2.421288/s

    EXECUTION
    iteration_duration.............: avg=1.23s   min=1.2s    med=1.22s   max=1.71s    p(90)=1.22s    p(95)=1.23s   
    iterations.....................: 25     0.807096/s
    vus............................: 1      min=1       max=1
    vus_max........................: 1      min=1       max=1

    NETWORK
    data_received..................: 112 kB 3.6 kB/s
    data_sent......................: 7.5 kB 242 B/s




running (0m31.0s), 0/1 VUs, 25 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  30s

```