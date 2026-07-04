Software Developer — Role Brief
Software Developer — Role Brief
Full Stack / Front-End / Back-End Developer (FSD / FED / BED)

The Brief
THRIVE is short for “The Holistic Regenerative Innovative Value Entity”. We are an independent research and systems innovation group focused on developing frameworks, tools, and intelligence systems that support a thrivable future.
To learn more about our work, visit:
https://thrivabilitymatters.earth

Purpose of This Role
We are seeking software developers (Full Stack, Front-End, or Back-End) to contribute to the development of early-stage systems that form part of a larger relationship intelligence and discovery platform.
This platform is designed to help us better understand global expertise networks across academia, government, industry, and innovation ecosystems.
At this stage, the work is focused on building foundational systems that can autonomously discover and structure publicly available information about experts and organisations.

How We Work
We operate as a research and systems development environment, not a conventional software company.
This means:
We build experimental systems that evolve over time
Requirements are provided as high-level system specifications (PRDs)
Developers are expected to interpret requirements into working systems
Clean, modular, and extensible architecture is valued over over-engineering
Working prototypes are more important than perfect solutions
Systems are expected to be improved iteratively
You will be working on components that are part of a larger ecosystem, not isolated applications.

The Type of Systems You Will Build
Depending on your role (FSD / FED / BED), you may work on components such as:
Full Stack Development
End-to-end web systems (frontend + backend)
APIs and data pipelines
Database design and integration
Internal dashboards and tools
Front-End Development
Web-based dashboards for exploring data and networks
Visualisation of relationships and entities
Simple but functional UX for system interaction
Back-End Development
Data ingestion systems
Crawling and extraction services
API services and workflow engines
Scheduling and automation systems

Core System Context
The system you will contribute to is focused on:
discovering experts and organisations from public web sources
extracting structured professional information (name, email, bio, role, etc.)
storing and organising this information into a structured database
enabling future relationship mapping and engagement workflows
A key early component is a Discovery Engine (crawler-based ingestion system) that continuously collects and structures publicly available information from institutional websites and other open sources.

Working Approach
We expect developers to:
work from provided product and technical specification documents
build systems that are modular and extensible
prioritise reliability over complexity
ensure data integrity and clean structure
design with future scaling in mind
handle real-world inconsistent web data gracefully
You should assume that:
data sources will be messy, inconsistent, and non-standard

Technical Environment
The preferred technology stack includes:
Node.js (TypeScript)
PostgreSQL
Drizzle ORM
Playwright (for crawling / automation tasks)
Redis (for background jobs and scheduling)
REST API-based backend architecture
However, equivalent modern alternatives are acceptable if justified.

Key Expectations
We are looking for developers who:
can translate conceptual requirements into working systems
are comfortable working with incomplete or evolving specifications
understand data pipelines and backend systems
can design clean, maintainable architectures
can build systems that run autonomously (not just manually triggered apps)

Collaboration Model
You will not be working in a traditional ticket-driven environment.
Instead:
you will receive system-level specifications (PRDs)
you will be expected to interpret and implement them
you will collaborate on iterative refinement
feedback will focus on system behaviour and outcomes, not just code

Evaluation Focus
We are primarily interested in:
working functionality of delivered systems
architectural clarity and maintainability
robustness of data handling
ability to handle real-world web data complexity
system thinking (not just feature delivery)

Reference Documentation
This role brief is supported by a detailed technical specification document:
VGRIP Discovery Engine & Relationship Intelligence Platform (PRD v0.2)
This document outlines the system architecture, data model, and implementation requirements in detail.

Final Note
This is a foundational systems development role contributing to a long-term intelligence infrastructure project.
The work is experimental, iterative, and systems-oriented.
We are not just building software.
We are building the infrastructure for understanding global expertise networks.

If successful, you will be invited to contribute to additional system layers including:
AI enrichment systems
relationship intelligence graphs
campaign and engagement systems
global expertise mapping infrastructure

VGRIP v1.0
VGRIP — VIP Guest Relationship Intelligence Platform
Full System Design Specification
(V1.0 Final Engineering Blueprint)
Prepared by: THRIVE Project
System Type: Relationship Intelligence + Knowledge Graph Infrastructure

