# Venture Domain GEO/SEO Governance Update

Date: 2026-06-21

## What Changed

- Treated `venture-mfg.com` as the canonical main website for public pages, metadata, structured data, XML sitemap and RFQ/contact routing.
- Treated `venture-pcba.com` as a legacy PCBA-focused vertical asset connected to Venture Electronics, not as a separate company or current main website.
- Kept candidate, parked, redirected, employee-email, third-party and entity-context domains out of public navigation, footer links, schema and sitemap.
- Added XML sitemap and robots metadata routes from the current public route allowlist.
- Added canonical metadata and conservative Organization/WebSite JSON-LD without `sameAs`; the legacy PCBA asset is explained through buyer-facing page copy and ordinary links.
- Hid template social links until each channel is confirmed.

## Public Handling Rule

The public website should only name the active buyer-safe relationship:

- Main website: `venture-mfg.com`
- Legacy vertical asset: `venture-pcba.com`
- Inquiry and RFQ route: `info@venture-mfg.com`

Other domains found in client notes should remain internal strategy data unless the client confirms that a domain has a public role. Naming every historical or candidate domain publicly would create more entity confusion for search systems and buyers.

## Why This Matters

For GEO/SEO, Venture needs a single primary entity source. The main site should carry self-canonicals, the public route sitemap, buyer-facing contact information and Organization schema. Legacy or vertical assets can cross-link or redirect later, but they should not compete with the main site by duplicating the same page set.
