# Task 06 — Recently Viewed Products
## Discovery Session Transcript

**Project:** TechStore — Electronics E-Commerce Platform
**Session:** Feature Discovery Workshop
**Date:** 5th June 2026, 2:30 PM
**Location:** Virtual — Google Meet

**Attendees:**
- **Priya Nair** — Business Analyst, Knack Systems
- **Mark Stevens** — Project Manager, TechStore
- **Ananya Bose** — UX Designer, TechStore
- **Chris Johnson** — Digital Marketing Lead, TechStore
- **Vikram Anand** — Solution Architect, Knack Systems

---

**Priya:** Hi everyone. Today's session is on the recently viewed products feature. Mark, set the scene for us?

**Mark:** Sure. Our customers often browse multiple products in a session — they look at five laptops, go away, come back and can't remember which ones they were considering. They end up using their browser history which is a terrible experience. We want to give them a proper browsing history within TechStore so they can pick up where they left off.

**Chris:** From a marketing angle, this also works as a re-engagement signal. If someone viewed the same product three times, that's a strong purchase signal. Down the line we could use that data to send targeted follow-up emails but let's not go there today.

**Priya:** Good context. How many products should be shown in the recently viewed list?

**Ananya:** I've been thinking about this. Ten is a good number — enough to be useful without being overwhelming. The display would be a horizontal scroll strip, not a full grid.

**Mark:** Agreed. Ten max. Most recent first.

**Priya:** Does a customer need to be logged in for recently viewed to work?

**Ananya:** Ideally it works for guests too. If I'm browsing without an account I still want to see what I looked at. We can store it in the browser.

**Vikram:** Browser local storage would work for guests. For logged-in customers we'd store it server-side so it persists across devices — if they browse on mobile and come back on desktop, the history follows them.

**Mark:** That cross-device persistence for logged-in users is important. That's a real use case.

**Priya:** Where does the recently viewed section appear on the site?

**Ananya:** At least two places. First, the homepage — below the featured products section. Second, on the product detail page — below the product description, before the reviews. The idea there is to help customers who are mid-journey to quickly jump back to something they were comparing.

**Chris:** I'd also argue for the cart page — when someone's about to check out, showing recently viewed items is a classic upsell moment. "Oh right, I was looking at that case for my new phone."

**Mark:** I like that. Three placements — homepage, product detail, cart page.

**Priya:** Should a customer be able to clear their recently viewed history?

**Ananya:** Yes — give them control. A small "Clear history" link near the section. Respecting customer privacy matters.

**Priya:** What if the same product is viewed multiple times — does it appear once or multiple times in the list?

**Ananya:** Once, and moved to the top of the list each time it's viewed. No duplicates.

**Vikram:** So it's more of a deduplicated history ordered by most recent view timestamp, not a raw log.

**Ananya:** Exactly.

**Priya:** What information does each product show in the strip?

**Ananya:** Keep it lean — product image, product name, and price. Maybe a small "Add to Cart" button if the product has no variants. If it has variants, clicking goes to the product detail page. Same pattern we discussed for wishlist.

**Mark:** The image is the most important thing. Customers are visual, they'll recognise the product by image before reading the name.

**Priya:** Should recently viewed products be excluded if the product is discontinued or out of stock?

**Mark:** Show them regardless — if something is out of stock they can still see it, the product detail page will show the stock status. If it's been removed from the catalogue entirely, remove it from the recently viewed list silently.

**Ananya:** I agree — discontinued products should be cleaned up, but out of stock is fine to show.

**Priya:** What counts as a "view"? Landing on the product detail page?

**Vikram:** Yes — any visit to a product detail page that lasts more than a few seconds. We don't want someone accidentally hovering over a link and it appearing in their history.

**Chris:** Actually, let's keep it simple — any landing on the product detail page counts. Tracking dwell time adds complexity and for this feature it's overkill.

**Mark:** Agreed. Page visit equals a view.

**Priya:** Does the recently viewed section show if the customer has no history yet?

**Ananya:** No — hide the section entirely until there's at least one product to show. Don't show an empty container with a heading and nothing in it.

**Priya:** Last one — if a customer logs in and they had guest browsing history in the browser, do those guest views get merged into their account history?

**Vikram:** Good question. That's the same merge challenge we talked about with wishlist. I'd say for phase one, login creates a fresh server-side history. The guest browser history stays in the browser until they clear it, and the server-side history starts from login onwards.

**Mark:** That's fine for now. We can revisit merge logic in phase two.

**Priya:** Sounds good. Let me wrap up. Recently viewed shows up to ten products, most recent first, deduplicated. Visible on homepage, product detail, and cart pages. Hidden if empty. Guest storage in browser, logged-in storage server-side with cross-device sync. Product image, name, and price shown per card. Customers can clear their history. Discontinued products removed, out-of-stock products shown normally.

**Mark:** That's exactly right. Good session everyone.

**Ananya:** Thanks Priya, Vikram.

---

*End of transcript. Duration: 36 minutes.*