1. SYSTEM VISION
   VGRIP is a self-building global intelligence system that continuously discovers, interprets, and connects human expertise across institutions, domains, and geographies.
   It transforms the open web into a structured knowledge graph of global expertise, enabling:
   discovery of subject matter experts (SMEs)
   mapping of institutional and research ecosystems
   identification of collaboration networks
   structured engagement and communication workflows
   At its core:
   VGRIP is a continuously evolving intelligence layer for human expertise.

2. CORE SYSTEM PRINCIPLES
   2.1 Discovery-first architecture
   The system begins with crawling and ingestion — everything depends on this.
   2.2 Intelligence layering
   Raw data → structured entity → enriched intelligence → graph relationships.
   2.3 Graph-native design
   Everything resolves into a network, not a table.
   2.4 AI as interpretation layer
   AI does not store data — it transforms meaning.
   2.5 Continuous system evolution
   The system is never static; it continuously expands its knowledge base.

3. SYSTEM ARCHITECTURE
   Frontend (React)
   │
   API Layer (NestJS)
   │
   ────────────────────────────────────────────
   Core Intelligence Layer
   ────────────────────────────────────────────
   Discovery Engine (Crawler FIRST MODULE)
   AI Enrichment Engine
   Relationship Engine
   Campaign Engine
   Knowledge Graph Engine
   Analytics Engine
   ────────────────────────────────────────────
   │
   Data Layer
   PostgreSQL (system of record)
   Redis (queues + caching)
   Vector DB (semantic layer)
   Object Storage (raw pages + documents)
   │
   Worker Layer
   Playwright Crawlers
   AI Workers
   Email Workers
   Scheduler

4. IMPLEMENTATION SEQUENCING PLAN (CRITICAL PATH)
   This defines how the system must be built to avoid architectural rework.

PHASE 0 — FOUNDATION INFRASTRUCTURE
Goal
Establish minimal operational backbone.
Build order:
NestJS API skeleton
PostgreSQL schema baseline
Redis queue setup
Drizzle ORM setup
Docker environment
Basic logging + job runner
Dependency outcome:
Enables all downstream modules.

PHASE 1 — DISCOVERY ENGINE (FIRST PRIORITY MODULE)
Goal
Build the system’s data acquisition brain
Why first:
Without discovery, no intelligence system exists.

Components:
1.1 Keyword ingestion system
input: list of research themes
scheduling support (daily run)
queue-based execution
1.2 Crawler system (Playwright core)
URL discovery via search APIs
domain filtering (.edu, .ac.uk, .edu.au, etc.)
page rendering + extraction
1.3 Extraction logic
Must extract at minimum:
Full name (including prefix: Dr, Prof, A/Prof)
Email (mandatory filter condition)
Bio / description (required for retention)
1.4 Storage pipeline
raw page snapshot
structured person entity
deduplication layer

Output of Phase 1:
A continuously growing database of verified experts.

PHASE 2 — DATA NORMALISATION + ENTITY SYSTEM
Goal
Convert raw scraped data into structured intelligence.
Includes:
entity resolution (duplicate detection)
organisation mapping
role classification
contact validation logic
enrichment scaffolding

PHASE 3 — AI ENRICHMENT ENGINE
Goal
Transform structured data into semantic intelligence.
Includes:
bio summarisation
FoR classification tagging
expertise inference
role seniority detection
clustering of research domains

PHASE 4 — RELATIONSHIP ENGINE
Goal
Introduce network intelligence layer.
Includes:
relationship edge creation
collaboration inference
institutional linking
graph construction logic

PHASE 5 — CAMPAIGN ENGINE
Goal
Enable structured engagement workflows.
Includes:
multi-step campaigns
email sequences
scheduling engine
response tracking

PHASE 6 — KNOWLEDGE GRAPH ENGINE
Goal
Turn system into a navigable intelligence network.
Includes:
graph traversal queries
multi-hop relationship discovery
institutional clustering
expertise heatmaps

PHASE 7 — ANALYTICS + SYSTEM OPTIMISATION
Goal
Operational intelligence layer.
Includes:
network metrics
engagement analytics
discovery performance tracking
system health dashboards

5. DATA ONTOLOGY (CORE INTELLIGENCE MODEL)
   This defines how the system understands the world.

5.1 CORE ENTITY TYPES
PERSON
Represents individuals discovered in the system.
Attributes:
name
prefix (Dr, Prof, etc.)
email
bio
role
expertise tags
organisation links

ORGANISATION
Represents institutions.
Types:
university
government agency
NGO
research institute
company

EVENT
Represents conferences, talks, and engagements.

