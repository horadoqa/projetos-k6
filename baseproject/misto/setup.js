// var tempo = "30s"
// var total_vus = 100

// Exportar antes de rodar o testes
// export TOTAL_VUS=10
// export DURATION_MIXED_TEST=60s
// k6 run -e TOTAL_VUS=100 -e DURATION_MIXED_TEST=60s setup.js

export { default as cenario1 } from "./cenario1.js";
export { default as cenario2 } from "./cenario2.js";

const total_vus = __ENV.TOTAL_VUS || 10
const tempo = __ENV.DURATION_MIXED_TEST || '10s'

function getVUCount(percentage) {
  var vus = Math.floor(total_vus * percentage);
  return vus > 0 ? vus : 1;
}

const VU_PERCENTAGE = {
    cenario1: 0.2,
    cenario2: 0.8,

}

export const options = {
  scenarios: {
    cenario1: {
      executor: "constant-vus",
      duration: tempo,
      exec: "cenario1",
      vus: getVUCount(VU_PERCENTAGE.cenario1),
    },
    cenario2: {
      executor: "constant-vus",
      duration: tempo,
      exec: "cenario2",
       vus: getVUCount(VU_PERCENTAGE.cenario2),
    },
  },
};

