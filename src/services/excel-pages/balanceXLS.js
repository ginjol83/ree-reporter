const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };

const balanceRenovables = (jsonBalance, workbook) => {
    const sheetBalance = workbook.addWorksheet('Balance Renovables');

    // Define los encabezados aquí para referencia, pero no los asignes directamente a las columnas
    const headers = [
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
    ];

    // Asigna manualmente los encabezados a la fila 8
    const headerRowBalance = sheetBalance.getRow(6);
    headers.forEach((column, index) => {
        headerRowBalance.getCell(index + 1).value = column.header;
        headerRowBalance.getCell(index + 1).font = { color: { argb: 'FFFFFFFF' }, bold: true };
        headerRowBalance.getCell(index + 1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '1F4E78' }
        };
    });

    const rowTitle = sheetBalance.getRow(5); // Comienza a añadir datos después de la fila de cabeceras

    jsonBalance[0].attributes.content.forEach((item, index) => {
        rowTitle.getCell(1 + index * 3).value = item.attributes.title;
        rowTitle.getCell(1 + index * 3).font = { color: { argb: 'FFFFFFFF' }, bold: true };
        rowTitle.getCell(1 + index * 3).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '1F4E78' }
        };

    });


    jsonBalance[0].attributes.content.forEach((contentItem, contentIndex) => {
        contentItem.attributes.values.forEach((value, index) => {
            const row = sheetBalance.getRow(index + 7); // Comienza a añadir datos después de la fila de cabeceras

            // Creamos un objeto Date a partir de la cadena
            const datetime = new Date(value.datetime);
            const date = datetime.toLocaleDateString('es', optionsDate).replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1');

            // Calcula la columna inicial basada en el índice del contenido
            const startColumn = 1 + contentIndex * 3;

            row.getCell(startColumn).value = date;
            row.getCell(startColumn + 1).value = value.value;
            row.getCell(startColumn + 2).value = value.percentage;
        });
    });

}

const balanceNoRenovables = (jsonBalance, workbook) => {
    const sheetBalance = workbook.addWorksheet('Balance No Renovables');

    // Define los encabezados aquí para referencia, pero no los asignes directamente a las columnas
    const headers = [
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
    ];

    // Asigna manualmente los encabezados a la fila 8
    const headerRowBalance = sheetBalance.getRow(6);
    headers.forEach((column, index) => {
        headerRowBalance.getCell(index + 1).value = column.header;
        headerRowBalance.getCell(index + 1).font = { color: { argb: 'FFFFFFFF' }, bold: true };
        headerRowBalance.getCell(index + 1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '1F4E78' }
        };
    });

    const rowTitle = sheetBalance.getRow(5); // Comienza a añadir datos después de la fila de cabeceras

    jsonBalance[1].attributes.content.forEach((item, index) => {
        rowTitle.getCell(1 + index * 3).value = item.attributes.title;
        rowTitle.getCell(1 + index * 3).font = { color: { argb: 'FFFFFFFF' }, bold: true };
        rowTitle.getCell(1 + index * 3).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '1F4E78' }
        };

    });


    jsonBalance[1].attributes.content.forEach((contentItem, contentIndex) => {
        contentItem.attributes.values.forEach((value, index) => {
            const row = sheetBalance.getRow(index + 7); // Comienza a añadir datos después de la fila de cabeceras

            // Creamos un objeto Date a partir de la cadena
            const datetime = new Date(value.datetime);
            const date = datetime.toLocaleDateString('es', optionsDate).replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1');

            // Calcula la columna inicial basada en el índice del contenido
            const startColumn = 1 + contentIndex * 3;

            row.getCell(startColumn).value = date;
            row.getCell(startColumn + 1).value = value.value;
            row.getCell(startColumn + 2).value = value.percentage;
        });
    });

}

const demandaBC = (jsonBalance, workbook) => {
    const sheetBalance = workbook.addWorksheet('Demanda BC');

    // Define los encabezados aquí para referencia, pero no los asignes directamente a las columnas
    const headers = [
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
        { header: 'Datetime', key: 'datetime', width: 20 },
        { header: 'Value', key: 'value', width: 15 },
        { header: 'Percentage', key: 'percentage', width: 15 },
    ];

    // Asigna manualmente los encabezados a la fila 8
    const headerRowBalance = sheetBalance.getRow(6);
    headers.forEach((column, index) => {
        headerRowBalance.getCell(index + 1).value = column.header;
        headerRowBalance.getCell(index + 1).font = { color: { argb: 'FFFFFFFF' }, bold: true };
        headerRowBalance.getCell(index + 1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '1F4E78' }
        };
    });

    const rowTitle = sheetBalance.getRow(5); // Comienza a añadir datos después de la fila de cabeceras

    jsonBalance[2].attributes.content.forEach((item, index) => {
        rowTitle.getCell(1 + index * 3).value = item.attributes.title;
        rowTitle.getCell(1 + index * 3).font = { color: { argb: 'FFFFFFFF' }, bold: true };
        rowTitle.getCell(1 + index * 3).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '1F4E78' }
        };

    });


    jsonBalance[2].attributes.content.forEach((contentItem, contentIndex) => {
        contentItem.attributes.values.forEach((value, index) => {
            const row = sheetBalance.getRow(index + 7); // Comienza a añadir datos después de la fila de cabeceras

            // Creamos un objeto Date a partir de la cadena
            const datetime = new Date(value.datetime);
            const date = datetime.toLocaleDateString('es', optionsDate).replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1');

            // Calcula la columna inicial basada en el índice del contenido
            const startColumn = 1 + contentIndex * 3;

            row.getCell(startColumn).value = date;
            row.getCell(startColumn + 1).value = value.value;
            row.getCell(startColumn + 2).value = value.percentage;
        });
    });
}

export { balanceRenovables, balanceNoRenovables, demandaBC }