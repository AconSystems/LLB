/* AconSystems • Prompt Maschine • app.js • v0.1.9 */
import { CARDS, NONE } from "./data.js";
import { toSunoToken } from "./suno_terms.js";
import { getDisplayVersion } from "./version.js";

const MAX_STYLES = 1000;
const MAX_EXCLUDE = 1000;
const MAX_SONGBUILD = 500;

const STORAGE_KEY = "prompt_maschine_state_v016";

const cardsBase = document.getElementById("cardsBase");
const cardsSpecial = document.getElementById("cardsSpecial");

const outStyles = document.getElementById("outStyles");
const outExclude = document.getElementById("outExclude");
const outSongbuild = document.getElementById("outSongbuild");

const countStyles = document.getElementById("countStyles");
const countExclude = document.getElementById("countExclude");
const countSongbuild = document.getElementById("countSongbuild");

const resetAllBtn = document.getElementById("resetAllBtn");
const randomBtn = document.getElementById("randomBtn");

const footerVersion = document.getElementById("footerVersion");
const toastEl = document.getElementById("toast");

// Registry for multi controls so we can update UI programmatically
const multiControls = new Map();

const state = loadState();

function normalizeValue(v) {
  return (v ?? "").toString().trim();
}

function isNone(v) {
  return normalizeValue(v) === normalizeValue(NONE);
}

function unique(arr) {
  const out = [];
  const seen = new Set();
  for (const x of arr || []) {
    const k = normalizeValue(x);
    if (!k) continue;
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(x);
  }
  return out;
}

function clampText(s, max) {
  if (!s) return "";
  if (s.length <= max) return s;
  return s.slice(0, max);
}

function effectiveTarget(cardId, menuKey, defaultTarget) {
  if (cardId === 15 || cardId === 16) return "exclude";
  if (cardId === 22 || cardId === 23 || cardId === 24) return "songbuild";
  return defaultTarget || "styles";
}

function toast(msg) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add("toast--show");
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(() => toastEl.classList.remove("toast--show"), 1100);
}

function styleCategory(cardId, menuKey) {
  // output ordering for A Styles
  if (cardId === 1) return "genre";
  if (cardId === 5) return "tempo";
  if (cardId === 2 && menuKey === "2.1") return "tuning";
  if (cardId === 12) return "harmony";
  if (cardId === 2 && menuKey === "2.3") return "energy";
  if (cardId === 2) return "mood";
  if (cardId === 3) return "vocals";
  if (cardId === 6) return "drums";
  if (cardId === 7) return "percussion";
  if (cardId === 8) return "instruments";
  if (cardId === 9 || cardId === 10) return "instruments";
  if (cardId === 18 || cardId === 19 || cardId === 20) return "instruments";
  if (cardId === 11) return "fx";
  if (cardId === 13) return "arrangement";
  if (cardId === 4 || cardId === 14) return "mix";
  return "other";
}

const STYLE_CAT_ORDER = [
  "genre",
  "tempo",
  "tuning",
  "harmony",
  "mood",
  "energy",
  "vocals",
  "drums",
  "percussion",
  "instruments",
  "fx",
  "arrangement",
  "mix",
  "other",
];

function orderIndexForCat(cat) {
  const idx = STYLE_CAT_ORDER.indexOf(cat);
  return idx === -1 ? STYLE_CAT_ORDER.length : idx;
}

function stableUniqueByToken(items) {
  const out = [];
  const seen = new Set();
  for (const it of items) {
    const k = normalizeValue(it.token).toLowerCase();
    if (!k) continue;
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(it);
  }
  return out;
}

