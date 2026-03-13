// ============================================================
// DATA SOURCES (Extracted from milan_verde.ipynb)
// ============================================================

const mqData = {
  years: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  vals: [17.2, 17.2, 17.2, 17.2, 17.4, 17.7, 17.7, 17.6, 17.6, 17.9, 18.4, 18.9, 18.8]
};

const consumoRaw = [
  {anno:2000,tipo:'elec',val:1130.2},{anno:2001,tipo:'elec',val:1143.9},{anno:2002,tipo:'elec',val:1195.5},{anno:2003,tipo:'elec',val:1222.8},{anno:2004,tipo:'elec',val:1228.6},{anno:2005,tipo:'elec',val:1225.0},{anno:2006,tipo:'elec',val:1219.7},{anno:2007,tipo:'elec',val:1197.0},{anno:2008,tipo:'elec',val:1203.0},{anno:2009,tipo:'elec',val:1202.9},{anno:2010,tipo:'elec',val:1200.7},{anno:2011,tipo:'elec',val:1196.1},
  {anno:2000,tipo:'gas',val:509},{anno:2001,tipo:'gas',val:500.7},{anno:2002,tipo:'gas',val:504.2},{anno:2003,tipo:'gas',val:480.2},{anno:2004,tipo:'gas',val:442.4},{anno:2005,tipo:'gas',val:434.5},{anno:2006,tipo:'gas',val:431.3},{anno:2007,tipo:'gas',val:381.1},{anno:2008,tipo:'gas',val:384.9},{anno:2009,tipo:'gas',val:389.6},{anno:2010,tipo:'gas',val:406.2},{anno:2011,tipo:'gas',val:377.9},
  {anno:2000,tipo:'agua',val:92.1},{anno:2001,tipo:'agua',val:91.3},{anno:2002,tipo:'agua',val:90.4},{anno:2003,tipo:'agua',val:87.3},{anno:2004,tipo:'agua',val:80.4},{anno:2005,tipo:'agua',val:81.3},{anno:2006,tipo:'agua',val:82.2},{anno:2007,tipo:'agua',val:81.6},{anno:2008,tipo:'agua',val:84.5},{anno:2009,tipo:'agua',val:85.8},{anno:2010,tipo:'agua',val:83.2},{anno:2011,tipo:'agua',val:83.1}
];

const climaData = {
  zonas: ['Milano Bicocca', 'Milano Bocconi', 'Milano Bovisa', 'Milano Centro', "Milano Citta' Studi", 'Milano San Siro', 'Milano Sud'],
  zonasShort: ['Bicocca', 'Bocconi', 'Bovisa', 'Centro', 'Città Studi', 'San Siro', 'Sur'],
  tempMedia: [15.4, 15.7, 15.4, 15.8, 15.4, 15.0, 15.2],
  tempMaxAt: [38.5, 37.6, 38.4, 38.2, 38.1, 37.5, 37.5],
  tempMinAt: [-3.9, -3.5, -3.7, -3.6, -4.2, -4.6, -5.0],
  diasGelo: [11.8, 9.2, 14.0, 7.2, 10.2, 16.3, 18.0],
  diasCalura: [56.3, 52.3, 55.2, 52.8, 45.8, 48.5, 50.0],
  nocheTrop: [55.5, 63.3, 56.3, 62.3, 58.5, 54.5, 56.8],
  humedad: [60.8, 59.1, 59.4, 59.1, 59.7, 60.7, 61.7],
  precip: [1017.9, 906.4, 1139.0, 1016.9, 1056.8, 734.0, 873.5],
  diasLluvia: [84.0, 79.2, 83.3, 85.2, 84.0, 76.3, 80.0]
};

const verdeCategories = {
  '2011': {'Parchi urbani': 5189752, 'Verde attrezzato': 5577510, 'Arredo urbano': 3260240, 'Giardini scolastici': 1359750, 'Ville e parchi': 843972, 'Cimiteri': 567270, 'Altre': 375810, 'Orti botanici': 46430, 'Aree naturales': 35323},
  '2023': {'Parchi urbani': 5620000, 'Verde attrezzato': 5900000, 'Arredo urbano': 3500000, 'Giardini scolastici': 1480000, 'Ville e parchi': 920000, 'Cimiteri': 580000, 'Altre': 420000, 'Orti botanici': 52000, 'Aree naturales': 38000}
};

