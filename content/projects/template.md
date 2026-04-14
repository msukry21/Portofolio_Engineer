# Project Data Reference

Data source: `src/app/data.js` → `projectsData`

---

## 1. Berau Coal Mining EPCC
- **Sector:** Mining
- **Disciplines:** Electrical, Instrument, Control
- **Role:** Designer & Engineer
- **Deliverables:** BOQ, RFQ, SLD, Control Architecture, Instrument I/O List, Load List
- **Period:** 2025

## 2. Pertamina EPCC Tender
- **Sector:** Oil & Gas
- **Disciplines:** Electrical, Instrument
- **Role:** Designer & Engineer
- **Deliverables:** BOQ, RFQ
- **Period:** 2025

## 3. Power Plant — Tender Phase
- **Sector:** Power Generation
- **Disciplines:** Electrical
- **Role:** Designer & Engineer
- **Deliverables:** Tender documentation
- **Period:** 2025

## 4. ANTAM Gold Processing Plant
- **Sector:** Manufacturing
- **Disciplines:** Electrical, Automation
- **Role:** Electrical Automation Engineer
- **Deliverables:** Electrical & automation system design
- **Period:** 2025

## 5. Bio Farma — Hangar & Building MEP
- **Sector:** Infrastructure
- **Disciplines:** Electrical
- **Role:** Designer & Engineer
- **Deliverables:** MEP engineering
- **Period:** 2025

## 6. SMIB Power System Simulation (Academic)
- **Sector:** Academic
- **Disciplines:** Electrical
- **Role:** Researcher
- **Link:** https://smib-muhammad-sukrys-projects.vercel.app/

## 7. Desain Teknik Elektro / DESTRO (Academic)
- **Sector:** Academic
- **Disciplines:** Electrical, Automation
- **Role:** Designer
- **Link:** https://muhammadsukry.wordpress.com/2024/10/09/desain-teknik-elektro-destro/

---

## To Add a New Project

Add an entry to `projectsData` in `src/app/data.js`:

```js
{
  id: 8,
  name: "Project Name",
  description: "One-line description",
  date: "YYYY-MM-DD",
  sector: "Oil & Gas",
  disciplines: ["Electrical", "Instrument"],
  role: "Designer & Engineer",
  demoLink: "#",
},
```
