# Math 172 Sentence Frames

A static, projector-friendly classroom app for precalculus mathematical discourse.

## Included

- All 39 textbook objectives, grouped by Units 1–5.
- Eight discourse categories.
- General starters and content-specific frames.
- Select up to three frames, adjust text size, and present on the board.
- Optional directions for Think–Pair–Share, Turn & Talk, Explain & Restate, Compare Approaches, and Pair → Group of Four. Choose Frames only to hide the directions.

## Try it locally

Open `index.html` in a browser. No installation, account, API key, or build step is required. Press Esc to exit presentation mode. Use F11 on Windows for browser fullscreen.

## Put it on GitHub

1. Extract this ZIP.
2. Create a new GitHub repository, such as `math172-sentence-frames`.
3. Upload the extracted files directly to the repository root. Do not upload the ZIP itself.
4. Commit the files. `index.html`, `app.js`, `frames.js`, and `netlify.toml` should sit together at the root.

## Deploy from GitHub to Netlify

Connect Netlify to that repository. This is a plain static site:

- Base directory: leave blank.
- Build command: leave blank.
- Publish directory: `.` (the repository root).

The included `netlify.toml` sets the publish directory. Future commits to the connected production branch can be deployed by Netlify.

For a manual deployment, upload the extracted folder containing `index.html` to Netlify's manual deployment area.

## Edit the frames

Frame content lives in `frames.js`: `CATEGORIES`, `GENERAL`, and `CONTENT`. Each content entry has a code, title, unit, and category-to-frame mapping. The interface and projection behavior live in `app.js`; page styling lives in `index.html`.

Frames follow the instructor-supplied textbook objectives and discourse collection. This export contains the working static app, with no ChatGPT hosting dependencies or sign-in requirement. It does not collect student responses.

## Wild cards

Choose Wild card to enter a custom frame or prompt and optionally attach a PNG, JPEG, GIF, or WebP image under 8 MB. Add an image description, select a discussion routine, and project the card.

Wild cards are held only in memory for the current session. Refreshing or closing the page clears them. There is no save feature, database, browser storage, or import/export.
