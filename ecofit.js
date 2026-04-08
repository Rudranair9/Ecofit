// EcoFit — master bundle (also embedded in *.html). Edit this file, then run sync-ecofit-into-html.ps1 to refresh pages.

// EcoFit — material library (embedded; works offline).
// Optional: materials.json overrides when fetch works (local server).
window.ECOFIT_MATERIALS = {
  "cotton-conventional": {
    name: "Conventional Cotton",
    category: "Natural",
    co2: 5.9,
    water: 10000,
    score: 62,
    description:
      "Grown with synthetic pesticides and fertilisers; very thirsty (≈10,000 L/kg). Most common apparel fibre worldwide.",
    alternatives: ["cotton-organic", "hemp", "linen"],
  },
  "cotton-organic": {
    name: "Organic Cotton",
    category: "Natural",
    co2: 3.8,
    water: 7000,
    score: 35,
    description:
      "No synthetic pesticides; lower water and energy than conventional cotton; look for GOTS.",
    alternatives: ["hemp", "linen", "tencel"],
  },
  "recycled-cotton": {
    name: "Recycled Cotton",
    category: "Recycled",
    co2: 2.1,
    water: 800,
    score: 24,
    description:
      "Mechanically or chemically recycled from textile waste; saves water and avoids virgin farming.",
    alternatives: ["hemp", "linen"],
  },
  polyester: {
    name: "Polyester",
    category: "Synthetic",
    co2: 9.5,
    water: 125,
    score: 78,
    description:
      "Petroleum-based; energy-intensive; sheds microplastics in every wash.",
    alternatives: ["recycled-polyester", "tencel"],
  },
  "recycled-polyester": {
    name: "Recycled Polyester (rPET)",
    category: "Recycled",
    co2: 3.2,
    water: 100,
    score: 28,
    description:
      "Made from post-consumer bottles or textile waste; much lower footprint than virgin polyester.",
    alternatives: ["tencel", "hemp"],
  },
  nylon: {
    name: "Nylon (Polyamide)",
    category: "Synthetic",
    co2: 7.6,
    water: 200,
    score: 72,
    description:
      "High energy use; nitrous oxide from production; common in activewear and hosiery.",
    alternatives: ["recycled-nylon", "tencel"],
  },
  "recycled-nylon": {
    name: "Recycled Nylon",
    category: "Recycled",
    co2: 2.8,
    water: 180,
    score: 25,
    description:
      "Often from fishing nets or industrial scrap; strong performance with lower impact.",
    alternatives: ["tencel"],
  },
  elastane: {
    name: "Elastane / Spandex / Lycra®",
    category: "Synthetic",
    co2: 12.0,
    water: 150,
    score: 82,
    description:
      "Almost always blended in small %; fossil-based and hard to recycle at end of life.",
    alternatives: ["recycled-polyester"],
  },
  acrylic: {
    name: "Acrylic",
    category: "Synthetic",
    co2: 8.2,
    water: 200,
    score: 75,
    description:
      "Wool-like synthetic; energy-intensive; can release microfibres.",
    alternatives: ["recycled-wool", "wool"],
  },
  wool: {
    name: "Wool (Virgin)",
    category: "Animal",
    co2: 5.5,
    water: 170,
    score: 50,
    description:
      "Durable and biodegradable; methane from sheep is a major part of footprint.",
    alternatives: ["recycled-wool", "organic-wool"],
  },
  "organic-wool": {
    name: "Organic Wool",
    category: "Animal",
    co2: 4.2,
    water: 160,
    score: 38,
    description:
      "Pasture and animal welfare standards; fewer synthetic inputs than conventional wool.",
    alternatives: ["recycled-wool", "linen"],
  },
  "recycled-wool": {
    name: "Recycled Wool",
    category: "Recycled",
    co2: 1.8,
    water: 80,
    score: 18,
    description:
      "Reclaimed from pre- or post-consumer knitwear; excellent low-impact option.",
    alternatives: [],
  },
  "merino-wool": {
    name: "Merino Wool",
    category: "Animal",
    co2: 6.0,
    water: 180,
    score: 55,
    description:
      "Fine fibre for base layers; similar land and methane considerations as wool.",
    alternatives: ["recycled-wool", "tencel"],
  },
  cashmere: {
    name: "Cashmere",
    category: "Animal",
    co2: 105,
    water: 15000,
    score: 95,
    description:
      "Very high land use and degradation per kg; luxury staple with outsized impact.",
    alternatives: ["recycled-cashmere", "wool", "tencel"],
  },
  "recycled-cashmere": {
    name: "Recycled Cashmere",
    category: "Recycled",
    co2: 8.0,
    water: 1200,
    score: 42,
    description:
      "Blends of reclaimed cashmere fibres; far better than virgin cashmere.",
    alternatives: ["recycled-wool", "tencel"],
  },
  alpaca: {
    name: "Alpaca Fibre",
    category: "Animal",
    co2: 12.0,
    water: 800,
    score: 58,
    description:
      "Soft luxury fibre; lower methane per animal than sheep but still animal agriculture.",
    alternatives: ["recycled-wool", "tencel"],
  },
  mohair: {
    name: "Mohair",
    category: "Animal",
    co2: 9.0,
    water: 600,
    score: 60,
    description:
      "From angora goats; durable sheen; welfare and land use vary by farm.",
    alternatives: ["wool", "tencel"],
  },
  angora: {
    name: "Angora (Rabbit)",
    category: "Animal",
    co2: 7.0,
    water: 500,
    score: 52,
    description:
      "Very fine; ethical sourcing critical — many brands have phased out.",
    alternatives: ["wool", "tencel"],
  },
  silk: {
    name: "Silk",
    category: "Animal",
    co2: 35,
    water: 3800,
    score: 70,
    description:
      "Boiling cocoons uses energy and water; biodegradable and long-lasting.",
    alternatives: ["tencel", "cupro", "linen"],
  },
  "down-feather": {
    name: "Down & Feather",
    category: "Animal",
    co2: 18.0,
    water: 2500,
    score: 68,
    description:
      "Fill for jackets and bedding; traceability and live-plucking concerns matter.",
    alternatives: ["recycled-polyester", "recycled-wool"],
  },
  linen: {
    name: "Linen (Flax)",
    category: "Natural",
    co2: 1.7,
    water: 500,
    score: 20,
    description:
      "Flax needs little irrigation and few pesticides; strong and biodegradable.",
    alternatives: [],
  },
  hemp: {
    name: "Hemp",
    category: "Natural",
    co2: 0.9,
    water: 300,
    score: 12,
    description:
      "Fast-growing, low inputs; excellent for denim, tees, and blends.",
    alternatives: [],
  },
  ramie: {
    name: "Ramie",
    category: "Natural",
    co2: 2.2,
    water: 400,
    score: 22,
    description:
      "Bast fibre like linen; lustrous; processing can be chemical-heavy.",
    alternatives: ["linen", "hemp"],
  },
  jute: {
    name: "Jute",
    category: "Natural",
    co2: 1.1,
    water: 350,
    score: 15,
    description: "Coarse bast fibre; bags and linings; very low impact crop.",
    alternatives: ["hemp", "linen"],
  },
  tencel: {
    name: "TENCEL™ / Lyocell",
    category: "Semi-synthetic",
    co2: 2.0,
    water: 700,
    score: 22,
    description:
      "Wood pulp in closed-loop solvent recovery; soft drape, biodegradable.",
    alternatives: ["linen", "hemp"],
  },
  modal: {
    name: "Modal",
    category: "Semi-synthetic",
    co2: 2.8,
    water: 900,
    score: 32,
    description:
      "Regenerated cellulose like viscose; often from beech; check responsible forestry.",
    alternatives: ["tencel", "linen"],
  },
  viscose: {
    name: "Viscose / Rayon",
    category: "Semi-synthetic",
    co2: 4.8,
    water: 3000,
    score: 55,
    description:
      "Wood pulp with chemical spinning; can drive deforestation if not certified.",
    alternatives: ["tencel", "modal", "linen"],
  },
  cupro: {
    name: "Cupro / Bemberg™",
    category: "Semi-synthetic",
    co2: 4.0,
    water: 2200,
    score: 48,
    description:
      "Regenerated from cotton linter; silk-like hand; chemical recovery matters.",
    alternatives: ["tencel", "silk"],
  },
  acetate: {
    name: "Acetate",
    category: "Semi-synthetic",
    co2: 4.5,
    water: 800,
    score: 50,
    description:
      "Lining fabric from wood pulp; less common in casual wear today.",
    alternatives: ["tencel"],
  },
  "bamboo-viscose": {
    name: "Bamboo Viscose",
    category: "Semi-synthetic",
    co2: 3.5,
    water: 1400,
    score: 40,
    description:
      "Often marketed as eco; chemically identical to rayon unless lyocell process.",
    alternatives: ["tencel", "hemp", "linen"],
  },
  bamboo: {
    name: "Bamboo (Generic)",
    category: "Semi-synthetic",
    co2: 2.5,
    water: 1200,
    score: 30,
    description:
      "Fast-growing grass; impact depends heavily on processing (viscose vs mechanical).",
    alternatives: ["hemp", "linen", "tencel"],
  },
  leather: {
    name: "Leather (Chrome Tan)",
    category: "Animal",
    co2: 17.0,
    water: 17100,
    score: 88,
    description:
      "Livestock + tanning; very high water and chemical load; long-lived products help amortise.",
    alternatives: ["cork", "vegan-leather", "pinatex"],
  },
  "vegetable-tanned-leather": {
    name: "Vegetable-Tanned Leather",
    category: "Animal",
    co2: 14.0,
    water: 12000,
    score: 78,
    description:
      "Traditional tannins; avoids chrome but still livestock-intensive.",
    alternatives: ["cork", "pinatex"],
  },
  "vegan-leather": {
    name: "Vegan Leather (PU / PVC)",
    category: "Synthetic",
    co2: 7.2,
    water: 150,
    score: 65,
    description:
      "Plastic-based; lower than leather on some metrics but fossil-derived and hard to recycle.",
    alternatives: ["cork", "recycled-polyester", "pinatex"],
  },
  pinatex: {
    name: "Piñatex® (Pineapple Leaf)",
    category: "Natural",
    co2: 2.4,
    water: 400,
    score: 28,
    description:
      "Uses agricultural waste from pineapples; bio-based coating options exist.",
    alternatives: ["cork", "vegan-leather"],
  },
  cork: {
    name: "Cork Fabric",
    category: "Natural",
    co2: 0.5,
    water: 100,
    score: 8,
    description:
      "Harvested from bark without killing trees; carbon-negative cork oak landscapes.",
    alternatives: [],
  },
  "rubber-natural": {
    name: "Natural Rubber",
    category: "Natural",
    co2: 2.0,
    water: 400,
    score: 35,
    description:
      "Soles and elastic; from latex trees; deforestation risk if not responsibly sourced.",
    alternatives: ["recycled-rubber"],
  },
  "recycled-rubber": {
    name: "Recycled Rubber",
    category: "Recycled",
    co2: 1.0,
    water: 100,
    score: 20,
    description: "Tyre and post-industrial scrap for soles and mats.",
    alternatives: [],
  },
  neoprene: {
    name: "Neoprene",
    category: "Synthetic",
    co2: 11.0,
    water: 200,
    score: 80,
    description:
      "Wetsuits and structured garments; synthetic rubber, high embodied energy.",
    alternatives: ["recycled-polyester"],
  },
  pvc: {
    name: "PVC / Vinyl",
    category: "Synthetic",
    co2: 6.5,
    water: 100,
    score: 85,
    description:
      "Coatings, shiny fashion, rainwear; chlorine chemistry and plasticisers are concerns.",
    alternatives: ["recycled-polyester", "polyurethane-coating"],
  },
  "polyurethane-coating": {
    name: "Polyurethane (PU) Coating",
    category: "Synthetic",
    co2: 5.5,
    water: 120,
    score: 58,
    description:
      "Waterproof layers on jackets; thinner than full PVC in many cases.",
    alternatives: ["recycled-polyester"],
  },
  "fleece-polyester": {
    name: "Polar Fleece (Polyester)",
    category: "Synthetic",
    co2: 8.8,
    water: 130,
    score: 76,
    description:
      "Warm mid-layers; high microfibre shed — wash in a bag and prefer recycled content.",
    alternatives: ["recycled-polyester", "wool"],
  },
  "sequin-metallic": {
    name: "Sequins / Metallic Films",
    category: "Synthetic",
    co2: 10.0,
    water: 300,
    score: 88,
    description:
      "PET or metalised plastic on mesh; hard to recycle and sheds particles.",
    alternatives: ["recycled-polyester"],
  },
};

