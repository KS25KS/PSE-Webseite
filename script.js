let elementData = {};

fetch('elements.json')
  .then(res => res.json())
  .then(data => {
    elementData = data;

    document.querySelectorAll(".element-card").forEach(card => {
      card.addEventListener("click", () => {
        const symbol = card.getAttribute("data-element");
        const data = elementData[symbol];
        if (!data) return;

        document.getElementById("overlay-symbol").textContent = symbol;
        document.getElementById("overlay-number").textContent = card.querySelector(".number").textContent;
        document.getElementById("overlay-name").textContent = data.name;
        document.getElementById("overlay-siedepunkt").innerHTML = `<strong>Siedepunkt:</strong> ${data.siedepunkt}`;
        document.getElementById("overlay-schmelztemperatur").innerHTML = `<strong>Schmelztemperatur:</strong> ${data.schmelztemperatur}`;
        document.getElementById("overlay-vorkommen").innerHTML = `<strong>Vorkommen:</strong> ${data.vorkommen}`;
        document.getElementById("overlay-molekuele").innerHTML = `<strong>Molekülbindungen:</strong> ${data.molekuele}`;
        document.getElementById("overlay-elektronegativitaet").innerHTML = `<strong>Elektronegativität:</strong> ${data.elektronegativitaet}`;
        document.getElementById("overlay-magnetismus").innerHTML = `<strong>Magnetisierbarkeit:</strong> ${data.magnetismus}`;
        document.getElementById("overlay-eigenschaften").innerHTML = `<strong>Eigenschaften:</strong> ${data.eigenschaften}`;
        document.getElementById("overlay-beschreibung").innerHTML = `<strong>Beschreibung:</strong> ${data.beschreibung}`;
        document.getElementById("element-image").textContent = "Bild hier";

        document.getElementById("element-overlay").style.display = "block";
      });
    });
  });

document.getElementById("back-btn").addEventListener("click", () => {
  document.getElementById("element-overlay").style.display = "none";
});

document.getElementById("legend-toggle").addEventListener("click", () => {
  const legend = document.getElementById("legend");
  legend.style.display = (legend.style.display === "block") ? "none" : "block";
});
