/* ═══════════════════════════════════════════════
   WebConta — shared.js
═══════════════════════════════════════════════ */

const CUENTAS_DEFAULT = [
  { id:'c001', codigo:'1.1.01', nombre:'Caja',                           tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c002', codigo:'1.1.02', nombre:'Bancos',                         tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c003', codigo:'1.1.03', nombre:'Clientes',                       tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c004', codigo:'1.1.04', nombre:'Deudores Diversos',              tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c005', codigo:'1.1.05', nombre:'Inventario',                     tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c006', codigo:'1.1.06', nombre:'IVA Acreditable',                tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c007', codigo:'1.1.07', nombre:'Anticipo a Proveedores',         tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c008', codigo:'1.2.01', nombre:'Equipo de Cómputo',              tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c009', codigo:'1.2.02', nombre:'Mobiliario y Equipo',            tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c010', codigo:'1.2.03', nombre:'Depreciación Acumulada',         tipo:'ACTIVO',  naturaleza:'ACREEDORA' },
  { id:'c011', codigo:'1.2.04', nombre:'Terrenos',                       tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c012', codigo:'1.2.05', nombre:'Edificios',                      tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c013', codigo:'1.3.04', nombre:'Almacén',                        tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c014', codigo:'1.4.01', nombre:'Documentos por Cobrar',          tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c015', codigo:'1.9.01', nombre:'Gastos de Instalación',          tipo:'ACTIVO',  naturaleza:'DEUDORA' },
  { id:'c016', codigo:'2.1.01', nombre:'Proveedores',                    tipo:'PASIVO',  naturaleza:'ACREEDORA' },
  { id:'c017', codigo:'2.1.02', nombre:'IVA por Pagar',                  tipo:'PASIVO',  naturaleza:'ACREEDORA' },
  { id:'c018', codigo:'2.1.03', nombre:'Acreedores Diversos',            tipo:'PASIVO',  naturaleza:'ACREEDORA' },
  { id:'c019', codigo:'2.2.01', nombre:'Préstamos Bancarios LP',         tipo:'PASIVO',  naturaleza:'ACREEDORA' },
  { id:'c020', codigo:'2.3.01', nombre:'Sueldos por Pagar',              tipo:'PASIVO',  naturaleza:'ACREEDORA' },
  { id:'c021', codigo:'2.4.01', nombre:'Documentos por Pagar',           tipo:'PASIVO',  naturaleza:'ACREEDORA' },
  { id:'c022', codigo:'2.5.01', nombre:'Rentas Cobradas por Anticipado', tipo:'PASIVO',  naturaleza:'ACREEDORA' },
  { id:'c023', codigo:'2.6.01', nombre:'Gasolina por Pagar',             tipo:'PASIVO',  naturaleza:'ACREEDORA' },
  { id:'c024', codigo:'2.7.01', nombre:'ISR por Pagar',                  tipo:'PASIVO',  naturaleza:'ACREEDORA' },
  { id:'c025', codigo:'3.1.01', nombre:'Capital Social',                 tipo:'CAPITAL', naturaleza:'ACREEDORA' },
  { id:'c026', codigo:'3.1.02', nombre:'Utilidad del Ejercicio',         tipo:'CAPITAL', naturaleza:'ACREEDORA' },
  { id:'c027', codigo:'3.1.03', nombre:'Utilidades Retenidas',           tipo:'CAPITAL', naturaleza:'ACREEDORA' },
  { id:'c028', codigo:'3.1.04', nombre:'Pérdida del Ejercicio',          tipo:'CAPITAL', naturaleza:'DEUDORA' },
  { id:'c029', codigo:'4.1.01', nombre:'Ventas',                         tipo:'INGRESO', naturaleza:'ACREEDORA' },
  { id:'c030', codigo:'4.1.02', nombre:'Devoluciones sobre Ventas',      tipo:'INGRESO', naturaleza:'DEUDORA' },
  { id:'c031', codigo:'4.1.03', nombre:'Rebajas sobre Ventas',           tipo:'INGRESO', naturaleza:'DEUDORA' },
  { id:'c032', codigo:'4.1.04', nombre:'Descuentos sobre Ventas',        tipo:'INGRESO', naturaleza:'DEUDORA' },
  { id:'c033', codigo:'4.2.01', nombre:'Productos Financieros',          tipo:'INGRESO', naturaleza:'ACREEDORA' },
  { id:'c034', codigo:'4.3.01', nombre:'Rentas Ganadas',                 tipo:'INGRESO', naturaleza:'ACREEDORA' },
  { id:'c035', codigo:'4.4.01', nombre:'Otros Ingresos',                 tipo:'INGRESO', naturaleza:'ACREEDORA' },
  { id:'c036', codigo:'5.1.01', nombre:'Costo de Ventas',                tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c037', codigo:'5.2.01', nombre:'Gastos de Administración',       tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c038', codigo:'5.2.02', nombre:'Gastos de Venta',                tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c039', codigo:'5.2.03', nombre:'Sueldos y Salarios',             tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c040', codigo:'5.2.04', nombre:'Renta',                          tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c041', codigo:'5.2.05', nombre:'Servicios (Luz, Agua, Tel)',     tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c042', codigo:'5.3.01', nombre:'Gastos Financieros',             tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c043', codigo:'5.4.01', nombre:'ISR',                            tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c044', codigo:'5.4.02', nombre:'Fletes',                         tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c045', codigo:'5.5.01', nombre:'Gasolina',                       tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c046', codigo:'5.6.01', nombre:'Publicidad',                     tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c047', codigo:'5.6.02', nombre:'Honorarios',                     tipo:'GASTO',   naturaleza:'DEUDORA' },
  { id:'c048', codigo:'5.7.01', nombre:'Compras',                        tipo:'GASTO',   naturaleza:'DEUDORA' },
];

/* ══ DB ══ */
const DB = {
  getCuentas() {
    const raw = localStorage.getItem('fin_cuentas');
    if (!raw) { const init = CUENTAS_DEFAULT.map(c=>({...c})); localStorage.setItem('fin_cuentas', JSON.stringify(init)); return init; }
    return JSON.parse(raw);
  },
  saveCuentas(c) { localStorage.setItem('fin_cuentas', JSON.stringify(c)); },
  addCuenta(c) {
    const list = this.getCuentas(); c.id = 'c'+Date.now(); list.push(c);
    list.sort((a,b)=>a.codigo.localeCompare(b.codigo,undefined,{numeric:true}));
    this.saveCuentas(list); return c;
  },
  updateCuenta(id,data) {
    const list = this.getCuentas(); const i = list.findIndex(c=>c.id===id);
    if(i!==-1){ list[i]={...list[i],...data}; list.sort((a,b)=>a.codigo.localeCompare(b.codigo,undefined,{numeric:true})); this.saveCuentas(list); return list[i]; }
    return null;
  },
  deleteCuenta(id) { this.saveCuentas(this.getCuentas().filter(c=>c.id!==id)); },
  getCuentaById(id) { return this.getCuentas().find(c=>c.id===id)||null; },

  getAsientos() { const r=localStorage.getItem('fin_asientos'); return r?JSON.parse(r):[]; },
  saveAsientos(a) { localStorage.setItem('fin_asientos', JSON.stringify(a)); },
  addAsiento(a) {
    const list=this.getAsientos();
    a.id='A'+String(list.length+1).padStart(4,'0');
    a.fecha=a.fecha||new Date().toISOString().split('T')[0];
    a.creadoEn=new Date().toISOString();
    list.unshift(a); this.saveAsientos(list); return a;
  },
  deleteAsiento(id) { this.saveAsientos(this.getAsientos().filter(a=>a.id!==id)); },

  getEmpresa() {
    const r=localStorage.getItem('fin_empresa');
    return r ? JSON.parse(r) : {razon:'',rfc:'',ejercicio:'',periodoIni:'',periodoFin:'',calle:'',colonia:'',ciudad:'',cp:'',estado:'',pais:'México'};
  },
  saveEmpresa(d) { localStorage.setItem('fin_empresa', JSON.stringify(d)); },

  /* ── Calcular saldos netos por cuenta desde asientos ── */
  getSaldosCuentas(asientosFiltrados) {
    const cuentas = this.getCuentas();
    const mov = {};
    (asientosFiltrados||this.getAsientos()).forEach(a => {
      a.movimientos.forEach(m => {
        if(!mov[m.cuentaId]) mov[m.cuentaId]={debe:0,haber:0};
        m.tipo==='DEBE' ? (mov[m.cuentaId].debe+=parseFloat(m.monto)||0)
                        : (mov[m.cuentaId].haber+=parseFloat(m.monto)||0);
      });
    });
    // Saldo neto según naturaleza de la cuenta
    const resultado = {};
    cuentas.forEach(c => {
      const m = mov[c.id]||{debe:0,haber:0};
      // Naturaleza DEUDORA: saldo = Debe - Haber
      // Naturaleza ACREEDORA: saldo = Haber - Debe
      const saldo = c.naturaleza==='DEUDORA' ? m.debe - m.haber : m.haber - m.debe;
      resultado[c.codigo] = { ...c, debe:m.debe, haber:m.haber, saldo };
    });
    return resultado;
  },

  /* Obtener saldo sumado de uno o más códigos exactos */
  getSaldo(saldos, codigos) {
    return [].concat(codigos).reduce((s,cod)=>{
      const entry = saldos[cod];
      return s + (entry ? entry.saldo : 0);
    }, 0);
  },

  /* Obtener todas las cuentas de un tipo con su saldo */
  getCuentasPorTipo(saldos, tipo) {
    return Object.values(saldos).filter(c=>c.tipo===tipo && c.saldo!==0);
  },
};

/* ══ UTILS ══ */
function showToast(msg, tipo='info') {
  let cont=document.getElementById('toast-container');
  if(!cont){ cont=document.createElement('div'); cont.id='toast-container'; cont.className='toast-container'; document.body.appendChild(cont); }
  const icons={
    success:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>`,
    error:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/></svg>`,
  };
  const t=document.createElement('div'); t.className=`toast ${tipo}`;
  t.innerHTML=(icons[tipo]||'')+msg; cont.appendChild(t);
  requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add('show')));
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(),300); },3000);
}

