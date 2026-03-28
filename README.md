# Portfolio — Muhammad Sukry

**Status:** Active
**Owner:** Muhammad Sukry
**Purpose:** Professional portfolio showcasing EPCC engineering experience, skills, and projects.

---

## Live Site

Deployed at: [portofolio-muhammad-sukry.vercel.app](https://portofolio-muhammad-sukry.vercel.app/)

---

## Tech Stack

| Technology | Role |
|---|---|
| Next.js 14 | Framework |
| React 18 | UI Components |
| Three.js | 3D Models |
| Framer Motion | Animations |
| Tailwind CSS | Styling |
| EmailJS | Contact Form |
| Vercel | Deployment |

---

## Pages

| Page | Content |
|---|---|
| **Home** | Hero with 3D model, navigation wheel |
| **About** | Bio, experience stats, skills by discipline, software icons |
| **Projects** | EPCC project cards with sector, disciplines, role |
| **Certifications** | Professional certifications and training |
| **Contact** | Contact form (EmailJS) |

---

## Content Management

All displayable content is centralized in `src/app/data.js`.
Content templates (for reference/planning) are in `content/`.

### How to Update Content

1. Edit `src/app/data.js` — update the relevant data array
2. For projects: update `projectsData`
3. For skills: update `skillCategories` and `softwareSkills`
4. For certifications: update `certificationsData`
5. For navigation: update `BtnList`
6. Run `pnpm dev` to preview changes locally

### Content Templates

Planning templates live in `content/` as markdown files:
- `content/projects/template.md` — project entry reference
- `content/skills/template.md` — skill inventory reference
- `content/experience/template.md` — work history reference
- `content/certifications/template.md` — certification entry reference

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

---

## Deployment

Push to GitHub and deploy via Vercel. Environment variables needed for contact form:

```
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
```

---

## Shared Infrastructure

This project lives within the executive assistant environment:
- **Agents** — All EPCC agents from `.claude/agents/` are available
- **Memory** — Shared memory system across all projects
- **Knowledge Base** — Can reference `engineering-learning` knowledge

---

## Credits

- Original template: [CodeBucks — Next.js Creative Portfolio](https://github.com/codebucks27/Next.js-Creative-Portfolio-Website)
- 3D Models: [Sketchfab](https://sketchfab.com/) (CC Attribution)
- Skill Icons: [skillicons.dev](https://skillicons.dev)
