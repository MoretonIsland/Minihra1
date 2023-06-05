// Načtení dat z CSV souboru
fetch('results.csv')
  .then(response => response.text())
  .then(data => {
    // Rozdělení dat na řádky a sloupce
    const rows = data.split('\n');
    const table = document.getElementById('resultsTable');

    // Přidání řádků do tabulky
    rows.forEach(row => {
      const columns = row.split(',');

      // Vytvoření nového řádku
      const newRow = document.createElement('tr');

      // Přidání buněk s daty
      columns.forEach(column => {
        const newCell = document.createElement('td');
        newCell.textContent = column;
        newRow.appendChild(newCell);
      });

      // Přidání řádku do tabulky
      table.appendChild(newRow);
    });
  })
  .catch(error => {
    console.error('Chyba při načítání dat z CSV souboru:', error);
  });
