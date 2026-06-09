# Task 05 — Stock Notify Me
## Discovery Session Transcript

**Project:** TechStore — Electronics E-Commerce Platform
**Session:** Feature Discovery Workshop
**Date:** 5th June 2026, 10:30 AM
**Location:** TechStore HQ, Conference Room C3

**Attendees:**
- **Lisa Chen** — Business Analyst, Knack Systems
- **Amit Gupta** — Project Manager, TechStore
- **Jessica Moore** — Inventory Manager, TechStore
- **Vijay Reddy** — Operations Lead, TechStore
- **Nathan Clarke** — Solution Architect, Knack Systems

---

**Lisa:** Morning everyone. Today's session is about the Stock Notify Me feature — when a product is out of stock, customers can register to be alerted when it comes back. Amit, what's driving this one?

**Amit:** Lost revenue, quite simply. We know from our analytics that a significant number of customers land on out-of-stock product pages and then bounce. If we can capture their intent and bring them back when stock is available, that's a direct conversion opportunity we're currently throwing away.

**Jessica:** From an inventory perspective I'd also say it gives us useful demand signal. If two hundred people have registered for a particular variant of a product, that tells me how many units to reorder. Right now I'm working with historical sales data and a lot of guesswork.

**Lisa:** That's a really good secondary use case. So two goals — re-engagement for conversions, and demand signal for inventory planning. Let's focus on the customer experience today. Where does the Notify Me prompt appear?

**Amit:** On the product detail page, in place of the Add to Cart button when the product or the selected variant is out of stock. It should be obvious — not a small link hidden below the fold.

**Lisa:** Should it be available for the whole product or at the variant level? If the black 256GB model is out of stock but the silver one is available, does the customer get notified for the black variant specifically?

**Jessica:** Variant level, definitely. That's the operationally useful one. If someone wants the black 256GB and I restock that specific variant, that's the notification I want to send.

**Nathan:** So the trigger for the notification would be when that specific SKU's stock quantity goes above zero.

**Jessica:** Exactly.

**Lisa:** Does a customer need to be logged in to register for a notification?

**Amit:** No — we want to capture guests too. If they're not logged in, show the form with an email input. If they are logged in, pre-fill their email and just ask them to confirm.

**Lisa:** What information do we collect from the customer?

**Amit:** Email address only. We're not asking for their life story. Maybe a checkbox confirming they're okay with us emailing them — we need that for compliance.

**Nathan:** GDPR consent. Yes, that's essential — explicit opt-in, not pre-ticked.

**Lisa:** Good. Can a customer register for multiple products?

**Amit:** Yes — no limit. They might be waiting on a phone and a laptop at the same time.

**Lisa:** Can they register the same email for the same variant twice?

**Jessica:** No — one registration per email per variant. If they try again, show a message that they're already registered.

**Lisa:** What does the notification email look like?

**Amit:** Simple. The product name, variant details, a photo, the price, and a direct link to the product page. Short and clear. No marketing fluff — this is a transactional email, not a newsletter.

**Vijay:** I want to make sure the link goes directly to the right variant, not just the product page. If someone had to pick the variant again they'd be frustrated.

**Lisa:** Noted — deep link to the specific variant.

**Nathan:** We can pass a variant parameter in the URL to pre-select it on the product detail page.

**Lisa:** How many notifications do we send? Just one when stock comes back, or do we send reminders?

**Amit:** Just one. Once we send the notification, the registration is considered fulfilled. If the customer misses it and the product goes out of stock again, they'd need to register again.

**Jessica:** That keeps it clean operationally too. I don't want to be firing repeated emails.

**Lisa:** What happens if stock comes in but goes back out before the email is sent — say there's a batch job delay?

**Jessica:** That's a real scenario. We might receive twenty units and they sell out in an hour before the emails go out.

**Nathan:** We'd handle this by sending the notification as soon as stock is confirmed regardless of whether it's still available by the time the email arrives. The product page will show current stock. We shouldn't hold the notification on the chance it goes out of stock again.

**Amit:** Agreed — the email is a prompt to visit, not a guarantee of stock.

**Lisa:** Should customers be able to see and manage their notification registrations from their account page?

**Amit:** Yes — a simple list of products they're waiting on, with the option to cancel a registration. If I change my mind about a product I should be able to remove it.

**Vijay:** And for guests who registered by email — they don't have an account, so they can't manage it from a profile page.

**Lisa:** We could include an unsubscribe link in the notification email itself for guests.

**Amit:** That works. Or a link to cancel the specific registration — not a general unsubscribe.

**Nathan:** We can include a unique token in the email link for guest cancellations. No account needed.

**Lisa:** Good. I think we have everything. Quick summary — Notify Me button on out-of-stock variants, guest or logged-in. Collects email and explicit consent. One registration per email per variant. Single notification email sent when stock goes above zero. Email contains product details and deep link to variant. Logged-in customers can manage registrations from account page. Guests get a cancellation link in the notification email.

**Amit:** That's spot on. Thanks Lisa, Nathan.

---

*End of transcript. Duration: 40 minutes.*
