# Task 02 — Wishlist
## Discovery Session Transcript

**Project:** KnackStore — Electronics E-Commerce Platform
**Session:** Feature Discovery Workshop
**Date:** June 2026
**Location:** Virtual — Microsoft Teams

**Attendees:**
- **Ayesha Rao** — Business Analyst, Knack Systems
- **Kiran Patel** — Product Manager, KnackStore
- **Divya Nair** — UX Lead, KnackStore
- **Suresh Iyer** — Solution Architect, Knack Systems

---

**Ayesha:** Good morning everyone. Today we're scoping the Wishlist feature. Kiran, what's the business case?

**Kiran:** It's straightforward. A lot of our customers browse, find something they like, but aren't ready to buy — maybe they're waiting for payday or comparing a few options. Right now there's nowhere to save those products. They leave, forget what they were looking at, and either don't come back or start the search all over again. A wishlist fixes that.

**Divya:** From a UX perspective, the save action needs to feel instant. A heart icon directly on the product card and on the product detail page. Clicking it should save — no modal, no redirect, no friction.

**Ayesha:** Does a customer need to be logged in to use the wishlist?

**Kiran:** Yes, for this phase. If a guest tries to add something, prompt them to log in or register. We're not doing session-based wishlists that merge on login — that's a phase two conversation.

**Suresh:** Agreed. Login required keeps the implementation clean. The wishlist is tied to a user account and persists as long as they're registered.

**Ayesha:** Is there a limit on how many items can be wishlisted?

**Kiran:** No hard limit. Customers won't save thousands of items. Keep it unlimited for now.

**Ayesha:** Where does the customer manage their wishlist?

**Divya:** A dedicated page under their account. They should be able to see all saved products and take two actions per item — add to cart or remove from wishlist. The page should show product image, name, current price, and stock status so they know whether something is still available.

**Ayesha:** What if a product has variants — different colours or storage sizes? Can they add straight to cart from the wishlist page?

**Suresh:** If a product has variants, clicking "Add to Cart" from the wishlist should take the customer to the product detail page to pick their variant first. We don't want someone accidentally buying the wrong colour. If a product has no variants, add it directly to cart.

**Kiran:** That's sensible. A laptop or a phone — you need to pick the spec before buying.

**Ayesha:** What happens if a wishlisted item goes out of stock?

**Divya:** Still show it on the wishlist page, but grey it out and change the action button to "Out of Stock" rather than "Add to Cart." Customers should see everything they saved, not have items disappearing on them.

**Kiran:** Exactly. We don't want customers thinking the product vanished — they should know it's temporarily unavailable.

**Ayesha:** What about the heart icon on the product listing and detail pages — how does it behave once something is already wishlisted?

**Divya:** Toggle behaviour. A filled heart means it's saved; an outline heart means it isn't. Clicking a filled heart removes the item. The icon state needs to load correctly when the page opens, so the customer can see at a glance what they've already saved.

**Suresh:** That means we load the user's wishlist state when the product listing and detail pages render, so the icons reflect the current state. Worth noting for the team.

**Ayesha:** Should there be a count badge on the wishlist icon in the header — like the cart?

**Divya:** Yes. A small badge showing how many items are saved. It keeps the wishlist visible and reminds customers they have things waiting.

**Kiran:** Is there anything around sharing wishlists — like sending a link?

**Divya:** Not for this phase. Wishlists are private. Sharing opens up privacy questions we don't need to solve today.

**Ayesha:** Good. Let me read back the scope before we close.

Login-required wishlist. Heart icon toggle on product listing page and product detail page — filled if wishlisted, outline if not. Dedicated wishlist page under account showing product image, name, price, and stock status. Two actions per item: remove from wishlist, and add to cart (or go to product detail page for variant products). Out-of-stock items shown greyed out. Wishlist item count badge in the header. No sharing, no item limit.

**Kiran:** That's exactly right.

**Divya:** Clean scope. Good session.

**Suresh:** The team should be able to deliver this in a single sprint with no surprises.

---

*End of transcript. Duration: 35 minutes.*
