// ============================================================
// DATA SOURCES (Extracted from milan_verde.ipynb and CSVs)
// ============================================================

const sqmHabData = [17.2, 17.2, 17.2, 17.2, 17.4, 17.7, 17.7, 17.6, 17.6, 17.9, 18.4, 18.9, 18.8];
const sqmTotalData = [21.78, 22.30, 22.47, 22.92, 23.57, 24.16, 24.42, 24.85, 25.02, 25.11, 25.19, 25.62, 25.69];
const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

const consumptionRaw = [
  {year:2000,type:'elec',val:1130.2},{year:2001,type:'elec',val:1143.9},{year:2002,type:'elec',val:1195.5},{year:2003,type:'elec',val:1222.8},{year:2004,type:'elec',val:1228.6},{year:2005,type:'elec',val:1225.0},{year:2006,type:'elec',val:1219.7},{year:2007,type:'elec',val:1197.0},{year:2008,type:'elec',val:1203.0},{year:2009,type:'elec',val:1202.9},{year:2010,type:'elec',val:1200.7},{year:2011,type:'elec',val:1196.1},
  {year:2000,type:'gas',val:509},{year:2001,type:'gas',val:500.7},{year:2002,type:'gas',val:504.2},{year:2003,type:'gas',val:480.2},{year:2004,type:'gas',val:442.4},{year:2005,type:'gas',val:434.5},{year:2006,type:'gas',val:431.3},{year:2007,type:'gas',val:381.1},{year:2008,type:'gas',val:384.9},{year:2009,type:'gas',val:389.6},{year:2010,type:'gas',val:406.2},{year:2011,type:'gas',val:377.9},
  {year:2000,type:'water',val:92.1},{year:2001,type:'water',val:91.3},{year:2002,type:'water',val:90.4},{year:2003,type:'water',val:87.3},{year:2004,type:'water',val:80.4},{year:2005,type:'water',val:81.3},{year:2006,type:'water',val:82.2},{year:2007,type:'water',val:81.6},{year:2008,type:'water',val:84.5},{year:2009,type:'water',val:85.8},{year:2010,type:'water',val:83.2},{year:2011,type:'water',val:83.1}
];

const climateData = {
  zones: ['Milano Bicocca', 'Milano Bocconi', 'Milano Bovisa', 'Milano Centro', "Milano Citta' Studi", 'Milano San Siro', 'Milano Sud'],
  zonesShort: ['Bicocca', 'Bocconi', 'Bovisa', 'Center', 'Città Studi', 'San Siro', 'South'],
  avgTemp: [15.4, 15.7, 15.4, 15.8, 15.4, 15.0, 15.2],
  heatDays: [56.3, 52.3, 55.2, 52.8, 45.8, 48.5, 50.0],
  tropicalNights: [55.5, 63.3, 56.3, 62.3, 58.5, 54.5, 56.8],
  precip: [1017.9, 906.4, 1139.0, 1016.9, 1056.8, 734.0, 873.5]
};

