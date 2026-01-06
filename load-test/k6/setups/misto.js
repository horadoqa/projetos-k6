export { default as homeLoadTvNativaTest } from '../scenarios/tv-nativa/home-copa-tv-nativa-test.js'
export { default as tituloLoadTvNativaTest } from '../scenarios/tv-nativa/titulo-copa-tv-nativa-test.js'
export { default as trocacanaisLoadTvNativaTest } from '../scenarios/tv-nativa/trocacanais-copa-tv-nativa-test.js'
export { default as homeLoadTvRokuTest } from '../scenarios/tv-roku/home-copa-tv-roku-test.js'
export { default as tituloLoadTvRokuTest } from '../scenarios/tv-roku/titulo-copa-tv-roku-test.js'
export { default as trocacanaisLoadTvRokuTest } from '../scenarios/tv-roku/trocacanais-copa-tv-roku-test.js'
export { default as homeLoadTvWebappTest } from '../scenarios/tv-webapp/home-copa-tv-webapp-test.js'
export { default as tituloLoadTvWebappTest } from '../scenarios/tv-webapp/titulo-copa-tv-webapp-test.js'
export { default as trocacanaisLoadTvWebappTest } from '../scenarios/tv-webapp/trocacanais-copa-tv-webapp-test.js'

const TOTAL_VUS = __ENV.TOTAL_VUS || 10
const DURATION_MIXED_TEST = __ENV.DURATION_MIXED_TEST || '10s'

const getVUCount = percentage => Math.floor(TOTAL_VUS * percentage) || 1

const percentageByScenarios = {
  homeLoadTvNativa: 0.125,
  tituloLoadTvNativa: 0.125,
  trocacanaisLoadTvNativa: 0.125,
  homeLoadTvRoku: 0.125,
  tituloLoadTvRoku: 0.125,
  trocacanaisLoadTvRoku: 0.125,
  homeLoadTvWebapp: 0.125,
  tituloLoadTvWebapp: 0.125,
  trocacanaisLoadTvWebapp: 0.125
}

export const options = {
  vus: 1,
  discardResponseBodies: true,
  scenarios: {
    homeLoadTvNativa: {
      executor: 'constant-vus',
      exec: 'homeLoadTvNativaTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.homeLoadTvNativa)
    },
    tituloLoadTvNativa: {
      executor: 'constant-vus',
      exec: 'tituloLoadTvNativaTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.tituloLoadTvNativa)
    },
    trocacanaisLoadTvNativa: {
      executor: 'constant-vus',
      exec: 'trocacanaisLoadTvNativaTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.trocacanaisLoadTvNativa)
    },
    homeLoadTvRoku: {
      executor: 'constant-vus',
      exec: 'homeLoadTvRokuTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.homeLoadTvRoku)
    },
    tituloLoadTvRoku: {
      executor: 'constant-vus',
      exec: 'tituloLoadTvRokuTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.tituloLoadTvRoku)
    },
    trocacanaisLoadTvRoku: {
      executor: 'constant-vus',
      exec: 'trocacanaisLoadTvRokuTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.trocacanaisLoadTvRoku)
    },
    homeLoadTvWebapp: {
      executor: 'constant-vus',
      exec: 'homeLoadTvWebappTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.homeLoadTvWebapp)
    },
    tituloLoadTvWebapp: {
      executor: 'constant-vus',
      exec: 'tituloLoadTvWebappTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.tituloLoadTvWebapp)
    },
    trocacanaisLoadTvWebapp: {
      executor: 'constant-vus',
      exec: 'trocacanaisLoadTvWebappTest',
      duration: DURATION_MIXED_TEST,
      vus: getVUCount(percentageByScenarios.trocacanaisLoadTvWebapp)
    }
  }
}
