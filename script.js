// ============================================================
// DATA SOURCES (Extracted from milan_verde.ipynb & CSVs)
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
  diasCalura: [56.3, 52.3, 55.2, 52.8, 45.8, 48.5, 50.0],
  nocheTrop: [55.5, 63.3, 56.3, 62.3, 58.5, 54.5, 56.8],
  precip: [1017.9, 906.4, 1139.0, 1016.9, 1056.8, 734.0, 873.5]
};

const metanoGeo = [
  {m:7,x:9.0438,y:45.4657},{m:2,x:9.2579,y:45.5183},{m:3,x:9.2643,y:45.5097},{m:8,x:9.0989,y:45.5114},{m:3,x:9.2636,y:45.4699},
  {m:5,x:9.1698,y:45.4172},{m:5,x:9.2081,y:45.4082},{m:7,x:9.0955,y:45.4652},{m:9,x:9.1849,y:45.5196},{m:7,x:9.0787,y:45.4711},
  {m:7,x:9.0780,y:45.4449},{m:3,x:9.2551,y:45.5078},{m:8,x:9.1008,y:45.5085},{m:8,x:9.1009,y:45.5090},{m:8,x:9.0994,y:45.5121},
  {m:8,x:9.0992,y:45.5122},{m:8,x:9.0997,y:45.5120},{m:7,x:9.1036,y:45.4531},{m:6,x:9.1335,y:45.4349},{m:6,x:9.1074,y:45.4538},
  {m:9,x:9.1790,y:45.5297},{m:9,x:9.1794,y:45.5293},{m:7,x:9.0602,y:45.4359},{m:6,x:9.1126,y:45.4463},{m:5,x:9.2062,y:45.3937},
  {m:7,x:9.0754,y:45.4908},{m:8,x:9.0978,y:45.4914},{m:8,x:9.0978,y:45.4928},{m:7,x:9.0957,y:45.4653},{m:8,x:9.1040,y:45.5064},
  {m:9,x:9.1630,y:45.5303},{m:9,x:9.1643,y:45.5298},{m:9,x:9.2004,y:45.5287},{m:3,x:9.2574,y:45.5117},{m:2,x:9.2601,y:45.5125}
];

const correlationMatrix = {
  labels: ['T. Media', 'T. Máx', 'T. Mín', 'D. Calor', 'N. Trop.', 'D. Hielo', 'Humedad', 'Precip.', 'D. Lluvia'],
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

const GREEN_PALETTE = ['#4ade80','#22c55e','#16a34a','#a3e635','#84cc16','#65a30d','#4d7c0f','#365314'];

// ============================================================
// APP LOGIC
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
  
  const chaptersNav = document.querySelector('.chapters');
  window.scrollTo({ top: chaptersNav.offsetTop, behavior: 'smooth' });
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
          pointBackgroundColor: '#fff',
          yAxisID: 'y1',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { position: 'left', title: { display: true, text: 'Millones m²' }, grid: { color: '#1e2e1e' } },
        y1: { position: 'right', title: { display: true, text: 'm²/hab' }, grid: { display: false }, min: 17 }
      }
    }
  });
}

// ── CONSUMO ────────────────────────────────────────────────
function initConsumo() {
  const getVals = (tipo) => consumoRaw.filter(d => d.tipo === tipo).map(d => d.val);
  const yearsConsumo = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];

  const ctx = document.getElementById('chartConsumo');
  const chart = new Chart(ctx, {
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
  window.activeConsumoChart = chart;
}

function filterConsumo(tipo) {
  const ds = window.activeConsumoChart.data.datasets;
  ds[0].hidden = tipo !== 'all' && tipo !== 'elec';
  ds[1].hidden = tipo !== 'all' && tipo !== 'gas';
  ds[2].hidden = tipo !== 'all' && tipo !== 'agua';
  window.activeConsumoChart.update();
  
  document.querySelectorAll('#sec-consumo .filter-btn').forEach(b => {
    b.classList.toggle('active', b.innerText.toLowerCase().includes(tipo) || (tipo==='all' && b.innerText==='Todos'));
  });
}

// ── CLIMA ──────────────────────────────────────────────────
function initClima() {
  new Chart(document.getElementById('chartTemp'), {
    type: 'bar',
    data: {
      labels: climaData.zonasShort,
      datasets: [{ label: 'Temp. Media (°C)', data: climaData.tempMedia, backgroundColor: '#fbbf24', borderRadius: 8 }]
    },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 14 } } }
  });
  renderHeatmap(null);
}