const methaneGeo = [
  {m:7,x:9.0438,y:45.4657},{m:2,x:9.2579,y:45.5183},{m:3,x:9.2643,y:45.5097},{m:8,x:9.0989,y:45.5114},{m:3,x:9.2636,y:45.4699},
  {m:5,x:9.1698,y:45.4172},{m:5,x:9.2081,y:45.4082},{m:7,x:9.0955,y:45.4652},{m:9,x:9.1849,y:45.5196},{m:7,x:9.0787,y:45.4711},
  {m:7,x:9.0780,y:45.4449},{m:3,x:9.2551,y:45.5078},{m:8,x:9.1008,y:45.5085},{m:8,x:9.1009,y:45.5090},{m:8,x:9.0994,y:45.5121},
  {m:8,x:9.0992,y:45.5122},{m:8,x:9.0997,y:45.5120},{m:7,x:9.1036,y:45.4531},{m:6,x:9.1335,y:45.4349},{m:6,x:9.1074,y:45.4538},
  {m:9,x:9.1790,y:45.5297},{m:9,x:9.1794,y:45.5293},{m:7,x:9.0602,y:45.4359},{m:6,x:9.1126,y:45.4463},{m:5,x:9.2062,y:45.3937},
  {m:7,x:9.0754,y:45.4908},{m:8,x:9.0978,y:45.4914},{m:8,x:9.0978,y:45.4928},{m:7,x:9.0957,y:45.4653},{m:8,x:9.1040,y:45.5064},
  {m:9,x:9.1630,y:45.5303},{m:9,x:9.1643,y:45.5298},{m:5,x:9.2034,y:45.4027},{m:5,x:9.2012,y:45.4054},{m:5,x:9.2023,y:45.4021},
  {m:4,x:9.2522,y:45.4248},{m:4,x:9.2494,y:45.4234},{m:5,x:9.2241,y:45.4101},{m:5,x:9.2330,y:45.4146},{m:5,x:9.2367,y:45.4191},
  {m:6,x:9.1597,y:45.4243},{m:6,x:9.1550,y:45.4192},{m:5,x:9.1645,y:45.4115},{m:5,x:9.1803,y:45.4216},{m:6,x:9.1344,y:45.4356}
];

const correlationMatrix = {
  labels: ['Avg. Temp', 'Max Temp', 'Min Temp', 'Heat Days', 'Trop. Nights', 'Ice Days', 'Humidity', 'Precipitation', 'Rain Days'],
  values: [
    [1.00, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.37, 1.00, 0, 0, 0, 0, 0, 0, 0],
    [0.83, 0.56, 1.00, 0, 0, 0, 0, 0, 0],
    [0.37, 0.57, 0.56, 1.00, 0, 0, 0, 0, 0],
    [0.88, -0.09, 0.60, 0.01, 1.00, 0, 0, 0, 0],
    [-0.89, -0.43, -0.82, -0.16, -0.78, 1.00, 0, 0, 0],
    [-0.76, -0.34, -0.87, -0.14, -0.70, 0.81, 1.00, 0, 0],
    [0.51, 0.86, 0.57, 0.41, 0.16, -0.46, -0.49, 1.00, 0],
    [0.59, 0.86, 0.49, 0.35, 0.23, -0.58, -0.38, 0.89, 1.00]
  ]
};

const GREEN_PALETTE = ['#4ade80','#22c55e','#16a34a','#a3e635','#facc15','#fbbf24','#f87171','#60a5fa','#c084fc'];

// ============================================================
// APPLICATION LOGIC
// ============================================================

let initialized = {};
let milanGeoData = null;

async function loadMilanGeoJSON() {
  try {
    const response = await fetch('milan_districts_simple.geojson');
    milanGeoData = await response.json();
    console.log("GeoJSON loaded successfully");
    
    // Compute centroids for nearest fallback
    milanGeoData.features.forEach(f => {
      let sumX = 0, sumY = 0, count = 0;
      const coords = f.geometry.coordinates;
      const rings = f.geometry.type === 'Polygon' ? [coords] : coords;
      rings.forEach(poly => {
        const ring = Array.isArray(poly[0][0]) ? poly[0] : poly;
        ring.forEach(p => { sumX += p[0]; sumY += p[1]; count++; });
      });
      f.centroid = [sumX / count, sumY / count];
    });

    renderMapBackground();
  } catch (err) {
    console.error("Error loading GeoJSON", err);
  }
}

function getNeighborhood(x, y) {
  if (!milanGeoData) return null;
  let bestDist = Infinity;
  let nearestName = "Milan District";

  for (const feature of milanGeoData.features) {
    // Exact match
    const coords = feature.geometry.coordinates;
    const rings = feature.geometry.type === 'Polygon' ? [coords] : coords;
    let foundInside = false;
    for (const poly of rings) {
      const ring = Array.isArray(poly[0][0]) ? poly[0] : poly;
      let inside = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        let xi = ring[i][0], yi = ring[i][1];
        let xj = ring[j][0], yj = ring[j][1];
        if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside;
      }
      if (inside) foundInside = true;
    }
    if (foundInside) return feature.properties.NIL;

    // Calc distance to centroid as fallback
    if (feature.centroid) {
      const dx = x - feature.centroid[0];
      const dy = y - feature.centroid[1];
      const dist = dx*dx + dy*dy;
      if (dist < bestDist) {
        bestDist = dist;
        nearestName = feature.properties.NIL;
      }
    }
  }
  return nearestName;
}

