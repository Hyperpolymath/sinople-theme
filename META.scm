;; SPDX-License-Identifier: AGPL-3.0-or-later
;; SPDX-FileCopyrightText: 2025 Jonathan D.A. Jewell
;;; META.scm — sinople-theme

(define-module (sinople-theme meta)
  #:export (architecture-decisions development-practices design-rationale))

(define architecture-decisions
  '((adr-001
     (title . "RSR Compliance")
     (status . "accepted")
     (date . "2025-12-15")
     (context . "*Alt-journal WordPress theme for the fog-bound, stitched, and emotionally intricate. Built CSS-first with WCAG 2.3 AAA compliance, IndieWeb integration, ARIA-rich semantics, and structured data via JS...")
     (decision . "Follow Rhodium Standard Repository guidelines")
     (consequences . ("RSR Gold target" "SHA-pinned actions" "SPDX headers" "Multi-platform CI")))))

(define development-practices
  '((code-style (languages . ("CSS" "Cap'n Proto" "Dockerfile" "Elixir" "HTML" "JavaScript" "Just" "PHP" "ReScript" "Rust" "SCSS" "Scheme" "Shell" "Tree-sitter Query" "TypeScript")) (formatter . "auto-detect") (linter . "auto-detect"))
    (security (sast . "CodeQL") (credentials . "env vars only"))
    (testing (coverage-minimum . 70))
    (versioning (scheme . "SemVer 2.0.0"))))

(define design-rationale
  '((why-rsr "RSR ensures consistency, security, and maintainability.")))
