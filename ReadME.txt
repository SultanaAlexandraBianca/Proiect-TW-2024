Pentru participants.php - http://localhost/game_api/participants.php
Pentru tournaments.php -http://localhost/game_api/tournaments.php
Această documentație oferă pașii necesari pentru a configura și rula proiectul de organizare a turneelor de jocuri.

1. Cerințe preliminare

Pentru a putea rula aplicația local, aveti nevoie de următoarele:
XAMPP sau WAMP: pentru configurarea serverului local.
phpMyAdmin: pentru gestionarea bazei de date.
Un browser web: pentru a accesa aplicația.


2. Configurarea bazei de date

Crearea bazei de date:
Accesează phpMyAdmin în browser, navigând la http://localhost/phpmyadmin.

Creează o bază de date nouă numită game_tournaments:
Apasă pe tab-ul Databases.
Introdu numele bazei de date game_tournaments.
Apasă Create.
Importul structurii și datelor:
Accesează baza de date game_tournaments creată anterior.
Apasă pe tab-ul Import.
Încarcă fișierul game_tournaments.sql inclus în proiect.
Apasă Go pentru a importa structura și datele.

Tabelele vor fi create automat:

tournaments: pentru gestionarea turneelor.
participants: pentru gestionarea participanților.

3. Testarea aplicației

Adăugare turnee:

Completează formularul din pagina principală și apasă pe butonul Adaugă Turneu.
Vizualizare participanți:
Selectează un turneu din listă pentru a vedea participanții asociați.
Editare și ștergere:
Folosește butoanele de editare sau ștergere din interfață.