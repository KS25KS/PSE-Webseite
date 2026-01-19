const grid = document.getElementById("periodic-grid");
let elementData = {};

const categoryClass = {
  metall: "Metall",
  halbmetall: "Halbmetall",
  nichtmetall: "Nichtmetall"
};

fetch("elements118.json")
  .then(res => res.json())
  .then(data => {
    elementData = data;
    createTable();
  })
  .catch(err => console.error("JSON load error:", err));

function createTable() {
  grid.innerHTML = "";

  Object.keys(elementData).forEach(symbol => {
    const elem = elementData[symbol];

   
    if (!elem.periode || !elem.gruppe || !elem.kategorie) return;

    const catKey = (elem.kategorie || "Nichtmetall").trim().toLowerCase();
    const card = document.createElement("div");
    card.className = `element-card ${categoryClass[catKey] || "nichtmetall"}`;
    card.dataset.element = symbol;

    card.style.gridColumn = elem.gruppe;
    card.style.gridRow = elem.periode;

    card.innerHTML = `
      <div class="symbol">${symbol}</div>
      <div class="number">${elem.ordnungszahl}</div>
    `;

    card.addEventListener("click", () => openOverlay(symbol));

    grid.appendChild(card);
  });
}

function openOverlay(symbol) {
  const d = elementData[symbol];
  if (!d) return;

  document.getElementById("overlay-name").textContent = d.name;
  document.getElementById("overlay-symbol").textContent = d.symbol;
  document.getElementById("overlay-number").textContent = d.ordnungszahl;
  document.getElementById("overlay-siedepunkt").innerHTML = `<strong>Siedepunkt:</strong> ${d.siedepunkt}`;
  document.getElementById("overlay-schmelztemperatur").innerHTML = `<strong>Schmelztemperatur:</strong> ${d.schmelztemperatur}`;
  document.getElementById("overlay-vorkommen").innerHTML = `<strong>Vorkommen:</strong> ${d.vorkommen}`;
  document.getElementById("overlay-molekuele").innerHTML = `<strong>Moleküle:</strong> ${d.molekuele}`;
  document.getElementById("overlay-elektronegativitaet").innerHTML = `<strong>Elektronegativität:</strong> ${d.elektronegativitaet}`;
  document.getElementById("overlay-magnetismus").innerHTML = `<strong>Magnetismus:</strong> ${d.magnetismus}`;
  document.getElementById("overlay-eigenschaften").innerHTML = `<strong>Eigenschaften:</strong> ${d.eigenschaften}`;
  document.getElementById("overlay-beschreibung").innerHTML = `<strong>Beschreibung:</strong> ${d.beschreibung}`;
  document.getElementById("element-image").textContent = "Bild hier";

  document.getElementById("element-overlay").style.display = "block";
}

// Close overlay
document.getElementById("back-btn").onclick = () => {
  document.getElementById("element-overlay").style.display = "none";
};

// Toggle legend
document.getElementById("legend-toggle").onclick = () => {
  const l = document.getElementById("legend");
  l.style.display = l.style.display === "block" ? "none" : "block";
};