function fmt(n) { return '$'+(Math.abs(parseFloat(n)||0)).toLocaleString('es-MX',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function fmtFecha(iso) {
  if(!iso) return '';
  const [y,m,d]=iso.split('-');
  const M=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  return `${parseInt(d)} ${M[parseInt(m)-1]} ${y}`;
}
function tipoBadge(t){ return `<span class="badge badge-${t.toLowerCase()}">${t}</span>`; }
function naturBadge(n){ return `<span class="badge badge-${n.toLowerCase()}">${n}</span>`; }
function numClase(c){ return c?c.charAt(0):'?'; }

const TIPO_COLOR={ ACTIVO:'var(--activo)', PASIVO:'var(--pasivo)', CAPITAL:'var(--capital)', INGRESO:'var(--ingreso)', GASTO:'var(--gasto)' };

/* ══ SIDEBAR ══ */
function renderSidebar() {
  return `
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-logo">
      <div class="logo-mark">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </div>
      <div><div class="logo-text">WebConta</div><div class="logo-sub">Contabilidad</div></div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-group-label">General</div>
      <a href="index.html" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
        Panel de Control
      </a>
      <div class="nav-group-label">Contabilidad</div>
      <a href="catalogo.html" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        Catálogo de Cuentas
      </a>
      <a href="transacciones.html" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Nueva Transacción
      </a>
      <a href="diario.html" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        Libro Diario
      </a>
      <a href="mayor.html" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        Libro Mayor
      </a>
      <div class="nav-group-label">Estados</div>
      <a href="estados.html" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        Resultado Integral
      </a>
      <a href="balanza.html" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        Balanza de Comprobación
      </a>
      <a href="balance.html" class="nav-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        Balance General
      </a>
    </nav>
  </aside>
  <div id="sidebar-overlay" style="position:fixed;inset:0;background:rgba(28,26,23,0.45);z-index:250;display:none;backdrop-filter:blur(2px);"></div>`;
}

function renderTopbar(titulo) {
  return `
  <header class="topbar">
    <div style="display:flex;align-items:center;gap:12px;">
      <button id="sidebar-toggle" class="btn btn-icon" style="display:none;" aria-label="Menú">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="17" height="17"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
      <span class="topbar-title">${titulo}</span>
    </div>
    <div class="topbar-actions" id="topbar-actions"></div>
  </header>`;
}

function markActiveNav() {
  const page=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-item').forEach(a=>a.classList.toggle('active',a.getAttribute('href')===page));
}
function initSidebarToggle() {
  const toggle=document.getElementById('sidebar-toggle');
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebar-overlay');
  if(!toggle||!sidebar) return;
  toggle.addEventListener('click',()=>{ sidebar.classList.toggle('open'); overlay.style.display=sidebar.classList.contains('open')?'block':'none'; });
  if(overlay) overlay.addEventListener('click',()=>{ sidebar.classList.remove('open'); overlay.style.display='none'; });
}
function checkMobile() {
  const toggle=document.getElementById('sidebar-toggle'); if(!toggle) return;
  toggle.style.display=window.innerWidth<=768?'inline-flex':'none';
  if(window.innerWidth>768){ document.getElementById('sidebar')?.classList.remove('open'); const ov=document.getElementById('sidebar-overlay'); if(ov) ov.style.display='none'; }
}
document.addEventListener('DOMContentLoaded',()=>{ checkMobile(); window.addEventListener('resize',checkMobile); markActiveNav(); initSidebarToggle(); });

/* ══ EMPRESA HEADER PARA PDF ══ */
function getEmpresaHeader(titulo, subtitulo){
  const e = DB.getEmpresa();
  const nombre  = e.razon || 'Sin empresa configurada';
  const rfc     = e.rfc   || '';
  const ejercicio = e.ejercicio || '';
  const dir     = [e.calle, e.colonia, e.ciudad+(e.estado?', '+e.estado:''), e.cp, e.pais].filter(Boolean).join(', ');
  const periodo = (e.periodoIni && e.periodoFin)
    ? 'Del '+fmtFecha(e.periodoIni)+' al '+fmtFecha(e.periodoFin)
    : (ejercicio ? 'Ejercicio '+ejercicio : '');

  return `
    <div class="pdf-header">
      <div class="pdf-header-top">
        <div class="pdf-logo-mark">${nombre.split(' ').slice(0,2).map(w=>w[0]||'').join('').toUpperCase().slice(0,2)||'WC'}</div>
        <div class="pdf-empresa-data">
          <div class="pdf-empresa-nombre">${nombre}</div>
          ${rfc ? `<div class="pdf-empresa-meta">RFC: ${rfc}</div>` : ''}
          ${dir ? `<div class="pdf-empresa-meta">${dir}</div>` : ''}
        </div>
        <div class="pdf-doc-info">
          <div class="pdf-doc-titulo">${titulo}</div>
          ${subtitulo ? `<div class="pdf-doc-sub">${subtitulo}</div>` : ''}
          ${periodo   ? `<div class="pdf-doc-sub">${periodo}</div>`   : ''}
          <div class="pdf-doc-fecha">Generado: ${fmtFecha(new Date().toISOString().split('T')[0])}</div>
        </div>
      </div>
      <div class="pdf-header-line"></div>
    </div>`;
}

/* ══ ESTILOS PDF (inyectar en <head> de cada página al imprimir) ══ */
const PDF_STYLES = `
  @media print {
    .sidebar, .topbar, .period-bar, .btn, .info-grid,
    #sidebar-root, #topbar-root, .topbar-actions,
    .cuenta-actions, .modal-overlay, .stats-grid,
    .add-mov-btn, .action-bar { display:none !important; }
    .main-content { margin-left:0 !important; }
    body { background:#fff !important; font-family:'Arial',sans-serif; font-size:11pt; color:#000; }
    .page-body { padding:0 !important; }

    .pdf-header { margin-bottom:16pt; }
    .pdf-header-top { display:flex; align-items:flex-start; gap:12pt; }
    .pdf-logo-mark {
      width:44pt; height:44pt; border-radius:8pt;
      background:#4a3fbe; color:#fff;
      display:flex; align-items:center; justify-content:center;
      font-size:16pt; font-weight:700; letter-spacing:-1px; flex-shrink:0;
      -webkit-print-color-adjust:exact; print-color-adjust:exact;
    }
    .pdf-empresa-data { flex:1; }
    .pdf-empresa-nombre { font-size:14pt; font-weight:700; margin-bottom:2pt; }
    .pdf-empresa-meta   { font-size:8pt; color:#666; margin-top:1pt; }
    .pdf-doc-info { text-align:right; flex-shrink:0; }
    .pdf-doc-titulo { font-size:13pt; font-weight:700; color:#4a3fbe; margin-bottom:2pt; }
    .pdf-doc-sub  { font-size:8pt; color:#666; margin-top:1pt; }
    .pdf-doc-fecha{ font-size:7pt; color:#999; margin-top:3pt; }
    .pdf-header-line { border-top:2pt solid #4a3fbe; margin-top:8pt; }

    /* Tabla general PDF */
    table { width:100%; border-collapse:collapse; font-size:9pt; }
    th { background:#4a3fbe !important; color:#fff !important; padding:5pt 8pt; text-align:left; font-size:8pt; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
    td { padding:4pt 8pt; border-bottom:0.5pt solid #ddd; }
    tr:nth-child(even) td { background:#f8f8f8 !important; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
    tfoot td { background:#4a3fbe !important; color:#fff !important; font-weight:700; -webkit-print-color-adjust:exact; print-color-adjust:exact; }

    .card, .ef-section, .balanza-wrap, .cuenta-mayor, .asiento-card, .bal-section { box-shadow:none !important; border:0.5pt solid #ccc !important; border-radius:4pt !important; }
    .ef-row, .ef-hdr, .balanza-table td, .balanza-table th { border-color:#ddd !important; }
    .ef-num, .c-debe, .c-hab, .c-sd, .c-sa { color:#000 !important; }
    .ef-num.acc, .ef-num.grn { color:#1a5a1a !important; }
    .ef-num.neg, .ef-num.red { color:#8b0000 !important; }
  }
`;

function injectPDFStyles(){
  if(!document.getElementById('pdf-styles')){
    const s = document.createElement('style');
    s.id = 'pdf-styles';
    s.textContent = PDF_STYLES;
    document.head.appendChild(s);
  }
}

function printWithHeader(titulo, subtitulo){
  injectPDFStyles();
  // Inyectar header si no existe
  const existing = document.getElementById('pdf-empresa-header');
  if(existing) existing.remove();
  const headerDiv = document.createElement('div');
  headerDiv.id = 'pdf-empresa-header';
  headerDiv.innerHTML = getEmpresaHeader(titulo, subtitulo);
  const pageBody = document.querySelector('.page-body');
  if(pageBody) pageBody.insertBefore(headerDiv, pageBody.firstChild);
  window.print();
  // Limpiar después
  setTimeout(()=>{ const h=document.getElementById('pdf-empresa-header'); if(h) h.remove(); }, 1000);
}
