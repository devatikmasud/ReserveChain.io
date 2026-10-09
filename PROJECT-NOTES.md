# ReserveChain — Requirements & Implementation Notes

## Demo pages/sections present
- Home / institutional positioning
- Mandatory no-offer disclosure
- Proposed platform lifecycle
- Copper Powder and Nickel Wire initial program cards
- Illustrative Digital Asset Passport
- Document centre preview using supplied sample analysis images
- Waitlist form UI
- Development principles and footer legal note

## Source-backed program details
- Supplied developer instructions name initial proposed programs as Ultra-High-Purity Copper Powder (99.9999%) and High-Purity Nickel Wire (99.9807%). These purity figures are presented in this demo as reported in supplied sample analysis documents, not as independently verified current inventory claims.
- The project remains in development. Legal structure, custody, insurance, valuation, token structure, reserves, redemption and offering conditions require confirmation.
- The project brief says not to describe ReserveChain as MiCA-compliant and states that ReserveChain does not intend to offer or sell tokens to EU/EEA residents or persons located there.
- No token purchase, wallet connection, payment, allocation, reservation, or redemption action is available in this demo.

## Production sitemap areas still to implement
Overview; How It Works; Platform Infrastructure; Technology; Security; Independent Verification; Custody; Proof of Reserves; Digital Asset Passports; Tokenization; Redemption; all asset programs; individual lot/batch records; enterprise services; asset owner/originator enquiries; industrial buyer enquiries; corporate development status; governance; roadmap; documents/whitepaper; FAQ; contact; waitlist; privacy, cookie, terms, risk, restricted-jurisdiction, anti-fraud, official channels, custom 404 and error pages; participant and redemption portals (inactive until authorised).

## CMS data model proposal
AssetProgram, AssetLot/Batch/Coil, SourceDocument, ReviewDecision, PublicationEvent, WaitlistRegistration, EnterpriseEnquiry, JurisdictionRule, SystemSetting. Use stable IDs, created/updated timestamps, document versioning, permission checks, and append-only security/audit events. Avoid putting private drafts or documents in public APIs or search indexes.

## Status labels
Draft; Under Review; Approved; Published; Unpublished; Archived. Only Approved content may be published by an authorised role. Future tokenization, Proof of Reserves, custody and redemption modules must remain inactive until approved.

## Acceptance checklist for next phase
- [ ] Approved brand files and exact final disclosure confirmed by owner/legal counsel
- [ ] Every required page assigned a route or intentionally staged
- [ ] Copper and Nickel records reference source documents and review state
- [ ] Waitlist has backend, email verification, consent recording, privacy controls and spam protection
- [ ] CMS permissions and publication gates tested
- [ ] Audit log append-only/tamper-evident implementation reviewed
- [ ] No unsupported reserve, custody, insurance, valuation, ownership, partner, token or liquidity claims
- [ ] Mobile/tablet/desktop navigation, forms, tables and document panels tested
- [ ] Accessibility, performance, SEO, security and backup/restore checks completed
- [ ] Full source, deployment instructions, API/CMS docs, admin manual and handover checklist delivered