TAG (FOCUS OF RESEARCH / THRIVABILITY DOMAIN)
Used for classification of expertise.

RELATIONSHIP EDGE
Defines connections:
collaboration
affiliation
publication co-authorship
event participation

5.2 THRIVABILITY + FOR TAXONOMY LAYER
This is the intelligence classification backbone.

Primary Classification Structure
Level 1: Macro Domains
Sustainability Systems
Climate Science
Governance Systems
Health & Wellbeing Systems
Education Systems
Technology Systems
Economic Systems
Urban Systems

Level 2: Fields of Research (FoR-aligned)
Aligned with academic classification systems:
environmental sciences
engineering systems
social sciences
AI and computational systems
public policy
health sciences

Level 3: Thrivability Extensions (Unique Layer)
This is the differentiator layer:
regenerative systems
systems thinking
planetary health
circular economy
socio-ecological resilience
future systems design

Tagging Logic
Each PERSON can have:
primary FoR domain
secondary FoR domains
thrivability alignment tags
confidence score per tag

6. API SPECIFICATION (FINAL SYSTEM CONTRACT)

6.1 DISCOVERY ENGINE
POST /discovery/run
Triggers crawling cycle
Payload:
{
"keywords": ["sustainability", "AI governance"],
"sources": ["university", "government"]
}

GET /discovery/status
Returns current pipeline state

GET /discovery/logs
Returns crawler execution logs

6.2 PERSON MODULE
GET /persons
Returns paginated experts
GET /persons/:id
Returns full enriched profile
POST /persons
Manual injection endpoint

6.3 SEARCH SYSTEM
GET /search?q=
Supports:
semantic search
keyword search
hybrid ranking
Searchable fields:
name
bio
organisation
tags

6.4 RELATIONSHIP SYSTEM
GET /relationships/:personId
Returns network graph
POST /relationships
Creates graph edge

6.5 CAMPAIGN SYSTEM
POST /campaigns
Create campaign
POST /campaigns/:id/run
Execute workflow step
GET /campaigns/:id/metrics
Campaign analytics

7. PRODUCTION HARDENING & RESILIENCE ARCHITECTURE
   This defines how the system survives real-world scale and failure conditions.

7.1 CRAWLER RESILIENCE
retry queues (BullMQ)
exponential backoff for failed pages
domain throttling per host
CAPTCHA detection fallback handling
user-agent rotation
headless + stealth mode switching

7.2 SYSTEM FAILURE MODES
Crawl failure isolation
single domain failure cannot affect global pipeline
Queue resilience
Redis queue persistence
job replay capability
Partial extraction tolerance
email mandatory, bio optional fallback retention rules

7.3 DATA CONSISTENCY MODEL
eventual consistency across graph updates
atomic writes per entity
idempotent ingestion pipeline

7.4 SCALABILITY DESIGN
horizontal worker scaling
stateless API layer
partitioned crawling queues per domain
batched AI processing

7.5 SECURITY HARDENING
RBAC access control
encrypted credentials store
audit logs for all mutations
API rate limiting
PII-aware handling (emails protected)

7.6 OBSERVABILITY LAYER
structured logging (pino/winston)
crawler telemetry dashboard
job execution tracking
system health metrics
failure tracing per pipeline stage

8. STRATEGIC SYSTEM OUTCOME
   When fully implemented, VGRIP becomes:
   A continuously self-constructing global intelligence system for human expertise, institutional knowledge, and relational networks.
   It enables:
   autonomous expert discovery
   global research mapping
   institutional intelligence modelling
   strategic engagement orchestration
   long-term knowledge preservation infrastructure

FINAL NOTE ON ARCHITECTURE PRIORITY
The correct implementation order is non-negotiable for system viability:
Discovery Engine (crawler FIRST)
Entity system + database
AI enrichment
Relationship graph
Campaign engine
Knowledge graph UI + analytics

A. VGRIP — DRIZZLE ORM PRODUCTION SCHEMA SET
(Ready-to-Code Database Layer)
A.1 Project Structure
/db
├── schema/
│ ├── person.ts
│ ├── organisation.ts
│ ├── tag.ts
│ ├── personTag.ts
│ ├── relationship.ts
│ ├── campaign.ts
│ ├── campaignStep.ts
│ ├── communication.ts
│ ├── event.ts
│ ├── task.ts
│ ├── note.ts
│ ├── discoverySource.ts
│ ├── crawlJob.ts
│ ├── rawDocument.ts
│ ├── index.ts
├── db.ts
├── migrations/

