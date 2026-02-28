/* AconSystems • Prompt Maschine • gate.js • v0.1.9 */
(() => {
  const PW_SHA256_HEX = "715f22ab468029cfed9feb0f7aafc0642f20a48edde4a8e5bb27ef11bf609819";
  const TOKEN_KEY = "pm_gate_ok_v1";

  function hexFromBuffer(buf) {
    const bytes = new Uint8Array(buf);
    let hex = "";
    for (let i = 0; i < bytes.length; i++) {
      hex += bytes[i].toString(16).padStart(2, "0");
    }
    return hex;
  }

  async function sha256Hex(text) {
    const enc = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", enc);
    return hexFromBuffer(digest);
  }

  function isUnlocked() {
    try { return localStorage.getItem(TOKEN_KEY) === "1"; } catch (_) { return false; }
  }

  function setUnlocked() {
    try { localStorage.setItem(TOKEN_KEY, "1"); } catch (_) {}
  }

  function clearUnlocked() {
    try { localStorage.removeItem(TOKEN_KEY); } catch (_) {}
  }

  function ensureStyles() {
    if (document.getElementById("pm_gate_style")) return;
    const style = document.createElement("style");
    style.id = "pm_gate_style";
    style.textContent = `
      .pm_gate_overlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.86);z-index:99999;padding:24px}
      .pm_gate_card{width:min(440px,100%);background:#111;border-radius:16px;padding:18px;box-shadow:0 10px 30px rgba(0,0,0,.6);color:#fff;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}
      .pm_gate_title{font-size:18px;margin:0 0 12px 0;font-weight:700}
      .pm_gate_row{display:flex;gap:10px}
      .pm_gate_input{flex:1;padding:10px 12px;border-radius:10px;border:1px solid #333;background:#0b0b0b;color:#fff;outline:none}
      .pm_gate_btn{padding:10px 12px;border-radius:10px;border:1px solid #333;background:#1f1f1f;color:#fff;cursor:pointer;white-space:nowrap}
      .pm_gate_hint{margin-top:10px;font-size:12px;color:#bbb}
      .pm_gate_error{margin-top:10px;font-size:12px;color:#ff7a7a;min-height:16px}
      .pm_gate_foot{margin-top:14px;display:flex;justify-content:space-between;gap:10px}
      .pm_gate_link{background:transparent;border:none;color:#bbb;cursor:pointer;font-size:12px;padding:0;text-decoration:underline}
    `;
    document.head.appendChild(style);
  }

  function showOverlay(onSuccess) {
    ensureStyles();

    const overlay = document.createElement("div");
    overlay.className = "pm_gate_overlay";
    overlay.id = "pmGateOverlay";
    overlay.innerHTML = `
      <div class="pm_gate_card" role="dialog" aria-modal="true" aria-label="Passwort">
        <div class="pm_gate_title">Passwort eingeben</div>
        <div class="pm_gate_row">
          <input id="pmGatePw" class="pm_gate_input" type="password" autocomplete="current-password" />
          <button id="pmGateGo" class="pm_gate_btn" type="button">Start</button>
        </div>
        <div id="pmGateErr" class="pm_gate_error"></div>
        <div class="pm_gate_hint">Hinweis: Das ist nur eine Hürde für Zufallsbesucher, kein echter Zugriffsschutz.</div>
        <div class="pm_gate_foot">
          <span></span>
          <button id="pmGateReset" class="pm_gate_link" type="button">Reset</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const input = document.getElementById("pmGatePw");
    const btn = document.getElementById("pmGateGo");
    const err = document.getElementById("pmGateErr");
    const reset = document.getElementById("pmGateReset");

    async function tryUnlock() {
      err.textContent = "";
      const pw = (input.value || "").trim();
      if (!pw) { err.textContent = "Passwort fehlt"; return; }
      const h = await sha256Hex(pw);
      if (h === PW_SHA256_HEX) {
        setUnlocked();
        overlay.remove();
        onSuccess();
      } else {
        err.textContent = "Falsches Passwort";
      }
    }

    btn.addEventListener("click", tryUnlock);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") tryUnlock(); });
    reset.addEventListener("click", () => { clearUnlocked(); input.value = ""; err.textContent = ""; input.focus(); });

    setTimeout(() => { try { input.focus(); } catch(_) {} }, 50);
  }

  function loadModuleScript(src) {
    if (!src) return;
    if (document.querySelector(`script[type="module"][data-pm-module="1"]`)) return;
    const s = document.createElement("script");
    s.type = "module";
    s.src = src;
    s.setAttribute("data-pm-module", "1");
    document.body.appendChild(s);
  }

  function registerSW(swPath) {
    if (!("serviceWorker" in navigator)) return;
    const p = swPath || "./sw.js";
    navigator.serviceWorker.register(p).catch(() => {});
  }

  function proceed(cfg) {
    const redirectTo = cfg && cfg.redirectTo ? cfg.redirectTo : "";
    const loadModule = cfg && cfg.loadModule ? cfg.loadModule : "";
    const doSW = cfg && cfg.registerSW ? true : false;

    if (redirectTo) {
      window.location.replace(redirectTo);
      return;
    }

    if (doSW) registerSW(cfg && cfg.swPath ? cfg.swPath : "./sw.js");
    if (loadModule) loadModuleScript(loadModule);
  }

  window.PMGate = {
    init: (cfg) => {
      if (isUnlocked()) {
        proceed(cfg);
      } else {
        showOverlay(() => proceed(cfg));
      }
    }
  };
})();
