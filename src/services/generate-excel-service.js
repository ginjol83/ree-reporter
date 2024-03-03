import Excel from 'exceljs';
import { mailConfig } from '../config/mail-config.js';
import { marketNow } from './excel-pages/marketNowXLS.js';
import { balanceRenovables, balanceNoRenovables, demandaBC } from './excel-pages/balanceXLS.js';



const writeXLS = async (jsonMarketNow, jsonBalance) => {
    const workbook = new Excel.Workbook();

    //New data report
    await marketNow(jsonMarketNow, workbook)
    await balanceRenovables(jsonBalance, workbook)
    await balanceNoRenovables(jsonBalance, workbook)
    await demandaBC(jsonBalance, workbook)


    // Save file
    await workbook.xlsx.writeFile(`output/${mailConfig.fileName}`)
    console.log('Archivo Excel generado con éxito.');
    
};

export { writeXLS };