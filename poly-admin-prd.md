# Product Requirements Document (PRD): Standalone Admin Portal (Poly-Admin)

## 1. Overview
**Poly-Admin** is a dedicated, standalone administrative console for Nowgong Polytechnic. Unlike the institutional portal, this is a separate application designed strictly for data governance and administrative operations. It features a private login gate and focuses on high-density data management, primarily student records.

## 2. Strategic Objectives
- **Security Isolation**: Separate the administrative interface from the public-facing and student portal sites.
- **Data Density**: Provide a workspace-optimized UI for managing thousands of institutional records.
- **Direct Database Governance**: Give admins a clean, high-performance interface for Supabase data interaction.

## 3. User Personas
### Registrar / Academic Admin
- **Goal**: Search through enrolled students, verify payment statuses, and manage department distributions.
- **Requirement**: A fast, search-heavy interface with Excel-like capabilities.

## 4. Functional Requirements

### 4.1. Independent Authentication (Login Gate)
- **Requirement**: A standalone, secure login page at the root route (`/`).
- **Logic**: Uses Supabase Auth. Only accounts with the metadata flag `role: admin` in the database will be granted entry to the dashboard.
- **Security**: Persistence of session should be isolated from the main polytechnic website.

### 4.2. Main Administrative Dashboard
- **Requirement**: A welcome center showing platform statistics (e.g., "Total Students", "Notifications Pending", "System Health").
- **Logic**: Fetch aggregate counts from Supabase tables on load.

### 4.3. Student Record Explorer (Core Feature)
- **Requirement**: A high-density data grid showing all students.
- **Fields**: Name, Roll Number, Department, Semester, Status, and Payment Status.
- **Capabilities**: Grouping by department, filtering by semester, and global search.

### 4.4. Cross-Reference Logic
- **Requirement**: View a student's related records (e.g., their fee payments and submitted documents) from within the student profile view.

## 5. Technical Stack

- **Framework**: Next.js (App Router) - chosen for robust routing and server-side role validation.
- **Styling**: Vanilla CSS with customized design tokens to create a "Professional Workspace" aesthetic (cleaner, less decorative than the main site).
- **Icons**: Material Symbols for standardized administrative iconography.
- **Database**: Shared Supabase instance with the main project ([Project Ref: kafqcfkihtkzlbuzpejz]).

## 6. Frontend Logic & Flow

### 6.1. Auth Guard Logic
- A `middleware.ts` or `AuthGuard` component will intercept all routes except `/login`. 
- It will verify the JWT and the user's role before rendering the shell.

### 6.2. Data Pagination Logic
- To handle large student datasets, the frontend will implement **Infinite Scroll** or **Server-side Pagination** to ensure the browser remains performant.

## 7. Design Guidelines (Admin-Workspace Theme)
- **Color Palette**: Darker blues (`#0f172a`), crisp whites, and subtle accents.
- **Layout**: Collapsible sidebar, top global search bar, and a main content area using high-contrast tables.
- **Animations**: Subtle, faster transitions (200ms) to ensure the tool feels "snappy" and professional.

## 8. Success Metrics
- **Time to Record**: Admins should be able to find any specific student in under 3 seconds using the global search.
- **Isolation**: Zero cross-session contamination with the student portal.
