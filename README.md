# Sistema-gestione-deposito-container
Sistema di gestione del deposito di container realizzato in JavaScript con le classi, corredato di diagramma UML delle classi.

# Traccia
Un deposito di container impila fino a 5 container uno sopra l'altro per il rimessaggio temporaneo in un'area suddivisa in piazzole numerate (ogni piazzola ospita una pila di container); ogni container è identificato da un codice numerico univoco ed è descritto da un breve testo (massino 100 caratteri); i tipi di container sono tre: container per liquidi (dei quali deve essere specificata la capacità massima in litri e tipologia di chiusura ermetica, container per solidi (dei quali deve essere specificata la capienza massima in kg) e container per rifiuti speciali (dei quali occorre specificare oltre alla capienza il livello di radioattività). 
Occorre progettare il software che consenta di modellizzare un deposito con un numero variabile di piazzole destinate al rimessaggio dei container e che permetta le seguenti operazioni:
- aggiunta di un container alla pila di una specifica piazzola;
- prelevamento di un container dalla pila di una specifica piazzola;
- ricerca del numero di una piazzola che può contenere un nuovo container da impilare;
- ricerca del numero della piazzola che contiene un container di cui è noto il codice identificativo.

Occorre fornire il diagramma UML delle classi del progetto ed implementare il codice in javascript (utilizzando solo classi e non funzioni).