A.2 CORE SCHEMA DEFINITIONS

PERSON TABLE
import { pgTable, uuid, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const person = pgTable(
"person",
{
id: uuid("id").defaultRandom().primaryKey(),

fullName: text("full_name").notNull(),
prefix: text("prefix"),

email: text("email").notNull(),

bio: text("bio"),
role: text("role"),

organisationId: uuid("organisation_id"),

sourceUrl: text("source_url"),

createdAt: timestamp("created_at").defaultNow(),
updatedAt: timestamp("updated_at").defaultNow(),
},
(t) => ({
emailIdx: uniqueIndex("person_email_idx").on(t.email),
})
);

ORGANISATION TABLE
export const organisation = pgTable("organisation", {
id: uuid("id").defaultRandom().primaryKey(),

name: text("name").notNull(),
type: text("type"), // university | gov | NGO | company

domain: text("domain"),
website: text("website"),
location: text("location"),

createdAt: timestamp("created_at").defaultNow(),
});

TAG (FoR / THRIVABILITY CLASSIFICATION)
export const tag = pgTable("tag", {
id: uuid("id").defaultRandom().primaryKey(),

name: text("name").notNull(),
category: text("category"), // FoR | thrivability | custom
});

PERSON_TAG (MANY-TO-MANY)
export const personTag = pgTable("person_tag", {
personId: uuid("person_id").notNull(),
tagId: uuid("tag_id").notNull(),

confidence: text("confidence"), // stored as stringified float or numeric
});

RELATIONSHIP EDGES (GRAPH CORE)
export const relationship = pgTable("relationship", {
id: uuid("id").defaultRandom().primaryKey(),

fromId: uuid("from_id").notNull(),
toId: uuid("to_id").notNull(),

type: text("type").notNull(),
// works_at | collaborates_with | spoke_at | affiliated_with

weight: text("weight"),

source: text("source"),

createdAt: timestamp("created_at").defaultNow(),
});

CAMPAIGN
export const campaign = pgTable("campaign", {
id: uuid("id").defaultRandom().primaryKey(),

name: text("name").notNull(),
status: text("status"), // active | paused | completed

createdAt: timestamp("created_at").defaultNow(),
});

CAMPAIGN STEPS
export const campaignStep = pgTable("campaign_step", {
id: uuid("id").defaultRandom().primaryKey(),

campaignId: uuid("campaign_id").notNull(),

stepOrder: text("step_order"),
channel: text("channel"), // email
template: text("template"),

delayDays: text("delay_days"),
});

COMMUNICATIONS
export const communication = pgTable("communication", {
id: uuid("id").defaultRandom().primaryKey(),

personId: uuid("person_id").notNull(),
campaignId: uuid("campaign_id"),

channel: text("channel"),
status: text("status"),

sentAt: timestamp("sent_at"),
responseStatus: text("response_status"),
});

EVENTS
export const event = pgTable("event", {
id: uuid("id").defaultRandom().primaryKey(),

name: text("name").notNull(),
type: text("type"),

date: timestamp("date"),
location: text("location"),
});

RAW DOCUMENT STORAGE (CRAWLER OUTPUT)
export const rawDocument = pgTable("raw_document", {
id: uuid("id").defaultRandom().primaryKey(),

url: text("url").notNull(),
domain: text("domain"),

html: text("html"),
textContent: text("text_content"),

crawlJobId: uuid("crawl_job_id"),

createdAt: timestamp("created_at").defaultNow(),
});

CRAWL JOB TRACKING
export const crawlJob = pgTable("crawl_job", {
id: uuid("id").defaultRandom().primaryKey(),

keyword: text("keyword").notNull(),
status: text("status"), // queued | running | completed | failed

startedAt: timestamp("started_at"),
completedAt: timestamp("completed_at"),
});

INDEX EXPORT
export _ from "./person";
export _ from "./organisation";
export _ from "./tag";
export _ from "./personTag";
export _ from "./relationship";
export _ from "./campaign";
export _ from "./campaignStep";
export _ from "./communication";
export _ from "./event";
export _ from "./rawDocument";
export \* from "./crawlJob";

B. PLAYWRIGHT DISCOVERY ENGINE
(Step-by-Step Engineering Specification)
This is the FIRST BUILD MODULE and the system dependency root.

B.1 SYSTEM PURPOSE
The Discovery Engine is responsible for:
Automatically discovering, visiting, extracting, and storing structured profiles of subject matter experts from the open web.
It is the data acquisition backbone of VGRIP.

B.2 INPUTS
Required Input
{
"keywords": ["sustainability", "AI governance", "climate systems"]
}
Optional Configuration
maxDepth (default: 1)
maxResultsPerKeyword (default: 10)
allowedDomains (.edu, .ac.uk, .edu.au, etc.)

B.3 SYSTEM PIPELINE
KEYWORDS
↓
Search Query Generation
↓
Google API / Search Scraper
↓
URL Filtering Layer
↓
Playwright Page Load
↓
DOM Extraction
↓
Email Detection
↓
Bio Extraction
↓
Name + Prefix Extraction
↓
Validation (email required)
↓
Database Storage

B.4 ENGINEERING DESIGN
B.4.1 SEARCH MODULE
Uses:
Google Custom Search API OR SerpAPI
Output:
list of URLs
Filtering rules:
must include .edu / .ac.uk / institutional domains OR approved list
reject social spam domains

B.4.2 CRAWLER MODULE (PLAYWRIGHT)
Core Behaviour:
Launch browser in headless mode
Navigate to URL
Wait for full DOM render
Extract:
page text
structured HTML blocks
email patterns
headings
Save raw snapshot

Extraction Logic:
EMAIL EXTRACTION
Regex:
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+
Only first valid email per page is stored initially.

NAME EXTRACTION
Heuristics:
H1 tag preferred
fallback: first title-like text block
detect prefixes:
Dr | Prof | A/Prof | Associate Professor | Mr | Ms

BIO EXTRACTION
Heuristics priority:
paragraph near name header
“About” section
faculty profile description block
fallback: first 500–1500 characters of main content

B.4.3 VALIDATION RULE
A record is ONLY stored if:
email EXISTS AND email is valid AND domain is not blocked
If email missing → discard page entirely.

B.4.4 DEDUPLICATION LOGIC
Primary key:
email
Secondary fallback:
fullName + organisation domain hash

B.4.5 STORAGE PIPELINE
For each valid entity:
Insert rawDocument
Create person record
Link organisation if detected
Attach crawlJobId
Queue AI enrichment job

B.5 SCHEDULER DESIGN
Runs daily:
00:00 UTC
↓
Load keyword batch
↓
Create crawl jobs
↓
Queue workers
↓
Process results

B.6 OUTPUT DATA STRUCTURE
{
"fullName": "Dr Jane Smith",
"email": "jane.smith@university.edu",
"bio": "Senior researcher in climate systems...",
"prefix": "Dr",
"sourceUrl": "https://university.edu/staff/jane-smith"
}

B.7 FAILURE HANDLING
page timeout → retry once
captcha detection → skip
no DOM load → discard
email missing → discard
partial extraction → store only raw document

B.8 PERFORMANCE DESIGN
concurrent crawlers (configurable pool)
per-domain throttling
queue-based execution (BullMQ)
stateless worker nodes

B.9 SECURITY CONSTRAINTS
respect robots.txt (configurable override layer for permitted domains)
rate limiting per domain
no authentication bypass attempts
no scraping of private login-only content

FINAL ARCHITECTURAL NOTE
This crawler module is intentionally designed as:
The foundational ingestion engine for the entire VGRIP system
Everything downstream depends on it:
AI enrichment
relationship graph
campaign system
analytics layer

VGRIP Discovery Engine (DE) v0.2
VGRIP Discovery Engine (DE) — Phase 1 MVP Specification
Minimal Expert Discovery & Extraction Module
Version 0.2

1. System Context
   The VGRIP Discovery Engine (DE) is a foundational module within the VGRIP Relationship Intelligence Platform.
   Its purpose is to automatically discover and extract publicly available information about professional subject matter experts (SMEs), primarily from university and research organisation websites.
   This module forms the initial data acquisition layer of a broader system designed to support:
   identification of subject matter experts
   research and collaboration mapping
   thematic expertise discovery aligned to Fields of Research (FoR) and thrivability domains
   future engagement, partnership, and event planning workflows

2. Purpose of This Module (Phase 1)
   This Phase 1 module implements a minimal, production-ready extraction pipeline.
   Its function is to:
   Accept a predefined list of keywords
   Discover relevant public profile pages via Google Custom Search API
   Extract a minimum required dataset:
   Full Name (including academic prefix such as Dr, Prof, etc.)
   Email Address (mandatory)
   Bio (short biography or descriptive text where available)
   Only store records where an email address is present
   Persist validated records into a structured database
   Execute automatically on a daily schedule
   This module is intentionally minimal to ensure rapid, stable implementation.

3. Core Workflow
   Keywords
   ↓
   Google Custom Search API
   ↓
   Candidate URLs
   ↓
   URL Filtering
   ↓
   Playwright Page Load
   ↓
   Data Extraction (Name + Email + Bio)
   ↓
   Validation (Email required)
   ↓
   Deduplication
   ↓
   Database Storage

4. Input Specification
   4.1 Keyword Source
   A static configuration file defines search terms.
   Example:
   [
   "sustainability researcher",
   "climate change university",
   "regenerative agriculture academic",
   "circular economy researcher",
   "artificial intelligence professor"
   ]

5. Discovery Mechanism
   5.1 Search Provider
   Google Programmable Search Engine API (Custom Search JSON API)
   Returns:
   page title
   URL
   snippet

5.2 URL Filtering Rules
Only URLs meeting the following criteria are processed:
Domain Rules
Valid domains include:
.ac.uk
.edu
.edu.\* (e.g. .edu.au, .edu.uk where applicable)

Path Rules (must contain at least one)
/staff
/people
/profile
/researcher
/team
All other URLs are excluded.

6. Crawling Layer
   6.1 Technology
   Playwright (headless Chromium)
   6.2 Responsibilities
   For each valid URL:
   Load page fully
   Wait for rendering completion
   Extract HTML content
   Pass content to extraction module
   No authentication or session handling is required.

7. Data Extraction Requirements
   7.1 Minimum Required Fields
   The system must extract at minimum:

(1) Full Name (including prefix)
Examples:
Dr Jane Smith
Prof John Doe
A/Prof Sarah Brown
Extraction priority:

<h1> tag (preferred)
Primary heading element
Page title fallback

(2) Email Address (mandatory)
Extract from:
mailto: links
visible email patterns in page text
Regex:
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}

