
## 專案規格書：KOL Brand Hub (v1.0) - (中文 (繁體) 版本)

**文件版本：** 1.0
**日期：** 2025年11月16日
**專案經理：** (Gemini - 您的資深軟體開發經理)
**專案利害關係人：** (您 - 產品負責人)

### 1. 專案總覽 (Project Overview)

#### 1.1 專案目標 (Project Goal)

本專案的唯一目標是，打造一個「**KOL 個人品牌中心 (KOL Brand Hub)**」MVP (最小可行產品)。

此平台將整合「**Link-in-Bio (個人主頁)**」與「**Personal Store (個人商城 / 團購分流站)**」兩大核心功能，旨在幫助台灣的小網紅（約 1 萬粉絲）以**零成本、零風險、零技術門檻**的方式，開始他們的流量變現旅程。

#### 1.2 核心技術棧 (Core "Free Stack")

為嚴格遵守「防止資金耗損」的最高指導原則，我們將採用以下「永久免費方案 (Perpetual Free Tier)」的技術棧進行開發與初期營運：

* **前端框架 & 部署 (Frontend)：** **Next.js** 部署於 **Vercel**
    * *理由：* 永久免費的 Hobby 方案，提供完美的 Next.js (SSR/ISR) 支援、全球 CDN 和自動化 CI/CD。
* **後端 API (Backend API)：** **NestJS** (或 Next.js API Routes) 部署於 **Vercel Serverless Functions**
    * *理由：* 與前端一同部署在 Vercel，共享免費額度，無需管理伺服器。
* **資料庫 & 認證 (Database & Auth)：** **Supabase**
    * *理由：* **這是我們加速開發並保持零成本的關鍵**。Supabase 的永久免費方案提供了：
        1.  **PostgreSQL 資料庫** (足夠 MVP 使用)。
        2.  **完整的身份認證 (Auth) 系統** (我們無需自行開發註冊、登入、JWT)。
        3.  **檔案儲存 (Storage)** (用於網紅上傳大頭貼、商品封面圖)。

#### 1.3 預估時程 (Estimated Timeline)

**MVP 開發完成：6 至 8 週。**

---

### 2. 功能範疇 (Scope Definition)

#### 2.1 納入範疇 (In-Scope for MVP)

以下功能是 V1.0 **必須**交付的核心內容：

* **F-01: 網紅身份認證 (Auth)**
    * 網紅可以使用 Email/密碼進行註冊。
    * 網紅可以登入/登出。
* **F-02: 儀表板 - 個人主頁管理 (Link-in-Bio Management)**
    * 網紅可以編輯其唯一的 `username` (例如：`our-platform.com/{username}`)。
    * 網紅可以上傳大頭貼、編輯個人簡介。
    * 網紅可以新增、編輯、刪除、拖曳排序「社群連結」(例如：IG, YT, TikTok)。
* **F-03: 儀表板 - 個人商城管理 (Store Management)**
    * 網紅可以「新增商品」(團購活動)。
    * 「新增商品」時，可填寫：
        * 商品封面圖、標題、簡介。
        * **廠商下單連結 (URL)**。
        * **廠商客服連結 (URL)**。
        * 商品詳細介紹 (長文)。
        * **動態 Q&A 列表** (可新增多組問答)。
    * 網紅可以設定商品狀態 (上架/下架)。
* **F-04: 公開頁 - 個人主頁 (Public Profile Page)**
    * 粉絲可透過 `/{username}` 訪問。
    * 此頁面展示網紅的大頭貼、簡介、以及所有「社群連結」列表。
    * 包含一個指向「個人商城」的顯著連結/按鈕。
* **F-05: 公開頁 - 個人商城 (Public Store Page)**
    * 粉絲可透過 `/{username}/store` 訪問。
    * 此頁面以「卡片形式」陳列該網紅所有「已上架」的商品。
* **F-06: 公開頁 - 商品分流頁 (Public Product Detail Page)**
    * 粉絲從商城點擊商品卡片後，進入 `/{username}/store/{product_id}`。
    * 此頁面是**團購的核心分流站**，清楚展示：
        * 商品介紹、Q&A 列表。
        * 「立即下單」按鈕 (導向 F-03 的廠商連結)。
        * 「聯繫客服」按鈕 (導向 F-03 的廠商連結)。