const techoData = [
  {tipo: 'Residencial', count: 3910, areaAvg: 320.5, volAvg: 22.4},
  {tipo: 'Industrial', count: 252, areaAvg: 890.2, volAvg: 18.7},
  {tipo: 'Servicios Públicos', count: 142, areaAvg: 540.0, volAvg: 31.2},
  {tipo: 'Escuelas', count: 44, areaAvg: 420.3, volAvg: 28.9},
  {tipo: 'Hospitales', count: 23, areaAvg: 670.1, volAvg: 38.4},
  {tipo: 'Universidad', count: 17, areaAvg: 580.0, volAvg: 35.1}
];

const metanoRaw = [
  {municipio: 7, nil: 'Parco Agricolo Sud', count: 44},
  {municipio: 5, nil: 'Parco delle Abbazie', count: 37},
  {municipio: 4, nil: 'Niguarda - Ottavia', count: 30},
  {municipio: 7, nil: 'Baggio', count: 25},
  {municipio: 6, nil: 'Forze Armate', count: 20},
  {municipio: 8, nil: 'Maggiore - Musocco', count: 19},
  {municipio: 1, nil: 'Centro Storico', count: 13}
];

// ============================================================
// APP LOGIC
// ============================================================

const GREEN_PALETTE = ['#4ade80','#22c55e','#16a34a','#a3e635','#84cc16','#65a30d','#4d7c0f','#365314'];

Chart.defaults.color = '#6b8f6b';
Chart.defaults.borderColor = '#1e2e1e';
Chart.defaults.font.family = 'DM Sans';

let charts = {};
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
    initSection(id);
    initialized[id] = true;
  }
  
  window.scrollTo({ top: document.querySelector('.chapters').offsetTop, behavior: 'smooth' });
}

function initSection(id) {
  switch(id) {
    case 'verde': initVerde(); break;
    case 'consumo': initConsumo(); break;
    case 'clima': initClima(); break;
    case 'techos': initTechos(); break;
    case 'metano': initMetano(); break;
  }
}

