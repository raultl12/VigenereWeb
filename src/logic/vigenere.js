class Vigenere {
    constructor() {
        this.dict = {
            'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4,
            'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9,
            'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14,
            'P': 15, 'Q': 16, 'R': 17, 'S': 18, 'T': 19,
            'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24,
            'Z': 25
        };

        this.numCh = {
            0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E',
            5: 'F', 6: 'G', 7: 'H', 8: 'I', 9: 'J',
            10: 'K', 11: 'L', 12: 'M', 13: 'N', 14: 'O',
            15: 'P', 16: 'Q', 17: 'R', 18: 'S', 19: 'T',
            20: 'U', 21: 'V', 22: 'W', 23: 'X', 24: 'Y',
            25: 'Z'
        };

        this.clave = null;
    }

    extenderClave(mensaje, clave) {
        // Extender la clave para que tenga la misma longitud que el mensaje
        let claveExtendida = clave;
        for (let i = 0; i < mensaje.length - clave.length; i++) {
            claveExtendida += clave[i % clave.length];
        }

        return claveExtendida;
    }

    quitarEspacios(mensaje) {
        // Quitar espacios del mensaje
        return mensaje.replace(/\s/g, '');
    }

    cifrar(mensaje, clave) {
        // Cifrar usando solo el diccionario
        mensaje = this.quitarEspacios(mensaje.toUpperCase());
        clave = this.quitarEspacios(clave.toUpperCase());
        this.clave = this.extenderClave(mensaje, clave);
        let cifrado = '';
        for (let i = 0; i < mensaje.length; i++) {
            let num_letraTexto = this.dict[mensaje[i]];
            let num_letraClave = this.dict[this.clave[i]];
            cifrado += this.numCh[(num_letraTexto + num_letraClave) % Object.keys(this.dict).length];
        }

        return cifrado;
    }

    descifrar(mensaje, clave) {
        // Descifrar usando solo el diccionario
        mensaje = mensaje.toUpperCase();
        clave = clave.toUpperCase();
        clave = this.extenderClave(mensaje, clave);

        let descifrado = '';
        for (let i = 0; i < mensaje.length; i++) {
            if (mensaje[i] === ' ') {
                descifrado += ' ';
            } else {
                let letraTexto = this.dict[mensaje[i]];
                let letraClave = this.dict[clave[i]];
                descifrado += this.numCh[(letraTexto - letraClave + Object.keys(this.dict).length) % Object.keys(this.dict).length];
            }
        }
        return descifrado;
    }
}
export default Vigenere;