function renderHeatmap(zonaIdx) {
  const container = document.getElementById('heatmapClima');
  const metrics = [
    {label: 'T. Media', key: 'tempMedia'},
    {label: 'Días Calor', key: 'diasCalura'},
    {label: 'Noches Trop.', key: 'nocheTrop'},
    {label: 'Precip.', key: 'precip'}
  ];
  let html = `<div class="heatmap"><div class="heatmap-header">Métrica</div>${climaData.zonasShort.map((z, i) => `<div class="heatmap-header" style="${zonaIdx===i?'color:var(--green1)':''}">${z}</div>`).join('')}`;
  metrics.forEach(m => {
    html += `<div class="heatmap-label">${m.label}</div>`;
    const vals = climaData[m.key];
    const min = Math.min(...vals), max = Math.max(...vals);
    vals.forEach((v, i) => {
      const ratio = (v - min) / (max - min);
      html += `<div class="heatmap-cell" style="background:rgba(74,222,128,${0.1 + ratio*0.8}); ${zonaIdx===i?'border:1px solid #fff':''}">${v.toFixed(1)}</div>`;
    });
  });
  container.innerHTML = html + '</div>';
}

function filterZona(zona, btn) {
  document.querySelectorAll('#sec-clima .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderHeatmap(zona === 'all' ? null : climaData.zonas.indexOf(zona));
}

// ── TECHOS ─────────────────────────────────────────────────
function initTechos() {
  const counts = [3910, 252, 142, 44, 23, 17];
  new Chart(document.getElementById('chartTechoTipo'), {
    type: 'doughnut',
    data: {
      labels: ['Residencial', 'Industrial', 'Servicios', 'Escuelas', 'Hospitales', 'Otros'],
      datasets: [{ data: counts, backgroundColor: GREEN_PALETTE, borderWidth: 0 }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function filterTechos(tipo, btn) {
  document.querySelectorAll('#sec-techos .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const dataMap = { all: [4396, 420, 24.5], Residencial: [3910, 320, 22.4], Industrial: [252, 890, 18.7], Servicios: [142, 540, 31.2] };
  const vals = dataMap[tipo] || dataMap.all;
  document.getElementById('techoTotal').innerText = vals[0].toLocaleString();
  document.getElementById('techoArea').innerText = vals[1];
  document.getElementById('techoVol').innerText = vals[2];
}

// ── METANO ─────────────────────────────────────────────────
function initMetano() {
  const MUN_COLORS = ['#4ade80','#22c55e','#16a34a','#a3e635','#facc15','#fbbf24','#f87171','#60a5fa','#c084fc'];
  new Chart(document.getElementById('chartMetanoGeo'), {
    type: 'scatter',
    data: {
      datasets: Array.from({length: 9}, (_, i) => ({
        label: `Mun. ${i+1}`,
        data: metanoGeo.filter(p => p.m === i+1),
        backgroundColor: MUN_COLORS[i],
        pointRadius: 6
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: 'Longitud' }, grid: { color: '#1e2e1e' } },
        y: { title: { display: true, text: 'Latitud' }, grid: { color: '#1e2e1e' } }
      }
    }
  });

  const nilNames = ['Parco Agr. Sud', 'Abbazie', 'Niguarda', 'Baggio', 'Forze Armate', 'Maggiore', 'Centro'];
  const nilVals = [44, 37, 30, 25, 20, 19, 13];
  new Chart(document.getElementById('chartMetanoMunicipio'), {
    type: 'bar',
    data: {
      labels: nilNames,
      datasets: [{ label: 'Zonas', data: nilVals, backgroundColor: 'rgba(96,165,250,0.6)', borderRadius: 5 }]
    },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false }
  });
}

// ── CRUZADO ────────────────────────────────────────────────
function initCruzado() {
  const grid = document.getElementById('correlationMatrix');
  const n = correlationMatrix.labels.length;
  grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  
  let html = '';
  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      const val = correlationMatrix.values[i][j];
      const isVisible = j <= i;
      if (!isVisible) {
        html += '<div class="corr-cell empty"></div>';
        continue;
      }
      const intensity = Math.abs(val);
      const color = val > 0 ? `rgba(34,197,94,${intensity})` : `rgba(248,113,113,${intensity})`;
      html += `<div class="corr-cell" style="background:${color}" title="${correlationMatrix.labels[i]} vs ${correlationMatrix.labels[j]}: ${val}">${val.toFixed(2)}</div>`;
    }
  }
  grid.innerHTML = html;

  const labelsGrid = document.getElementById('correlationLabels');
  labelsGrid.innerHTML = correlationMatrix.labels.map(l => `<div class="corr-label">${l}</div>`).join('');
}

window.addEventListener('load', () => showSection('verde'));
