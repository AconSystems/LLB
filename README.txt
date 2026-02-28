AconSystems Prompt Maschine v0.1.9

Punkt 1 Inhalt
index.html  Landing Page mit kurzem Einstieg und Button zum Tool
app.html    Prompt Builder
styles.css  UI Styles
data.js     Menues Karten Dropdown Daten
suno_terms.js  Mapping Liste Anzeige Text -> Suno Token pro Menue
app.js      UI Logik Ausgabe Logik Speicher Logik
version.js  Versionsanzeige inkl lokaler Build Kennung
sw.js       Service Worker fuer Offline Cache
manifest.webmanifest  PWA Manifest
index.md    GitHub Pages Teaser Text

Punkt 2 Start lokal
Punkt 2.1 Oeffne index.html im Browser und klicke Start
Punkt 2.2 Oder direkt app.html oeffnen

Punkt 3 Output Felder
Feld A Styles  enthaelt die Suno Tokens aus Karten 1 bis 14 sowie 17 bis 21  Komma getrennt
Feld B Exclude Styles  enthaelt Karten 15 und 16  Komma getrennt
Feld C Songaufbau  enthaelt Karten 22 bis 24  Zeilenweise

Punkt 4 Neu in v0.1.9
Punkt 4.1 Fix Multi Select Panel unten abgeschnitten
Im Menu 17 beim letzten Untermenue kann das Dropdown Panel am Karten Ende abgeschnitten sein
Jetzt oeffnet es automatisch nach oben wenn unten kein Platz ist und passt die Hoehe dynamisch an
Punkt 4.2 Service Worker Cache auf v0.1.9 aktualisiert

Punkt 5 Wartung Suno Begriffe
Wenn Suno Begriffe geaendert werden sollen dann wird nur suno_terms.js angepasst
Dort steht pro Menue Key z.B 2.1 oder 17.5 eine Liste Anzeige Text -> Suno Token

Quelle
MANUAL Prompt Maschine.docx  Stand 2026-02-27


Punkt 6 Passwort Hürde
Beim Start von index.html und app.html wird ein Passwort abgefragt.
Passwort: BLAUEGANS
Hinweis: Das ist nur eine Browser Hürde, kein echter Zugriffsschutz.