// EcoFit — app logic (calculator, wardrobe, nav).
if (typeof window.ECOFIT_MATERIALS === "undefined")
  window.ECOFIT_MATERIALS = {};

function showToast(message, type = "success", duration = 3000) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const icons = { success: "✅", warning: "⚠️", error: "❌", info: "ℹ️" };
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "toastIn 0.3s reverse";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function animateNumber(el, start, end, duration = 1500) {
  const startTime = performance.now();
  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * eased);
    el.textContent = current.toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function fillProgressBar(barEl, percent, delay = 0) {
  setTimeout(() => {
    barEl.style.width = Math.min(percent, 100) + "%";
  }, delay);
}

function getImpactLevel(score) {
  if (score < 33)
    return { level: "Low", color: "good", emoji: "🌿", class: "impact-low" };
  if (score < 66)
    return {
      level: "Medium",
      color: "warn",
      emoji: "⚡",
      class: "impact-medium",
    };
  return { level: "High", color: "danger", emoji: "🔥", class: "impact-high" };
}

let MaterialDB = window.ECOFIT_MATERIALS;

function loadMaterialsFromPage() {
  MaterialDB = window.ECOFIT_MATERIALS || MaterialDB;
}

/** When served over http(s), overlays data from materials.json in the same folder. file:// often cannot fetch; embedded data remains. */
async function tryLoadMaterialsFromJson() {
  try {
    const res = await fetch(new URL("materials.json", window.location.href), {
      cache: "no-store",
    });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || typeof data !== "object" || Array.isArray(data)) return;
    if (Object.keys(data).length === 0) return;
    window.ECOFIT_MATERIALS = data;
    MaterialDB = data;
  } catch (_) {
    /* keep embedded library */
  }
}

