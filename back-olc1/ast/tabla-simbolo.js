
class TablaSimbolo {
    
    /**
     * CONSTRUCTOR
     */
    constructor(anterior) {
        this.anterior = anterior;
        this.variables = new Map();
    }
    
    setVariable(simbol) {
        let env;
        for (env = this; env != null; env = env.anterior) {
            for (let key of Array.from(env.variables.keys())) {
                if (key === simbol.identificador) {
                    return `La variable ${key} ya fue declarada.`;
                }
            }
        }
        this.variables.set(simbol.identificador, simbol);
        return null;
    }

    getVariable(identificador) {
        let env;
        for (env = this; env != null; env = env.anterior) {
            for (let key of Array.from(env.variables.keys())) {
                if (key === identificador) {
                    return env.variables.get(key);
                }
            }
        }
        return null;
    }
}

exports.TablaSimbolo = TablaSimbolo;