function renderMapBackground() {
  if (!milanGeoData) return;
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  const minX = 9.02, maxX = 9.30, minY = 45.38, maxY = 45.56;
  const project = (lon, lat) => ({
    x: (lon - minX) / (maxX - minX) * canvas.width,
    y: canvas.height - (lat - minY) / (maxY - minY) * canvas.height
  });
  ctx.fillStyle = '#0a1a0a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(74, 222, 128, 0.4)';
  ctx.lineWidth = 1.5;
  milanGeoData.features.forEach(f => {
    const coords = f.geometry.coordinates;
    const rings = f.geometry.type === 'Polygon' ? [coords] : coords;
    rings.forEach(poly => {
      const ring = Array.isArray(poly[0][0]) ? poly[0] : poly;
      ctx.beginPath();
      ring.forEach((p, idx) => {
        const pt = project(p[0], p[1]);
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.closePath();
      ctx.fillStyle = 'rgba(34, 197, 94, 0.05)';
      ctx.fill();
      ctx.stroke();
    });
  });
  const dataUrl = canvas.toDataURL();
  document.querySelectorAll('.map-overlay').forEach(el => {
    el.style.backgroundImage = `url(${dataUrl})`;
    el.style.backgroundSize = '100% 100%';
  });
}

function showView(id) {
  document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  
  const view = document.getElementById('view-' + id);
  if (view) view.classList.add('active');
  
  const btn = document.querySelector(`[onclick="showView('${id}')"]`);
  if (btn) btn.classList.add('active');
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.chapter-btn').forEach(b => b.classList.remove('active'));
  
  const sec = document.getElementById('sec-' + id);
  if (sec) {
    sec.classList.add('active');
    sec.classList.remove('fade-in');
    void sec.offsetWidth;
    sec.classList.add('fade-in');
  }

  const btn = document.querySelector(`[onclick="showSection('${id}')"]`);
  if (btn) btn.classList.add('active');

  if (!initialized[id]) {
    initialized[id] = true;
    initSection(id);
  }
}

function initSection(id) {
  switch(id) {
    case 'green': initGreen(); break;
    case 'consumption': initConsumption(); break;
    case 'climate': initClimate(); break;
    case 'roofs': initRoofs(); break;
    case 'methane': initMethane(); break;
    case 'cross': initCross(); break;
  }
}

// ── GREEN ──────────────────────────────────────────────────
function initGreen() {
  const ctx = document.getElementById('chartGreenDual');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Total sqm green (Millions)',
          data: sqmTotalData,
          backgroundColor: 'rgba(34, 197, 94, 0.6)',
          borderRadius: 4,
          yAxisID: 'y'
        },
        {
          label: 'sqm / inhabitant',
          data: sqmHabData,
          type: 'line',
          borderColor: '#a3e635',
          borderWidth: 3,
          pointRadius: 5,
          yAxisID: 'y1',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { position: 'left', title: { display: true, text: 'Million sqm' } },
        y1: { position: 'right', title: { display: true, text: 'sqm/hab' }, min: 17 }
      }
    }
  });
}

