[English](README.md) · [العربية](i18n/README.ar.md) · [Español](i18n/README.es.md) · [Français](i18n/README.fr.md) · [日本語](i18n/README.ja.md) · [한국어](i18n/README.ko.md) · [Tiếng Việt](i18n/README.vi.md) · [中文 (简体)](i18n/README.zh-Hans.md) · [中文（繁體）](i18n/README.zh-Hant.md) · [Deutsch](i18n/README.de.md) · [Русский](i18n/README.ru.md)

# AgInTi Website

![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-222222?logo=github&logoColor=white)
![Domain](https://img.shields.io/badge/Domain-agent.lazying.art-00a896)
![Static](https://img.shields.io/badge/Stack-Static%20HTML%2FCSS%2FJS-f97316)
![i18n](https://img.shields.io/badge/i18n-11%20languages-1f6feb)

Bright landing site for **AgInTi** (`銀銦釱科技股份有限公司`), positioned around autonomous laboratory intelligence for chemistry, biomedicine, and scientific operations.

Live site: `https://agent.lazying.art/`

## Snapshot

| Area | Direction |
| --- | --- |
| Company focus | Autonomous labs, chemistry workflows, biomedical research operations |
| Product link | AgInTiFlow on GitHub |
| Deployment | GitHub Pages from `docs/` |
| Custom domain | `docs/CNAME` -> `agent.lazying.art` |
| Frontend | Dependency-free HTML, CSS, and JavaScript |

## Local Preview

```bash
cd /home/lachlan/ProjectsLFS/Agent/AgInTiLanding
python3 -m http.server 4174 --directory docs
```

Open `http://127.0.0.1:4174`.

## Site Structure

```text
AgInTiLanding/
├── README.md
├── i18n/                 # Localized README files
└── docs/
    ├── CNAME             # GitHub Pages custom domain
    ├── index.html        # Landing page
    ├── styles.css        # Bright modern visual system
    ├── app.js            # Language dropdown behavior
    └── assets/
        └── aginti-logo.png
```

## Content Direction

- Keep the top message concise: autonomous labs, faster discovery.
- Use bright vivid color, clean spacing, and modern lab-tech visuals.
- Mention AgInTiFlow as the first public product layer.
- Keep English and Traditional Chinese content available in the live website dropdown.

## Deployment Notes

GitHub Pages should serve from the `main` branch and `/docs` folder. The custom domain is controlled by `docs/CNAME`.