* **F-07: 基礎分析 (Basic Analytics)**
    * 網紅儀表板可看到**基礎點擊計數** (例如：「下單」按鈕被點了幾次)。

#### 2.2 排除範疇 (Out-of-Scope for MVP)

為了確保 6-8 週內可交付，以下功能**明確排除**在此次 MVP 之外：

* **絕不**處理任何金流 (No Payment Gateway)。
* **絕不**處理任何訂單或物流 (No Order Management)。
* **沒有**廠商專用的後台 (No Vendor Dashboard)。
* **沒有**串接 IG/FB Messenger API (No Chatbot Integration)。
* **沒有**複雜的分析儀表板 (No Advanced Analytics)。

---

### 3. 關鍵資料庫設計 (Key Database Schema on Supabase)

我們將在 Supabase 儀表板中建立以下核心資料表：

| 資料表 (Table) | 關鍵欄位 (Key Fields) | 描述 (Description) |
| :--- | :--- | :--- |
| `users` | (由 Supabase Auth 自動管理) | 儲存網紅的登入憑證 (Email, 密碼 Hash)。 |
| `user_profiles` | `id (UUID, FK to auth.users)`, `username (text, unique)`, `bio (text)`, `avatar_url (text)` | 網紅的公開個人資料。`username` 將用於公開路由。 |
| `social_links` | `id (PK)`, `user_id (FK to users)`, `title (text)`, `url (text)`, `order (int)` | `/{username}` 主頁上的社群連結列表。 |
| `products` | `id (PK)`, `user_id (FK to users)`, `title (text)`, `cover_image_url (text)`, `status (enum: 'draft', 'published')`, `vendor_order_link (text)`, `vendor_service_link (text)` | 商城中的「商品」(即團購活動)。 |
| `faqs` | `id (PK)`, `product_id (FK to products)`, `question (text)`, `answer (text)` | 每個商品底下可擁有多組 Q&A。 |
| `clicks` | `id (PK)`, `product_id (FK, nullable)`, `link_id (FK, nullable)`, `click_type (text)`, `created_at (timestamp)` | 用於 F-07 基礎分析的流水紀錄。 |

---

### 4. 詳細開發流程 (Detailed Development Sprints)

我們將採用敏捷開發，分為 4 個 Sprints (衝刺)。

#### Sprint 0: 專案啟動與架構建立 (1 週)

* **目標：** 建立「零成本」的開發與部署環境。
* **任務：**
    1.  初始化 Vercel 專案 (Next.js)。
    2.  初始化 Supabase 專案。
    3.  **關鍵：** 在 Supabase GUI 中**完成所有資料庫 Schema (見第 3 節)**。
    4.  建立 Monorepo (pnpm/Turborepo)，並配置 Vercel CI/CD。
    5.  建立 Staging (測試) 環境。
* **交付成果：** 一個可部署的空白網站；一個已定義好 Schema 的資料庫。

#### Sprint 1: 身份認證 & Link-in-Bio (2 週)

* **目標：** 網紅可註冊、登入，並打造一個可用的個人主頁。
* **任務：**
    1.  **前端：** 建立註冊頁、登入頁。
    2.  **前端 (Auth)：** 使用 `supabase-js` 客戶端函式庫，**直接串接 Supabase Auth** (F-01)。
    3.  **前端 (Dashboard)：** 建立「個人資料」設定頁 (上傳大頭貼、編輯簡介、設定 `username`) (F-02)。
    4.  **前端 (Dashboard)：** 建立「連結管理」頁 (CRUD + 拖曳排序) (F-02)。
    5.  **前端 (Public)：** 建立 `/{username}` 公開路由 (F-04)。
* **交付成果：** 一個功能完整的 Linktree 替代品。

#### Sprint 2: 個人商城 & 商品分流頁 (3 週)

