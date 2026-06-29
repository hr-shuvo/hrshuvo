# Section Image Plan

A thematic image per section to break up text and give each area a visual anchor.

---

## About Page (`app/about/page.tsx`)

| Section | Image idea |
|---|---|
| Introduction | Portrait / headshot of you |
| Journey | A road, path, or timeline illustration |
| Interests | Chess board, open book, or competitive coding visual |
| Awards & Achievements | Trophy or medal illustration |
| Contact | Envelope, speech bubble, or handshake illustration |

---

## Experience Page (`app/experience/page.tsx`)

| Section | Image idea |
|---|---|
| Page header | Office / workspace / career illustration |
| Each company | Company logo (replace the colored initials box) |
| Current chapter (Independent) | Rocket or solo builder illustration |

---

## Expertise Page (`app/expertise/page.tsx`)

| Section | Image idea |
|---|---|
| Skills grid | Each skill area gets a small icon (server for Backend, monitor for Frontend, phone for Mobile, database for Data, cloud for Infrastructure, brain for AI) |
| Education | University logo (already exists as `/diu-logo.png`) |

---

## Projects Page (`app/projects/page.tsx`)

| Section | Image idea |
|---|---|
| Each project card | Browser mockup screenshot of the live product |
| Earlier projects list | A small thumbnail or icon per project |

---

## Home Page (`app/page.tsx`)

| Section | Image idea |
|---|---|
| Hero background | Replace faint "S" letterform with a subtle abstract illustration |

---

## Sections (components/sections/)

| Section | File | Image idea |
|---|---|---|
| Philosophy | `PhilosophySection.tsx` | One illustration per principle (code editor, rocket, speedometer, database) |
| Building | `BuildingSection.tsx` | Illustration per feature card (brain/learning, people/teachers, wifi/infra) |
| Beyond the code | `BeyondSection.tsx` | Personal photo, book stack, chess piece, lightbulb |
| Contact CTA | `ContactSection.tsx` | Large envelope or "let's talk" illustration |

---

## Image Sources (free, no attribution required)

- **Illustrations**: [undraw.co](https://undraw.co) — clean SVG illustrations, color-customizable
- **Icons**: [simpleicons.org](https://simpleicons.org) — tech stack logos (React, .NET, Flutter, AWS…)
- **Stock photos**: [unsplash.com](https://unsplash.com) — workspace, books, chess photos
- **Custom icons**: [lucide.dev](https://lucide.dev) — already used in the project

---

## Where images go

All images belong in `public/` and are referenced as `/filename.ext` in the code.

```
public/
  illustrations/
    contact.svg
    awards.svg
    journey.svg
    interests.svg
    rocket.svg
    workspace.svg
  icons/
    backend.svg
    frontend.svg
    mobile.svg
    data.svg
    infra.svg
    ai.svg
  screenshots/
    ezdu.png
    better-ielts.png
```
