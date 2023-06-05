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

    <style>
       /* Styly pro karty */
.flip-card {
  background-color: transparent;
  width: 100px;
  height: 100px;
  perspective: 1000px;
  display: inline-block;
  margin-right: 20px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

.flip-card-button {
  margin-top: 10px;
  width: 100px;
}

/* Styl pro nadpis */
h1 {
  text-align: center;
}

body {
  background-color:#A8D18D; 
}

/* Styl pro tlačítka */
.button-container {
  text-align: center;
  margin-bottom: 10px;
}

.button-container button {
  margin-right: 10px;
  background-color: lightgray;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

/* Styl pro údaj času */
#timer-container {
  text-align: center;
  margin-top: 10px;
}

#timer {
  font-size: 24px;
  font-weight: bold;
}

/* Styl pro údaj času nad kartami */
#timer-container {
  text-align: center;
  margin-top: 10px;
}

#timer {
  font-size: 24px;
  font-weight: bold;
}

/* Styly pro tabulku */
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

.main-heading {
  text-align: center;
  background-color: lightgray;
}

.column-heading {
  background-color: gray;
  color: white;
}

/* Skrytí sloupců pro hru se 48 kartami */
.main-heading-48,
.column-heading-48,
.column-data-48 {
  display: none;
}
</style>  
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