* **目標：** 網紅可上架團購商品，粉絲可查看並被導流至廠商頁面。
* **任務：**
    1.  **前端 (Dashboard)：** 建立「我的商城」管理介面，可新增/編輯商品 (F-03)。
    2.  **前端 (Dashboard)：** 重點開發「編輯商品」的複雜表單 (包含 Q&A 動態增減、廠商連結等) (F-03)。
    3.  **前端 (Dashboard)：** 圖片上傳功能**直接串接 Supabase Storage**。
    4.  **前端 (Public)：** 建立 `/{username}/store` 公開商城頁 (F-05)。
    5.  **前端 (Public)：** 建立 `/{username}/store/{product_id}` 公開商品分流頁 (F-06)。
* **交付成果：** 專案的核心價值——團購分流站功能完成。

#### Sprint 3: 分析、潤飾 & 封閉測試 (2 週)

* **目標：** 完成基礎分析功能，並準備交付給第一批用戶。
* **任務：**
    1.  **後端 (API)：** 建立一個極輕量的 `POST /api/analytics/click` 端點 (F-07)。
    2.  **前端 (Public)：** 在所有關鍵按鈕 (廠商連結、社群連結) 上掛載 `onClick` 事件，非同步呼叫 API。
    3.  **前端 (Dashboard)：** 建立一個非常簡單的計數器，顯示點擊次數 (F-07)。
    4.  **UI/UX 潤飾：** 確保 RWD (響應式網頁設計) 在手機上完美運作。
    5.  **部署：** 部署至 Production 環境，綁定正式網域。
* **交付成果：** **一個可交付給 5-10 位網紅進行 Beta 測試的 MVP。**

---

### 5. 未來轉移方式 (Future Migration Path)

本架構已為未來的規模化做好了「**低痛點轉移**」的準備。當我們獲得資金或流量大到必須轉移至 AWS/GCP 時：

| 服務項目 | 從 (Free Stack) | 轉移至 (AWS 範例) | 轉移方式 & 難度 |
| :--- | :--- | :--- | :--- |
| **前端 (Next.js)** | Vercel | AWS Amplify | **低。** Next.js 是標準框架，Amplify 原生支援。 |
| **後端 (API)** | Vercel Serverless | AWS Fargate (Docker) | **低。** NestJS 可輕易打包成 Docker 容器部署。 |
| **資料庫 (Postgres)** | Supabase (Postgres) | AWS RDS (Postgres) | **低。** 都是 Postgres。使用 `pg_dump` 即可完成資料轉移。 |
| **檔案儲存** | Supabase Storage | AWS S3 | **中。** 需要執行一次性的腳本，將檔案從 Supabase 桶複製到 S3 桶。 |
| **身份認證 (Auth)** | Supabase Auth | AWS Cognito | **高。** 這是**唯一的技術鎖定點**。我們無法匯出用戶密碼 Hash。 |

> **Auth 轉移的標準解決方案：**
> 1.  我們從 Supabase 匯出用戶列表 (Email)。
> 2.  將列表匯入 AWS Cognito。
> 3.  在用戶下次登入時，系統會提示「**由於系統升級，請您重設密碼**」。
> 4.  這是一次性的、可接受的用戶體驗干擾，是我們換取初期開發速度與零成本的明智代價。

---
---

## Project Specification: KOL Brand Hub (v1.0) - (English Version)

**Document Version:** 1.0
**Date:** November 16, 2025
**Project Manager:** (Gemini - Your Senior Software Development Manager)
**Project Stakeholder:** (You - Product Owner)

### 1. Project Overview

#### 1.1 Project Goal

The singular objective of this project is to build a **"KOL Brand Hub"** MVP (Minimum Viable Product).

This platform will integrate two core features: a **"Link-in-Bio"** personal page and a **"Personal Store"** (group-buy funnel). It is designed to help small-scale Taiwanese influencers (~10k followers) start their content monetization journey with **zero cost, zero risk, and zero technical barriers**.

#### 1.2 Core "Free Stack"

To strictly adhere to the primary directive of "preventing capital drain," we will adopt the following "Perpetual Free Tier" technology stack for development and initial operation:

* **Frontend Framework & Deployment:** **Next.js** deployed on **Vercel**
    * *Reason:* The perpetual "Hobby" plan provides perfect Next.js (SSR/ISR) support, global CDN, and automated CI/CD.
* **Backend API:** **NestJS** (or Next.js API Routes) deployed as **Vercel Serverless Functions**
    * *Reason:* Deployed alongside the frontend on Vercel, sharing the free quota, eliminating server management.
