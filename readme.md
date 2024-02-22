# Instructions
Mail:
- Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi:
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

<!-- Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
Buon lavoro e buon divertimento! -->
## Steps
- MAIL:
    - write a mail iside an input box
    - check if the mail is already inside the system (for)
        - if === true 
          - start plaing dice
        - else
            - warning message (alert?)
    
- DICE GAME:
    - generate random number from 1 to 6 (var com)
    - generate random number from 1 to 6 (var player)
        if com>player
            com win
        else 
            player win


### Tools
- const/let
- for
- if/else if/else
- math(random):
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
} or Math.floor(Math.random() * 10) - 4;
- alert
