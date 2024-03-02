import { getMercadoAhora, getBalance } from "./src/services/ree-service.service.js";
import { writeXLS } from "./src/services/generate-excel-service.js";
import { sendMail } from "./src/services/send-mail-service.js";

// Obtenemos los datos del mercado actual
getMercadoAhora().then(marketNowResult => {
    const mercadoAhora = marketNowResult.data
    getBalance().then(balanceResult =>{
        const balance = balanceResult.data
        writeXLS(mercadoAhora, balance).then(sendMail())
    })
});