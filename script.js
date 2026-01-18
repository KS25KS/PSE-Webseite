const grid = document.querySelector(".periodic-grid");
let elementData = {};

// CATEGORY COLORS
const categoryClass = {
  metall: "metal",
  halbmetall: "metalloid",
  nichtmetall: "nonmetal"
};

// GROUP + PERIOD MAPPING (ESSENTIAL)
const positionMap = {
  H:  { p:1, g:1,  c:"nichtmetall" },
  He: { p:1, g:18, c:"nichtmetall" },

  Li:{p:2,g:1,c:"metall"}, Be:{p:2,g:2,c:"metall"},
  B:{p:2,g:13,c:"halbmetall"}, C:{p:2,g:14,c:"nichtmetall"},
  N:{p:2,g:15,c:"nichtmetall"}, O:{p:2,g:16,c:"nichtmetall"},
  F:{p:2,g:17,c:"nichtmetall"}, Ne:{p:2,g:18,c:"nichtmetall"},

  Na:{p:3,g:1,c:"metall"}, Mg:{p:3,g:2,c:"metall"},
  Al:{p:3,g:13,c:"metall"}, Si:{p:3,g:14,c:"halbmetall"},
  P:{p:3,g:15,c:"nichtmetall"}, S:{p:3,g:16,c:"nichtmetall"},
  Cl:{p:3,g:17,c:"nichtmetall"}, Ar:{p:3,g:18,c:"nichtmetall"}

  // ⚠️ You can extend this later — layout will still work
};

fetch("elements118.json")
  .then(res => res.json())
  .then(data => {
    elementData = data;
    createTable();
  });

function createTable() {
  grid.innerHTML = "";

  Object.keys(elementData).forEach(symbol => {
    const pos = positionMap[symbol];
    if (!pos) return; // prevents crashing

    const card = document.createElement("div");
    card.className = `element-card ${categoryClass[pos.c]}`;
    card.dataset.element = symbol;

    card.style.gridColumn = pos.g;
    card.style.gridRow = pos.p;

    card.innerHTML = `
      <div class="symbol">${symbol}</div>
      <div class="number">${elementData[symbol].ordnungszahl}</div>
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

document.getElementById("back-btn").onclick = () => {
  document.getElementById("element-overlay").style.display = "none";
};

document.getElementById("legend-toggle").onclick = () => {
  const l = document.getElementById("legend");
  l.style.display = l.style.display === "block" ? "none" : "block";
};
