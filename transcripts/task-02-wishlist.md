# Task 02 — Wishlist
## Discovery Session Transcript

**Project:** TechStore — Electronics E-Commerce Platform
**Session:** Feature Discovery Workshop
**Date:** 4th June 2026, 11:00 AM
**Location:** TechStore HQ, Conference Room A1

**Attendees:**
- **Emily Rodriguez** — Business Analyst, Knack Systems
- **Kiran Patel** — Project Manager, TechStore
- **Nisha Verma** — UX Lead, TechStore
- **David Brooks** — Head of E-Commerce, TechStore
- **Suresh Iyer** — Solution Architect, Knack Systems

---

**Emily:** Good morning everyone. Today we're covering the wishlist feature. David, can you start us off — what's the business case?

**David:** Sure. We have a lot of customers who browse, find something they like but aren't ready to buy — maybe they're waiting for payday, or comparing options. Right now they have no way to save those products. So they leave, forget what they were looking at, and either don't come back or start the search all over again. A wishlist keeps them engaged and gives us a way to nudge them back.

**Emily:** Makes sense. Nisha, from a UX perspective, what are the key moments where customers would use this?

**Nisha:** Two main ones. First, on the product detail page — browsing a laptop, not ready to buy, heart icon to save it. Second, on the product listing page — scrolling through results and saving a few things to compare later. Both need to be quick, one-tap actions. No page redirects.

**Emily:** So a heart or bookmark icon directly on the product card and detail page. Does a customer need to be logged in to add to a wishlist?

**Nisha:** That's where it gets interesting. Ideally we'd let guests save items and then associate them with an account on login. But I know that adds complexity.

**Suresh:** It does add quite a bit — session-based wishlist that merges on login. That's a phase two conversation. For phase one I'd suggest login required, with a prompt to sign in or register when a guest tries to add something.

**Kiran:** Agreed, keep it simple for now. Login required.

**Emily:** Is there a limit on how many products can be in a wishlist?

**David:** I wouldn't put a hard limit. Our catalogue isn't huge and customers won't save thousands of things. Maybe a soft cap — show a warning if someone adds more than fifty items, but don't block them.

**Kiran:** I'd actually just not cap it at all for now. If it becomes a problem we can address it later.

**Emily:** Fine. Where does the customer manage their wishlist — is there a dedicated page?

**Nisha:** Yes, a full wishlist page under their account. They should be able to see all saved products, remove items, and move items to their cart from there.

**Emily:** What information shows on the wishlist page per product?

**Nisha:** Product image, name, current price, stock status, and two actions — add to cart and remove from wishlist. If the product has variants, clicking add to cart should either let them pick the variant or take them to the product detail page first.

**David:** Good point. We don't want people adding a phone to the cart without picking a colour and storage.

**Suresh:** So if a product has variants, "Add to Cart" from wishlist takes them to the product detail page. If there are no variants, it adds directly to cart.

**Kiran:** That works for me.

**Emily:** What happens if a wishlist item goes out of stock?

**David:** Still show it, but grey it out and change the action button to "Out of Stock." We don't want items disappearing from wishlists because that'll confuse customers.

**Emily:** And if the product is removed from the catalogue entirely?

**David:** That's a good one. I'd say show it with a "No longer available" label and let them remove it. Don't silently delete it from their wishlist.

**Nisha:** Agreed. Customers notice when things disappear and it erodes trust.

**Emily:** Should customers be able to share their wishlist with others — like a wish list link they can send?

**Kiran:** Not for this phase. That's a nice-to-have but it opens up a lot of questions around privacy. Let's keep it private for now.

**Emily:** How does the wishlist icon in the header work? Does it show a count like the cart?

**Nisha:** Yes — a little badge showing how many items are saved. Keeps it visible and reminds people they have things waiting.

**Emily:** Last one — what happens when a customer adds something to their wishlist that's already there?

**Nisha:** Don't add it twice. Toggle — if it's already wishlisted, clicking the heart removes it. The icon should visually reflect the state — filled heart if saved, outline if not.

**Kiran:** Yes, that toggle behaviour is important. It should be obvious at a glance whether something is on your wishlist.

**Suresh:** We'll need to load the customer's wishlist state on the product listing and detail pages so the icons render correctly.

**Emily:** Noted — that's a data loading consideration for the team. I think we've got a solid picture. Let me summarise before we close.

Login-required wishlist. Heart icon toggle on product cards and product detail page. Dedicated wishlist page under account showing product image, name, price, stock status, with remove and add-to-cart actions. Products with variants go to product detail page before adding to cart. Out-of-stock items shown greyed out. Removed catalogue items shown with a "no longer available" label. Wishlist badge count in header. No sharing, no limit. Toggle behaviour — adding an already-wishlisted item removes it.

**David:** That covers it. Good session.

**Kiran:** Thanks Emily, Suresh.

---

*End of transcript. Duration: 38 minutes.*
