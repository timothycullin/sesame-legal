# Sesame Legal

## Project philosophy

Sesame Legal is a mature, working Next.js website.

Preserve the existing visual design and behaviour unless a change is explicitly requested.

Prefer small, targeted changes over broad refactors.

Do not introduce abstractions unless they clearly reduce duplication or improve consistency.

Do not migrate routing architecture or restructure the project unless explicitly requested.

Avoid unrelated changes.

## Styling

Keep page-specific styling local.

Shared components should control only genuinely shared behaviour or layout.

The PageShell controls the outer page frame only:
- maximum usable width
- centring
- outer horizontal padding
- outer vertical padding

Pages remain responsible for:
- typography
- sections
- cards
- grids
- internal spacing
- controls
- page-specific responsive behaviour

Share the frame; keep the pages sovereign.

## Architecture

Sesame Legal currently uses the Next.js Pages Router.

Do not migrate to the App Router unless explicitly requested.

Work within the existing project structure unless there is a clear reason to change it.

## Validation

After code changes:
- run `npm run lint`
- run `npm run build`
- run `git diff --check`
- review the diff before committing
