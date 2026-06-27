# PR #1 Template Section Review

## Review decision

The current PR is **conditionally approved for content-package planning**. It is materially better than the earlier shell: the Contact/RFQ split, mailto behavior, legal layout and hidden asset modules now make sense. The package should not be frozen until the remaining duplicate or low-value regions below are corrected and browser visual QA is completed.

## P0 — correct before content freeze

### 1. Services: duplicate service-selection regions

**Current structure:** the generic page data renders `Service selection matrix`, then `PageEnhancements` renders `CoreServicesBlock` with the same four service routes.

**Decision:** keep the visual four-card `CoreServicesBlock` as the single selection region. Keep only a short `How the services connect` region after it.

### 2. Request a Quote: remove the full Project Path enhancement

**Current structure:** the page already contains the RFQ checklist, contact route and What Happens Next, then adds `ProjectPathStepper` and a mailto panel.

**Decision:** remove `ProjectPathStepper` from the RFQ route. The page should stay task-oriented: files → additions by project type → email/NDA guidance → next steps → mailto action.

### 3. Insights: do not launch an empty editorial hub

**Current structure:** the page lists buyer-education topics and how future insights support RFQ planning, but there are no real article routes.

**Decision:** hold, noindex and hide Insights from navigation and sitemaps until at least three reviewed article detail routes exist. Do not show planned topics as live content.

### 4. About: simplify the reused identity component

**Current structure:** About renders company facts and working approach, then reuses `VentureIdentityBlock`, which includes decorative buyer avatars, a plus button and an `Engineering turnaround / DFM` pseudo-stat.

**Decision:** keep the image, identity answer, feature list and About CTA. Remove the decorative avatars, plus button and pseudo-stat. They look like customer proof or a measured performance signal without evidence.

## P1 — improve before launch

### 5. Quality: avoid repeated testing-method regions

The generic Quality sections and `CapabilityEvidence` both explain inspection and testing categories. Use the visual capability component once, then devote the remaining sections to scope inputs, records/traceability and reliability requirements.

### 6. Official Resources: replace `Why this page exists`

The section is still a site-planning rationale. Replace it with buyer-facing guidance: how to verify the official website, email, channel and certificate scope.

### 7. Resources: conditional links and assets

`View Insights` must not be the primary action while Insights is held. Downloads, catalogs and article cards render only when real, approved files or routes exist.

### 8. Home: Application Areas is optional P1

The current eight-region homepage is coherent. A lightweight Application Areas region would better match the approved sitemap, but it should remain small and should not imply cases or certifications.

## Structurally approved regions

- Home: stable H1, four service cards, project path, quality preview, official-resources teaser, FAQ and final RFQ CTA
- Contact: confirmed contact facts plus a short general-inquiry routing region
- RFQ: file checklist, email/NDA guidance, next steps and mailto action panel
- Sourcing: coverage, approval process and outputs
- Fabrication: required files and fabrication-to-assembly outputs
- EMS: project scope and required inputs, with one visual EMS flow
- Privacy and Terms: plain legal header without sales modules
- HTML Sitemap: plain link directory
- Thank You: noindex and hidden, subject to redirect decision

## Visual QA gate

The PR description reports that browser visual QA could not be completed in the local Codex environment. Before freeze, review desktop and mobile for Home, Services, PCBA, EMS, Quality, About, Resources, Contact and RFQ.
