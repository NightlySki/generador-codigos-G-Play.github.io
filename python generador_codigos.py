import random
import string
import json

class CodeGenerator:
    def __init__(self, length=16, groups=4):
        self.length = length
        self.groups = groups
        self.codes_generated = []
        self.character_set = string.ascii_uppercase + string.digits

    def generate_code(self):
        """Genera un código único de la longitud y formato especificados."""
        codigo = ''.join(random.choices(self.character_set, k=self.length))
        return ' '.join(codigo[i:i + (self.length // self.groups)] for i in range(0, self.length, self.length // self.groups))

    def generate_codes(self, quantity):
        """Genera múltiples códigos únicos."""
        while len(self.codes_generated) < quantity:
            new_code = self.generate_code()
            if new_code not in self.codes_generated:
                self.codes_generated.append(new_code)
        return self.codes_generated

    def save_to_file(self, filename):
        """Guarda los códigos generados en un archivo JSON."""
        with open(filename, 'w') as file:
            json.dump(self.codes_generated, file)
        print(f"Códigos guardados en {filename}")

def main():
    """Función principal para ejecutar el generador de códigos."""
    generator = CodeGenerator(length=16, groups=4)

    # Generar códigos
    num_codes = 10  # Cambia esto a la cantidad que deseas
    print(f"Generando {num_codes} códigos...")
    codes = generator.generate_codes(num_codes)
    for code in codes:
        print(code)

    # Guardar códigos en un archivo
    generator.save_to_file("codigos_generados.json")

if __name__ == "__main__":
    main()
``
