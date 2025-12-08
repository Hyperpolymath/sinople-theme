;;; STATE.scm - Sinople Theme Project State
;;; A checkpoint/restore file for AI conversation continuity
;;; Format: Guile Scheme (homoiconic, human-readable)
;;;
;;; CRITICAL: Download this file at session end.
;;;           Upload it at conversation start to restore context.
;;;
;;; License: MIT + Palimpsest terms (framework)
;;; Project License: GPL-3.0 (theme code), CC BY 4.0 (content)

(define state
  '((metadata
      (format-version . "2.0")
      (schema-version . "2025-12-08")
      (created-at . "2025-12-08T00:00:00Z")
      (last-updated . "2025-12-08T00:00:00Z")
      (generator . "Claude/STATE-system")
      (project . "sinople-theme"))

    (user
      (name . "hyperpolymath")
      (roles . ("developer" "maintainer"))
      (preferences
        (languages-preferred . ("PHP" "ReScript" "Rust" "SCSS" "Scheme"))
        (languages-avoid . ())
        (tools-preferred . ("Deno" "Podman" "Git" "Just" "PHPUnit"))
        (values . ("FOSS" "accessibility" "semantic-web" "IndieWeb" "privacy"))))

    (session
      (conversation-id . "2025-12-08-SINOPLE-STATE")
      (started-at . "2025-12-08T00:00:00Z")
      (messages-used . 0)
      (messages-remaining . 100)
      (token-limit-reached . #f))

    (focus
      (current-project . "Sinople Theme")
      (current-phase . "Post-MVP Enhancement")
      (deadline . #f)
      (blocking-projects . ()))

    ;;; =========================================
    ;;; CURRENT POSITION
    ;;; =========================================
    ;;;
    ;;; Sinople Theme is at v0.1.0 - a PRODUCTION-READY WordPress theme.
    ;;;
    ;;; Achievements:
    ;;; - RSR Silver Level compliance (11/11 Bronze categories)
    ;;; - WCAG 2.3 AAA accessibility (Gold level)
    ;;; - IndieWeb integration (Gold level)
    ;;; - Security hardening (Silver level)
    ;;; - Complete CI/CD pipeline (multi-platform, multi-PHP)
    ;;; - Container-ready deployment (Podman/Docker)
    ;;;
    ;;; The theme is substantially complete and usable.

    (projects
      ;;; =========================================
      ;;; MAIN PROJECT
      ;;; =========================================
      ((name . "Sinople Theme Core")
       (status . "complete")
       (completion . 95)
       (category . "wordpress-theme")
       (phase . "maintenance")
       (dependencies . ())
       (blockers . ())
       (next . ("WordPress.org submission" "User testing feedback"))
       (chat-reference . #f)
       (notes . "Core theme complete: functions.php, 16 PHP modules, templates, SCSS, ReScript, WASM"))

      ((name . "Accessibility Layer")
       (status . "complete")
       (completion . 100)
       (category . "accessibility")
       (phase . "gold-achieved")
       (dependencies . ())
       (blockers . ())
       (next . ())
       (chat-reference . #f)
       (notes . "WCAG 2.3 AAA: skip links, ARIA, keyboard nav, screen reader optimization, motion reduction"))

      ((name . "Semantic Web Layer")
       (status . "complete")
       (completion . 100)
       (category . "semantic-web")
       (phase . "gold-achieved")
       (dependencies . ())
       (blockers . ())
       (next . ())
       (chat-reference . #f)
       (notes . "JSON-LD, RDFa, OWL ontology, VoID, microformats v2, Open Graph"))

      ((name . "IndieWeb Integration")
       (status . "complete")
       (completion . 100)
       (category . "indieweb")
       (phase . "gold-achieved")
       (dependencies . ())
       (blockers . ())
       (next . ())
       (chat-reference . #f)
       (notes . "h-entry, h-card, Webmention, POSSE, JSON Feed, Micropub/Microsub endpoints"))

      ((name . "Security Hardening")
       (status . "complete")
       (completion . 90)
       (category . "security")
       (phase . "silver-achieved")
       (dependencies . ())
       (blockers . ())
       (next . ("Automated security scanning in CI" "SBOM generation" "Signed containers"))
       (chat-reference . #f)
       (notes . "CSP, COEP, COOP, HSTS, OWASP Top 10 mitigated, seccomp profiles"))

      ((name . "Serialization Formats")
       (status . "complete")
       (completion . 100)
       (category . "data-formats")
       (phase . "complete")
       (dependencies . ())
       (blockers . ())
       (next . ())
       (chat-reference . #f)
       (notes . "NDJSON streaming, FlatBuffers, Cap'n Proto RPC"))

      ((name . "Modern Web Features")
       (status . "complete")
       (completion . 100)
       (category . "frontend")
       (phase . "complete")
       (dependencies . ())
       (blockers . ())
       (next . ())
       (chat-reference . #f)
       (notes . "View Transitions, scroll-driven animations, container queries, popover API"))

      ;;; =========================================
      ;;; PLANNED ENHANCEMENTS (LONG-TERM ROADMAP)
      ;;; =========================================
      ((name . "Security Automation")
       (status . "paused")
       (completion . 0)
       (category . "security")
       (phase . "planning")
       (dependencies . ("Sinople Theme Core"))
       (blockers . ())
       (next . ("Add Trivy/Grype scanning to CI" "Generate SBOM on release"))
       (chat-reference . #f)
       (notes . "Enhance CI with automated vulnerability scanning"))

      ((name . "Container Signing")
       (status . "paused")
       (completion . 0)
       (category . "security")
       (phase . "planning")
       (dependencies . ("Security Automation"))
       (blockers . ())
       (next . ("Integrate cosign/sigstore" "Set up key management"))
       (chat-reference . #f)
       (notes . "Sign containers for supply chain security"))

      ((name . "WebAuthn Support")
       (status . "paused")
       (completion . 0)
       (category . "authentication")
       (phase . "planning")
       (dependencies . ())
       (blockers . ())
       (next . ("Design FIDO2 integration" "Implement passkey support"))
       (chat-reference . #f)
       (notes . "Modern passwordless authentication"))

      ((name . "Additional Span Templates")
       (status . "paused")
       (completion . 20)
       (category . "content")
       (phase . "planning")
       (dependencies . ())
       (blockers . ())
       (next . ("Create single-field_note.php" "Create single-construct.php" "Create archive templates"))
       (chat-reference . #f)
       (notes . "Custom templates for each span type"))

      ((name . "Theme Customizer Options")
       (status . "paused")
       (completion . 0)
       (category . "wordpress")
       (phase . "planning")
       (dependencies . ())
       (blockers . ())
       (next . ("Add color scheme options" "Typography controls" "Layout options"))
       (chat-reference . #f)
       (notes . "Expose theme options in WordPress Customizer")))

    ;;; =========================================
    ;;; ROUTE TO MVP v1.0
    ;;; =========================================
    ;;;
    ;;; The project has EXCEEDED MVP. Current state is production-ready.
    ;;;
    ;;; For v1.0 official release, remaining work:
    ;;; 1. WordPress.org theme review submission
    ;;; 2. User documentation polish
    ;;; 3. Optional: Theme Customizer integration
    ;;; 4. Optional: Individual span type templates
    ;;;
    ;;; Estimated completion: 95% (core), 75% (with all optionals)

    ;;; =========================================
    ;;; KNOWN ISSUES
    ;;; =========================================
    ;;;
    ;;; No critical issues. Minor enhancements noted in CHANGELOG.md:
    ;;; - Security scanning not yet automated in CI
    ;;; - SBOM generation not implemented
    ;;; - Container signing not implemented
    ;;; - WebAuthn support not implemented (low priority)

    (issues
      ((id . "ENHANCEMENT-001")
       (severity . "low")
       (title . "Automated security scanning")
       (description . "Add Trivy/Grype to CI pipeline")
       (status . "open")
       (assignee . #f))

      ((id . "ENHANCEMENT-002")
       (severity . "low")
       (title . "SBOM generation")
       (description . "Generate Software Bill of Materials on release")
       (status . "open")
       (assignee . #f))

      ((id . "ENHANCEMENT-003")
       (severity . "low")
       (title . "Container signing")
       (description . "Sign containers with cosign/sigstore")
       (status . "open")
       (assignee . #f))

      ((id . "ENHANCEMENT-004")
       (severity . "low")
       (title . "WordPress.org submission")
       (description . "Submit theme for official WordPress.org directory")
       (status . "open")
       (assignee . #f)))

    ;;; =========================================
    ;;; QUESTIONS FOR MAINTAINER
    ;;; =========================================
    ;;;
    ;;; 1. Priority for v1.0: WordPress.org submission or more span templates?
    ;;; 2. Should Theme Customizer options be in v1.0 or deferred?
    ;;; 3. Any specific accessibility features to add beyond WCAG 2.3 AAA?
    ;;; 4. Target timeline for v1.0 release?
    ;;; 5. Container registry preference (GitHub Packages, Docker Hub, self-hosted)?

    (questions
      ((id . 1)
       (question . "Priority for v1.0: WordPress.org submission or span templates?")
       (context . "Both are complete enough for release, but focus matters"))
      ((id . 2)
       (question . "Should Theme Customizer options be included in v1.0?")
       (context . "Currently not implemented; could be deferred to v1.1"))
      ((id . 3)
       (question . "Additional accessibility features beyond WCAG 2.3 AAA?")
       (context . "Currently at Gold level; room for enhancements"))
      ((id . 4)
       (question . "Target timeline for v1.0 release?")
       (context . "Theme is production-ready; release is a decision"))
      ((id . 5)
       (question . "Container registry preference for distribution?")
       (context . "Containerfile ready; need to choose registry")))

    ;;; =========================================
    ;;; CRITICAL NEXT ACTIONS
    ;;; =========================================

    (critical-next
      ("Review WordPress.org theme submission requirements"
       "Create single-field_note.php template (optional)"
       "Add Theme Customizer controls (optional)"
       "Set up automated security scanning in CI"))

    ;;; =========================================
    ;;; LONG-TERM ROADMAP
    ;;; =========================================
    ;;;
    ;;; v1.0 (Current target)
    ;;; - WordPress.org submission
    ;;; - Documentation polish
    ;;; - User testing integration
    ;;;
    ;;; v1.1 (Enhancement release)
    ;;; - Theme Customizer options
    ;;; - Individual span templates (field_note, construct, gloss, portal)
    ;;; - Archive templates for custom taxonomies
    ;;;
    ;;; v1.2 (Security hardening)
    ;;; - Automated security scanning (Trivy/Grype)
    ;;; - SBOM generation
    ;;; - Signed containers (cosign/sigstore)
    ;;;
    ;;; v2.0 (Major features)
    ;;; - WebAuthn/FIDO2 passkey support
    ;;; - Full Gutenberg block editor integration
    ;;; - FSE (Full Site Editing) compatibility
    ;;; - Advanced theming with theme.json

    (roadmap
      ((version . "1.0")
       (status . "in-progress")
       (completion . 95)
       (features . ("WordPress.org submission" "Documentation polish" "User testing")))
      ((version . "1.1")
       (status . "planned")
       (completion . 20)
       (features . ("Theme Customizer" "Span templates" "Archive templates")))
      ((version . "1.2")
       (status . "planned")
       (completion . 0)
       (features . ("Security automation" "SBOM" "Container signing")))
      ((version . "2.0")
       (status . "planned")
       (completion . 0)
       (features . ("WebAuthn" "Gutenberg blocks" "FSE" "theme.json"))))

    (history
      (snapshots
        ((timestamp . "2025-12-08T00:00:00Z")
         (notes . "Initial STATE.scm creation")
         (projects
           ((name . "Sinople Theme Core") (completion . 95))
           ((name . "Accessibility Layer") (completion . 100))
           ((name . "Semantic Web Layer") (completion . 100))
           ((name . "IndieWeb Integration") (completion . 100))
           ((name . "Security Hardening") (completion . 90))
           ((name . "Serialization Formats") (completion . 100))
           ((name . "Modern Web Features") (completion . 100))
           ((name . "Security Automation") (completion . 0))
           ((name . "Container Signing") (completion . 0))
           ((name . "WebAuthn Support") (completion . 0))
           ((name . "Additional Span Templates") (completion . 20))
           ((name . "Theme Customizer Options") (completion . 0))))))

    (files-created-this-session
      ("STATE.scm"))

    (files-modified-this-session
      ())

    (context-notes . "Sinople Theme is at v0.1.0, production-ready with RSR Silver compliance. Focus areas: WordPress.org submission, optional span templates, Theme Customizer. No blocking issues. Download STATE.scm at session end!")))

;;; =========================================
;;; ARCHITECTURE OVERVIEW
;;; =========================================
;;;
;;; sinople-theme/
;;; ├── Core (95% complete)
;;; │   ├── functions.php      # Module loader
;;; │   ├── header.php         # Semantic header + ARIA
;;; │   ├── footer.php         # Semantic footer
;;; │   ├── index.php          # Main template
;;; │   ├── sidebar.php        # Widget area
;;; │   └── style.css          # Theme header
;;; │
;;; ├── Modules (16 PHP files in inc/)
;;; │   ├── setup.php          # Theme init
;;; │   ├── enqueue.php        # Asset loading
;;; │   ├── security.php       # CSP, HSTS, OWASP
;;; │   ├── accessibility.php  # WCAG 2.3 AAA
;;; │   ├── semantic.php       # JSON-LD, Open Graph
;;; │   ├── indieweb.php       # Microformats, Webmention
;;; │   ├── spans.php          # Custom post types
;;; │   ├── taxonomies.php     # 6 custom taxonomies
;;; │   ├── privacy.php        # CHIPS, consent
;;; │   ├── performance.php    # Critical CSS, lazy load
;;; │   ├── void-integration.php
;;; │   ├── modern-features.php
;;; │   ├── serialization.php
;;; │   ├── ndjson-feed.php
;;; │   ├── flatbuffers.php
;;; │   └── capnproto.php
;;; │
;;; ├── Frontend (100% complete)
;;; │   ├── assets/scss/       # SCSS sources
;;; │   ├── assets/rescript/   # ReScript modules
;;; │   └── assets/wasm/       # Rust WebAssembly
;;; │
;;; ├── Semantic (100% complete)
;;; │   ├── metadata.jsonld    # Theme-level JSON-LD
;;; │   ├── ontology.owl       # OWL ontology
;;; │   ├── void.ttl           # VoID dataset
;;; │   └── constructs/        # Example entities
;;; │
;;; ├── Testing (100% complete)
;;; │   ├── tests/php/         # PHPUnit tests
;;; │   ├── tests/*.ts         # Deno tests
;;; │   └── phpunit.xml        # Test config
;;; │
;;; └── Infrastructure (100% complete)
;;;     ├── docker-compose.*.yml
;;;     ├── Containerfile
;;;     ├── .github/workflows/
;;;     └── deno.json

;;; EOF - Remember to download this file!
