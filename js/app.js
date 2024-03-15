class Container{
    #codiceNumerico;
    #descrizione;

    /**
     * 
     * @param {number} codiceNumerico 
     * @param {string} descrizione : max 100 caratteri
     */
    constructor(codiceNumerico, descrizione){
        this.#codiceNumerico = codiceNumerico;
        this.#descrizione = descrizione;
    }

    get #codiceNumerico(){
        return this.#codiceNumerico;
    }

    /**
     * @param {number} codiceNumerico
     */
    set #codiceNumerico(codiceNumerico){
        this.#codiceNumerico = codiceNumerico;
    }

    get #descrizione(){
        return this.#descrizione;
    }

    /**
     * @param {string} descrizione : max 100 caratteri
     */
    set #descrizione(descrizione){
        if (descrizione.length <= 100){
            this.#descrizione = descrizione;
        } else{
            this.#descrizione = descrizione.substring(0, 100);
        }
    }
}

class ContainerLiquidi extends Container{
    #capacitaMaxLitri;
    #tipoChiusuraErmetica;

    /**
     * 
     * @param {number} codiceNumerico 
     * @param {string} descrizione : max 100 caratteri
     * @param {number} capacitaMaxLitri
     * @param {string} tipoChiusuraErmetica 
     */
    constructor(codiceNumerico, descrizione, capacitaMaxLitri, tipoChiusuraErmetica){
        super(codiceNumerico, descrizione);
        this.#capacitaMaxLitri = capacitaMaxLitri;
        this.#tipoChiusuraErmetica = tipoChiusuraErmetica;
    }

    get #capacitaMaxLitri(){
        return this.#capacitaMaxLitri;
    }

    /**
     * @param {number} capacitaMaxLitri 
     */
    set #capacitaMaxLitri(capacitaMaxLitri){
        if (capacitaMaxLitri < 0){
            this.#capacitaMaxLitri = -capacitaMaxLitri;
        } else{
            this.#capacitaMaxLitri = capacitaMaxLitri;
        }
    }

    get #tipoChiusuraErmetica(){
        return this.#tipoChiusuraErmetica;
    }

    /**
     * @param {string} tipoChiusuraErmetica 
     */
    set #tipoChiusuraErmetica(tipoChiusuraErmetica){
        this.#tipoChiusuraErmetica = tipoChiusuraErmetica;
    }
}

class ContainerSolidi extends Container{
    #capienzaMaxKg;

    /**
     * 
     * @param {number} codiceNumerico 
     * @param {string} descrizione : max 100 caratteri
     * @param {number} capienzaMaxKg 
     */
    constructor(codiceNumerico, descrizione, capienzaMaxKg){
        super(codiceNumerico, descrizione);
        this.#capienzaMaxKg = capienzaMaxKg;
    }

    get #capienzaMaxKg(){
        return this.#capienzaMaxKg;
    }
    
    /**
     * @param {number} capienzaMaxKg 
     */
    set #capienzaMaxKg(capienzaMaxKg){
        if (capienzaMaxKg < 0){
            this.#capienzaMaxKg = -capienzaMaxKg;
        } else{
            this.#capienzaMaxKg = capienzaMaxKg;
        }
    }
}

class ContainerRifiutiSpeciali extends Container{
    #capienzaMaxKg;
    #livelloRadioattivita;

    /**
     * 
     * @param {number} codiceNumerico 
     * @param {string} descrizione : max 100 caratteri
     * @param {number} capienzaMaxKg 
     * @param {number} livelloRadioattivita 
     */
    constructor(codiceNumerico, descrizione, capienzaMaxKg, livelloRadioattivita){
        super(codiceNumerico, descrizione);
        this.#capienzaMaxKg = capienzaMaxKg;
        this.#livelloRadioattivita = livelloRadioattivita;
    }

    get #capienzaMaxKg(){
        return this.#capienzaMaxKg;
    }

    /**
     * @param {number} capienzaMaxKg 
     */
    set #capienzaMaxKg(capienzaMaxKg){
        if (capienzaMaxKg < 0){
            this.#capienzaMaxKg = -capienzaMaxKg;
        } else{
            this.#capienzaMaxKg = capienzaMaxKg;
        }
    }

    get #livelloRadioattivita(){
        return this.#livelloRadioattivita;
    }

    /**
     * @param {number} livelloRadioattivita 
     */
    set #livelloRadioattivita(livelloRadioattivita){
        if (livelloRadioattivita < 0){
            this.#livelloRadioattivita = -livelloRadioattivita;
        } else{
            this.#livelloRadioattivita = livelloRadioattivita;
        }
    }
}

