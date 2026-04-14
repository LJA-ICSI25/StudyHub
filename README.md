# Study Hub

A small static “hub” page that lists courses and opens each one in the right viewer: a full HTML site in an iframe, plain-text chapters with a sidebar, or a placeholder card.

Course content lives under `pages/` as **copies** you maintain here. Editing originals elsewhere does not update these files.

## Run it

Open `index.html` in a browser, or serve the folder with any static server (helpful if embedded sites assume HTTP or use modules).

**Deep link:** append `?course=<id>` to jump straight to a course (for example `?course=ccna`). The hub updates the URL when you pick a course; use **All courses** to return to the grid.

## Layout

| Path | Role |
|------|------|
| `index.html` | Shell: landing grid, iframe host, TXT viewer, placeholder |
| `css/hub.css` | Hub and viewer styles |
| `js/registry.js` | Course list (`STUDY_HUB_COURSES`) |
| `js/hub.js` | Routing, cards, URL sync |
| `js/txt-viewer.js` | Sidebar chapters + content for `txt-chapters` courses |
| `pages/<course>/` | Per-course assets (HTML site and/or `notes.js`) |

## Add a course

1. Create `pages/<your-id>/` and put your content there.
2. Add an entry to `js/registry.js` (see types below).
3. For **txt-chapters**, add a `<script>` in `index.html` that loads `pages/<your-id>/notes.js` **before** `hub.js` (same pattern as Tech+).

## Course types

### `iframe`

Embed a static HTML site from `pages/<id>/`.

- Registry: `type: "iframe"`, `src` pointing at your entry file (for example `./pages/ccna/index.html?embed=1` if the site supports that query).

### `txt-chapters`

Chapters are a global array on `window`, defined in `pages/<id>/notes.js`.

- Registry: `type: "txt-chapters"`, `notesGlobal` set to the global name (for example `"TECHPLUS_NOTES"`).
- Each chapter is an object with at least `id`, `title`, and `txt` (see comments in `pages/techplus/notes.js`).

### `placeholder`

Shows a “Coming soon” card using the entry’s `description` as the body text. Use this for courses you have not wired up yet.

## Current registry

Defined in `registry.js`: CCNA (iframe), Tech+ (txt-chapters), and a placeholder entry for future courses.
