/* AconSystems • Prompt Maschine • version.js • v0.1.9 */
const BASE_VERSION = "v0.1.9";
const BUILD_SIG = "2026-02-27_v0.1.9";

const LS_SIG = "pm_last_build_sig";
const LS_COUNT = "pm_local_build_counter";

function getLocalBuildCounter() {
  try {
    const lastSig = localStorage.getItem(LS_SIG) || "";
    let count = parseInt(localStorage.getItem(LS_COUNT) || "0", 10);
    if (!Number.isFinite(count) || count < 0) count = 0;

    if (lastSig !== BUILD_SIG) {
      // neues Release erkannt -> Zähler hoch, Sig merken
      count += 1;
      localStorage.setItem(LS_SIG, BUILD_SIG);
      localStorage.setItem(LS_COUNT, String(count));
    }
    return count;
  } catch (_) {
    return 0;
  }
}

export function getBaseVersion() {
  return BASE_VERSION;
}

export function getBuildSig() {
  return BUILD_SIG;
}

export function getDisplayVersion() {
  return BASE_VERSION;
}
