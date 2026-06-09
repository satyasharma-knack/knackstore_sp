# Task 01 — Product Reviews & Ratings
## Discovery Session Transcript

**Project:** TechStore — Electronics E-Commerce Platform
**Session:** Feature Discovery Workshop
**Date:** 3rd June 2026, 10:00 AM
**Location:** TechStore HQ, Conference Room B2

**Attendees:**
- **Sarah Mitchell** — Business Analyst, Knack Systems
- **Rahul Mehta** — Project Manager, TechStore
- **Sneha Kapoor** — Merchandising Lead, TechStore
- **James Carter** — Head of Customer Support, TechStore
- **Arjun Sharma** — Solution Architect, Knack Systems

---

**Sarah:** Thanks everyone for making time. Today we're focused on the customer reviews and ratings feature. Rahul, do you want to kick us off with the business context?

**Rahul:** Sure. Right now there's no way for our customers to share feedback on products they've bought. We're seeing pretty high return rates on a couple of product lines — headphones and cameras specifically — and our hypothesis is that customers don't have enough peer reassurance before they buy. All our competitors have reviews. We're behind on this.

**Sarah:** Got it. So the main goal is driving purchase confidence. Sneha, is there anything beyond that from a merchandising perspective?

**Sneha:** Yes — two things. First, ratings are great social proof and we want them visible high on the product page, not buried. Second, we want to use the data. If a product is consistently getting one and two stars, something's wrong — either the product itself or the way we're describing it on the site.

**James:** From a support perspective, the same thing. If I'm seeing a spike in low ratings on a product, my team should know before we start getting a wave of return requests. That kind of early signal would be really valuable.

**Sarah:** That's useful context. Let's focus today on the customer-facing experience and note the internal alerting as a future requirement. Sneha — who should be able to leave a review? Any registered customer, or only people who've actually bought the product?

**Sneha:** Only people who've bought it. Verified purchasers only. We had a situation with a previous vendor where a competitor was leaving fake negative reviews. We want none of that.

**Rahul:** Agreed. It has to be tied to a real purchase.

**Sarah:** Makes sense. What does a review look like — just a star rating, or do you want written content as well?

**Sneha:** Both. Star rating from one to five — that's definitely non-negotiable. And we'd like a review title and a written body. But if someone just wants to tap five stars and move on, they should be able to do that. The written part shouldn't be forced.

**Sarah:** So rating is mandatory, text is optional. And how many reviews can a customer leave for the same product?

**Rahul:** One. But they should be able to edit it if they change their mind — say they had a bad experience initially and then our support team resolved it. They might want to update from two stars to four.

**Arjun:** Quick one — is it one review per product ever, or one per order? If someone buys the same laptop twice in two separate orders, do they get two review slots?

**Rahul:** One per product. Not per order. Keep it simple.

**Sarah:** Where exactly on the product page should the rating appear?

**Sneha:** Two places. The average rating — with the star icons and the total review count — should be right under the product name, above the fold. People shouldn't have to scroll to know this product has four and a half stars and three hundred reviews. Then the actual list of individual reviews should be at the bottom of the page, below the description.

**Sarah:** Default sort for the review list?

**Sneha:** Most recent first. We might want most helpful later but that's a phase two thing.

**Sarah:** Do reviews need approval before going live, or do they publish immediately?

**James:** Ideally we'd have moderation. But honestly we don't have the team for it right now. Can we go live immediately but give customers a way to flag a review as inappropriate?

**Arjun:** Yes — we can build it so there's an "is approved" flag that defaults to true, which means everything goes live straight away. That way if you want to turn on a moderation queue later, the data model is already there and it's a configuration change rather than a new build.

**James:** That's exactly what I'd want. Can we also make sure flagged reviews are stored somewhere so we can look at them?

**Arjun:** Yes, we'd store a flag count on each review. Your team could pull a report or we could build a simple admin view later.

**Sarah:** Good. A couple of edge cases — what happens if someone tries to review a product they haven't bought?

**Rahul:** Block it. Show a message — something like "Only verified purchasers can leave a review" and maybe a link to the product to encourage them to buy it.

**Sarah:** And if their order was cancelled — are they still eligible?

**Sneha:** If the order was cancelled they definitely shouldn't be able to review. They never received the product.

**Rahul:** Actually what counts as eligible? Just delivered, or any order status?

**Sneha:** I'd say any order that isn't cancelled. So placed, processing, shipped, delivered — all eligible. We don't want to wait until delivery confirmation because our delivery tracking isn't always accurate.

**Sarah:** Understood. What about the average rating display — do we round to a whole number or show a decimal?

**Sneha:** One decimal. So four point three, not just four.

**Sarah:** What if a product has no reviews at all yet?

**Sneha:** Don't show any stars. Just a small text — something like "No reviews yet. Be the first." — that links down to the review form on the page.

**Arjun:** And what about the review form itself — is it only accessible from the product page, or can customers get to it from elsewhere?

**Rahul:** Good point. We want a "Leave a Review" prompt on the order history page as well. After someone places an order, against each product in that order there should be a link or button to write a review.

**Sarah:** Same form as on the product detail page?

**Rahul:** Same form, yes. Just two different ways to reach it.

**Sarah:** Can customers delete their own review?

**Rahul:** Yes. Edit and delete both — either from the product page or from their account area.

**Sarah:** Okay, I think we've covered the core of it. Let me do a quick read-back to make sure I haven't missed anything.

Customers who've placed a non-cancelled order containing a product can leave a single review for that product. The review has a mandatory one-to-five star rating and an optional title and body. Customers can edit or delete their review. Average rating shows near the product title to one decimal place. The full review list appears at the bottom of the product page sorted most recent first. No stars shown if there are zero reviews — instead a prompt to be the first. Reviews go live immediately, customers can flag inappropriate ones. There's a "Leave a Review" entry point on the order history page as well as the product detail page.

**Sneha:** That's all correct. One thing I'd add — if someone edits their review, I'd want to know it was edited. Like a small "edited" label with the date.

**Rahul:** Agreed.

**Sarah:** Noted. Arjun, anything from a technical standpoint before we close?

**Arjun:** Just one thing — we'll need to think about what happens to the average rating when a review is deleted. We'll need to recalculate. Nothing blockers but worth the team being aware.

**Sarah:** Good call. I'll capture that. Thanks everyone — we'll turn this into user stories and circulate for sign-off before we hand to the team.

**Rahul:** Great session. Thanks Sarah, Arjun.

---

*End of transcript. Duration: 42 minutes.*