function buildOutputs() {
  const stylesItems = [];
  const excludeItems = [];
  const songTokens = [];

  let order = 0;

  for (const card of CARDS) {
    for (const menu of card.menus) {
      const target = effectiveTarget(card.id, menu.key, menu.target);
      const val = state[menu.key];

      if (menu.multi) {
        const vals = Array.isArray(val) ? unique(val) : [];
        for (const display of vals) {
          if (!display || isNone(display)) continue;
          const token = toSunoToken(menu.key, display);
          if (!token) continue;

          if (target === "songbuild") {
            songTokens.push(token);
          } else if (target === "exclude") {
            excludeItems.push({ token, order: order++ });
          } else {
            stylesItems.push({ token, order: order++, cat: styleCategory(card.id, menu.key) });
          }
        }
      } else {
        const display = normalizeValue(val) || NONE;
        if (isNone(display)) continue;
        const token = toSunoToken(menu.key, display);
        if (!token) continue;

        if (target === "songbuild") {
          songTokens.push(token);
        } else if (target === "exclude") {
          excludeItems.push({ token, order: order++ });
        } else {
          stylesItems.push({ token, order: order++, cat: styleCategory(card.id, menu.key) });
        }
      }
    }
  }

  // A Styles: sort by category order, then original order
  const stylesSorted = stylesItems
    .slice()
    .sort((a, b) => {
      const ca = orderIndexForCat(a.cat);
      const cb = orderIndexForCat(b.cat);
      if (ca !== cb) return ca - cb;
      return a.order - b.order;
    });

  const stylesFinal = stableUniqueByToken(stylesSorted).map((x) => x.token);
  const excludeFinal = stableUniqueByToken(excludeItems).map((x) => x.token);
  // Outputs with commas for clearer separation in Suno
  const stylesOut = clampText(stylesFinal.join(', ').replace(/\s+,/g, ',').trim(), MAX_STYLES);
  const excludeOut = clampText(excludeFinal.join(', ').replace(/\s+,/g, ',').trim(), MAX_EXCLUDE);

  // Songaufbau für Lyrics: jede Klammer-Zeile in eine neue Zeile
  const songOut = clampText(songTokens.join('\n').trim(), MAX_SONGBUILD);

  if (outStyles) outStyles.value = stylesOut;
  if (outExclude) outExclude.value = excludeOut;
  if (outSongbuild) outSongbuild.value = songOut;

  if (countStyles) countStyles.textContent = String(stylesOut.length);
  if (countExclude) countExclude.textContent = String(excludeOut.length);
  if (countSongbuild) countSongbuild.textContent = String(songOut.length);

  saveState();
}

function setNoneClass(el, isEmpty) {
  if (!el) return;
  el.classList.toggle("select--none", !!isEmpty);
}

function renderCard(card) {
  const wrap = document.createElement("article");
  wrap.className = `card ${card.group === "special" ? "card--special" : "card--base"}`;

  const top = document.createElement("div");
  top.className = "card__top";

  const titleBox = document.createElement("div");

  const title = document.createElement("div");
  title.className = "card__title";
  title.textContent = String(card.title || "").replace(/^\s*\d+\s+/, "");
  titleBox.appendChild(title);

  if (card.group === "special") {
    const sub = document.createElement("div");
    sub.className = "card__sub";
    sub.textContent = "Spezial";
    titleBox.appendChild(sub);
  }

  const badge = document.createElement("div");
  badge.className = "card__badge";
  badge.textContent = String(card.id);

  top.appendChild(titleBox);
  top.appendChild(badge);
  wrap.appendChild(top);

  const body = document.createElement("div");
  body.className = "card__body";

  for (const menu of card.menus) {
    const field = document.createElement("div");
    field.className = "field";

    const label = document.createElement("div");
    label.className = "field__label";
    label.textContent = menu.label;
    field.appendChild(label);

    if (menu.multi) {
      // normalize multi value
      const current = Array.isArray(state[menu.key]) ? state[menu.key] : [];
      state[menu.key] = unique(current);
      const multiEl = createMultiSelect(card, menu, state[menu.key]);
      field.appendChild(multiEl);
    } else {
      const current = normalizeValue(state[menu.key]) || NONE;
      state[menu.key] = current;
      const selectWrap = createSingleSelect(menu, current);
      field.appendChild(selectWrap);
    }

    body.appendChild(field);
  }

  wrap.appendChild(body);
  return wrap;
}