const countryModifiers = {
  Bangladesh: 1.3,
  China: 1.1,
  India: 1.05,
  Vietnam: 1.2,
  Portugal: 0.85,
  Germany: 0.8,
  USA: 0.9,
  Italy: 0.88,
  Japan: 0.82,
  UK: 0.85,
  Local: 0.7,
  Unknown: 1.15,
};

const certifications = {
  GOTS: { name: "GOTS Certified", discount: 0.2, color: "#3a8c5c" },
  "Fair-Trade": { name: "Fair Trade", discount: 0.15, color: "#5ab87a" },
  "B-Corp": { name: "B Corp", discount: 0.1, color: "#4fb492" },
  "Oeko-Tex": { name: "OEKO-TEX®", discount: 0.12, color: "#6aad8c" },
  bluesign: { name: "bluesign®", discount: 0.18, color: "#2e9a79" },
  None: { name: "No Certification", discount: 0, color: "#c05c5c" },
};

const WardrobeDB = {
  key: "ecofit_wardrobe",
  _cache: null,

  getAll() {
    if (this._cache !== null) return this._cache;
    try {
      this._cache = JSON.parse(localStorage.getItem(this.key)) || [];
    } catch {
      this._cache = [];
    }
    return this._cache;
  },

  _setCache(items) {
    this._cache = items;
    try {
      localStorage.setItem(this.key, JSON.stringify(items));
    } catch (_) {}
  },

  async hydrate() {
    this._cache = null;
    this._cache = this.getAll();
  },

  async add(item) {
    const items = [...this.getAll()];
    const payload = { ...item };
    delete payload.id;
    delete payload.dateAdded;
    payload.id = Date.now() + Math.floor(Math.random() * 1000);
    payload.dateAdded = new Date().toISOString();
    items.push(payload);
    this._setCache(items);
    return payload;
  },

  async remove(id) {
    const items = this.getAll().filter((i) => String(i.id) !== String(id));
    this._setCache(items);
  },

  async clear() {
    this._setCache([]);
    localStorage.removeItem(this.key);
  },

  async addMany(newItems) {
    const items = [...this.getAll()];
    newItems.forEach((row) => {
      const copy = {
        ...row,
        id: Date.now() + Math.random(),
        dateAdded: new Date().toISOString(),
      };
      items.push(copy);
    });
    this._setCache(items);
    return items;
  },

  getStats() {
    const items = this.getAll();
    if (!items.length) return { total: 0, avgScore: 0, topMaterial: "None" };
    const avgScore = Math.round(
      items.reduce((s, i) => s + i.impactScore, 0) / items.length,
    );
    const materialCount = {};
    items.forEach((i) => {
      materialCount[i.material] = (materialCount[i.material] || 0) + 1;
    });
    const topMaterial =
      Object.entries(materialCount).sort((a, b) => b[1] - a[1])[0]?.[0] ||
      "None";
    return { total: items.length, avgScore, topMaterial };
  },
};

