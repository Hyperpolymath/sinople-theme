# Sinople Theme Roadmap

**Last Updated**: 2025-12-17

This roadmap outlines the planned development phases for the Sinople WordPress journal theme. Items are organized by priority and approximate release versions.

---

## Current Status: v0.1.x (Foundation Phase)

### Completed
- [x] Project structure and documentation
- [x] Semantic layer (JSON-LD, microformats, RDFa)
- [x] Security headers implementation (`inc/security.php`)
- [x] OWASP Top 10 mitigation strategy
- [x] CI/CD pipeline with multi-language support (PHP, Rust, ReScript)
- [x] CodeQL security scanning
- [x] OSSF Scorecard integration
- [x] Dependabot and Renovate for dependency updates
- [x] Container build with Trivy vulnerability scanning
- [x] Accessibility foundations (ARIA, semantic HTML)
- [x] ReScript architecture for frontend logic

### In Progress
- [ ] Core WordPress theme files (`style.css`, `functions.php`, `index.php`)
- [ ] WCAG 2.3 AAA compliance testing
- [ ] IndieWeb plugin integration testing

---

## v0.2.0 - Security Hardening (Target: Q2 2025)

### Security Enhancements
- [ ] Automated security scanning in CI/CD (completed - CodeQL, Trivy)
- [ ] Dependency vulnerability monitoring (completed - Dependabot/Renovate)
- [ ] SBOM (Software Bill of Materials) generation (implemented in release workflow)
- [ ] Signed containers via cosign/sigstore (implemented)
- [ ] Complete security.txt with production values
- [ ] Add PGP key for security contact

### Infrastructure
- [ ] Production-ready nginx configuration
- [ ] Kubernetes/Podman deployment manifests
- [ ] Health check endpoints
- [ ] Rate limiting implementation

### Accessibility
- [ ] Automated accessibility testing with Playwright + axe-core
- [ ] Screen reader testing documentation
- [ ] Contrast ratio validation tooling

---

## v0.3.0 - Feature Complete (Target: Q3 2025)

### Authentication & Security
- [ ] FIDO2/WebAuthn support for 2FA
- [ ] Audit logging with tamper-evident storage
- [ ] Security dashboard in WordPress admin
- [ ] Automated penetration testing integration

### Spans Implementation
- [ ] Field Notes template and styling
- [ ] Characters & Constructs template (`h-card` markup)
- [ ] Glosses with `aria-describedby` support
- [ ] Portals (annotated external links)
- [ ] Threaded Archives (color/emotion/motif organization)

### IndieWeb
- [ ] Full Webmention send/receive testing
- [ ] Post Kinds integration (note, reply, bookmark, like)
- [ ] POSSE workflow documentation
- [ ] Micropub endpoint support
- [ ] IndieAuth integration

### Semantic Web
- [ ] Complete JSON-LD schema for all post types
- [ ] FOAF vocabulary integration
- [ ] SKOS support for taxonomies
- [ ] VoID dataset description
- [ ] OWL ontology for symbolic entities

---

## v1.0.0 - Production Ready (Target: Q4 2025)

### Compliance & Certification
- [ ] SOC 2 Type II compliance documentation
- [ ] Bug bounty program launch
- [ ] Third-party security audit
- [ ] OSSF Best Practices badge (passing level)
- [ ] WordPress.org theme directory submission

### Performance
- [ ] Core Web Vitals optimization
- [ ] Critical CSS extraction
- [ ] Image optimization pipeline
- [ ] Service worker for offline support
- [ ] WASM performance benchmarks

### Documentation
- [ ] Complete theme handbook
- [ ] Developer API documentation
- [ ] Accessibility testing guide
- [ ] Deployment best practices
- [ ] Contribution guidelines update

---

## Post-1.0 (Future Considerations)

### Advanced Features
- [ ] Full ActivityPub support
- [ ] Bluesky AT Protocol integration
- [ ] Matrix/XMPP bridging
- [ ] E2E encrypted private posts
- [ ] AI-assisted content tagging (local, privacy-preserving)

### Internationalization
- [ ] RTL language support
- [ ] Translation-ready theme strings
- [ ] Locale-specific semantic markup

### Extensibility
- [ ] Block editor (Gutenberg) full support
- [ ] Custom block patterns for spans
- [ ] Theme.json v3 configuration
- [ ] Child theme boilerplate

---

## Technical Debt & Maintenance

### Ongoing
- [ ] TypeScript to ReScript migration (see `TS_CONVERSION_NEEDED.md`)
- [ ] Dependency updates via Dependabot/Renovate
- [ ] Security advisory monitoring
- [ ] PHP version compatibility (8.1 - 8.4)
- [ ] WordPress version compatibility (6.4+)

### Code Quality
- [ ] PHPStan level 9 compliance
- [ ] 80%+ test coverage target
- [ ] Documentation coverage for all public APIs

---

## Action Items (Immediate)

### Security Configuration Required
The following placeholder values in security files need to be updated:

1. **`.well-known/security.txt`**:
   - Replace `security@example.com` with actual security contact
   - Replace `https://example.com/.well-known/security.txt` with production URL

2. **`SECURITY.md`**:
   - Replace `security@[your-domain]` with actual email
   - Add PGP public key for encrypted vulnerability reports
   - Add PGP fingerprint

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this roadmap and the project.

---

*"No roadmap, only threads. Follow one."* - This structured roadmap exists in tension with Sinople's philosophy of organic growth. Consider these waypoints, not destinations.