// ── CONSUMPTION ────────────────────────────────────────────
function initConsumption() {
  const getVals = (type) => consumptionRaw.filter(d => d.type === type).map(d => d.val);
  const yearsConsumption = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
  const ctx = document.getElementById('chartConsumption');
  window.activeConsumptionChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: yearsConsumption,
      datasets: [
        { label: 'Electricity (kWh)', data: getVals('elec'), borderColor: '#fbbf24', tension: 0.4 },
        { label: 'Methane Gas (m³)', data: getVals('gas'), borderColor: '#f87171', tension: 0.4 },
        { label: 'Water (m³)', data: getVals('water'), borderColor: '#60a5fa', tension: 0.4 }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function filterConsumption(type) {
  const ds = window.activeConsumptionChart.data.datasets;
  ds[0].hidden = type !== 'all' && type !== 'elec';
  ds[1].hidden = type !== 'all' && type !== 'gas';
  ds[2].hidden = type !== 'all' && type !== 'water';
  window.activeConsumptionChart.update();
}

// ── CLIMATE ────────────────────────────────────────────────
function initClimate() {
  new Chart(document.getElementById('chartTemp'), {
    type: 'bar',
    data: {
      labels: climateData.zonesShort,
      datasets: [{ label: 'Avg. Temp (°C)', data: climateData.avgTemp, backgroundColor: '#fbbf24' }]
    },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 14 } } }
  });
  renderHeatmap(null);
}

function renderHeatmap(idx) {
  const container = document.getElementById('heatmapClimate');
  const metrics = [
    {l: 'Avg. Temp', k: 'avgTemp'}, {l: 'Heat Days', k: 'heatDays'}, {l: 'Trop. Nights', k: 'tropicalNights'}, {l: 'Precip.', k: 'precip'}
  ];
  let h = `<div class="heatmap"><div class="heatmap-header">Metric</div>${climateData.zonesShort.map(z => `<div class="heatmap-header">${z}</div>`).join('')}`;
  metrics.forEach(m => {
    h += `<div class="heatmap-label">${m.l}</div>`;
    const vs = climateData[m.k], max = Math.max(...vs), min = Math.min(...vs);
    vs.forEach(v => {
      const r = (v - min) / (max - min);
      h += `<div class="heatmap-cell" style="background:rgba(74,222,128,${0.1+r*0.8})">${v.toFixed(0)}</div>`;
    });
  });
  container.innerHTML = h + '</div>';
}

