import { getMercadoAhora, getBalance } from "./src/services/ree-service.service.js";
import { writeXLS } from "./src/services/generate-excel-service.js";
import { sendMailFree } from "./src/services/send-mail-service.js";

// Get data market now //free report
getMercadoAhora().then(marketNowResult => {
    const mercadoAhora = marketNowResult.data
    getBalance().then(balanceResult =>{
        const balance = balanceResult.data.included
        writeXLS(mercadoAhora, balance).then(sendMailFree())
    })
});