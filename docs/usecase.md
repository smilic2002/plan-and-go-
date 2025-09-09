# Use Case – objašnjenje (Plan&Go)

**Akteri:**
- **Korisnik** – osoba koja planira putovanje (unosi naziv, datume, aktivnosti i troškove).
- **Aplikacija Plan&Go (frontend)** – web sučelje u pregledniku gdje korisnik klika i unosi podatke.
- **Backend API** – jednostavan server koji prima zahtjeve (npr. "spremi putovanje") i vraća podatke.

**Glavne radnje (use cases):**
- Kreiranje putovanja (korisnik upisuje naziv i datume, aplikacija šalje API-ju).
- Pregled postojećih putovanja (aplikacija traži listu od API-ja).
- Dodavanje aktivnosti po danima (npr. obilazak znamenitosti).
- Dodavanje troškova i zbrajanje ukupnog budžeta.

**Cilj:**
Korisnik želi na jednom mjestu složiti plan putovanja i imati evidenciju troškova.

---

```mermaid
usecaseDiagram
actor Korisnik
rectangle PlanGo {
 Korisnik --> (Kreiraj putovanje)
 Korisnik --> (Dodaj aktivnost)
 Korisnik --> (Dodaj trošak)
 Korisnik --> (Pregled putovanja)
}
```