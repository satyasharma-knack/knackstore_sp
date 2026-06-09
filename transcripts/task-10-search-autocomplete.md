# Task 10 — Search Autocomplete
## Discovery Session Transcript

**Project:** TechStore — Electronics E-Commerce Platform
**Session:** Feature Discovery Workshop
**Date:** 6th June 2026, 10:00 AM
**Location:** TechStore HQ, Conference Room B2

**Attendees:**
- **Daniel Park** — Business Analyst, Knack Systems
- **Neha Sharma** — Project Manager, TechStore
- **Robert Mitchell** — Head of Search & Discovery, TechStore
- **Kavya Menon** — Data Analyst, TechStore
- **Sanjay Kumar** — Solution Architect, Knack Systems

---

**Daniel:** Good morning. Today we're designing search autocomplete — the live suggestions that appear as a customer types in the search bar. Robert, I know you're passionate about this one.

**Robert:** I really am. Search is the highest-intent entry point we have. When a customer types in the search bar they know what they want. If we can guide them to the right product faster, we convert them faster. Right now our search box does nothing until they hit Enter. That's a wasted opportunity.

**Kavya:** The data backs this up. About forty percent of our site sessions involve at least one search. And our search-to-purchase conversion rate is almost double the browse-to-purchase rate. Any improvement to search experience has a direct revenue impact.

**Daniel:** Strong case. Let's get into the design. When should suggestions start appearing?

**Robert:** After the customer types at least two characters. One character gives too many meaningless results. Two is the sweet spot where suggestions start being useful.

**Daniel:** How many suggestions should be shown?

**Ananya:** Wait — Ananya isn't here. Sorry, I meant to ask Neha.

**Neha:** No problem. I'd say eight to ten suggestions maximum. Enough to be useful without the dropdown looking overwhelming.

**Robert:** Agreed. Eight is probably the right number. Two or three product name suggestions and the rest category or brand matches.

**Daniel:** So the suggestions are a mix of types — not just products?

**Robert:** Yes — this is important. Three types: first, specific products that match. Second, categories — so if someone types "lap" they might see "Laptops" as a category suggestion. Third, brands — typing "Sam" could surface "Samsung" as a brand to browse. The customer can click any of these and go directly to the right place.

**Kavya:** From a data perspective, we'd also want to incorporate search popularity. If five hundred people have searched for "wireless headphones" this week, that should rank higher than an obscure match.

**Sanjay:** We can layer that in. A combination of text match relevance and search frequency scoring.

**Daniel:** Should suggestions include product images?

**Robert:** Yes — for product suggestions, definitely. People recognise a product by its image faster than its name. Show a small thumbnail, the product name, and the price. For category and brand suggestions, just an icon or the category image is fine.

**Neha:** The design needs to clearly differentiate between product results and category or brand results. Different visual treatment — maybe a section header like "Products" and "Categories."

**Daniel:** How quickly should suggestions appear after the user types?

**Sanjay:** We'd debounce the API call — wait about 300 milliseconds after the last keystroke before firing the request. That prevents a request on every single key press.

**Robert:** Whatever it takes to feel instant. Customers won't tolerate a noticeable lag in a search box.

**Daniel:** What happens when a customer clicks a product suggestion?

**Robert:** Goes straight to the product detail page. Skip the search results page entirely — they've already found what they want.

**Daniel:** And clicking a category suggestion?

**Robert:** Takes them to the product listing page filtered to that category. Clicking a brand suggestion takes them to the product listing page filtered by that brand.

**Daniel:** What if the customer types something that returns no suggestions?

**Neha:** The dropdown just doesn't appear. Don't show an empty dropdown — that looks broken. If there's nothing to suggest, nothing shows.

**Daniel:** What about keyboard navigation? Can the customer use arrow keys to navigate the suggestions and press Enter to select?

**Sanjay:** That's standard accessibility behaviour and we should support it. Arrow keys to move through suggestions, Enter to select, Escape to close the dropdown.

**Robert:** Absolutely — keyboard navigation is important. Some of our enterprise customers will be power users.

**Daniel:** Should the search input text update as the customer arrows through suggestions?

**Robert:** Yes — as they arrow down, the text in the search box should update to reflect the highlighted suggestion. Like a preview.

**Kavya:** One thing I want to flag — we should log what people type and what they click in the suggestions. That search data is gold for understanding what our customers are looking for and where our catalogue has gaps.

**Sanjay:** We can add an event log for search queries and suggestion clicks. No PII — just the search term and the action taken.

**Daniel:** Important — no PII in those logs. Just the query text and interaction type.

**Neha:** Agreed.

**Daniel:** Last one — what happens on mobile? The search bar behaviour might be different.

**Neha:** Same behaviour but the dropdown needs to be full-width and touch-friendly. Tapping a suggestion should work exactly like clicking on desktop.

**Robert:** And the suggestions should close when the customer taps outside the search box.

**Daniel:** Good. Let me wrap up. Autocomplete triggers at two characters typed. Up to eight suggestions across three types — products with image and price, categories, and brands — visually differentiated. 300ms debounce. No dropdown if no results. Clicking a product goes to product detail, category goes to filtered listing, brand goes to brand-filtered listing. Keyboard navigation with arrow keys, Enter and Escape. Text updates as user arrows through suggestions. Search interactions logged without PII. Mobile-optimised with full-width dropdown.

**Robert:** That's a thorough spec. Well run Daniel.

**Neha:** Thanks Daniel, Sanjay. Good session.

---

*End of transcript. Duration: 45 minutes.*