function createSingleSelect(menu, currentValue) {
  const selectWrap = document.createElement("div");
  selectWrap.className = "selectWrap";

  const select = document.createElement("select");
  select.className = "select";
  select.dataset.key = menu.key;

  // build options
  if (menu.groups && Array.isArray(menu.groups)) {
    // placeholder
    const o0 = document.createElement("option");
    o0.value = NONE;
    o0.textContent = NONE;
    select.appendChild(o0);

    for (const g of menu.groups) {
      const og = document.createElement("optgroup");
      og.label = g.label;

      for (const opt of g.options || []) {
        if (typeof opt === "string") {
          const o = document.createElement("option");
          o.value = opt;
          o.textContent = opt;
          og.appendChild(o);
        } else if (opt && typeof opt === "object") {
          const o = document.createElement("option");
          o.value = "__heading__";
          o.textContent = opt.label || "";
          o.disabled = true;
          og.appendChild(o);
        }
      }

      select.appendChild(og);
    }
  } else {
    for (const opt of menu.options || [NONE]) {
      const o = document.createElement("option");
      o.value = opt;
      o.textContent = opt;
      select.appendChild(o);
    }
  }

  // set value (fallback to NONE)
  select.value = currentValue;
  if (select.value !== currentValue) select.value = NONE;

  setNoneClass(select, isNone(select.value));

  select.addEventListener("change", () => {
    state[menu.key] = select.value || NONE;
    setNoneClass(select, isNone(select.value));
    buildOutputs();
  });

  selectWrap.appendChild(select);
  return selectWrap;
}

function createMultiSelect(card, menu, values) {
  const wrap = document.createElement("div");
  wrap.className = "multi";
  wrap.dataset.key = menu.key;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "multi__btn";

  const panel = document.createElement("div");
  panel.className = "multi__panel";
  panel.hidden = true;

  const actions = document.createElement("div");
  actions.className = "multi__actions";

  const clearBtn = document.createElement("button");
  clearBtn.type = "button";
  clearBtn.className = "multi__clear";
  clearBtn.textContent = "Clear";

  actions.appendChild(clearBtn);
  panel.appendChild(actions);

  const list = document.createElement("div");
  list.className = "multi__list";

  const opts = (menu.options || []).filter((x) => !isNone(x));

  const checkboxByValue = new Map();

  for (const opt of opts) {
    const row = document.createElement("label");
    row.className = "multi__row";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "multi__cb";
    cb.value = opt;

    const span = document.createElement("span");
    span.className = "multi__txt";
    span.textContent = opt;

    row.appendChild(cb);
    row.appendChild(span);
    list.appendChild(row);

    checkboxByValue.set(opt, cb);
  }

  panel.appendChild(list);

  wrap.appendChild(btn);
  wrap.appendChild(panel);

  function syncUI() {
    const v = unique(Array.isArray(state[menu.key]) ? state[menu.key] : []);
    state[menu.key] = v;

    for (const [opt, cb] of checkboxByValue.entries()) {
      cb.checked = v.includes(opt);
    }

    // button label
    if (!v.length) {
      btn.textContent = NONE;
      btn.classList.add("multi__btn--none");
    } else if (v.length === 1) {
      btn.textContent = v[0];
      btn.classList.remove("multi__btn--none");
    } else {
      btn.textContent = `${v[0]} +${v.length - 1}`;
      btn.classList.remove("multi__btn--none");
    }
  }

  function closePanel() {
    panel.hidden = true;
    wrap.classList.remove("multi--open");
    wrap.classList.remove("multi--up");
    list.style.maxHeight = "";
  }

  function positionPanel() {
    // Decide whether to open upwards to avoid clipping inside the card body
    const host = wrap.closest(".card__body");
    if (!host) return;

    // reset
    wrap.classList.remove("multi--up");
    list.style.maxHeight = "";

    const hostRect = host.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const availDown = hostRect.bottom - btnRect.bottom - 12;
    const availUp = btnRect.top - hostRect.top - 12;

    // measure current panel height (panel must be visible)
    const panelRect = panel.getBoundingClientRect();
    const openUp = panelRect.height > availDown && availUp > availDown;
    wrap.classList.toggle("multi--up", openUp);

    // dynamic list max-height so the panel stays usable even in tight space
    const avail = openUp ? availUp : availDown;
    const actionsRect = actions.getBoundingClientRect();
    const overhead = actionsRect.height + 28; // padding + gaps inside panel
    const maxList = Math.max(120, Math.min(320, avail - overhead));
    list.style.maxHeight = `${maxList}px`;
  }

  function togglePanel() {
    const wasOpen = !panel.hidden;

    // close other open multiselects (including this one)
    for (const ctrl of multiControls.values()) ctrl.close();

    if (wasOpen) return;

    panel.hidden = false;
    wrap.classList.add("multi--open");

    // after opening, decide whether to open upward and size the panel
    requestAnimationFrame(() => positionPanel());
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    togglePanel();
  });

  panel.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  clearBtn.addEventListener("click", () => {
    state[menu.key] = [];
    syncUI();
    buildOutputs();
  });

  for (const cb of checkboxByValue.values()) {
    cb.addEventListener("change", () => {
      const current = unique(Array.isArray(state[menu.key]) ? state[menu.key] : []);
      const val = cb.value;

      let next = current.slice();
      if (cb.checked) next.push(val);
      else next = next.filter((x) => x !== val);

      state[menu.key] = unique(next);
      syncUI();
      buildOutputs();
    });
  }

  // store control
  multiControls.set(menu.key, {
    sync: syncUI,
    close: closePanel,
    set: (vals) => {
      state[menu.key] = unique(vals);
      syncUI();
    },
  });

  // init from current
  state[menu.key] = unique(values);
  syncUI();

  return wrap;
}