(3) Bio
The system must extract a biographical or descriptive section, where available.
This may include:
biography text blocks
academic summaries
“about” sections
profile descriptions
If multiple exist, choose the most complete section.
If no bio exists:
store null
Samples with details below. See PhD supervisors. Keywords, UN SDGs, ORCID are all important tags. Role, personal websites, head shots, and phone numbers are also useful. Store the link to the page (to avoid in the near term crawling it again).

7.2 Validation Rule (Strict)
A record is valid ONLY if:
An email address is successfully extracted.
If email is missing:
discard record entirely
do not store partial data

8. Data Storage
   8.1 Database
   PostgreSQL
   8.2 ORM
   Drizzle ORM

8.3 Table Schema
Table: discovered_contacts
id: uuid
name: text
email: text (unique)
bio: text | null
source_url: text
domain: text
keyword: text
discovered_at: timestamp

8.4 Deduplication Rule
Primary deduplication key:
email
If email already exists:
skip insertion

9. Scheduling
   9.1 Execution Frequency
   System runs once per day automatically.
   9.2 Implementation
   Use one of:
   node-cron (preferred)
   or equivalent lightweight scheduler

9.3 Execution Flow
Each run:
Iterate through keyword list
Run Google search per keyword
Filter URLs
Crawl pages with Playwright
Extract name, email, bio, tags, url
Validate email presence
Store results
Log output

