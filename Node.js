function generarCodigo() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';

    for (let i = 0; i < 16; i++) {
        if (i > 0 && i % 4 === 0) {
            codigo += ' '; // Añade un espacio entre grupos de 4 caracteres
        }
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres[randomIndex];
    }

    return codigo;
}

// Generar múltiples códigos
function generarCodigos(cantidad) {
    const codigos = [];
    for (let i = 0; i < cantidad; i++) {
        codigos.push(generarCodigo());
    }
    return codigos;
}

// Generar 5 códigos como ejemplo
const codigosGenerados = generarCodigos(5);
console.log(codigosGenerados);
