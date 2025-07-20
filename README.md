# 🌿 Sinople Journal Theme

**Alt-journal WordPress theme for the fog-bound, stitched, and emotionally intricate. Built CSS-first with WCAG 2.3 AAA compliance, IndieWeb integration, ARIA-rich semantics, and structured data via JSON-LD and Open Graph. A vessel for storytelling, resistance, and poetic presence.**

---

## 🧶 Overview

*Sinople* is a narrative environment for layered expression. It's named after a heraldic pigment once red, now green—an emblem of contradiction and agency. This theme transforms WordPress into a mist-soaked loom for thoughts, threads, and constructs. CSS-first by design, it privileges performance, readability, and symbolic structure while embracing radical inclusivity and decentralized publishing.

---

## ✨ Key Features

- **CSS-First Architecture**  
  Fast-rendering, mobile-responsive, fully declarative stylesheets. Minimal JS footprint for accessibility enhancements only.

- **WCAG 2.3 AAA Compliance**  
  Visible focus indicators, skip links, font controls, dark/light mode toggle, motion sensitivity respect, and semantic HTML throughout.

- **ARIA & Semantic HTML**  
  Meaningful landmarks (`main`, `navigation`, `banner`), structured role attributes, and keyboard navigation tailored for all readers.

- **IndieWeb Integration**  
  - Microformats v2: `h-entry`, `h-card`, `p-name`, etc.  
  - Webmention ready  
  - Post Kinds support (note, reply, bookmark)  
  - POSSE and `u-syndication` links

- **Structured Metadata Layer**  
  Uses **JSON-LD with schema.org** for search engine clarity and semantic depth. Entities are expressed via `@graph` blocks and can later be extended with FOAF or SKOS vocabularies.

- **Open Graph Metadata**  
  Embedded in `<head>` to ensure rich previews when posts are shared across social platforms. Complements structured data with visual affinity.

- **Spans & Constructs**  
  Native support for:
  - *Field Notes*: observational micro-essays  
  - *Characters & Constructs*: symbolic entities like *Eteri Mistveil*  
  - *Threaded Archives*: entries sorted by color, emotional tone, or mythic motif  
  - *Glosses*: footnotes with `aria-describedby`  
  - *Portals*: annotated external inspirations

---

<pre>
  
## 🗂 Structure

```plaintext
sinople-theme/
├── style.css          # Theme header + base styles
├── functions.php      # Enqueues + semantic support
├── index.php          # h-entry post template
├── header.php         # Role="banner" + skip links
├── footer.php         # Role="contentinfo"
├── templates/
│   ├── character.php  # h-card constructs
│   └── glosses.php    # aria-describedby footnotes
├── assets/
│   ├── css/           # Modular styles (base, spans, accessibility)
│   └── images/        # Background textures, fog overlays
├── semantic/
│   └── metadata.jsonld # Structured data blocks
│   └── sinople.ttl    # (Optional) Turtle-form ontology
├── screenshot.png     # Theme preview
├── LICENSE            # GPL v3
└── README.md          # This file

</pre>

📜 Licensing
GPL v3 for all code: open-source, remixable, and ethically grounded.

CC BY 4.0 for narrative, poetic, or visual assets unless otherwise stated.

Ontological data (sinople.ttl, JSON-LD) may carry dual license for reuse clarity.

💬 Semantic & Ontological Notes
Sinople embraces structured data as symbolic artifact. This includes:

JSON-LD blocks for posts, personas, and glosses using Article, Person, and custom types.

Open Graph meta tags to aid social previews (og:title, og:image, etc.)

Optional RDFa layer to annotate in-page entities, particularly glosses and threaded archives.

Future VoID and OWL support for expressing constructs as Linked Data.

These layers are modular and can be added gradually without disturbing the theme’s core weave.

🚀 Getting Started
Clone into wp-content/themes/:
🚀 Getting Started
Clone into wp-content/themes/:

<pre>
bash
git clone https://github.com/yourusername/sinople-theme.git
Activate via WP Admin
</pre>pre>
  
Install IndieWeb plugins (Webmention, Post Kinds, IndieAuth)

Customize spans via CSS modules and semantic templates

♿ Accessibility Commitment
Sinople is built with care for all modes of reading:

Screen reader-friendly

Keyboard navigable

Motion-respecting

Braille-compatible flow

Semantic hierarchy and visible focus at all stages

Accessibility is not an afterthought—it’s woven into the theme's voice.

🪡 Author
Crafted with quiet resistance and stitched agency by Jonathan Inspired by mist, mythos, and memory

🌐 Contributions
Contributions welcome—be they code, glosses, critiques, or semantic annotations. No roadmap, only threads. Follow one.
git clone https://github.com/yourusername/sinople-theme.git
Activate via WP Admin

Install IndieWeb plugins (Webmention, Post Kinds, IndieAuth)

Customize spans via CSS modules and semantic templates

♿ Accessibility Commitment
Sinople is built with care for all modes of reading:

Screen reader-friendly

Keyboard navigable

Motion-respecting

Braille-compatible flow

Semantic hierarchy and visible focus at all stages

Accessibility is not an afterthought - it’s woven into the theme's voice.

🪡 Author
Crafted with quiet resistance and stitched agency by Jonathan Inspired by mist, mythos, and memory

🌐 Contributions
Contributions welcome - be they code, glosses, critiques, or semantic annotations. No roadmap, only threads. Follow one.