10. System Architecture
    Docker Container
    ├── Node.js (TypeScript)
    │ ├── Scheduler
    │ ├── Google Search Module
    │ ├── URL Filter
    │ ├── Playwright Crawler
    │ ├── Extraction Engine (Name + Email + Bio)
    │ ├── Validation Layer
    │ └── Drizzle DB Writer
    │
    ├── PostgreSQL
    │
    └── Playwright Chromium

11. Docker Requirements
    System must run via Docker Compose.
    Services:
    app (Node.js service)
    postgres (database service)

Execution Command:
docker-compose up --build

Environment Variables:
DATABASE_URL
GOOGLE_API_KEY
GOOGLE_CX

12. Logging Requirements
    Console-based logging only:
    keyword being processed
    URLs discovered
    pages visited
    emails found
    records inserted
    duplicates skipped
    failures

13. Performance Expectations
    Designed for lightweight daily execution:
    5–8 keywords per run
    10–20 search results per keyword
    50–100 pages processed per run
    Total runtime under 20–25 minutes

14. Explicit Scope Boundaries
    The following are NOT included:
    AI / LLM processing
    CRM or campaign systems
    dashboards or UI
    relationship graphs
    multi-source crawling beyond Google
    authentication systems
    job queues
    analytics layer
    email sending

