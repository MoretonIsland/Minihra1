<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Nastavení kódování a kompatibility -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <!-- Odkaz na externí JavaScript soubor -->
    <script src="databasedownload.js"></script>
    <!-- Název stránky -->
    <title>Hra1</title>
</head>

<body>
<h1 style="text-align: center;">Minihra s otáčením karet</h1>
  
    <!-- Kontejner pro zobrazení časovače -->
    <div id="timer-container">
        Čas: <span id="timer">0</span> sekund
    </div>

    <!-- Kontejner pro tlačítka -->
    <div class="button-container">
        <button id="shuffle-button">Promíchat karty</button>
        <button id="start-timer-button">Spustit časovač</button>
        <button id="stop-timer-button">Zastavit časovač</button>
        <button id="card-option-24">24 karet</button>
        <button id="card-option-48">48 karet</button>
    </div>

    <!-- Herní deska -->
    <div class="game-board">
        <div id="game-board"></div>
    </div>
    
    <br>
    <br>
    <!-- Tabulka pro zobrazení dat -->
<table id="resultsTable">
  <thead>
    <tr>
      <th colspan="2" class="main-heading">Hra s 24 kartami</th>
    </tr>
    <tr>
      <th class="column-heading">Datum a čas her</th>
      <th class="column-heading">Výsledek (v sekundách)</th>
    </tr>
  </thead>
  <tbody>
    <!-- řádky budou dynamicky přidány pomocí JavaScriptu -->
  </tbody>
</table>
<!-- Odkaz na externí JavaScript soubor -->
<script src="game.js"></script>
    
</body>
</html>