* **Database & Auth:** **Supabase**
    * *Reason:* **This is the key to accelerating our development while maintaining zero cost.** Supabase's free tier provides:
        1.  **A PostgreSQL Database** (sufficient for the MVP).
        2.  **A complete Authentication (Auth) System** (we do not need to build registration, login, JWT ourselves).
        3.  **File Storage** (for influencers to upload avatars and product cover images).

#### 1.3 Estimated Timeline

**MVP Development Completion: 6 to 8 weeks.**

---

### 2. Scope Definition

#### 2.1 In-Scope for MVP

The following features are the core deliverables for V1.0:

* **F-01: Influencer Authentication (Auth)**
    * Influencers can sign up using Email/Password.
    * Influencers can log in / log out.
* **F-02: Dashboard - Link-in-Bio Management**
    * Influencers can edit their unique `username` (e.g., `our-platform.com/{username}`).
    * Influencers can upload an avatar and edit their personal bio.
    * Influencers can add, edit, delete, and drag-to-sort "Social Links" (e.g., IG, YT, TikTok).
* **F-03: Dashboard - Store Management**
    * Influencers can "Add a Product" (a group-buy campaign).
    * When adding a product, they can fill in:
        * Cover image, title, and short description.
        * **Vendor Order Link (URL)**.
        * **Vendor Service Link (URL)**.
        * Detailed product description (long-form text).
        * **Dynamic Q&A List** (can add multiple Q/A pairs).
    * Influencers can set the product status (Published/Draft).
* **F-04: Public Page - Public Profile Page**
    * Accessible to fans via `/{username}`.
    * This page displays the influencer's avatar, bio, and a list of all "Social Links".
    * It includes a prominent link/button directing to their "Personal Store".
* **F-05: Public Page - Public Store Page**
    * Accessible to fans via `/{username}/store`.
    * This page displays all "Published" products as a card-based list.
