# KnackStore — Features Reference

**Knack AI Hackathon Starter Application**
Version 1.0 | June 2026 | Classification: Internal — Knack Confidential

---

## Application Overview

KnackStore is a headless e-commerce application built with Spring Boot (backend) and Angular (frontend). It is the starter repository for the Knack AI Hackathon. Participants clone this repo and extend it to implement their assigned hackathon task. No SAP Commerce local installation is required.

- **Backend:** Spring Boot 3.2 · Java 17 · Spring Data JPA · Spring Security (JWT) · H2 in-memory database
- **Frontend:** Angular 17 · Bootstrap 5 · RxJS
- **Auth:** JWT Bearer tokens, stateless REST API
- **Default port:** Backend `8080` · Frontend `4200` (proxied to backend via `/api`)

---

## Features Included in the Starter

### 1. Product Catalogue

| Feature | Details |
|---|---|
| Product listing | Grid view with image, brand, name, star rating, price |
| Product detail | Full description, variant selector (colour / storage), stock status, quantity picker |
| Category browsing | 6 categories: Smartphones, Laptops, Cameras, Headphones, Tablets, Accessories |
| Search | Keyword search across product name and brand |
| Filter | By category, brand, min price, max price — combinable |
| Featured products | Homepage carousel of featured items |
| Product variants | Colour and storage combinations with individual SKUs and prices |
| Sample data | 12 products pre-seeded across all categories with realistic names, prices, and Unsplash images |

### 2. Customer Account

| Feature | Details |
|---|---|
| Registration | Email, password, first/last name, phone |
| Login | JWT token issued on success |
| Profile management | Edit name, phone, default delivery address |
| Session persistence | JWT stored in localStorage, restored on refresh |
| Route guards | Protected routes redirect to `/login` |
| Demo account | `demo@knack.com` / `Demo@1234` pre-seeded |

### 3. Shopping Cart

| Feature | Details |
|---|---|
| Add to cart | Product + optional variant + quantity |
| Update quantity | Inline +/− controls on cart page |
| Remove item | Per-line delete |
| Auto-merge | Adding same product+variant increments existing entry |
| Cart summary | Running total, item count, line totals |
| Persistent server-side | Cart tied to authenticated customer |
| Cart badge | Header shows live item count |

### 4. Checkout

| Feature | Details |
|---|---|
| 3-step flow | Delivery address → Payment method → Review & confirm |
| Address pre-fill | Defaults from customer profile address |
| Payment options | Credit Card, Debit Card, Net Banking, UPI, Cash on Delivery |
| Order placement | POST to `/api/orders`, clears cart on success |
| Redirect | On success navigates to order confirmation page |

### 5. Order Management

| Feature | Details |
|---|---|
| Place order | Snapshots product/variant data at time of order |
| Order confirmation | Displays order code, status, tracking number |
| Order history | List of all orders, newest first |
| Order detail | Full line items, delivery address, payment method, tracking |
| Order statuses | PLACED → PROCESSING → SHIPPED → DELIVERED / CANCELLED |

### 6. Navigation & UX

| Feature | Details |
|---|---|
| Fixed header | Search bar, cart icon with badge, login/register or user menu |
| Breadcrumbs | On product detail page |
| Responsive layout | Bootstrap 5 grid, mobile-friendly |
| Loading states | Spinners on all async operations |
| Empty states | Friendly messages when cart or order list is empty |
| Error feedback | Inline validation on all forms |

---

## API Endpoints Reference

### Auth (Public)
| Method | Path | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new customer |
| POST | `/api/auth/login` | Login and receive JWT |

### Products (Public)
| Method | Path | Description |
|---|---|---|
| GET | `/api/products` | Search/filter products |
| GET | `/api/products/featured` | Featured products only |
| GET | `/api/products/brands` | Distinct brand list |
| GET | `/api/products/{id}` | Product by ID |
| GET | `/api/products/code/{code}` | Product by code |
| GET | `/api/products/category/{code}` | Products in category |
| GET | `/api/categories` | All categories |

### Cart (Authenticated)
| Method | Path | Description |
|---|---|---|
| GET | `/api/cart` | Get current customer cart |
| POST | `/api/cart/entries` | Add item to cart |
| PUT | `/api/cart/entries/{id}` | Update quantity |
| DELETE | `/api/cart/entries/{id}` | Remove entry |

### Orders (Authenticated)
| Method | Path | Description |
|---|---|---|
| POST | `/api/orders` | Place order from cart |
| GET | `/api/orders` | Order history |
| GET | `/api/orders/{orderCode}` | Order detail |

### Customer (Authenticated)
| Method | Path | Description |
|---|---|---|
| GET | `/api/customers/me` | Get profile |
| PUT | `/api/customers/me` | Update profile |

---

## Hackathon Extension Tasks

These features are **not built** in the starter — they are the hackathon challenges. Each team extends the starter to implement their assigned task.

| Task | Feature to Build | Affected Layers |
|---|---|---|
| Task A | Product Reviews & Ratings | Spring model + endpoint + Angular review form + display |
| Task B | Wishlist | Spring entity + CRUD API + Angular wishlist page |
| Task C | Voucher / Promo Code at Checkout | Spring validation + discount logic + Angular checkout form |
| Task D | Product Comparison | Spring comparison endpoint + Angular comparison page |
| Task E | Stock Notify Me | Spring notification model + Angular out-of-stock form |

---

## How to Run

### Backend
```bash
cd backend
./mvnw spring-boot:run
# API available at http://localhost:8080
# H2 console at http://localhost:8080/h2-console (JDBC URL: jdbc:h2:mem:electronicsdb)
```

### Frontend
```bash
cd frontend
npm install
npm start
# App available at http://localhost:4200
```

---

## Data Handling Note

This application uses H2 in-memory storage. All data resets on application restart. No real PII is stored or processed. Demo data uses synthetic names and placeholder images. Participants must not paste real client data, credentials, or PII into this application or into any AI tool during the hackathon. This is consistent with Knack's obligations under GDPR and ISO 27001:2022.

---

*Knack Systems & Services Pvt Ltd · ISO 27001:2022 · GDPR Compliant*