// ── ROOFS ──────────────────────────────────────────────────
function initRoofs() {
  new Chart(document.getElementById('chartRoofType'), {
    type: 'doughnut',
    data: {
      labels: ['Residential', 'Industrial', 'Services', 'Others'],
      datasets: [{ data: [3910, 252, 142, 92], backgroundColor: GREEN_PALETTE }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function filterRoofs(t, b) {
  document.querySelectorAll('#sec-roofs .filter-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  const d = { all: [4396, 420, 24.5], Residential: [3910, 320, 22.4], Industrial: [252, 890, 18.7], Services: [142, 540, 31.2] }[t] || [4396, 420, 24.5];
  ['roofTotal', 'roofArea', 'roofVol'].forEach((id, i) => document.getElementById(id).innerText = d[i]);
}

// ── METHANE ────────────────────────────────────────────────
function initMethane() {
  // Scatter plot by municipality
  new Chart(document.getElementById('chartMethaneGeo'), {
    type: 'scatter',
    data: {
      datasets: Array.from({length:9}, (_, i) => ({
        label: `Mun. ${i+1}`,
        data: methaneGeo.filter(p => p.m === i+1),
        backgroundColor: GREEN_PALETTE[i % 9],
        pointRadius: 6,
        pointHoverRadius: 8
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: () => "",
            label: (ctx) => {
              const p = ctx.raw;
              const nh = getNeighborhood(p.x, p.y);
              return nh ? `Neighborhood: ${nh}` : `Coord: ${p.x}, ${p.y}`;
            }
          }
        }
      },
      scales: {
        x: { display: false, min: 9.02, max: 9.30 },
        y: { display: false, min: 45.38, max: 45.56 }
      }
    }
  });

  // Density plot (Simplified spatial heatmap)
  const gridCtx = document.getElementById('chartMethaneDensity');
  const binsX = 15, binsY = 15;
  const minX = 9.04, maxX = 9.28, minY = 45.39, maxY = 45.54;
  const grid = Array.from({length: binsY}, () => Array(binsX).fill(0));
  
  methaneGeo.forEach(p => {
    const ix = Math.floor((p.x - minX) / (maxX - minX) * binsX);
    const iy = Math.floor((p.y - minY) / (maxY - minY) * binsY);
    if (ix >= 0 && ix < binsX && iy >= 0 && iy < binsY) grid[iy][ix]++;
  });

  const densityData = [];
  for(let y=0; y<binsY; y++) {
    for(let x=0; x<binsX; x++) {
      if(grid[y][x] > 0) densityData.push({x: minX + (x/binsX)*(maxX-minX), y: minY + (y/binsY)*(maxY-minY), v: grid[y][x]});
    }
  }

  new Chart(gridCtx, {
    type: 'bubble',
    data: {
      datasets: [{
        label: 'Density',
        data: densityData.map(d => ({x: d.x, y: d.y, r: d.v * 7})),
        backgroundColor: 'rgba(74, 222, 128, 0.7)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: () => "Critical Area",
            label: (ctx) => {
              const p = ctx.raw;
              const nh = getNeighborhood(p.x, p.y);
              return nh ? `Neighborhood: ${nh}` : "Analysis Zone";
            }
          }
        }
      },
      scales: {
        x: { display: false, min: 9.02, max: 9.30 },
        y: { display: false, min: 45.38, max: 45.56 }
      }
    }
  });

  new Chart(document.getElementById('chartMethaneDistrict'), {
    type: 'bar',
    data: {
      labels: ['Parco Sud', 'Abbazie', 'Niguarda', 'Baggio', 'Forze Armate', 'Maggiore'],
      datasets: [{ 
        label: 'Zones without gas', 
        data: [44, 37, 30, 25, 20, 19], 
        backgroundColor: '#60a5fa' 
      }]
    },
    options: { 
      indexAxis: 'y', 
      responsive: true, 
      maintainAspectRatio: false,
      scales: {
        x: {
          title: { display: true, text: 'Number of decarbonized zones', color: '#6b8f6b' },
          grid: { color: 'rgba(255,255,255,0.05)' }
        },
        y: {
          title: { display: true, text: 'Neighborhood (NIL)', color: '#6b8f6b' },
          grid: { display: false }
        }
      }
    }
  });

  new Chart(document.getElementById('chartMethaneRank'), {
    type: 'doughnut',
    data: {
      labels: [
        'Mun. 7 (West - Baggio)', 
        'Mun. 5 (South - Vigentino)', 
        'Mun. 4 (Southeast)', 
        'Mun. 2 (North)', 
        'Other Districts'
      ],
      datasets: [{
        data: [153, 88, 35, 24, 66],
        backgroundColor: GREEN_PALETTE,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 12, padding: 15, color: '#6b8f6b' } },
        tooltip: {
          callbacks: {
            label: function(context) {
              return ` ${context.label}: ${context.raw} decarbonized zones`;
            }
          }
        }
      }
    }
  });
}

// ── CROSS-ANALYSIS ─────────────────────────────────────────
function initCross() {
  const matrix = document.getElementById('correlationMatrix');
  const xLabels = document.getElementById('xLabels');
  const yLabels = document.getElementById('yLabels');
  const n = correlationMatrix.labels.length;
  
  matrix.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  yLabels.innerHTML = correlationMatrix.labels.map(l => `<div>${l}</div>`).join('');
  xLabels.innerHTML = correlationMatrix.labels.map(l => `<div style="flex:1">${l}</div>`).join('');
  
  let h = '';
  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      const v = correlationMatrix.values[i][j];
      if (j > i) { h += '<div class="corr-cell empty"></div>'; continue; }
      const c = v > 0 ? `rgba(34,197,94,${Math.abs(v)})` : `rgba(248,113,113,${Math.abs(v)})`;
      h += `<div class="corr-cell" style="background:${c}" title="${v}">${v.toFixed(2)}</div>`;
    }
  }
  matrix.innerHTML = h;
}

  window.addEventListener('load', async () => {
  await loadMilanGeoJSON();
  showSection('green');
});
