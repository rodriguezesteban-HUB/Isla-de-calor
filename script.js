// ============================================================
// FUENTES DE DATOS (Extraídas de milan_verde.ipynb y CSVs)
// ============================================================

const mqHabData = [17.2, 17.2, 17.2, 17.2, 17.4, 17.7, 17.7, 17.6, 17.6, 17.9, 18.4, 18.9, 18.8];
const mqTotalData = [21.78, 22.30, 22.47, 22.92, 23.57, 24.16, 24.42, 24.85, 25.02, 25.11, 25.19, 25.62, 25.69];
const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

const consumoRaw = [
  {anno:2000,tipo:'elec',val:1130.2},{anno:2001,tipo:'elec',val:1143.9},{anno:2002,tipo:'elec',val:1195.5},{anno:2003,tipo:'elec',val:1222.8},{anno:2004,tipo:'elec',val:1228.6},{anno:2005,tipo:'elec',val:1225.0},{anno:2006,tipo:'elec',val:1219.7},{anno:2007,tipo:'elec',val:1197.0},{anno:2008,tipo:'elec',val:1203.0},{anno:2009,tipo:'elec',val:1202.9},{anno:2010,tipo:'elec',val:1200.7},{anno:2011,tipo:'elec',val:1196.1},
  {anno:2000,tipo:'gas',val:509},{anno:2001,tipo:'gas',val:500.7},{anno:2002,tipo:'gas',val:504.2},{anno:2003,tipo:'gas',val:480.2},{anno:2004,tipo:'gas',val:442.4},{anno:2005,tipo:'gas',val:434.5},{anno:2006,tipo:'gas',val:431.3},{anno:2007,tipo:'gas',val:381.1},{anno:2008,tipo:'gas',val:384.9},{anno:2009,tipo:'gas',val:389.6},{anno:2010,tipo:'gas',val:406.2},{anno:2011,tipo:'gas',val:377.9},
  {anno:2000,tipo:'agua',val:92.1},{anno:2001,tipo:'agua',val:91.3},{anno:2002,tipo:'agua',val:90.4},{anno:2003,tipo:'agua',val:87.3},{anno:2004,tipo:'agua',val:80.4},{anno:2005,tipo:'agua',val:81.3},{anno:2006,tipo:'agua',val:82.2},{anno:2007,tipo:'agua',val:81.6},{anno:2008,tipo:'agua',val:84.5},{anno:2009,tipo:'agua',val:85.8},{anno:2010,tipo:'agua',val:83.2},{anno:2011,tipo:'agua',val:83.1}
];

const climaData = {
  zonas: ['Milano Bicocca', 'Milano Bocconi', 'Milano Bovisa', 'Milano Centro', "Milano Citta' Studi", 'Milano San Siro', 'Milano Sud'],
  zonasShort: ['Bicocca', 'Bocconi', 'Bovisa', 'Centro', 'Città Studi', 'San Siro', 'Sur'],
  tempMedia: [15.4, 15.7, 15.4, 15.8, 15.4, 15.0, 15.2],
  diasCalor: [56.3, 52.3, 55.2, 52.8, 45.8, 48.5, 50.0],
  nocheTrop: [55.5, 63.3, 56.3, 62.3, 58.5, 54.5, 56.8],
  precip: [1017.9, 906.4, 1139.0, 1016.9, 1056.8, 734.0, 873.5]
};

// Coordenadas reales de zonas sin gas metano (Muestreo representativo)
const metanoGeo = [
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
  labels: ['T. Media', 'T. Máxima', 'T. Mínima', 'Días Calor', 'Noches Trop.', 'Días Hielo', 'Humedad', 'Precipitación', 'Días Lluvia'],
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
// LÓGICA DE LA APLICACIÓN
// ============================================================

let initialized = {};

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
    case 'verde': initVerde(); break;
    case 'consumo': initConsumo(); break;
    case 'clima': initClima(); break;
    case 'techos': initTechos(); break;
    case 'metano': initMetano(); break;
    case 'cruzado': initCruzado(); break;
  }
}

// ── VERDE ──────────────────────────────────────────────────
function initVerde() {
  const ctx = document.getElementById('chartVerdeDual');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Total m² verde (Millones)',
          data: mqTotalData,
          backgroundColor: 'rgba(34, 197, 94, 0.6)',
          borderRadius: 4,
          yAxisID: 'y'
        },
        {
          label: 'm² / habitante',
          data: mqHabData,
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
        y: { position: 'left', title: { display: true, text: 'Millones m²' } },
        y1: { position: 'right', title: { display: true, text: 'm²/hab' }, min: 17 }
      }
    }
  });
}

