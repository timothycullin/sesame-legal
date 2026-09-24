# Sesame Legal — AI-Native Development Philosophy

## Core approach

Sesame Legal follows an AI-first, file-by-file design and development philosophy.

**Design locally. Audit globally. Promote proven repetition.**

Prioritise clarity, independence, and easy AI-driven editing through page-led, understandable code.

Pages should remain as self-contained as reasonably practical. They should own their content, SEO, page-specific logic, typography, internal spacing, responsive behaviour, and distinctive visual decisions.

Shared infrastructure should exist where a rule has become genuinely common across the product.

The aim is not maximum abstraction. The aim is clear ownership.

## Local-first development

Work freely and deliberately at the page or component level.

A page should be understandable when opened, pasted, reviewed, or edited largely in isolation.

Prefer explicit local code over hidden dependencies where the local implementation is clearer.

A self-contained page does not mean duplicating every rule. It means the page remains sovereign over what is specific to that page.

## Shared infrastructure

Do not abstract merely because two values happen to match.

Promote a rule into shared infrastructure when repeated use demonstrates that it represents a real product-level decision.

Examples include:

- global defaults
- core semantic colours
- shared page-frame geometry
- genuinely reusable components
- accessibility defaults
- validation and development conventions

Shared infrastructure should provide stable foundations without taking ownership away from individual pages.

**Share the frame; keep the pages sovereign.**

## Page shells

Shared page shells control the outer frame of a page where appropriate:

- usable page width
- centring
- outer horizontal padding
- outer vertical padding
- established page-frame variants

Pages continue to control:

- headings
- typography
- sections
- cards
- grids
- internal widths
- internal spacing
- controls
- page features
- interactions
- page-specific responsive behaviour

## Global styles

Global styles should establish true product-wide defaults and semantic foundations.

They may include:

- font defaults
- box sizing
- accessibility and focus defaults
- selection behaviour
- established semantic colour tokens

Global styles should not become a dumping ground for page-specific presentation.

## Consistency

Consistency should come from shared principles and proven common rules, not forced identical CSS values.

Similar pages do not need to use identical typography, spacing, colours, or responsive behaviour where differences create useful hierarchy.

Identical values should not automatically become tokens.

Different values should not automatically be treated as drift.

Audit related pages periodically to distinguish:

- intentional variation
- established shared patterns
- accidental drift

Only the last two require architectural consideration.

## Typography and spacing

Use `rem` by default for dimensional sizing and spacing.

Allow page-led typography and spacing where hierarchy or context requires it.

Do not normalise close values merely to create a cleaner-looking scale.

A typography or spacing system should emerge from repeated successful design decisions rather than being imposed in advance.

## Colours

Use semantic global colour tokens for colours that have clearly become product-wide concepts.

Retain local colour systems where they express a distinct page, feature, or hierarchy.

Using identical colours everywhere can flatten visual hierarchy.

Local semantic aliases may reference global tokens where both concepts genuinely represent the same underlying colour.

## File clarity

Use a simple file-identifying comment at the top of code files where useful, for example:

`/* home.module.css */`

or:

`// index.js`

This helps both the developer and AI immediately identify a file when it is viewed, pasted, reviewed, or edited in isolation.

Use simple JavaScript comment dividers where useful:

- Imports
- Logic
- Markup

Prefer straightforward organisation over elaborate internal frameworks.

## SEO and page ownership

Keep essential `Head` / SEO configuration at page level unless there is a strong reason to centralise a specific concern.

Pages should make their purpose, content, and metadata easy to understand without tracing through unnecessary layers.

## Accessibility and responsiveness

Use semantic structure, clear headings, descriptive links, visible keyboard focus states, and responsive layouts for desktop, tablet, and mobile.

Accessibility should be part of normal implementation rather than a later corrective layer.

## AI-driven development

The codebase should be easy for AI to inspect, understand, modify, test, and review safely.

Prefer:

- explicit code
- small changes
- understandable files
- clear ownership
- reversible patches
- validation after changes
- clean Git commits
- architectural changes supported by demonstrated need

Avoid abstraction for abstraction's sake.

AI should be able to work file by file while still auditing the product globally for consistency and drift.

## Development loop

The preferred development loop is:

**Design locally → implement narrowly → validate → inspect visually → audit globally → promote proven patterns → commit cleanly.**

This allows Sesame Legal to evolve organically without accumulating accidental inconsistency or unnecessary architecture.

## Guiding principle

**Local by default. Shared when proven. Explicit always.**
