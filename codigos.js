function generarCodigo() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';

    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres[randomIndex];

        // Añade un espacio después de cada bloque de 4 caracteres
        if ((i + 1) % 4 === 0 && i < 15) {
            codigo += ' ';
        }
    }

    return codigo;
}

// Función para analizar los códigos existentes
function analizarCodigos(codigos) {
    const resultados = {
        longitud: codigos[0].length,
        caracteres: new Set(),
        patrones: [],
    };

    codigos.forEach(codigo => {
        // Agregar caracteres únicos
        for (const char of codigo.replace(/ /g, '')) {
            resultados.caracteres.add(char);
        }
        
        // Almacenar patrones de cada código (sin espacios)
        resultados.patrones.push(codigo.replace(/ /g, ''));
    });

    resultados.caracteres = Array.from(resultados.caracteres);
    return resultados;
}

// Generar múltiples códigos
function generarCodigos(cantidad) {
    const codigos = [];
    for (let i = 0; i < cantidad; i++) {
        codigos.push(generarCodigo());
    }
    return codigos;
}

// Ejemplo de códigos ya canjeados
const codigosCanjeados = [
    '9P8J 8K2U 942H CAVU',
    '7KUY XMBB WU83 E98B',
    '05A7 BOUZ 2C5N GNLX',
    '0Z50 5DM2 AXJC WGRD',
    'CYZ9 MCKG 9NTC CTOW',
    '5D1D 5OPZ DB4P K2TP',
    '82KN SAE5 15EV VN4X'
];

// Analizar códigos existentes
const analisis = analizarCodigos(codigosCanjeados);
console.log(analisis);

// Generar 5 nuevos códigos similares
const codigosGenerados = generarCodigos(5);
console.log(codigosGenerados);
