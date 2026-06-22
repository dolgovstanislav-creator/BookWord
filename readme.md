# Proiect de Practică Tehnologică - BookWorld

O aplicație web modernă, complet responsive, reprezentând o librărie digitală interactivă dezvoltată pe parcursul celor 120 de ore de stagiu practic.

## 🛠️ Tehnologii Utilizate
* **HTML5 Semantic:** Validare conform standardelor W3C, cu structurare corectă pentru SEO.
* **Bootstrap 5.3.2:** Framework CSS utilizat pentru grila fluidă responsive și componentele dinamice (Navbar collapse, Acordeon, Carusel).
* **CSS3 Custom:** Stiluri personalizate utilizând variabile globale adaptate cromaticii cerute (Maro Ciocolată și Portocaliu).
* **JavaScript (Vanilla JS):** Manipulare nativă a DOM-ului, fără dependințe externe, implementând validări riguroase, stocare locală (`localStorage`) și filtrare dinamică de date.

## 📁 Structura Directoarelor
Proiectul respectă organizarea strictă a modulelor:
* `/` (Rădăcină): Pagini HTML principale, documentație și iconiță browser.
* `/css`: Fișierul unic de stilizare `style.css`.
* `/js`: Scripturile de logică, validare, gestiune catalog și salvare liste de preferințe.
* `/img`: Resursele grafice organizate pe categorii (echipe, coperți cărți, evenimente, elemente grafice hero).

## 🚀 Funcționalități JavaScript Implementate
1. **Filtrare & Sortare (`js/catalog.js`):** Permite utilizatorilor să segmenteze setul de peste 12 cărți după gen și să le ordoneze în timp real în funcție de preț.
2. **Wishlist Persistent (`js/wishlist.js`):** Adăugarea și păstrarea elementelor selectate în memoria locală a browserului (`localStorage`).
3. **Validare Formular (`js/validation.js`):** Verifică prin expresii regulate (Regex) corectitudinea datelor din formularele de contact și adăugare recenzii înainte de expediere.
4. **Comportament UI global (`js/main.js`):** Gestionează închiderea automată a meniului hamburger la click în exterior și acționarea fluidă a butonului de tip *Back to Top*.