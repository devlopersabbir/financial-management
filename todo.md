## 🚀 Initial Setup

### Frontend (Next.js)

- [ ] Initialize Next.js app with TypeScript + Tailwind CSS v3
- [ ] Setup folder structure (components, lib, hooks, features, etc.)
- [ ] Setup TanStack Query, TanStack Table
- [ ] Setup React Hook Form + Zod for validation
- [ ] Setup axios/custom HTTP client with token injection
- [ ] Setup Layouts (DashboardLayout, AuthLayout)
- [ ] Add authentication state management (using cookies/JWT)

### Backend (NestJS)

- [ ] Create NestJS project structure with module separation
- [ ] Setup Drizzle ORM with PostgreSQL
- [ ] Implement JWT-based auth module (Login/Register/Token Refresh)
- [ ] Setup Role-based Guard system
- [ ] Create base entities: User, Role, Permission, Transaction, Webhook

## 💸 Donation & Payment Flow

### Frontend

- [ ] Donation Page (Public)
  - [ ] Input field for amount + reference
  - [ ] Call backend to initialize payment
- [ ] Payment Page (Login Required)
  - [ ] Shows intent summary
  - [ ] Redirects to payment gateway (e.g., bkash, SSLCOMMERZ)
- [ ] Post-payment success page
  - [ ] Show status from backend

### Backend

- [ ] Create /donations/initiate endpoint
  - [ ] Accepts user info, amount, and generates payment intent (with expiration)
- [ ] Create Webhook route /payment/hook
  - [ ] Validates source, marks payment as complete
- [ ] Create Donation entity with fields:
  - [ ] id, userId, amount, reference, status, gateway, intentId, expiresAt
- [ ] Store intentId securely
- [ ] Cron job / scheduler to expire intents

## 📊 Financial Management System

### Backend

- [ ] `Transaction` entity (type: DEPOSIT, DONATION, EXPENSE, WITHDRAW)
  - [ ] Fields: `id, type, amount, note, createdBy, createdAt`
- [ ] `GET /transactions` with filters (type, date, user)
- [ ] `POST /transactions` for DEPOSIT/DONATION
- [ ] `UPDATE /transactions/:id` for EXPENSE/WITHDRAW
- [ ] Calculate current balance dynamically: SUM`(credit) - SUM(debit)`

### Frontend

- [ ] Dashboard Page
  - [ ] Show current balance, total donations, expenses, etc.
  - [ ] List of transactions
  - [ ] Filters by type/date/user
- [ ] Create Deposit/Expense modal with forms
- [ ] Allow only System Admin to create/update financial records

## 🛡️ Role & Permission System

### Backend

- [ ] Entities:
  - [ ] `Role`: name
  - [ ] `Permission`: name
  - [ ] `UserRole`, `RolePermission`
- [ ] API Endpoints:
  - [ ] `POST /roles` – System Admin only
  - [ ]` POST /roles/:id/permissions`
  - [ ] `POST /users/:id/roles`
- [ ] Add `AuthGuard` and `RoleGuard` decorators
- [ ] Setup `@PermissionGuard` for specific routes

### Frontend

- [ ] `Guard` HOC/Wrapper component (e.g., `<PermissionGuard permission="create:donation">`)
- [ ] Navigation Guard (show/hide routes based on permissions)
- [ ] User Management UI for:
  - [ ] Assigning roles
  - [ ] Managing permissions

## 🧩 Reusable Component System

- [ ] `Button`, `Input`, `Textarea`, `Dropdown`, `Checkbox`, `Modal`, `Drawer`
- [ ] `Form` wrapper with RHF + Zod
- [ ] `Table` with Tanstack
- [ ] Toast Notifications (e.g., `sonner` npm package)
- [ ] Loader/Spinner and Empty States
- [ ] Full Dark Mode Support (optional)

## 🌐 Webhooks Handling

### Backend

- [ ] Create endpoint: `/webhook/payment-success`
- [ ] Validate authenticity of the request (secret headers or signature)
- [ ] Update donation/payment record to `status = SUCCESS`
- [ ] Optional: Send email/SMS confirmation

## 🔐 Auth Module

### Backend

- [ ] JWT Auth (login/register with hashed passwords)
- [ ] Email verification + Forgot password (optional)
- [ ] Middleware to protect routes

### Frontend

- [ ] Login/Register UI
- [ ] Logout Button
- [ ] Session persistence with cookies or local storage
- [ ] Authenticated route guard

### ✅ GitHub Best Practices

- [ ] Proper `.gitignore`
- [ ] Use `husky` + `lint-staged` for precommit checks
- [ ] Setup ESLint + Prettier
- [ ] Setup CI with GitHub Actions

## 🛠️ Tech Stack Summary

| Layer    | Stack                                      |
| -------- | ------------------------------------------ |
| Frontend | Next.js, TypeScript, Tailwind, RHF, Zod    |
| State    | TanStack Query, Zustand (if needed)        |
| Backend  | NestJS, TypeScript, PostgreSQL, DrizzleORM |
| Auth     | JWT (Access + Refresh), Role/Permission    |
| Payment  | Custom Gateway API + Webhook Endpoint      |
