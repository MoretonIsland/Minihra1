// Po načtení DOMu (Document Object Model, což je reprezentace struktury HTML dokumentu v paměti pro manipulaci pomocí JavaScriptu.)
document.addEventListener("DOMContentLoaded", function() {
   // Získání odkazů na tlačítka pro volbu počtu karet a herní plochu
    const cardOption24 = document.getElementById("card-option-24");
    const cardOption48 = document.getElementById("card-option-48");
    const gameBoard = document.getElementById("game-board");
    // Počet karet (výchozí hodnota: 24)
    let numberOfCards = 24;

    // Definice seznamu obrázků
    const images = [
        // seznam obrázků
        "Flowers17.jpg",
        "Flowers16.jpg",
        "Flowers15.jpg",
        "Views4.jpg",
        "Friends14.jpg",
        "Views3.jpg",
        "Friends13.jpg",
        "Views2.jpg",
        "Flowers20.jpg",
        "Friends12.jpg",
        "Flowers14.jpg",
        "Nature12.jpg",
        "Flowers13.jpg",
        "Flowers12.jpg",
        "Flowers88.jpg",
        "Flowers44.jpg",
        "Flowers33.jpg",
        "Friends23.jpg",
        "Friends55.jpg",
        "Flowers51.jpg",
        "Friends20.jpg",
        "Friends17.jpg",
        "Friends18.jpg",
        "Friends19.jpg"
    ];

    // Funkce pro vytvoření herní plochy s daným počtem karet
    function createGameBoard() {
        // Vymazání obsahu herní plochy
        gameBoard.innerHTML = "";

        // Vytvoření karet
        const cards = [];
        for (let i = 0; i < numberOfCards; i++) {
            // Vytvoření jedné karty a přidání do pole
            const imageIndex = Math.floor(i / 2);
            const image = images[imageIndex];
            const card = createCard(image);
            cards.push(card);
        }

        // Promíchání karet
        shuffleArray(cards);

        // Vložení karet na herní plochu
        cards.forEach(card => {
            gameBoard.appendChild(card);
        });
    }

    // Obsluha kliknutí na tlačítko pro volbu 24 karet
    cardOption24.addEventListener("click", function() {
        // Nastavení počtu karet na 24
        numberOfCards = 24;
        createGameBoard();
        clearInterval(timerInterval);
        timer.textContent = 0;
    });

    // Obsluha kliknutí na tlačítko pro volbu 48 karet
    cardOption48.addEventListener("click", function() {
        numberOfCards = 48;
        createGameBoard();
        clearInterval(timerInterval);
        timer.textContent = 0;
    });

    // Funkce pro vytvoření karty
    function createCard(image) {
        // Vytvoření jedné karty
        const card = document.createElement("div");
        card.className = "flip-card";

        const inner = document.createElement("div");
        inner.className = "flip-card-inner";

        const front = document.createElement("div");
        front.className = "flip-card-front";

        const back = document.createElement("div");
        back.className = "flip-card-back";

        const frontImage = document.createElement("img");
        frontImage.src = "Colour11.jpg";
        frontImage.alt = "Colour11";
        frontImage.style.width = "100px";
        frontImage.style.height = "100px";

        const backImage = document.createElement("img");
        backImage.src = image;
        backImage.alt = "Back Image";
        backImage.style.width = "100px";
        backImage.style.height = "100px";

        const flipButton = document.createElement("button");
        flipButton.textContent = "Otočit";
        flipButton.className = "flip-card-button";

        // Přidání události "click" na tlačítko pro otáčení karty
        flipButton.addEventListener("click", function() {
            card.classList.toggle("flipped");
        });

        front.appendChild(frontImage);
        back.appendChild(backImage);
        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);
        card.appendChild(flipButton);

        return card;
    }

    // Funkce pro promíchání pole
    function shuffleArray(array) {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    // Funkce pro promíchání karet
    function shuffleCards() {
        gameBoard.innerHTML = "";
        const shuffledImages = shuffleArray(images.slice(0, numberOfCards / 2).concat(images.slice(0, numberOfCards / 2)));
        shuffledImages.forEach(image => {
            const card = createCard(image);
            gameBoard.appendChild(card);
        });
    }

    // Obsluha kliknutí na tlačítko pro promíchání karet
    const shuffleButton = document.getElementById("shuffle-button");
    shuffleButton.addEventListener("click", shuffleCards);

    // Časovač
    let timerInterval;
    const timer = document.getElementById("timer");
    const startTimerButton = document.getElementById("start-timer-button");
    const stopTimerButton = document.getElementById("stop-timer-button");

    // Spustit časovač
    startTimerButton.addEventListener("click", function() {
        let seconds = 0;
        timerInterval = setInterval(function() {
            seconds++;
            timer.textContent = seconds;
        }, 1000);
    });

    // Zastavit časovač
    stopTimerButton.addEventListener("click", function() {
        clearInterval(timerInterval);
    });

    // Vytvoření výchozí herní plochy
    createGameBoard();
});