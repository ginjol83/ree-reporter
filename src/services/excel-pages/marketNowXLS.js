const marketNow = (jsonMarketNow, workbook) => {
    const sheetPVPC = workbook.addWorksheet('Datos Mercado PVPC');
    const sheetSPOT = workbook.addWorksheet('Datos Mercado SPOT');

    // Define los encabezados aquí para referencia, pero no los asignes directamente a las columnas
    const headers = [
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 }
    ];

    // Asigna manualmente los encabezados a la fila 8
    const headerRowPVPC = sheetPVPC.getRow(5);
    headers.forEach((column, index) => {
        headerRowPVPC.getCell(index + 1).value = column.header;
        headerRowPVPC.getCell(index + 1).font = { color: { argb: 'FFFFFFFF' }, bold: true };
        headerRowPVPC.getCell(index + 1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '1F4E78' }
        };
    });

    // Añade los datos de PVPC comenzando después de las cabeceras
    jsonMarketNow.included[0].attributes.values.forEach((value, index) => {
        const row = sheetPVPC.getRow(index + 6); // Comienza a añadir datos después de la fila de cabeceras

        // Creamos un objeto Date a partir de la cadena
        const datetime = new Date(value.datetime);

        // Extraemos la hora
        const hours = datetime.getHours();

        row.getCell(1).value = `${hours}:00`;
        row.getCell(2).value = value.value;
        row.getCell(3).value = value.percentage;
    });

    // Repite para SPOT
    const headerRowSPOT = sheetSPOT.getRow(5);
    headers.forEach((column, index) => {
        headerRowSPOT.getCell(index + 1).value = column.header;
        headerRowSPOT.getCell(index + 1).font = { color: { argb: 'FFFFFFFF' }, bold: true };
        headerRowSPOT.getCell(index + 1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '1F4E78' }
        };
    });

    // Añade los datos de SPOT
    jsonMarketNow.included[1].attributes.values.forEach((value, index) => {
        const row = sheetSPOT.getRow(index + 6);

        // Creamos un objeto Date a partir de la cadena
        const datetime = new Date(value.datetime);

        // Extraemos la hora
        const hours = datetime.getHours();

        row.getCell(1).value = `${hours}:00`;
        row.getCell(2).value = value.value;
        row.getCell(3).value = value.percentage;
    });



    //Celdas concretas:

    // Añadir un título en la celda A1
    sheetPVPC.getCell('A1').value = jsonMarketNow.included[0].attributes.title;

    // Añadir un dato en la celda A2
    sheetPVPC.getCell('A3').value = 'last-update';
    sheetPVPC.getCell('B3').value = jsonMarketNow.included[0].attributes['last-update'];

    // Opcionalmente, puedes añadir estilos a las celdas
    sheetPVPC.getCell('A1').font = {
        bold: true,
        size: 14,
        color: { argb: '1F4E78' }
    };

    sheetPVPC.getCell('A2').font = {
        size: 12,
        color: { argb: '1F4E78' }
    };


    // Añadir un título en la celda A1
    sheetSPOT.getCell('A1').value = jsonMarketNow.included[1].attributes.title;

    // Añadir un dato en la celda A2
    sheetSPOT.getCell('A3').value = 'last-update';
    sheetSPOT.getCell('B3').value = jsonMarketNow.included[1].attributes['last-update'];

    // Opcionalmente, puedes añadir estilos a las celdas
    sheetSPOT.getCell('A1').font = {
        bold: true,
        size: 14,
        color: { argb: '1F4E78' }
    };

    sheetSPOT.getCell('A2').font = {
        size: 12,
        color: { argb: '1F4E78' }
    };
}


export { marketNow }