function renderAll() {
  if (cardsBase) cardsBase.innerHTML = "";
  if (cardsSpecial) cardsSpecial.innerHTML = "";
  multiControls.clear();

  for (const card of CARDS) {
    const host = card.group === "special" ? cardsSpecial : cardsBase;
    if (host) host.appendChild(renderCard(card));
  }

  if (footerVersion) footerVersion.textContent = `AconSystems • Prompt Maschine ${getDisplayVersion()}`;

  buildOutputs();
}

function syncUIFromState() {
  document.querySelectorAll("select.select").forEach((sel) => {
    const key = sel.dataset.key;
    const val = normalizeValue(state[key]) || NONE;
    sel.value = val;
    if (sel.value !== val) sel.value = NONE;
    setNoneClass(sel, isNone(sel.value));
  });

  for (const [key, ctrl] of multiControls.entries()) {
    ctrl.set(Array.isArray(state[key]) ? state[key] : []);
    ctrl.close();
  }
}

function clearTarget(target) {
  for (const card of CARDS) {
    for (const menu of card.menus) {
      const t = effectiveTarget(card.id, menu.key, menu.target);
      if (t !== target) continue;
      state[menu.key] = menu.multi ? [] : NONE;
    }
  }
  syncUIFromState();
  buildOutputs();
}

function resetAll() {
  for (const card of CARDS) {
    for (const menu of card.menus) {
      state[menu.key] = menu.multi ? [] : NONE;
    }
  }
  syncUIFromState();
  buildOutputs();
}

