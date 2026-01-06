export { default as cenario1 } from "./cenario1.js";
export { default as cenario2 } from "./cenario2.js";


// var tempo = "30s"
// var total_vus = 100

// Exportar antes de rodar o testes
// export TOTAL_VUS=10
// export DURATION_MIXED_TEST=60s

const total_vus = __ENV.TOTAL_VUS || 10
const tempo = __ENV.DURATION_MIXED_TEST || '10s'


// if (typeof __ENV.TEMPO !== 'undefined') {
//   var tempo = __ENV.TEMPO
// }

// if (typeof __ENV.VUS !== 'undefined') {
//   var total_vus = __ENV.VUS
// }

// console.log("tempo="+tempo)
// console.log("vus="+total_vus)


function getVUCount(percentage) {
  var vus = Math.floor(total_vus * percentage);
  return vus > 0 ? vus : 1;
}

const VU_PERCENTAGE = {
    cenario1: 0.5,
    cenario2: 0.5,

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
