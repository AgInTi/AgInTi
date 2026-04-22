[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

# AgInTi Website

AgInTi（`銀銦釱科技股份有限公司`）的明亮 landing site，定位為面向化學、生物醫學與科研營運的自主實驗室智能。

正式網站：`https://agent.lazying.art/`

## 快照

| 領域 | 方向 |
| --- | --- |
| 公司焦點 | 自主實驗室、化學工作流、生物醫學研究營運 |
| 產品連結 | GitHub 上的 AgInTiFlow |
| 部署 | GitHub Pages，來源為 `docs/` |
| 自訂網域 | `docs/CNAME` -> `agent.lazying.art` |
| 前端 | 無依賴 HTML、CSS、JavaScript |

## 本機預覽

```bash
cd /home/lachlan/ProjectsLFS/Agent/AgInTiLanding
python3 -m http.server 4174 --directory docs
```

開啟 `http://127.0.0.1:4174`。

## 結構

```text
AgInTiLanding/
├── README.md
├── i18n/
└── docs/
    ├── CNAME
    ├── index.html
    ├── styles.css
    ├── app.js
    └── assets/
        ├── aginti-logo.png
        └── aginti-logo-transparent.png
```

## 內容方向

- 頂部文字保持簡潔：自主實驗室，更快發現。
- 使用明亮鮮明色彩、乾淨間距、現代實驗室科技感。
- 提及 AgInTiFlow 作為第一個公開產品層。
- 網站內保留英文與繁體中文切換。
