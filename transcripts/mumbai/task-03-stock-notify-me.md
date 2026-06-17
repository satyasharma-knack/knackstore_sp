# Task 05 — Stock Notify Me
## Discovery Session Transcript

**Project:** KnackStore — Electronics E-Commerce Platform
**Session:** Feature Discovery Workshop
**Date:** June 2026
**Location:** TechStore HQ, Conference Room C3

**Attendees:**
- **Meera Joshi** — Business Analyst, Knack Systems
- **Amit Gupta** — Product Manager, KnackStore
- **Pooja Reddy** — Operations Lead, KnackStore
- **Nathan Clarke** — Solution Architect, Knack Systems

---

**Meera:** Morning everyone. Today we're scoping the Stock Notify Me feature — giving customers a way to register their interest when a product is out of stock so we can bring them back when it's available. Amit, what's the business case?

**Amit:** Lost revenue, quite simply. When a product is out of stock, customers land on the product page, see they can't buy it, and leave. We have no way to bring them back. A "Notify Me" registration captures that intent and gives us a direct re-engagement path when stock comes in.

**Pooja:** From an operations perspective, the registration count is also a useful demand signal. If I can see that sixty people are waiting for a specific product, I know exactly how many units to prioritise in the next restock.

**Meera:** Good context. Where does the Notify Me button appear?

**Amit:** On the product detail page, in place of the "Add to Cart" button when the product is out of stock. It should be prominent — same position, same visual weight as the cart button. Customers shouldn't have to hunt for it.

**Meera:** Does a customer need to be logged in to register?

**Amit:** Yes, for this phase. Login required. If a guest lands on an out-of-stock page and wants to register, prompt them to log in first. That keeps the implementation clean and gives us a confirmed identity rather than just an email address.

**Nathan:** And it means we don't need to handle guest email input, GDPR consent checkboxes, or guest cancellation tokens. The user's account covers all of that. Much simpler build.

**Pooja:** That works for me. Most of our serious customers have accounts anyway.

**Meera:** Can a customer register for the same product twice?

**Amit:** No — one registration per customer per product. If they try to register again, show a message: "You're already on the list for this product." No duplicate entries.

**Meera:** What does the customer see after registering?

**Amit:** A confirmation message on the page — something like "We'll let you know when this is back in stock." The button state changes to show they're registered, so they know it worked.

**Meera:** How does the notification actually get sent?

**Nathan:** For this sprint, we'll keep the notification mechanism simple. When a team member updates the stock quantity for a product — say through an admin API call or a test endpoint — the system marks all registrations for that product as fulfilled. We're not wiring up a real email service in this sprint. The notification is captured in the database as "sent." A real email integration is a phase two item.

**Pooja:** That's completely fine for the demo. The important thing is that the data model is right — who registered, for what product, and whether they've been notified. The email plumbing can come later.

**Amit:** Agreed. We want to show the end-to-end flow: customer registers → stock is updated → registration is marked as fulfilled. That's the story we're telling.

**Meera:** Where can the customer manage their registrations?

**Amit:** Their account page. A simple list: "Products you're waiting for" — product image, name, and a cancel button for each. If they change their mind about a product, they can remove themselves from the list.

**Meera:** What happens to the registration once it's fulfilled — once stock is updated?

**Pooja:** Keep it on the account page but mark it as notified — or just remove it from the "waiting" list and move it to a history view. Actually, for simplicity, let's just remove fulfilled registrations from the active list. Keep the account page clean.

**Nathan:** Simplest implementation: once a registration is marked as notified, filter it out of the active list. If we want a history view later, we can add that in phase two.

**Meera:** Good. And just to confirm — this is at the product level, not the variant level?

**Nathan:** Product level for this sprint, yes. Variant-level notification — where a customer registers specifically for the black 256GB model — is the more precise version, but it adds data model complexity. Product-level is clean and delivers the core value.

**Amit:** Product-level is fine. Let's ship something clean rather than something complicated.

**Meera:** Let me summarise the scope.

Notify Me button appears on the product detail page in place of "Add to Cart" when the product is out of stock. Login required — guests are prompted to log in to register. One registration per customer per product, with a clear message if they try to register twice. After registering, the button state confirms their registration. Registrations are managed from the account page — customers can see products they're waiting on and cancel any registration. When a product's stock is updated via the system, all active registrations for that product are marked as fulfilled and removed from the active list. No real email sending in this sprint — fulfilment is recorded in the database.

**Amit:** That's exactly it. Clean and deliverable.

**Pooja:** Good session. The data model will be reusable when we add the email step later.

**Nathan:** Agreed. The team will have a solid foundation to build on.

---

*End of transcript. Duration: 38 minutes.*
