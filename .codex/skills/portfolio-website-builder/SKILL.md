---
name: portfolio-website-builder
description: Build premium, high-end React/Vite single-page portfolio websites optimized for all screen sizes, including ultrawide layouts. Use when creating or redesigning a portfolio site that should feel restrained, professional, spacious, and polished with subtle micro-interactions and clean outbound project links.
---

# Portfolio Website Builder

Create a personal portfolio site that feels polished, structurally strong on large screens, and engaging through subtle interactions rather than loud animations.

## Workflow

1. Start with the user's stack and content needs.
2. Default to a single-page layout unless multi-page is explicitly requested.
3. Structure the page with these core sections:
   - Hero with name, role, and sharp one-sentence value proposition
   - About with context and background
   - Skills with categorized grids, not flat lists
   - Projects with 2 to 4 featured cards and live/repo links
   - Experience or timeline
   - Contact with easy direct paths like email and GitHub
4. Keep copy concise, punchy, and professional.
5. Make every project card or button redirect to a useful destination such as a live site, repository, PDF, or standalone HTML page.

## Design & Layout Rules

- Keep the layout fluid and spacious on ultrawide screens.
- Use wide content rails with generous responsive padding so the page never feels cramped.
- Avoid chaotic backgrounds, heavy drop shadows, and loud gradient text.
- Favor precise typography, generous whitespace, and thin structural borders.
- Let skill and project grids expand naturally from 1-2 columns into a balanced 3-4 column layout where space allows.
- Aim for a simple, premium feel inspired by Apple-style restraint, not visual noise.

## Animation & Interaction Rules

- Use one unified interaction system for buttons, cards, and nav links.
- Keep hover feedback snappy and subtle.
- Use controlled reveal timing for section cards and list items.
- Keep motion minimal and elegant.
- Include one subtle system anchor, such as a scroll progress bar or active navigation state.
- Avoid spinning, bouncing, flash, or gimmicky entrance effects.

## Implementation Notes

- In React/Vite, prefer simple component composition and reusable section data.
- Keep styling organized and readable.
- Ensure no horizontal scrolling on any viewport size.
- Preserve accessibility basics: semantic headings, readable contrast, keyboard focus states, and descriptive link text.

## Finish With

- A clean build with zero TypeScript or lint errors.
- A 4K/ultrawide layout check to confirm the design still feels balanced.
- A final pass to make sure the homepage can be scanned in under 60 seconds.