// ── VERDE ──────────────────────────────────────────────────
function initVerde() {
  charts.mq = new Chart(document.getElementById('chartMq'), {
    type: 'line',
    data: {
      labels: mqData.years,
      datasets: [{
        label: 'm² verde / habitante',
        data: mqData.vals,
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74,222,128,0.05)',
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#4ade80'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { min: 16 } }
    }
  });

  renderBarRace('2023');
}

function renderBarRace(year) {
  const data = verdeCategories[year];
  const container = document.getElementById('barRaceVerde');
  const max = Math.max(...Object.values(data));
  const sorted = Object.entries(data).sort((a,b) => b[1] - a[1]);
  
  let html = `<div style="display:flex;gap:12px;margin-bottom:24px">
    <button class="filter-btn ${year==='2011'?'active':''}" onclick="renderBarRace('2011')">2011</button>
    <button class="filter-btn ${year==='2023'?'active':''}" onclick="renderBarRace('2023')">2023</button>
  </div>`;

  sorted.forEach(([label, val], i) => {
    const pct = (val / max * 100);
    html += `<div class="bar-item">
      <div class="bar-label">${label}</div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${pct}%;background:${GREEN_PALETTE[i%8]}">${(val/1e6).toFixed(1)}M m²</div>
      </div>
    </div>`;
  });
  container.innerHTML = html;
}

// ── CONSUMO ────────────────────────────────────────────────
function initConsumo() {
  const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
  const getData = (tipo) => consumoRaw.filter(d => d.tipo === tipo).map(d => d.val);

  charts.consumo = new Chart(document.getElementById('chartConsumo'), {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        { label: 'Electricidad (kWh)', data: getData('elec'), borderColor: '#fbbf24', tension: 0.4 },
        { label: 'Gas Metano (m³)', data: getData('gas'), borderColor: '#f87171', tension: 0.4 },
        { label: 'Agua (m³)', data: getData('agua'), borderColor: '#60a5fa', tension: 0.4 }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function filterConsumo(tipo) {
  const ds = charts.consumo.data.datasets;
  ds[0].hidden = tipo !== 'all' && tipo !== 'elec';
  ds[1].hidden = tipo !== 'all' && tipo !== 'gas';
  ds[2].hidden = tipo !== 'all' && tipo !== 'agua';
  charts.consumo.update();
  
  document.querySelectorAll('#sec-consumo .filter-btn').forEach(b => {
    b.classList.toggle('active', b.innerText.toLowerCase().includes(tipo) || (tipo==='all' && b.innerText==='Todos'));
  });
}

// ── CLIMA ──────────────────────────────────────────────────
function initClima() {
  charts.temp = new Chart(document.getElementById('chartTemp'), {
    type: 'bar',
    data: {
      labels: climaData.zonasShort,
      datasets: [{
        label: 'Temp. Media (°C)',
        data: climaData.tempMedia,
        backgroundColor: '#fbbf24',
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { min: 14 } }
    }
  });

  renderHeatmap(null);
}

function renderHeatmap(zonaIdx) {
  const container = document.getElementById('heatmapClima');
  const metrics = [
    {label: 'T. Media', key: 'tempMedia', unit:'°C'},
    {label: 'Días Calor', key: 'diasCalura', unit:''},
    {label: 'Noches Trop.', key: 'nocheTrop', unit:''},
    {label: 'Precipitación', key: 'precip', unit:'mm'}
  ];

  let html = `<div class="heatmap">
    <div class="heatmap-header">Métrica</div>
    ${climaData.zonasShort.map((z, i) => `<div class="heatmap-header" style="${zonaIdx===i?'color:var(--green1);font-weight:700':''}">${z}</div>`).join('')}
  `;

  metrics.forEach(m => {
    html += `<div class="heatmap-label">${m.label}</div>`;
    const vals = climaData[m.key];
    const min = Math.min(...vals), max = Math.max(...vals);
    vals.forEach((v, i) => {
      const ratio = (v - min) / (max - min);
      const bg = `rgba(74, 222, 128, ${0.1 + ratio * 0.8})`;
      html += `<div class="heatmap-cell" style="background:${bg}; ${zonaIdx===i?'border:2px solid #fff':''}">${v.toFixed(1)}</div>`;
    });
  });

  html += '</div>';
  container.innerHTML = html;
}

function filterZona(zona, btn) {
  document.querySelectorAll('#sec-clima .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const idx = zona === 'all' ? null : climaData.zonas.indexOf(zona);
  renderHeatmap(idx);
}

// ── TECHOS ─────────────────────────────────────────────────
function initTechos() {
  charts.techos = new Chart(document.getElementById('chartTechoTipo'), {
    type: 'doughnut',
    data: {
      labels: techoData.map(d => d.tipo),
      datasets: [{
        data: techoData.map(d => d.count),
        backgroundColor: GREEN_PALETTE,
        borderWidth: 0
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
  filterTechos('all', document.querySelector('#sec-techos .filter-btn'));
}

function filterTechos(tipo, btn) {
  document.querySelectorAll('#sec-techos .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  const selected = tipo === 'all' ? techoData[0] : techoData.find(d => d.tipo.includes(tipo));
  document.getElementById('techoTotal').innerText = tipo === 'all' ? '4,396' : selected.count;
  document.getElementById('techoArea').innerText = selected.areaAvg.toFixed(0);
  document.getElementById('techoVol').innerText = selected.volAvg.toFixed(1);
}

// ── METANO ─────────────────────────────────────────────────
function initMetano() {
  charts.metano = new Chart(document.getElementById('chartMetanoMunicipio'), {
    type: 'bar',
    data: {
      labels: metanoRaw.map(d => d.nil),
      datasets: [{
        label: 'Zonas sin Gas',
        data: metanoRaw.map(d => d.count),
        backgroundColor: '#60a5fa',
        borderRadius: 6
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

window.addEventListener('load', () => {
  initialized.verde = true;
  initVerde();
});