window.EcoFit = {
  showToast,
  animateNumber,
  fillProgressBar,
  getImpactLevel,
  WardrobeDB,
  MaterialDB,
  countryModifiers,
  certifications,
  ready: null,
};

window.EcoFit.ready = (async () => {
  try {
    await tryLoadMaterialsFromJson();
  } catch (e) {
    console.warn("EcoFit: materials.json", e);
  }
  try {
    loadMaterialsFromPage();
  } catch (e) {
    console.warn("EcoFit: loadMaterialsFromPage", e);
  }
  try {
    await WardrobeDB.hydrate();
  } catch (e) {
    console.warn("EcoFit: wardrobe hydrate", e);
  }
  try {
    window.EcoFit.MaterialDB = MaterialDB;
    window.dispatchEvent(new CustomEvent("ecofit-ready"));
  } catch (e) {
    console.warn("EcoFit: finish init", e);
  }
})();

try {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    });
  }
} catch (e) {
  console.warn("EcoFit navbar", e);
}

try {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("active");
    });
  }
} catch (e) {
  console.warn("EcoFit hamburger", e);
}

try {
  const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -40px 0px" };
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document
    .querySelectorAll(".fade-up")
    .forEach((el) => fadeObserver.observe(el));
} catch (e) {
  document
    .querySelectorAll(".fade-up")
    .forEach((el) => el.classList.add("visible"));
}

try {
  let page = (window.location.pathname || "").replace(/\\/g, "/");
  page = page.split("/").pop() || "index.html";
  if (!page.includes(".")) page = "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const name = href.split("/").pop().split("?")[0];
    if (name && name === page) link.classList.add("active");
  });
} catch (e) {
  console.warn("EcoFit nav active", e);
}
