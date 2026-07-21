<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:simplicion-design-rules -->
# Simplicion Design & Theme Rule Book

**CRITICAL RULE: DO NOT use dark mode (`bg-[#050505]`, `bg-black`, `prose-invert`) on this project!** 
The entire Simplicion website follows a strict **LIGHT MODE** positive blue aesthetic.

## Core Theme Constraints
1. **Backgrounds**: Use `bg-background` (white) for pages, and `bg-surface/50` or `bg-surface/40` (pale blue) for cards/containers. Never force dark backgrounds.
2. **Text**: Use `text-text-primary` (dark slate) for headings and `text-text-secondary` (gray slate) for body text. DO NOT use `text-white` unless on a dark badge.
3. **Typography**: Use `--font-michroma` for display headings, `--font-inter` for body, and `--font-space-grotesk` for numbers/tech elements.
4. **Components**: Always use the predefined `Container`, `SectionHeading`, `Button`, and `GlassCard` (or `glass` and `gradient-border` utility classes).
5. **Glows**: Subtle glows are allowed (e.g. `bg-primary/5`), but they must sit on the light `bg-background`.

When creating new pages, strictly adhere to these rules and match the aesthetic of the homepage (`src/app/page.tsx`).
<!-- END:simplicion-design-rules -->
