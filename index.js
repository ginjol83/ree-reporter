import { getMercadoAhora, getBalance } from "./src/services/ree-service.service.js";
import { writeXLS } from "./src/services/generate-excel-service.js";

// Obtenemos los datos del mercado actual
getMercadoAhora().then(marketNowResult => {
    const mercadoAhora = marketNowResult.data
    getBalance().then(balanceResult =>{
        const balance = balanceResult.data
        writeXLS(mercadoAhora, balance)
    })
});

/*
      type: 'Balance de energía eléctrica',
      id: 'bal1',
      attributes: {
        title: 'Balance de energía eléctrica',
        'last-update': '2024-01-09T13:29:33.000+01:00',
        description: 'Balance eléctrico: asignación de unidades de producción según combustible principal. La producción neta de las instalaciones no renovables e hidráulicas UGH tiene descontados los consumos propios de las instalaciones. En dichos tipos de producción una generación negativa indica que la electricidad horaria consumida para los usos de las plantas excede la producción horaria de las instalaciones.'
      },
      meta: { 'cache-control': [Object] }
    },
    included: [
      { type: 'Renovable', id: 'Renovable', attributes: [Object] },
      { type: 'No-Renovable', id: 'No-Renovable', attributes: [Object] },
      { type: 'Demanda', id: 'Demanda en b.c.', attributes: [Object] }
*/



/*[
  {
    type: 'Renovable',
    id: 'Renovable',
    attributes: {
      title: 'Renovable',
      'last-update': '2024-01-09T13:29:29.000+01:00',
      description: null,
      magnitude: null,
      content: [Array]
    }
  },
  {
    type: 'No-Renovable',
    id: 'No-Renovable',
    attributes: {
      title: 'No-Renovable',
      'last-update': '2024-02-26T07:54:39.000+01:00',
      description: null,
      magnitude: null,
      content: [Array]
    }
  },
  {
    type: 'Demanda',
    id: 'Demanda en b.c.',
    attributes: {
      title: 'Demanda',
      'last-update': '2024-02-26T07:54:41.000+01:00',
      description: 'Demanda corregida: corregidos los efectos de temperatura y laboralidad.',
      magnitude: null,
      content: [Array]
    }
  }
]*/