// ── CONSUMO ────────────────────────────────────────────────
function initConsumo() {
  const getVals = (tipo) => consumoRaw.filter(d => d.tipo === tipo).map(d => d.val);
  const yearsConsumo = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
  const ctx = document.getElementById('chartConsumo');
  window.activeConsumoChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: yearsConsumo,
      datasets: [
        { label: 'Electricidad (kWh)', data: getVals('elec'), borderColor: '#fbbf24', tension: 0.4 },
        { label: 'Gas Metano (m³)', data: getVals('gas'), borderColor: '#f87171', tension: 0.4 },
        { label: 'Agua (m³)', data: getVals('agua'), borderColor: '#60a5fa', tension: 0.4 }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function filterConsumo(tipo) {
  const ds = window.activeConsumoChart.data.datasets;
  ds[0].hidden = tipo !== 'all' && tipo !== 'elec';
  ds[1].hidden = tipo !== 'all' && tipo !== 'gas';
  ds[2].hidden = tipo !== 'all' && tipo !== 'agua';
  window.activeConsumoChart.update();
}

// ── CLIMA ──────────────────────────────────────────────────
function initClima() {
  new Chart(document.getElementById('chartTemp'), {
    type: 'bar',
    data: {
      labels: climaData.zonasShort,
      datasets: [{ label: 'Temp. Media (°C)', data: climaData.tempMedia, backgroundColor: '#fbbf24' }]
    },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 14 } } }
  });
  renderHeatmap(null);
}

function renderHeatmap(idx) {
  const container = document.getElementById('heatmapClima');
  const metrics = [
    {l: 'T. Media', k: 'tempMedia'}, {l: 'D. Calor', k: 'diasCalor'}, {l: 'N. Trop.', k: 'nocheTrop'}, {l: 'Precip.', k: 'precip'}
  ];
  let h = `<div class="heatmap"><div class="heatmap-header">Métrica</div>${climaData.zonasShort.map(z => `<div class="heatmap-header">${z}</div>`).join('')}`;
  metrics.forEach(m => {
    h += `<div class="heatmap-label">${m.l}</div>`;
    const vs = climaData[m.k], max = Math.max(...vs), min = Math.min(...vs);
    vs.forEach(v => {
      const r = (v - min) / (max - min);
      h += `<div class="heatmap-cell" style="background:rgba(74,222,128,${0.1+r*0.8})">${v.toFixed(0)}</div>`;
    });
  });
  container.innerHTML = h + '</div>';
}

function filterZona(z, b) {
  document.querySelectorAll('#sec-clima .filter-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  renderHeatmap(z === 'all' ? null : climaData.zonas.indexOf(z));
}

// ── TECHOS ─────────────────────────────────────────────────
function initTechos() {
  new Chart(document.getElementById('chartTechoTipo'), {
    type: 'doughnut',
    data: {
      labels: ['Residencial', 'Industrial', 'Servicios', 'Otros'],
      datasets: [{ data: [3910, 252, 142, 92], backgroundColor: GREEN_PALETTE }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function filterTechos(t, b) {
  document.querySelectorAll('#sec-techos .filter-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  const d = { all: [4396, 420, 24.5], Residencial: [3910, 320, 22.4], Industrial: [252, 890, 18.7], Servicios: [142, 540, 31.2] }[t] || [4396, 420, 24.5];
  ['techoTotal', 'techoArea', 'techoVol'].forEach((id, i) => document.getElementById(id).innerText = d[i]);
}

// ── METANO ─────────────────────────────────────────────────
function initMetano() {
  // Gráfico de dispersión por municipio
  new Chart(document.getElementById('chartMetanoGeo'), {
    type: 'scatter',
    data: {
      datasets: Array.from({length:9}, (_, i) => ({
        label: `Mun. ${i+1}`,
        data: metanoGeo.filter(p => p.m === i+1),
        backgroundColor: GREEN_PALETTE[i % 9]
      }))
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // Gráfico de densidad (Heatmap espacial simplificado)
  const gridCtx = document.getElementById('chartMetanoDensity');
  const binsX = 15, binsY = 15;
  const minX = 9.04, maxX = 9.28, minY = 45.39, maxY = 45.54;
  const grid = Array.from({length: binsY}, () => Array(binsX).fill(0));
  
  metanoGeo.forEach(p => {
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
        label: 'Densidad',
        data: densityData.map(d => ({x: d.x, y: d.y, r: d.v * 5})),
        backgroundColor: 'rgba(74, 222, 128, 0.5)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { x: { display: false }, y: { display: false } }
    }
  });

  new Chart(document.getElementById('chartMetanoMunicipio'), {
    type: 'bar',
    data: {
      labels: ['Parco Sud', 'Abbazie', 'Niguarda', 'Baggio', 'Forze Armate', 'Maggiore'],
      datasets: [{ label: 'Zonas', data: [44, 37, 30, 25, 20, 19], backgroundColor: '#60a5fa' }]
    },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false }
  });

  new Chart(document.getElementById('chartMetanoRank'), {
    type: 'doughnut',
    data: {
      labels: ['Mun. 7', 'Mun. 5', 'Mun. 4', 'Mun. 2', 'Otros'],
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
        legend: { position: 'bottom', labels: { boxWidth: 12, padding: 15 } }
      }
    }
  });
}

// ── ANÁLISIS CRUZADO ───────────────────────────────────────
function initCruzado() {
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

window.addEventListener('load', () => showSection('verde'));
