# Task 01 — Product Reviews & Ratings
## Discovery Session Transcript

**Project:** KnackStore — Electronics E-Commerce Platform
**Session:** Feature Discovery Workshop
**Date:** June 2026
**Location:** TechStore HQ, Conference Room B2

**Attendees:**
- **Sarah Mitchell** — Business Analyst, Knack Systems
- **Rahul Mehta** — Product Manager, KnackStore
- **Sneha Kapoor** — Merchandising Lead, KnackStore
- **Arjun Sharma** — Solution Architect, Knack Systems

---

**Sarah:** Thanks everyone for making time. Today we're scoping the Product Reviews and Ratings feature. Rahul, what's the business case?

**Rahul:** Right now there's no way for our customers to share feedback on products they've bought. We're seeing higher-than-expected return rates on some lines — cameras and headphones especially — and our hypothesis is that customers don't have enough peer reassurance before they buy. All our competitors have reviews. We're behind on this.

**Sneha:** From a merchandising angle, ratings are also great social proof. A product sitting at four and a half stars with eighty reviews sells itself. We want that signal visible on the page, not buried.

**Sarah:** Good context. Let's scope this carefully. Who should be able to leave a review — just logged-in users, or anyone?

**Rahul:** Logged-in customers only for this sprint. That's a natural gate — they have an account, they're identifiable, they can only submit once per product.

**Sarah:** Do we restrict it to verified purchasers only — customers who actually bought the product?

**Sneha:** Ideally yes, but I know that adds complexity — you'd need to cross-check order history.

**Arjun:** For this sprint I'd recommend we skip the verified purchaser check. Any logged-in user can review any product. It simplifies the build significantly — no join across orders — and we can add the purchaser gate in phase two once the core feature is proven. The one-review-per-user-per-product rule still prevents spam.

**Rahul:** That works for the hackathon. Phase one is about getting the feature live and visible. Phase two tightens it.

**Sarah:** Agreed. So: any logged-in user, one review per user per product. What does a review contain?

**Sneha:** A star rating — one to five — that's non-negotiable. And an optional written review. If someone just wants to tap five stars and move on, let them. Don't force a text comment.

**Sarah:** One review per user per product — what happens if they try to submit a second one?

**Arjun:** Show a message: "You've already reviewed this product." Don't let the form submit a duplicate.

**Rahul:** Simple. I like that.

**Sarah:** Can customers edit or delete their review?

**Rahul:** For this sprint — no. We'll keep it as submit-only. Edit and delete can come in phase two. The priority is getting reviews visible on the page.

**Arjun:** That removes a significant amount of backend complexity. Good call.

**Sarah:** Where does the average rating appear on the page?

**Sneha:** Two places. First — directly under the product name on the product detail page. I want to see the star icons, the average to one decimal place, and the total review count in brackets. Something like: ★★★★☆ 4.3 (128 reviews). That should be above the fold — customers shouldn't have to scroll to know this product is well-rated.

**Sarah:** And the second placement?

**Sneha:** On the product listing page — a small star rating under each product card. Just the average and the count. Customers can compare at a glance.

**Sarah:** Good. What if a product has no reviews yet?

**Sneha:** Don't show any stars. Just a small text: "No reviews yet. Be the first to review this product." — and ideally that text links down to the review form.

**Sarah:** Where does the review form sit?

**Arjun:** At the bottom of the product detail page — below the product description, above the footer. When a logged-in user visits a product they haven't reviewed, the form is open. If they've already reviewed it, replace the form with a "You've already reviewed this product" notice.

**Sneha:** And the full list of submitted reviews should appear at the bottom of the same page, below the form. Most recent first.

**Sarah:** What information does each review in the list show?

**Sneha:** The star rating, the review text if there is one, and the date it was submitted. We don't need reviewer names — just "Verified User" or similar is fine.

**Arjun:** We can show the first part of the username or a generic label. We're not displaying full names — data minimisation applies.

**Rahul:** Generic is fine. "Customer" or the username without any identifying detail.

**Sarah:** Do reviews need moderation before going live?

**Rahul:** No moderation queue for this sprint. Reviews go live immediately. If we need moderation later, Arjun can tell us how to add it.

**Arjun:** The data model will have an "approved" flag that we'll default to true. If moderation becomes a requirement later, it's a configuration change, not a rebuild.

**Sarah:** Good. Last question — any entry points for the review form beyond the product detail page?

**Rahul:** Not for this sprint. Just the product detail page. An order history entry point — where customers get prompted to review products they've bought — is a strong phase two feature, but out of scope today.

**Arjun:** Agreed. One entry point keeps the scope clean.

**Sarah:** Perfect. Let me summarise before we close.

Any logged-in customer can submit one review per product — no verified purchaser check in this sprint. A review has a mandatory star rating (1–5) and optional written text. Submitting a second review for the same product is blocked with a clear message. No edit or delete in this sprint. Average rating and review count shown on the product detail page below the product name, and as a smaller display on product listing cards. Full review list at the bottom of the product detail page, sorted most recent first — showing rating, review text, and date. Generic user label (no full name displayed). Review form at the bottom of the product detail page, hidden if the user has already reviewed. "No reviews yet" prompt shown when a product has zero reviews. Reviews go live immediately — no moderation queue.

**Sneha:** That's exactly right. Clean, visible, and useful from day one.

**Rahul:** Great session. This is very deliverable.

**Arjun:** The team will have a solid, extensible foundation. Phase two additions slot straight in.

---

*End of transcript. Duration: 40 minutes.*
