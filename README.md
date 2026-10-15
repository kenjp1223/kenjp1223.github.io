# kenjp1223.github.io

Personal academic website for **Kentaro K. Ishii, Ph.D.** — plain HTML and CSS, no build
step, no Ruby, no Jekyll. GitHub Pages serves it exactly as it sits in this repo.

Live at: **https://kenjp1223.github.io**

---

## Deploying (first time, ~3 minutes)

1. On GitHub, create a new **public** repository named exactly:

       kenjp1223.github.io

   The name must match your username exactly, or the site will not be served at the root URL.

2. From this folder, push it:

   ```bash
   git init
   git add .
   git commit -m "Personal academic website"
   git branch -M main
   git remote add origin https://github.com/kenjp1223/kenjp1223.github.io.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages**. Under "Build and deployment", set
   Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.

4. Wait 1–2 minutes, then open https://kenjp1223.github.io

To update anything later: edit the file, then `git add . && git commit -m "update" && git push`.
The live site refreshes within a minute.

---

## Using a custom domain (optional)

Buy a domain, then create a file named `CNAME` in this folder whose only contents are the
bare domain, e.g.:

    kentaroishii.com

Push it, then at your registrar add these DNS records:

| Type  | Name | Value |
|-------|------|-------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| CNAME | www  | kenjp1223.github.io |

Then in Settings → Pages, enter the domain and tick **Enforce HTTPS**.

---

## Editing

| What you want to change | File |
|---|---|
| Bio, news items, selected papers | `index.html` |
| Research themes | `research.html` |
| Full publication list | `publications.html` |
| Repos and tools | `code.html` |
| CV sections and the embedded PDF | `cv.html` |
| Email, address | `contact.html` |
| Colors, fonts, spacing | `assets/css/style.css` (tokens at the very top) |
| Photo | replace `assets/img/profile.jpg` (3:4 portrait, ~600×800) |
| CV PDF | replace `assets/pdf/Kentaro_Ishii_CV.pdf`, keep the filename |

### Adding a publication

Copy an existing `<li class="pub">` block in `publications.html` and edit it. The pieces:

- `<div class="venue v-journal">` — use `v-preprint` for preprints (it renders in accent color)
- `<strong>Ishii, K.K.</strong>` — keeps your name bold in the author list
- `<span class="role">First author</span>` — optional badge, delete the span if not wanted
- The abstract block is optional; delete the `Abstract` button and the `<div class="abs">`
  together if there is no abstract, and keep the `id`/`aria-controls` pair unique if there is.

### Colors

Everything is driven by CSS custom properties at the top of `assets/css/style.css`. The
accent is `--accent` (light) and the `[data-theme="dark"]` block (dark). Change those two
values and the whole site follows.

---

## Placeholders still to fill

- `code.html` — three `[LINK TO ADD]` repository URLs.
- No Google Scholar link anywhere; add one to `index.html` and `contact.html` if you want it.

---

## Notes

- `.nojekyll` tells GitHub Pages to serve the files as-is rather than running them through
  Jekyll. Do not delete it.
- Dark mode follows the visitor's system setting and can be overridden with the toggle in the
  nav; the choice is remembered in the browser.
- Fonts (Inter, Source Serif 4) load from Google Fonts. Everything else is self-contained.