15. Expected Output Behaviour
    Each run must:
    discover candidate profile pages
    extract at minimum:
    name (including prefix/title)
    email (mandatory)
    bio (if available)
    store only valid email-containing records
    deduplicate entries automatically
    persist structured SME contact dataset

16. Definition of Success
    The module is considered complete when:
    Docker deployment works from scratch
    Scheduled runs execute automatically
    Keyword-driven search returns URLs
    Playwright successfully extracts data
    Only email-valid records are stored
    Database contains clean deduplicated SME contacts

17. Role within VGRIP
    This module forms the initial discovery and ingestion layer of VGRIP.
    It provides the foundational dataset of verified expert contacts, enabling later expansion into:
    expertise classification (FoR and thematic tagging)
    relationship intelligence mapping
    engagement and campaign systems
    organisational and research network analysis

VGRIP Discovery Engine (DE) — Project Skeleton

1. High-Level Structure
   vgrip-de/
   │
   ├── docker-compose.yml
   ├── Dockerfile
   ├── .env.example
   ├── package.json
   ├── tsconfig.json
   │
   ├── src/
   │ ├── main.ts
   │ ├── config/
   │ │ ├── env.ts
   │ │ ├── keywords.ts
   │ │
   │ ├── scheduler/
   │ │ └── cron.ts
   │ │
   │ ├── search/
   │ │ ├── googleClient.ts
   │ │ └── searchService.ts
   │ │
   │ ├── crawler/
   │ │ ├── playwrightClient.ts
   │ │ ├── pageLoader.ts
   │ │
   │ ├── extractor/
   │ │ ├── extractEmail.ts
   │ │ ├── extractName.ts
   │ │ ├── extractBio.ts
   │ │ └── extractService.ts
   │ │
   │ ├── filter/
   │ │ └── urlFilter.ts
   │ │
   │ ├── db/
   │ │ ├── index.ts
   │ │ ├── schema.ts
   │ │ ├── repo.ts
   │ │
   │ ├── pipeline/
   │ │ └── runPipeline.ts
   │ │
   │ ├── utils/
   │ │ ├── logger.ts
   │ │ ├── dedupe.ts
   │ │ ├── hash.ts
   │ │
   │ └── types/
   │ └── index.ts
   │
   └── migrations/

2. Core Execution Entry Point
   src/main.ts
   import { runScheduledJob } from "./scheduler/cron";

async function bootstrap() {
console.log("[VGRIP-DE] Starting service...");

await runScheduledJob();

console.log("[VGRIP-DE] Initial run complete");
}

bootstrap();

3. Scheduler
   src/scheduler/cron.ts
   import cron from "node-cron";
   import { runPipeline } from "../pipeline/runPipeline";

export function runScheduledJob() {
// Run immediately on startup
runPipeline();

// Then daily
cron.schedule("0 2 \* \* \*", async () => {
console.log("[Scheduler] Running daily pipeline...");
await runPipeline();
});
}

4. Pipeline Orchestration (CORE LOGIC)
   src/pipeline/runPipeline.ts
   import { keywords } from "../config/keywords";
   import { searchGoogle } from "../search/searchService";
   import { filterUrls } from "../filter/urlFilter";
   import { loadPage } from "../crawler/pageLoader";
   import { extractProfile } from "../extractor/extractService";
   import { saveProfile } from "../db/repo";
   import { dedupeByEmail } from "../utils/dedupe";

export async function runPipeline() {
console.log("[Pipeline] Starting run...");

for (const keyword of keywords) {
console.log(`[Pipeline] Keyword: ${keyword}`);

const results = await searchGoogle(keyword);

const urls = filterUrls(results);

for (const url of urls.slice(0, 20)) {
try {
const html = await loadPage(url);

       const profile = await extractProfile(html, url, keyword);

       if (!profile?.email) {
         console.log("[Skip] No email found");
         continue;
       }

       if (dedupeByEmail(profile.email)) {
         await saveProfile(profile);
         console.log(`[Saved] ${profile.email}`);
       } else {
         console.log(`[Duplicate] ${profile.email}`);
       }

     } catch (err) {
       console.log(`[Error] ${url}`, err);
     }

}
}

console.log("[Pipeline] Run complete");
}

