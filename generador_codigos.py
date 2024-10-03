import random
import string

def generar_codigo_google_play():
    # Define los caracteres permitidos
    letras = string.ascii_uppercase  # Letras de A a Z
    numeros = string.digits           # Números de 0 a 9
    caracteres = letras + numeros     # Combinación de letras y números

    # Generar un código
    codigo = ''
    for i in range(16):
        if i > 0 and i % 4 == 0:
            codigo += ' '  # Añadir espacio cada 4 caracteres
        if i % 2 == 0:  # Alternar entre letra y número
            codigo += random.choice(letras)
        else:
            codigo += random.choice(numeros)

    return codigo

def generar_codigos(cantidad):
    codigos = set()  # Usar un conjunto para evitar duplicados
    while len(codigos) < cantidad:
        codigos.add(generar_codigo_google_play())
    return list(codigos)

# Generar 10 códigos como ejemplo
if __name__ == "__main__":
    codigos_generados = generar_codigos(10)
    for codigo in codigos_generados:
        print(codigo)
