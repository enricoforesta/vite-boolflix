# Milestone 0:
Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.

# Milestone 1:

Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
Titolo
Titolo Originale
Lingua
Voto


# Milestone 2:

Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).



# Logica

# Milestone 0:

1. Dopo aver creato la struttura con vite + vue. installiamo il pacchetto axios in modo da poter chiamare l' Api.

2. Creiamo uno store globale per i dati.

3. Creo una funzione per richiamare l api e leggere i suoi dati, in modo da averli salvati nello store.

4. Nella funziona, grazie all interpolazione, ci possiamo gestire il caso di ricerca, in modo che ci restituisce i risultati. (se il campo di ricerca è vuoto, Api ci restiuisce zero risultati. Ma non dà errore).

# Milestone 1:

1. Ci creiamo due input, uno di testo e un bottone.

2. Con la direttiva v-model colleghiamo l input con una propietà nello store. che ci servirà per effetturare la ricerca del film.

3. Al input button inseriamo un evento @click in modo che dopo aver scritto nell input di testo, clicchiamo sul bottone per avviare la ricerca.

4. Con la direttiva v-for stampiamo a schermo tutti i risultati ottenuti, usiamo il v-for per ciclare tutti i risultati.

# Milestone 2:

1. Aggiungiamo le condizioni in modo che 
---SE
    la lingua è "it" stampa la bandiera italiana
--- ALTRIMENTI SE
    la lingua è "en" stampa la bandiera inglese
--- ALTRIMENTI
    stampa la stringa della lingua