5. Google Search Layer
   src/search/searchService.ts
   import axios from "axios";

export async function searchGoogle(query: string) {
const res = await axios.get("https://www.googleapis.com/customsearch/v1", {
params: {
key: process.env.GOOGLE_API_KEY,
cx: process.env.GOOGLE_CX,
q: query,
},
});

return res.data.items || [];
}

6. URL Filter
   src/filter/urlFilter.ts
   export function filterUrls(results: any[]) {
   const allowedPatterns = ["/staff", "/people", "/profile", "/researcher", "/team"];

return results
.map(r => r.link)
.filter(url => {
const domainOk =
url.includes(".ac.uk") || url.includes(".edu");

     const pathOk = allowedPatterns.some(p => url.includes(p));

     return domainOk && pathOk;

});
}

7. Playwright Loader
   src/crawler/pageLoader.ts
   import { chromium } from "playwright";

export async function loadPage(url: string): Promise<string> {
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

await page.goto(url, { waitUntil: "networkidle" });

const html = await page.content();

await browser.close();

return html;
}

8. Extraction Layer
   src/extractor/extractService.ts
   import { extractName } from "./extractName";
   import { extractEmail } from "./extractEmail";
   import { extractBio } from "./extractBio";

export function extractProfile(html: string, url: string, keyword: string) {
const name = extractName(html);
const email = extractEmail(html);
const bio = extractBio(html);

return {
name,
email,
bio,
source_url: url,
domain: new URL(url).hostname,
keyword,
discovered_at: new Date(),
};
}

Email Extractor
export function extractEmail(html: string): string | null {
const match = html.match(
/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
);

return match?.[0] || null;
}

Name Extractor
import \* as cheerio from "cheerio";

export function extractName(html: string): string | null {
const $ = cheerio.load(html);

return $("h1").first().text().trim() || null;
}

Bio Extractor
import \* as cheerio from "cheerio";

export function extractBio(html: string): string | null {
const $ = cheerio.load(html);

const bio =
$(".bio").text() ||
$(".profile").text() ||
$("p").first().text();

return bio?.trim() || null;
}

9. Database Layer (Drizzle)
   src/db/schema.ts
   import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const discoveredContacts = pgTable("discovered_contacts", {
id: uuid("id").defaultRandom().primaryKey(),
name: text("name"),
email: text("email").unique(),
bio: text("bio"),
sourceUrl: text("source_url"),
domain: text("domain"),
keyword: text("keyword"),
discoveredAt: timestamp("discovered_at").defaultNow(),
});

src/db/repo.ts
import { db } from "./index";
import { discoveredContacts } from "./schema";

export async function saveProfile(profile: any) {
return db.insert(discoveredContacts).values(profile);
}

10. Deduplication
    src/utils/dedupe.ts
    const seen = new Set<string>();

export function dedupeByEmail(email: string) {
if (seen.has(email)) return false;

seen.add(email);
return true;
}

11. Keywords Config
    src/config/keywords.ts
    export const keywords = [
    "sustainability researcher",
    "climate change university",
    "regenerative agriculture academic",
    "circular economy researcher",
    "artificial intelligence professor",
    ];

12. Docker (Minimal Working Setup)
    docker-compose.yml
    services:
    app:
    build: .
    environment: - DATABASE_URL=postgresql://postgres:postgres@db:5432/vgrip - GOOGLE_API_KEY=xxx - GOOGLE_CX=xxx
    depends_on: - db

db:
image: postgres:16
environment:
POSTGRES_PASSWORD: postgres
POSTGRES_DB: vgrip
ports: - "5432:5432"

Dockerfile
FROM node:20

WORKDIR /app

COPY package\*.json ./
RUN npm install

COPY . .

RUN npx playwright install --with-deps

CMD ["npm", "run", "start"]

13. What This Skeleton Gives You
    This structure guarantees:
    End-to-end working pipeline
    Fully Dockerised execution
    Clear separation of concerns
    Minimal cognitive overhead
    Easy extension into full VGRIP later

14. What is intentionally NOT included
    To preserve MVP clarity:
    No queues
    No UI
    No AI
    No authentication
    No APIs
    No dashboards
    No monitoring stack
    No workflow engine
