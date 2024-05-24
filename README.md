# Express Blog Intro

## Descrizione
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.

## Funzionalità

1. **Rotta base**
   - Rotta `/` che ritorna un `h1` con scritto "Benvenuto nel mio blog!"

2. **Lista di Post**
   - Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare:
     - Titolo
     - Contenuto
     - Immagine
     - Tags (array di stringhe)

3. **Rotta /posts**
   - Rotta `/posts` che ritorna tramite content negotiation la lista dei post da un array locale.
   - Ritorno dei dati sotto forma di `json` e `html` stampando una semplice `ul`.

4. **Controller**
   - Le rotte relative ai post dovranno chiamare la funzione relativa dal controller dedicato `controllers/posts.js`.

5. **Asset Statici**
   - Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
   - Testare le immagini scrivendo manualmente il link nel browser.

## Bonus
- Nel stampare la `ul` in `html`, inserire anche un tag `img`, la descrizione e la lista dei tag.
- Spostiamo l’array dei post in un file separato da importare poi dentro il controller.
- Creare una rotta `POST` per aggiungere i post tramite Postman.


Buon lavoro!