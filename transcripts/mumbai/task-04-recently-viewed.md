# Task 06 — Recently Viewed Products
## Discovery Session Transcript

**Project:** KnackStore — Electronics E-Commerce Platform
**Session:** Feature Discovery Workshop
**Date:** June 2026
**Location:** Virtual — Google Meet

**Attendees:**
- **Ravi Menon** — Business Analyst, Knack Systems
- **Preethi Sharma** — Product Manager, KnackStore
- **Ankit Bose** — UX Designer, KnackStore
- **Vikram Anand** — Solution Architect, Knack Systems

---

**Ravi:** Morning everyone. Today we're scoping the Recently Viewed Products feature. Preethi, what's driving this?

**Preethi:** Our customers browse several products in a session — they look at five laptops, close the tab, come back an hour later and can't remember which ones they were considering. They end up digging through browser history. We want to give them a proper browsing history within KnackStore so they can pick up exactly where they left off.

**Ankit:** From a UX angle, it's a horizontal strip of product thumbnails — not a full grid. Compact, visual, quick to scan. Customers recognise a product by its image before they read the name.

**Ravi:** How many products should be shown?

**Ankit:** Ten is the right number. Enough to be useful without being overwhelming. Most recent first.

**Preethi:** Agreed. Ten maximum, most recent first.

**Ravi:** Does a customer need to be logged in for this to work?

**Ankit:** It should work for guests too. If someone is browsing without an account, their recently viewed products should be tracked in the browser.

**Vikram:** We can store guest history in browser localStorage — that's lightweight and doesn't need a server call. For logged-in customers we store it server-side, so it follows them between sessions. To keep things simple for this sprint, we won't merge guest history into the server-side record when a guest logs in — the server-side history starts fresh at login. That merge logic is a phase two item.

**Preethi:** That's fine. The core value is there even without the merge.

**Ravi:** Where does the recently viewed strip appear on the site?

**Ankit:** Two placements. First, the homepage — below the featured products section. That's the re-engagement moment when they come back to the site. Second, on the product detail page — below the product description. Customers who are mid-journey will see what else they were considering right there.

**Ravi:** Not on the cart page?

**Ankit:** Keep it out of scope for this sprint. Two placements are enough to demonstrate the value and the cart is a focused conversion moment — we don't want to distract people from checking out.

**Vikram:** Two placements is the right call. The Angular component can be shared between both pages, so it's not double the work.

**Ravi:** What triggers a "view"? Just landing on the product detail page?

**Preethi:** Yes — any navigation to a product detail page counts as a view. We considered tracking dwell time but that adds complexity for minimal gain.

**Vikram:** Simple page-load event. Clean to implement.

**Ravi:** What if the same product is viewed multiple times?

**Ankit:** Show it once, moved to the front of the list each time it's viewed. No duplicates — it's a deduplicated history ordered by most recent visit, not a raw log.

**Ravi:** What information does each card in the strip show?

**Ankit:** Product image, product name, and price. That's it. Keep it lean. If the product has no variants, a small "Add to Cart" button is a nice bonus. If it has variants, clicking the card goes to the product detail page.

**Preethi:** Image is the most important element. Customers will recognise the product visually.

**Ravi:** Should customers be able to clear their recently viewed history?

**Ankit:** Yes — a small "Clear history" link near the section. Give customers control over their data. If they clear it, the strip disappears entirely.

**Ravi:** And if there's no history yet — do we show an empty container?

**Ankit:** No. Hide the section completely until there's at least one product to show. An empty container with a heading looks broken.

**Ravi:** What about products that have been discontinued or removed from the catalogue?

**Preethi:** If a product is removed from the catalogue, silently remove it from the recently viewed history — don't show a broken card. If it's just out of stock, still show it. The product detail page will show the stock status.

**Vikram:** For the implementation, we can do that clean-up when the recently viewed list is loaded — filter out any product IDs that no longer exist in the catalogue.

**Ravi:** Good. Let me summarise the scope before we close.

Recently viewed works for guests (browser localStorage) and logged-in users (server-side). No merging of guest and server history — server history starts fresh at login. Up to ten products, most recent first, deduplicated. Strip appears on the homepage below featured products, and on the product detail page below the description. Each card shows product image, name, and price. Clicking a card with variants goes to the product detail page. "Add to Cart" shown for products without variants. Clear history button removes all entries and hides the strip. Section hidden if empty. Discontinued products silently removed; out-of-stock products shown normally.

**Preethi:** That's the right scope. Well summarised.

**Ankit:** Good session. Very achievable.

**Vikram:** Straightforward backend. The Angular component can be reused across both pages — one build, two placements.

---

*End of transcript. Duration: 36 minutes.*
