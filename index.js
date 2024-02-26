import { 
    getMercadoAhora 
} from "./src/services/ree-service.service.js";

// Importamos el módulo fs para poder escribir en archivos
import fs from 'fs';

// Obtenemos los datos del mercado actual
getMercadoAhora().then(result => {
    // Convertimos el objeto JSON a una cadena
    const dataString = JSON.stringify(result.data, null, 2); // El segundo argumento null y el tercero 2 son para formatear el JSON con indentación, haciéndolo más legible.

    // Guardamos la cadena en un archivo
    fs.writeFile('resultadoMercadoAhora.json', dataString, (err) => {
        if (err) {
            console.error('Hubo un error al guardar el archivo:', err);
        } else {
            console.log('El archivo fue guardado correctamente.');
        }
    });
});