class Piazzola{
    #pilaContainer;
    #codiceNumerico;

    constructor(codiceNumerico){
        this.#pilaContainer = [];
        this.#codiceNumerico = codiceNumerico;
    }

    /**
     * @param {Array} pilaContainer 
     */
    constructor(pilaContainer, codiceNumerico){
        this.#pilaContainer = pilaContainer;
        this.#codiceNumerico = codiceNumerico;
    }

    get #pilaContainer(){
        return this.#pilaContainer;
    }

    /**
     * @param {Array} pilaContainer 
     */
    set #pilaContainer(pilaContainer){
        if (pilaContainer.length > 5){
            while (pilaContainer.length > 5){
                pilaContainer.pop();
            }
            this.#pilaContainer = pilaContainer;
        } else{
            this.#pilaContainer = pilaContainer;
        }
    }

    get #codiceNumerico(){
        return this.#codiceNumerico;
    }

    /**
     * @param {number} codiceNumerico 
     */
    set #codiceNumerico(codiceNumerico){
        if (codiceNumerico < 0){
            this.#codiceNumerico = codiceNumerico;
        } else{
            this.#codiceNumerico = codiceNumerico;
        }
    }
}

class Deposito{
    #piazzole

    constructor(){
        this.#piazzole = [];
    }

    /**
     * 
     * @param {Array} piazzole 
     */
    constructor(piazzole){
        this.#piazzole = piazzole;
    }

    get #piazzole(){
        return this.#piazzole;
    }

    /**
     * @param {Array} piazzole 
     */
    set #piazzole(piazzole){
        this.#piazzole = piazzole;
    }

    /**
     * @param {Container} container
     * @param {number} numeroPiazzola 
     * @returns true: operazione avvenuta
     * @returns false: operazione non riuscita
     */
    aggiungiContainer(container, numeroPiazzola){
        for (let i = 0; i < this.#piazzole.length; i++){
            if (this.#piazzole[i].codiceNumerico == numeroPiazzola){
                this.#piazzole.push(container);
                return true;
            }
        }
        return false;
    }

    /**
     * @param {number} codiceContainer
     * @param {number} numeroPiazzola 
     * @returns il container se l'operazione è riuscita
     * @returns false: operazione non riuscita
     */
    prelevaContainer(codiceContainer, numeroPiazzola){
        for (let i = 0; i < this.#piazzole.length; i++){
            if (this.#piazzole[i].codiceNumerico == numeroPiazzola){
                for (let j = 0; j < this.#piazzole[i].pilaContainer.length; j++){
                    if (this.#piazzole[i].pilaContainer[j].codiceNumerico == codiceContainer){
                        let container = this.#piazzole[i].pilaContainer[j];
                        this.#piazzole[i].pilaContainer = this.#piazzole[i].pilaContainer.splice(j, 1);
                        return container;
                    }
                }
            }
        }
        return false;
    }

    /**
     * @returns il numero della piazzola
     * @returns -1 se non ci sono piazzole disponibili
     */
    ricercaPiazzolaDisponibile(){
        for (let i = 0; i < this.#piazzole.length; i++){
            if (this.#piazzole[i].pilaContainer.length < 5){
                return this.#piazzole[i].pilaContainer.codiceNumerico;
            }
        }
        return -1;
    }

    /**
     * 
     * @param {number} numContainer 
     * @returns il numero della piazzola che contiene il container scelto
     * @returns -1 se non viene trovato alcun container nelle piazzole
     */
    ricercaNumPiazzolaDaNumContainer(numContainer){
        for (let i = 0; i < this.#piazzole.length; i++){
            let piazzola = this.#piazzole[i];
            for (let j = 0; j < piazzola.pilaContainer.length; j++){
                if (piazzola.pilaContainer[j].codiceNumerico == numContainer){
                    return i;
                }
            }
        }
        return -1;
    }
}

let deposito = new Deposito();