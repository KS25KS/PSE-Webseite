const elementData = {
  H: {name:"Wasserstoff", siedepunkt:"20.28 K", schmelztemperatur:"13.99 K", vorkommen:"universell im Wasserstoffgas und Wasser", molekuele:"H2", elektronegativitaet:"2,20", magnetismus:"nicht magnetisch", eigenschaften:"farblos, geruchlos, leichtestes Element", beschreibung:"Wasserstoff ist das leichteste und häufigste chemische Element im Universum.", image:""},
  He: {name:"Helium", siedepunkt:"4.22 K", schmelztemperatur:"0,95 K", vorkommen:"Erdatmosphäre, Gasquellen", molekuele:"He", elektronegativitaet:"-", magnetismus:"nicht magnetisch", eigenschaften:"farblos, geruchlos, Edelgas", beschreibung:"Helium ist ein farbloses, chemisch inertes Edelgas.", image:""},
  Li: {name:"Lithium", siedepunkt:"1603 K", schmelztemperatur:"453,7 K", vorkommen:"Pegmatite, Mineralien", molekuele:"Li2O, LiCl", elektronegativitaet:"0,98", magnetismus:"paramagnetisch", eigenschaften:"leicht, silbrig, weich", beschreibung:"Lithium ist ein Alkalimetall, verwendet in Batterien und Legierungen.", image:""},
  Co: {name:"Kobalt", siedepunkt:"2927 K", schmelztemperatur:"1768 K", vorkommen:"Demokratische Republik Kongo", molekuele:"CoCl2, CoO", elektronegativitaet:"1,88", magnetismus:"ferromagnetisch", eigenschaften:"hart, silbrig-blau, korrosionsbeständig", beschreibung:"Kobalt ist ein Übergangsmetall, wichtig für Legierungen und Batterien.", image:""}
};

const overlay = document.getElementById("element-overlay");
const backBtn = document.getElementById("back-btn");
const overlaySymbol = document.getElementById("overlay-symbol");
const overlayNumber = document.getElementById("overlay-number");
const overlayName = document.getElementById("overlay-name");
const overlaySiedepunkt = document.getElementById("overlay-siedepunkt");
const overlaySchmelztemperatur = document.getElementById("overlay-schmelztemperatur");
const overlayVorkommen = document.getElementById("overlay-vorkommen");
const overlayMolekuele = document.getElementById("overlay-molekuele");
const overlayElektronegativitaet = document.getElementById("overlay-elektronegativitaet");
const overlayMagnetismus = document.getElementById("overlay-magnetismus");
const overlayEigenschaften = document.getElementById("overlay-eigenschaften");
const overlayBeschreibung = document.getElementById("overlay-beschreibung");
const overlayImage = document.getElementById("element-image");
const atomModel = document.getElementById("atom-model");
const legend = document.getElementById("legend");
const legendToggle = document.getElementById("legend-toggle");

document.querySelectorAll(".element-card").forEach(card=>{
  card.addEventListener("click",()=>{
    const symbol = card.getAttribute("data-element");
    const data = elementData[symbol];
    if(!data) return;
    overlaySymbol.textContent = symbol;
    overlayNumber.textContent = card.querySelector(".number").textContent;
    overlayName.textContent = data.name;
    overlaySiedepunkt.innerHTML=`<strong>Siedepunkt:</strong> ${data.siedepunkt}`;
    overlaySchmelztemperatur.innerHTML=`<strong>Schmelztemperatur:</strong> ${data.schmelztemperatur}`;
    overlayVorkommen.innerHTML=`<strong>Vorkommen:</strong> ${data.vorkommen}`;
    overlayMolekuele.innerHTML=`<strong>Molekülbindungen:</strong> ${data.molekuele}`;
    overlayElektronegativitaet.innerHTML=`<strong>Elektronegativität:</strong> ${data.elektronegativitaet}`;
    overlayMagnetismus.innerHTML=`<strong>Magnetisierbarkeit:</strong> ${data.magnetismus}`;
    overlayEigenschaften.innerHTML=`<strong>Eigenschaften:</strong> ${data.eigenschaften}`;
    overlayBeschreibung.innerHTML=`<strong>Beschreibung:</strong> ${data.beschreibung}`;
    overlayImage.textContent="Bild hier";
    atomModel.textContent="3D Atommodell";
    overlay.style.display="block";
  });
});

backBtn.addEventListener("click",()=>{overlay.style.display="none";});
legendToggle.addEventListener("click",()=>{legend.style.display = (legend.style.display==="block")?"none":"block";});
