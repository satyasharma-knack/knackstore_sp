# Task 04 — Product Comparison
## Discovery Session Transcript

**Project:** TechStore — Electronics E-Commerce Platform
**Session:** Feature Discovery Workshop
**Date:** 4th June 2026, 2:00 PM
**Location:** Virtual — Microsoft Teams

**Attendees:**
- **Michael Torres** — Business Analyst, Knack Systems
- **Priya Nair** — Project Manager, TechStore
- **Tom Walsh** — Merchandising Manager, TechStore
- **Deepa Krishnan** — Category Manager, TechStore
- **Rohan Desai** — Solution Architect, Knack Systems

---

**Michael:** Thanks for joining everyone. Today we're scoping the product comparison feature. Tom, you flagged this as a priority — can you walk us through why?

**Tom:** Absolutely. Electronics is a considered purchase category. When someone is buying a laptop or a camera they're not just picking the first thing they see — they're evaluating. Right now they have to open three browser tabs and manually compare specs. If we give them a built-in comparison tool they stay on TechStore longer and they buy with more confidence.

**Deepa:** I'll add to that — from a category management perspective, our highest return rates are on products where customers felt they got the wrong spec. A comparison table helps them make better decisions upfront, which means fewer returns.

**Michael:** That's a strong case. How many products should a customer be able to compare at once?

**Tom:** Three. More than that and the table gets too wide on screen, especially on mobile. Three is the sweet spot.

**Rohan:** And a minimum of two to make the comparison meaningful?

**Tom:** Yes, exactly. Two minimum, three maximum.

**Michael:** How does a customer add a product to the comparison? Is there a button on the product card?

**Deepa:** Yes — a "Compare" checkbox or button on each product card in the listing page, and also on the product detail page. When they've selected two or more, there should be a sticky bar at the bottom of the screen showing what they've added and a "Compare Now" button.

**Nisha:** Sorry — I should clarify, that was Deepa's point but Priya's joining for product side questions. Priya, did you want to add anything on the entry point?

**Priya:** Yes — the sticky comparison bar is important. It should persist as the customer scrolls through the product list. And it should show small thumbnails of the selected products so they can see what they've queued up.

**Michael:** Should comparison be restricted to products within the same category, or can a customer compare a laptop with a phone?

**Tom:** Same category only. Comparing a phone to a laptop makes no sense — the specs are completely different. The comparison should only be available between products in the same category.

**Deepa:** Right. And if someone tries to add a product from a different category, show a message — something like "You can only compare products in the same category."

**Michael:** What happens if they try to add a fourth product?

**Priya:** Block it and tell them they've reached the limit. Give them the option to remove one of the existing selections to add the new one.

**Michael:** What does the comparison page actually show?

**Tom:** Side-by-side table. Each product gets a column. Rows are the attributes — product name, image, price, brand, rating, and then category-specific specs. For phones it'd be things like display size, battery, camera megapixels. For laptops it'd be processor, RAM, storage, display.

**Deepa:** The attributes need to be dynamic — what you show for a phone comparison is different from a camera comparison.

**Rohan:** That's an important point for the team. We'll need configurable spec attributes per category, not a one-size-fits-all table.

**Michael:** Should differences between products be highlighted?

**Tom:** Yes — if one product has 256GB storage and the others have 128GB, that difference should stand out. Maybe a light colour highlight on cells that differ. Customers are looking for differentiators.

**Priya:** I like that. Don't highlight things that are the same — only the differences.

**Michael:** What actions should be available from the comparison page?

**Deepa:** At minimum — add to cart and add to wishlist per product column. And an easy way to remove a product from the comparison and swap in a different one.

**Tom:** Also a "Go to product" link in each column so they can jump straight to the full product detail page.

**Michael:** Should the comparison be saved between sessions? If I close the browser and come back, are my selections still there?

**Priya:** For logged-in customers, yes — save it to their account. For guests, if we can persist it in the browser session that would be great but I understand if that's an edge case.

**Rohan:** We can use browser local storage for guest comparisons and server-side for logged-in users. Not a huge lift.

**Michael:** One edge case — what if a product that's in the comparison becomes unavailable while the customer is on the page?

**Rohan:** Show it greyed out with an "unavailable" label. Don't silently remove it.

**Priya:** Agreed. Transparency is important.

**Michael:** I think we have a complete picture. Quick summary — same-category comparison of two to three products. Compare button on product cards and detail page. Sticky bottom bar with thumbnails and Compare Now button. Comparison page shows a side-by-side spec table with difference highlighting. Actions per column: add to cart, add to wishlist, view product. Selections saved for logged-in users, session-stored for guests.

**Tom:** That nails it.

**Priya:** Great session Michael, Rohan.

---

*End of transcript. Duration: 44 minutes.*