* **F-06: Public Page - Public Product Detail Page**
    * Fans navigate here after clicking a product card, via `/{username}/store/{product_id}`.
    * This page is the **core group-buy funnel**, clearly displaying:
        * Product description, Q&A list.
        * "Order Now" button (links to F-03's vendor link).
        * "Contact Support" button (links to F-03's vendor link).
* **F-07: Basic Analytics**
    * The influencer's dashboard will show **basic click counts** (e.g., "Order button was clicked X times").

#### 2.2 Out-of-Scope for MVP

To ensure delivery within 6-8 weeks, the following features are **explicitly excluded** from this MVP:

* **No** payment gateway integration.
* **No** order or fulfillment management.
* **No** dedicated vendor-facing dashboard.
* **No** IG/FB Messenger API (chatbot) integration.
* **No** complex analytics dashboards.

---

### 3. Key Database Schema (on Supabase)

We will create the following core tables in the Supabase dashboard:

| Table | Key Fields | Description |
| :--- | :--- | :--- |
| `users` | (Managed by Supabase Auth) | Stores influencer login credentials (Email, Password Hash). |
| `user_profiles` | `id (UUID, FK to auth.users)`, `username (text, unique)`, `bio (text)`, `avatar_url (text)` | The influencer's public profile data. `username` is used for the public route. |
| `social_links` | `id (PK)`, `user_id (FK to users)`, `title (text)`, `url (text)`, `order (int)` | The list of social links on the `/{username}` page. |
| `products` | `id (PK)`, `user_id (FK to users)`, `title (text)`, `cover_image_url (text)`, `status (enum: 'draft', 'published')`, `vendor_order_link (text)`, `vendor_service_link (text)` | The "product" in the store (i.e., the group-buy campaign). |
| `faqs` | `id (PK)`, `product_id (FK to products)`, `question (text)`, `answer (text)` | Each product can have multiple Q&A pairs. |
| `clicks` | `id (PK)`, `product_id (FK, nullable)`, `link_id (FK, nullable)`, `click_type (text)`, `created_at (timestamp)` | Log for F-07 Basic Analytics. |

---

### 4. Detailed Development Sprints

We will adopt an Agile methodology, broken into 4 Sprints.

#### Sprint 0: Project Setup & Architecture (1 Week)

* **Goal:** Establish the "zero-cost" development and deployment environment.
* **Tasks:**
    1.  Initialize Vercel project (Next.js).
    2.  Initialize Supabase project.
    3.  **Critical:** **Complete all database schema in the Supabase GUI (see Section 3).**
    4.  Set up a Monorepo (pnpm/Turborepo) and configure Vercel CI/CD.
    5.  Establish a Staging environment.
* **Deliverable:** A deployable blank site; a database with a defined schema.

#### Sprint 1: Auth & Link-in-Bio (2 Weeks)

* **Goal:** Influencers can sign up, log in, and build a usable public profile page.
* **Tasks:**
    1.  **Frontend:** Build Sign Up and Log In pages.
    2.  **Frontend (Auth):** Use the `supabase-js` client library to **directly integrate with Supabase Auth** (F-01).
    3.  **Frontend (Dashboard):** Build "Profile Settings" page (upload avatar, edit bio, set `username`) (F-02).
    4.  **Frontend (Dashboard):** Build "Link Management" page (CRUD + drag-to-sort) (F-02).
    5.  **Frontend (Public):** Build the public `/{username}` route (F-04).
* **Deliverable:** A fully functional Linktree alternative.

#### Sprint 2: Personal Store & Product Funnel (3 Weeks)

* **Goal:** Influencers can list group-buy products, and fans can view them and be funneled to the vendor.
* **Tasks:**
    1.  **Frontend (Dashboard):** Build "My Store" management interface (CRUD for products) (F-03).
    2.  **Frontend (Dashboard):** Focus on the "Edit Product" complex form (incl. dynamic Q&A, vendor links) (F-03).
    3.  **Frontend (Dashboard):** Implement image uploads **directly to Supabase Storage**.
    4.  **Frontend (Public):** Build the public `/store` page (F-05).
    5.  **Frontend (Public):** Build the public `/store/{product_id}` product detail page (F-06).
* **Deliverable:** The core value of the project—the group-buy funnel—is complete.

#### Sprint 3: Analytics, Polish & Closed Beta (2 Weeks)

* **Goal:** Complete basic analytics and prepare for delivery to first users.
* **Tasks:**
    1.  **Backend (API):** Create a lightweight `POST /api/analytics/click` endpoint (F-07).
    2.  **Frontend (Public):** Attach `onClick` event handlers to all key buttons (vendor links, social links) to call the analytics API.
    3.  **Frontend (Dashboard):** Build a simple counter/display for click analytics (F-07).
    4.  **UI/UX Polish:** Ensure RWD (Responsive Web Design) is perfect on mobile devices.
    5.  **Deployment:** Deploy to Production and connect the official domain.
* **Deliverable:** **An MVP ready for Closed Beta testing with 5-10 influencers.**

---

### 5. Future Migration Path

This architecture is designed for a **low-pain migration** to a larger scale in the future. When we have the funding or traffic that necessitates a move to AWS/GCP:

| Service | From (Free Stack) | To (AWS Example) | Migration Path & Difficulty |
| :--- | :--- | :--- | :--- |
| **Frontend (Next.js)** | Vercel | AWS Amplify | **Low.** Next.js is a standard framework with native support on Amplify. |
| **Backend (API)** | Vercel Serverless | AWS Fargate (Docker) | **Low.** NestJS can be easily containerized and deployed. |
| **Database (Postgres)**| Supabase (Postgres) | AWS RDS (Postgres) | **Low.** Both are Postgres. A `pg_dump` and import is all that's required. |
| **File Storage** | Supabase Storage | AWS S3 | **Medium.** Requires a one-time script to copy all files from the Supabase bucket to an S3 bucket. |
| **Auth** | Supabase Auth | AWS Cognito | **High.** This is the **only technical lock-in**. |

> **Standard Solution for Auth Migration:**
> 1.  We export the user list (Emails) from Supabase.
> 2.  We import this list into AWS Cognito.
> 3.  The next time a user logs in, they are triggered with a "**Please reset your password** due to a system upgrade."
> 4.  This is a one-time, acceptable UX trade-off in exchange for our initial development speed and zero-cost strategy.