function pickRandomFrom(list) {
  if (!list || !list.length) return null;
  return list[Math.floor(Math.random() * list.length)];
}
function shuffleInPlace(arr) {
  for (let i = (arr?.length || 0) - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function weightedPick(values, weights) {
  const n = Math.min(values?.length || 0, weights?.length || 0);
  if (!n) return null;
  let total = 0;
  for (let i = 0; i < n; i++) total += Math.max(0, Number(weights[i]) || 0);
  if (total <= 0) return values[0];

  let r = Math.random() * total;
  for (let i = 0; i < n; i++) {
    r -= Math.max(0, Number(weights[i]) || 0);
    if (r <= 0) return values[i];
  }
  return values[n - 1];
}

function getFlatOptions(menu) {
  if (!menu) return [];
  if (menu.groups && Array.isArray(menu.groups)) {
    const flat = [];
    for (const g of menu.groups) {
      for (const opt of g.options || []) {
        if (typeof opt === "string" && !isNone(opt)) flat.push(opt);
      }
    }
    return flat;
  }
  return (menu.options || []).filter((x) => !isNone(x));
}

function pickDifferentFrom(options, prev) {
  const prevNorm = normalizeValue(prev);
  if (!prevNorm) return pickRandomFrom(options) || null;

  const filtered = (options || []).filter((x) => normalizeValue(x) !== prevNorm);
  if (filtered.length) return pickRandomFrom(filtered) || null;
  return pickRandomFrom(options) || null;
}

function pickNonNoneForMenu(menu, prevVal) {
  const opts = getFlatOptions(menu);
  return pickDifferentFrom(opts, prevVal) || NONE;
}

function pickMultiForMenu(menu, prevArr, minCount = 1, maxCount = 3) {
  const opts = getFlatOptions(menu);
  if (!opts.length) return [];

  const counts = [];
  const weights = [];
  for (let c = minCount; c <= maxCount; c++) {
    counts.push(c);
    if (c === 1) weights.push(0.70);
    else if (c === 2) weights.push(0.25);
    else weights.push(0.05);
  }
  const want = Math.max(minCount, Math.min(maxCount, weightedPick(counts, weights) || minCount));

  const pool = opts.slice();
  shuffleInPlace(pool);

  const chosen = [];
  for (const opt of pool) {
    if (chosen.length >= want) break;
    if (!opt || isNone(opt)) continue;
    chosen.push(opt);
  }

  // If the new set equals the previous set, try one reroll for variation
  const prevNorm = new Set((Array.isArray(prevArr) ? prevArr : []).map((x) => normalizeValue(x)));
  const chosenNorm = chosen.map((x) => normalizeValue(x)).sort().join("||");
  const prevSortedNorm = Array.from(prevNorm).filter(Boolean).sort().join("||");
  if (chosenNorm && prevSortedNorm && chosenNorm === prevSortedNorm && opts.length > 1) {
    shuffleInPlace(pool);
    const alt = [];
    for (const opt of pool) {
      if (alt.length >= want) break;
      if (!opt || isNone(opt)) continue;
      alt.push(opt);
    }
    return unique(alt);
  }

  return unique(chosen);
}

function pickOptionalCount() {
  const values = [1, 2, 3, 4, 5, 6];
  const weights = [0.20, 0.25, 0.20, 0.15, 0.12, 0.08];
  return weightedPick(values, weights) || 2;
}

function pickSubGenreForMain(mainGenre, menu12) {
  if (!menu12 || !menu12.groups) return NONE;
  const genre = normalizeValue(mainGenre);
  if (!genre || isNone(genre)) return NONE;

  const exact = (menu12.groups || []).find((g) => normalizeValue(g.label) === genre);
  const candidates = exact ? (exact.options || []).filter((x) => typeof x === "string" && !isNone(x)) : [];

  if (candidates.length) return pickRandomFrom(candidates) || NONE;

  const flat = getFlatOptions(menu12);
  return pickRandomFrom(flat) || NONE;
}

function pickVocalsKernel(menu31) {
  if (!menu31) return [];
  const all = getFlatOptions(menu31);

  // never choose instrumental-only here
  const filtered = all.filter((x) => !normalizeValue(x).toLowerCase().includes("instrumental ohne gesang"));

  const out = [];
  const base = filtered.find((x) => normalizeValue(x) === "Vocal Song") || "Vocal Song";
  out.push(base);

  const roles = [
    "Lead Vocal (w)",
    "Lead Vocal (m)",
    "Duett (m + w) (Duo)",
    "Chor (Choir)",
    "A cappella"
  ];

  const availableRoles = roles.filter((r) => filtered.some((x) => normalizeValue(x) === normalizeValue(r)));

  if (Math.random() < 0.65 && availableRoles.length) {
    const role1 = weightedPick(
      availableRoles,
      availableRoles.map((r) => {
        const k = normalizeValue(r);
        if (k === "Lead Vocal (w)") return 0.32;
        if (k === "Lead Vocal (m)") return 0.28;
        if (k === "Duett (m + w) (Duo)") return 0.18;
        if (k === "Chor (Choir)") return 0.12;
        return 0.10;
      })
    );
    if (role1) out.push(role1);

    if (Math.random() < 0.15 && availableRoles.length > 1) {
      const pool = availableRoles.filter((r) => normalizeValue(r) !== normalizeValue(role1));
      const role2 = pickRandomFrom(pool);
      if (role2) out.push(role2);
    }
  }

  return unique(out);
}


function randomizeAll() {
  // snapshot for "pick different" behavior
  let prev = {};
  try { prev = JSON.parse(JSON.stringify(state)); } catch (_) { prev = {}; }

  // clear first
  for (const card of CARDS) {
    for (const menu of card.menus) {
      state[menu.key] = menu.multi ? [] : NONE;
    }
  }

  // index menus for quick access
  const byKey = new Map();
  const all = [];
  for (const card of CARDS) {
    for (const menu of card.menus) {
      byKey.set(menu.key, { cardId: card.id, menu });
      all.push({ cardId: card.id, menu });
    }
  }

  const KERNEL_KEYS = new Set(["1.1", "2.1", "3.1", "5.1", "6.1", "9.1", "10.1"]);

  // Kern: Haupt Genre (1.1)
  const m11 = byKey.get("1.1")?.menu;
  if (m11) state["1.1"] = pickNonNoneForMenu(m11, prev["1.1"]);

  // Kern: Grundstimmung immer 432 (2.1)
  state["2.1"] = "Kammerton A4 432 Hz";

  // Kern: Vocals (3.1) (multi)
  const m31 = byKey.get("3.1")?.menu;
  if (m31) state["3.1"] = pickVocalsKernel(m31);

  // Kern: Tempo (5.1)
  const m51 = byKey.get("5.1")?.menu;
  if (m51) state["5.1"] = pickNonNoneForMenu(m51, prev["5.1"]);

  // Kern: Drums (6.1)
  const m61 = byKey.get("6.1")?.menu;
  if (m61) state["6.1"] = pickNonNoneForMenu(m61, prev["6.1"]);

  // Kern: Gitarre (9.1)
  const m91 = byKey.get("9.1")?.menu;
  if (m91) state["9.1"] = pickNonNoneForMenu(m91, prev["9.1"]);

  // Kern: Klavier / Keys (10.1) zufällig aber nie keine Angabe
  const m101 = byKey.get("10.1")?.menu;
  if (m101) state["10.1"] = pickNonNoneForMenu(m101, prev["10.1"]);

  // Optional: Sub Genre passend zum Haupt Genre (1.2) manchmal dazu
  const m12 = byKey.get("1.2")?.menu;
  if (m12 && Math.random() < 0.65) {
    state["1.2"] = pickSubGenreForMain(state["1.1"], m12);
  }

  // Optional: zusätzliche Felder (weniger ist mehr)
  const optionalCount = pickOptionalCount();

  // candidate pool: everything except kernel + excludes (15/16) + songbuild (22-24) + subgenre (1.2 handled above)
  const candidates = [];
  for (const it of all) {
    const key = it.menu.key;
    if (KERNEL_KEYS.has(key)) continue;
    if (key === "1.2") continue;
    if (it.cardId === 15 || it.cardId === 16) continue; // negative prompts nicht zufällig
    if (it.cardId === 22 || it.cardId === 23 || it.cardId === 24) continue; // songbuild default leer
    candidates.push(it);
  }

  shuffleInPlace(candidates);

  let picked = 0;
  for (const it of candidates) {
    if (picked >= optionalCount) break;

    const menu = it.menu;

    // if already set (e.g. subgenre), skip
    if (menu.multi) {
      if (Array.isArray(state[menu.key]) && state[menu.key].length) continue;
      state[menu.key] = pickMultiForMenu(menu, prev[menu.key], 1, 3);
      if (state[menu.key].length) picked += 1;
    } else {
      if (!isNone(state[menu.key])) continue;
      state[menu.key] = pickNonNoneForMenu(menu, prev[menu.key]);
      if (!isNone(state[menu.key])) picked += 1;
    }
  }

  syncUIFromState();
  buildOutputs();
}

function wireButtons() {
  document.addEventListener("click", async (e) => {
    const t = e.target;
    const copy = t?.getAttribute?.("data-copy");
    const clear = t?.getAttribute?.("data-clear");

    if (copy) {
      const text =
        copy === "styles"
          ? (outStyles?.value || "")
          : copy === "exclude"
          ? (outExclude?.value || "")
          : (outSongbuild?.value || "");
      try {
        await navigator.clipboard.writeText(text);
        toast(`Copied ${copy}`);
      } catch (_) {
        toast("Copy failed");
      }
    }

    if (clear) {
      clearTarget(clear);
      toast(`Cleared ${clear}`);
    }
  });

  if (resetAllBtn) resetAllBtn.addEventListener("click", () => { resetAll(); toast("Reset All"); });
  if (randomBtn) randomBtn.addEventListener("click", () => { randomizeAll(); toast("Random"); });

  // click outside closes multiselects
  document.addEventListener("click", () => {
    for (const ctrl of multiControls.values()) ctrl.close();
  });
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);

    const out = {};
    for (const [k, v] of Object.entries(parsed || {})) {
      if (Array.isArray(v)) out[k] = unique(v);
      else out[k] = normalizeValue(v) || NONE;
    }
    return out;
  } catch (_) {
    return {};
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) {
    // ignore
  }
}

function boot() {
  wireButtons();

  // Initialize state keys so outputs are stable even before first interaction
  for (const card of CARDS) {
    for (const menu of card.menus) {
      if (menu.multi) {
        if (!Array.isArray(state[menu.key])) state[menu.key] = [];
        state[menu.key] = unique(state[menu.key]);
      } else {
        state[menu.key] = normalizeValue(state[menu.key]) || NONE;
      }
    }
  }

  renderAll();
}

boot();
