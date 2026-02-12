# Career Transformation Platform - Product Vision

## Executive Summary

A comprehensive career transformation platform that helps people discover their ideal business niche or career direction through AI-powered analysis, then transforms that insight into execution with accountability features, learning paths, milestone tracking, and job matching - taking users from confusion to their first win.

**Vision:** "We don't just generate advice - we create behavior change through execution and accountability."

**Part of:** Better Trajectory ecosystem
**Target Timeline:** 12 weeks (AWS Challenge optimized)
**Early Traction:** 25 users completed discovery, ready for accountability testing
**Tech Stack:** AWS Bedrock (Claude 3.5 Sonnet, Agents), Knowledge Bases, Next.js, RDS PostgreSQL, EventBridge, SNS/SES, S3

---

## Problem Statement

### The Critical Gap: Insight Without Execution

**80% of people who discover their "purpose" never act on it.** Why? They lack:
- Structure for daily action
- Accountability when motivation fades
- Clear milestones to track progress
- Handholding through the learning curve
- Connection to opportunities (jobs/clients)

### Primary Audience Pain Points

**Aspiring Entrepreneurs:**
- "I don't know what business to start"
- Have skills but can't translate them into a viable business
- Analysis paralysis from too many options
- Get clarity but don't know the NEXT step
- Lose momentum after initial excitement

**Career Switchers:**
- "I want to change careers but don't know how to start"
- Overwhelmed by skill gap
- Need structured learning path
- Can't build portfolio without guidance
- Don't know where to apply

**Coaches & Service Providers:**
- "Is my current offer positioned correctly?"
- Need to validate new service offerings
- Struggle with niche clarity
- Can't stay consistent with marketing

### Current Solutions (Competitors)

| Competitor                   | What They Do                | Weakness                                            |
| ---------------------------- | --------------------------- | --------------------------------------------------- |
| BizplanBuilder AI            | Business plan creation      | No execution tracking, no accountability            |
| NicheHacker                  | Niche market discovery      | Stops at discovery, no roadmap                      |
| IdeaBuddy                    | Interactive idea validation | No learning paths, no job matching                  |
| General AI (ChatGPT, Claude) | Versatile brainstorming     | No persistence, no tracking, no accountability      |
| Career Coaches               | Personalized guidance       | Expensive ($200-500/session), not scalable          |
| Coursera/Udemy               | Learning resources          | No personalization, no accountability               |

**Gap in Market:** No platform combines AI-driven discovery with execution tracking, learning integration, accountability systems, and job marketplace in one unified experience.

---

## Product Overview

### Core Value Proposition

Discover your ideal business niche or career direction through AI analysis, then execute with confidence using personalized roadmaps, accountability tracking, curated learning paths, and job opportunities - all in one platform.

### How It Works - Four Integrated Modules

```
MODULE 1: AI-Powered Discovery (Free)
User Inputs: Flow States + Passions + Life Experiences
         ↓
AWS Bedrock Analysis (Claude 3.5 Sonnet)
         ↓
Output: Niche/Career Direction + Ideal Customer Persona + Solutions/Roles
         ↓

MODULE 2: Intelligent Roadmap Generation (Free/Freemium)
AWS Bedrock Agents create 90-day execution plan
         ↓
Weekly Milestones: Skills to learn + Projects to build + Actions to take
         ↓

MODULE 3: Accountability & Progress Tracking (Core Platform)
Milestone check-ins with proof uploads (S3)
Streak tracking + Smart notifications (EventBridge, SNS/SES)
Reward system (points/badges)
Learning integration with course recommendations
AI coaching check-ins (Bedrock)
         ↓

MODULE 4: Two-Sided Job Marketplace
For individuals: Jobs filtered by niche/career alignment
For businesses: Post roles, search by flow-state fit
Smart matching (Bedrock analyzes fit scores)
AI-generated cover letters from user's "Why You" story
```

### Key Differentiators

1. **Execution-Focused** - Not just insight, but daily action with accountability
2. **AI-Powered Roadmaps** - Bedrock Agents generate personalized 90-day plans
3. **Learning Integration** - Direct course recommendations with progress tracking
4. **Smart Accountability** - EventBridge schedules adaptive reminders based on user behavior
5. **Job Marketplace** - Match by flow-state alignment, not just skills
6. **Behavior Change System** - Streaks, rewards, and AI check-ins create momentum
7. **AWS-Native** - Deep integration with Bedrock, Knowledge Bases, EventBridge, SNS/SES
8. **Validated Framework** - Discovery tested with 25 users

---

## Pricing Model

**Strategy:** Free discovery to build trust, one-time roadmap fee to demonstrate value, subscription for learning/tracking and job marketplace access.

| Tier                  | What They Get                                                       | Status       | Price |
| --------------------- | ------------------------------------------------------------------- | ------------ | ----- |
| **Free**              | Complete niche/career discovery with comprehensive analysis          | Live         | $0    |
| **Roadmap**           | Personalized 90-day roadmap with weekly milestones (one-time purchase) | Building     | $29   |
| **Learning & Tracking** | Accountability tracking, learning integration, milestone reminders, streak tracking, AI coaching | Planned | $15/mo |
| **Growth Plan**       | Everything in Learning + job board access, market validation, advanced analytics, priority support | Planned | $49/mo |
| **Enterprise**        | For businesses: Post jobs, search candidates, team accounts         | Planned      | $199/mo |

### Revenue Streams

1. **One-Time Roadmap Sales:** $29 per roadmap generation (repeatable for new directions)
2. **Subscription (Primary):** Learning & Tracking and Growth Plan monthly recurring
3. **Job Postings:** Businesses pay per job listing ($99-299/post)
4. **Course Affiliates:** Commission from course recommendations
5. **Additional Roadmaps:** Users can purchase new roadmaps for different niches/careers
6. **1:1 Consulting:** High-touch service for complex transitions

---

## Framework Integration

The product integrates multiple strategic frameworks to provide comprehensive guidance. Some require user inputs, others are derived through AI structured reasoning.

### Framework 1: Size, Growth, Competition (Idea Picking)

**Source:** AI Deep Research (Perplexity API)
**Purpose:** Evaluate if the idea is worth pursuing

| Size | Growth | Competition | Guidance                                       |
| ---- | ------ | ----------- | ---------------------------------------------- |
| L    | L      | L           | Bootstrap, grow organically (reinvest profits) |
| L    | L      | H           | **Avoid** - high competition, price wars       |
| L    | H      | L           | Bootstrap, raise from friends/family           |
| L    | H      | H           | Go ahead if tech idea, raise money day 1       |
| H    | L      | L           | Bootstrap, grow organically                    |
| H    | L      | H           | **Avoid** - high competition, price wars       |
| H    | H      | L           | Raise money, grow fast                         |
| H    | H      | H           | Raise money, grow fast                         |

**AI Research Outputs:**

- Market size estimate (TAM/SAM/SOM)
- Growth rate indicators (YoY trends, search volume growth)
- Competitive density (number of players, funding raised)

---

### Framework 2: B2C Demand/Supply Analysis

**Source:** User Input Required
**Purpose:** Categorize B2C business model and understand dynamics

**User Input Questions:**

1. "Is your supply LOCAL (limited to geography, like cabs/food delivery) or GLOBAL (accessible anywhere, like e-commerce)?"
2. "Is your demand LOCAL (customers in specific area) or GLOBAL (customers anywhere)?"

| Supply | Demand | Guidance                                          | Example                            |
| ------ | ------ | ------------------------------------------------- | ---------------------------------- |
| Local  | Local  | Capital intensive, Winner takes all               | Cabs/Food Delivery (Hyper Local)   |
| Local  | Global | High Margin, Market share of exclusive supply     | AirBnB, Cameo, Tourist Attractions |
| Global | Local  | Driven by market share of demand, Low margin      | E-Commerce (Amazon)                |
| Global | Global | High margin, demand first, driven by market share | Media                              |

**Questions to Ask User:**

- "Where is your supply located? Can anyone access it online, or is it tied to a specific location?"
- "Are your customers primarily in one region, or can they be anywhere in the world?"
- "Can your service/product be delivered digitally or does it require physical presence?"

---

### Framework 3: B2B Criticality/Demand Analysis

**Source:** User Input Required
**Purpose:** Categorize B2B business model and pricing power

**User Input Questions:**

1. "Is your offering CRITICAL (business can't function without it) or NICE-TO-HAVE (improves efficiency but not essential)?"
2. "Is demand LOCAL (specific region/industry) or GLOBAL (any business anywhere)?"

| Criticality  | Demand | Guidance                                          | Example                                                  |
| ------------ | ------ | ------------------------------------------------- | -------------------------------------------------------- |
| Nice-to-have | Local  | Low Margin, High capital                          | Corporate Taxis/Merchandise                              |
| Nice-to-have | Global | Rides on tech to save costs, Brand matters        | SaaS (Zoho), AWS, Logistics                              |
| Critical     | Local  | High Margin, Very competitive                     | Local Advertising (Zomato, Practo)                       |
| Critical     | Global | High Margin based on market share or large market | SaaS (Salesforce, Slack), Advertising (Google, Facebook) |

**Questions to Ask User:**

- "If your product disappeared tomorrow, would your customer's business stop functioning?"
- "How often would they need your product/service - daily, weekly, monthly, yearly?"
- "Can you serve businesses in any country, or are you limited to specific regions?"

---

### Framework 4: Right Time to Raise Money

**Source:** User Input Required
**Purpose:** Determine fundraising readiness and approach

**User Input Questions:**

1. "Is this a tech company (software, AI, platform) or non-tech (physical products, services)?"
2. "Are you currently generating any revenue?"

| Tech Company | Revenue | Guidance                                                            |
| ------------ | ------- | ------------------------------------------------------------------- |
| No           | No      | Hard to raise. Raise when you start generating revenue to grow      |
| No           | Yes     | Get to profitability first before raising. Use money to scale       |
| Yes          | No      | Hard to raise. Raise when you have an MVP. Use money for MVP launch |
| Yes          | Yes     | Unit Positive Economics before raising                              |

**Questions to Ask User:**

- "Is your core product primarily software/technology, or is it a physical product or service?"
- "Have you made any sales yet, even small ones?"
- "Do you know your unit economics (cost to acquire customer vs lifetime value)?"

---

### Framework 5: MVP Strategy & Emotion to Invoke

**Source:** AI Structured Reasoning (based on user's market)
**Purpose:** Determine the right MVP approach and emotional hook

**Framework Variables:**

- **Time:** Does the customer have time to research/compare? (Y/N)
- **Money:** Does the customer have money to spend? (Y/N)
- **Trust:** Does the customer need trust/credibility signals? (Y/N)

| Time | Money | Trust | MVP Approach           | Emotion to Invoke   | Example                  |
| ---- | ----- | ----- | ---------------------- | ------------------- | ------------------------ |
| N    | N     | N     | Fastest                | Speed/Urgency       | Google Search            |
| N    | N     | Y     | Testimonials/Security  | Safety              | Zomato (Ratings/Reviews) |
| N    | Y     | N     | FOMO                   | Fear of Missing Out | Cred                     |
| N    | Y     | Y     | Premium                | Exclusivity         | Cleartrip                |
| Y    | N     | N     | Best Price             | Value               | Nearbuy, Walmart         |
| Y    | N     | Y     | Feeling of Abundance   | Choice              | Makemytrip               |
| Y    | Y     | N     | Concierge/Done-for-you | Convenience         | Makemytrip Holidays      |
| Y    | Y     | Y     | Self-service           | Empowerment         | AirBnB                   |

**AI Reasoning Process:**

1. Analyze the target customer profile
2. Determine typical buying behavior (rushed vs researched)
3. Assess price sensitivity of the market
4. Evaluate trust requirements in the industry
5. Output: Recommended MVP approach + emotion to invoke

---

### Framework 6: Pricing Strategy

**Source:** AI Structured Reasoning (based on market research)
**Purpose:** Recommend optimal pricing model

**Framework Variables:**

- **Value:** Is the perceived value HIGH or LOW?
- **Competition:** Is competition HIGH or LOW?
- **Frequency:** Is purchase frequency HIGH or LOW?

| Value | Competition | Frequency | Pricing Strategy                      | Example                    |
| ----- | ----------- | --------- | ------------------------------------- | -------------------------- |
| L     | L           | L         | Membership (Monetary or Non-Monetary) | Cred                       |
| L     | L           | H         | One Time Pricing                      | Pro version of free apps   |
| L     | H           | L         | Free for consumer, recoup via ads/B2B | Ad-supported apps          |
| L     | H           | H         | Freemium (Recurring Payment)          | LinkedIn Premium           |
| H     | L           | L         | Fixed Price                           | Shoe Store, Online Courses |
| H     | L           | H         | Subscription                          | Netflix                    |
| H     | H           | L         | Freemium (majority will use free)     | SaaS tools                 |
| H     | H           | H         | Subscription                          | Streaming services         |

**Additional Pricing Tactics (AI can recommend):**

1. **Decoy Pricing** - Price optimum offering as better alternative to decoy
2. **Center Stage Pricing** - Place optimum offering in the center visually
3. **Framing Effect** - Add urgency/scarcity (loss aversion)
4. **Bandwagon Effect** - Social proof, "most popular" badges
5. **Penetration Pricing** - Unbelievable pricing to drive initial demand

**AI Reasoning Process:**

1. Research competitor pricing
2. Assess perceived value through customer reviews/feedback
3. Determine purchase frequency from market data
4. Output: Recommended pricing strategy + specific tactics

---

### Framework 7: Launch Strategy

**Source:** AI Structured Reasoning (based on user's resources)
**Purpose:** Recommend optimal launch channel/mechanism

**Framework Variables:**

- **Time:** Does the founder have time to invest in launch? (Y/N)
- **Money:** Does the founder have budget for launch? (Y/N)
- **Trust:** Is trust already established in the market? (Y/N)

| Time | Money | Trust | Launch Channel             | Notes                   |
| ---- | ----- | ----- | -------------------------- | ----------------------- |
| N    | N     | N     | Invite-based               | Exclusive, viral loops  |
| N    | N     | Y     | Influencers                | Leverage existing trust |
| N    | Y     | N     | FOMO campaigns             | Paid ads with scarcity  |
| N    | Y     | Y     | FOMO + Premium positioning | High-ticket launches    |
| Y    | N     | N     | Offline/Grassroots         | Ground-level hustle     |
| Y    | N     | Y     | Online organic             | Content, SEO, social    |
| Y    | Y     | N     | Community building         | Long-term play          |
| Y    | Y     | Y     | Community + Authority      | Best position           |

**Launch Mechanisms Available:**

1. Offline (events, meetups, conferences)
2. Online (social media, content marketing)
3. Invites (exclusive access, waitlists)
4. FOMO (limited time, limited spots)
5. Influencers (partnerships, endorsements)
6. Press (PR, media coverage)
7. Community (forums, groups, Discord)

**AI Reasoning Process:**

1. Assess founder's available time commitment
2. Evaluate available budget for launch
3. Check if founder has existing audience/credibility
4. Output: Recommended launch channel + specific tactics

---

## User Flow & Data Collection

### Free Tier Flow

```
STEP 1: Goal Selection
└── "What are you looking for?" → BUSINESS or CAREER

STEP 2: Deep Persona Discovery (8 Multi-Input Questions)
├── "Activities that make you lose track of time"
├── "What you loved doing at age 10"
├── "Issues that would make you lose sleep (that you'd speak up about)"
├── "What you're naturally curious about"
├── "Activities that feel like play to you"
├── "Topics you continuously explore and learn about"
├── "Things you've helped others with"
└── "Things you find difficult but are necessary for your growth"

STEP 3: Reflective Questions (3 Single-Input)
├── "Something you wish more people understood"
├── "What are you here to do in this life?"
└── "A turning point in your life"

STEP 4: Life Rules
└── "3 rules you'd give your 18-year-old self"

[AI Processing]
├── Extracts: Skills, Interests, Core Values, Driving Belief
├── [If BUSINESS] → Generates Niche + Customer Persona + Solutions
└── [If CAREER] → Generates Career Direction + Role Recommendations
```

### Free Tier Output

1. **Niche Statement & Positioning**

   - Statement: "I help [SPECIFIC PERSON] who struggle with [SPECIFIC PROBLEM] to achieve [SPECIFIC RESULT]"
   - Why You: Personal story connecting turning point, skills, and credibility
   - Validation Questions: 3 specific questions to ask potential customers
   - Unique Value: What makes this niche uniquely valuable
   - Market Gap: The specific gap in the market this addresses
   - Competitive Edge: How your background gives you an edge

2. **Business Model Classification**

   - Business Model: B2B, B2C, or Both
   - Supply Type: Local or Global (for B2C)
   - Demand Type: Local or Global
   - Proposition: Saving Time or Growing Revenue (for B2B)
   - Criticality: Critical or Nice-to-Have (for B2B)

3. **Strategic Guidance**

   - Adjacent Niches: 3 related niches to explore
   - Scalability Note: How this niche can scale over time

4. **Comprehensive Customer Persona**

   **Demographics:**
   - Age range (min/max)
   - Genders
   - Location
   - Annual income
   - Education level
   - Family status

   **Professional (B2B):**
   - Job titles
   - Company size
   - Industry verticals
   - Buying power (Budget holder, Influencer, End user, Champion)
   - Tech savviness (Low, Medium, High)

   **Psychographics:**
   - Skills they possess
   - Interests and topics they care about
   - Fears and anxieties
   - Daily struggles and friction points
   - Goals and aspirations
   - Pain level (1-10 scale)
   - Urgency level (Low, Medium, High)
   - Awareness stage (Unaware, Problem-aware, Solution-aware, Product-aware)

   **Behavioral:**
   - Current solutions they're using
   - Frustrations with current solutions
   - Preferred communication channels
   - Content consumption habits

5. **Niche Solutions (3-5)**

   For each solution:
   - Type: FEAR, INTEREST, GOAL, or STRUGGLE based
   - Problem description
   - Solution offered
   - Delivery format: Done-for-you, Done-with-you, Self-service, or Hybrid
   - Timeframe
   - Pricing guidance
   - Unique approach
   - Proof points
   - Ideal for stage (e.g., "First-time buyers")
   - Bundles with (complementary solutions)

---

### Free Tier Output (Career Path)

1. **Career Direction Statement**

   - Statement: "You're best suited for [TYPE OF WORK] because [REASON]"
   - Why You: Personal story connecting turning point, natural abilities, and fit
   - Validation Questions: 3 questions to ask people in these roles

2. **Career Insights**

   - Career Archetype: Builder, Connector, Analyst, Creator, Leader, etc.
   - Working Style: Independent, Collaborative, Leading teams
   - Ideal Environment: Startup, Corporate, Remote-first, Consulting
   - Natural Strengths: Top 3-5 strengths from profile
   - Blind Spots: 2-3 areas to be aware of
   - Development Areas: Skills to develop for growth

3. **Market Context**

   - Demand Outlook: High demand, Moderate, Niche, or Declining
   - Salary Expectation: Overall salary range across recommendations
   - Growth Potential: Career trajectory insights
   - Five-Year Vision: Where this path leads long-term
   - Transition Strategy: If pivoting from current role

4. **Immediate Actions**

   - Next Steps: 3-5 actions to take in next 30 days
   - Networking Advice: How to start networking in this direction

5. **Role Recommendations (3-5)**

   For each role:

   **Basic Info:**
   - Title: Specific job title (e.g., "Product Manager")
   - Industry: Specific industry (e.g., "B2B SaaS")
   - Why Fit: Why this matches their profile
   - Salary Range: Realistic range (e.g., "₹15-30 LPA")

   **Skills & Preparation:**
   - Skill Gaps: What they need to learn
   - Required Skills: Must-have skills for this role
   - Nice-to-Have Skills: Bonus skills
   - Certifications: Helpful certifications
   - Portfolio Projects: 3-5 project ideas to build
   - Learning Resources: Courses, books, communities
   - Estimated Prep Time: "3 months", "6 months", "1 year"

   **Job Search:**
   - Companies: 3-5 example companies to target
   - Job Boards: Where to find these roles
   - Keywords/Tags: Search terms to use
   - Interview Focus: What to prepare for interviews

   **Reality Check:**
   - Experience Required: "0-2 years", "3-5 years", "5+ years"
   - Competition Level: Low, Moderate, or High
   - Remote Viability: Fully remote, Hybrid, Onsite mostly, Onsite only
   - Work-Life Balance: Excellent, Good, Moderate, Demanding, Intense
   - Stress Level: Low, Moderate, High, Very High

   **Day-to-Day (Optional):**
   - Typical Day Description: What a day looks like
   - Key Responsibilities: Main duties
   - Collaboration Style: Who you work with

---

## Paid Tier Specifications

### Tier 2: Generate Another Idea

**Output:**

- 2-3 additional niche/offer combinations
- Comparison matrix
- Recommendation on which to pursue

### Tier 3: Market Validation

**Data Source:** Perplexity API (sonar-pro)

**AI Research Outputs (Framework 1 - Size/Growth/Competition):**

- Market size estimate (TAM/SAM/SOM)
- Growth indicators with sources
- Competitor landscape (3-5 players, positioning, pricing)
- Framework classification and guidance

**AI Reasoning Outputs:**

- Framework 5: MVP Strategy recommendation
- Framework 6: Pricing Strategy recommendation
- Framework 7: Launch Strategy recommendation

**Full Output:**

- Size/Growth/Competition analysis with framework guidance
- MVP approach + emotion to invoke (with reasoning)
- Pricing strategy + specific tactics (with reasoning)
- Launch channel + mechanisms (with reasoning)
- Risk assessment with mitigation

### Tier 4: Business/Career Roadmap

**Output:**

- Framework 4: Fundraising readiness assessment (for business)
- 90-day plan with weekly milestones
- Tech stack recommendations (for business)
- Learning path with timeline (for career)
- MVP feature prioritization (for business)
- Revenue projections (for business)
- Key metrics to track
- Pre-money valuation guidance (if applicable, for business)

### Tier 5: 1:1 Strategy Call

**Deliverable:**

- 60-minute video call
- Recorded session
- Written summary with action items
- 7-day async follow-up support

---

## Technical Architecture

### AWS-Native Tech Stack

| Component              | Technology                          | Purpose                                   |
| ---------------------- | ----------------------------------- | ----------------------------------------- |
| **AI Core**            | AWS Bedrock (Claude 3.5 Sonnet)     | Discovery analysis, roadmap generation    |
| **Agent Framework**    | AWS Bedrock Agents                  | Autonomous roadmap creation               |
| **Knowledge Layer**    | AWS Bedrock Knowledge Bases         | Course catalogs, job market data, skills  |
| **Backend**            | Next.js 14 on AWS ECS/Lambda        | Full-stack application                    |
| **Database**           | AWS RDS PostgreSQL (via Prisma)     | User data, progress, milestones           |
| **File Storage**       | AWS S3                              | Milestone proof uploads, documents        |
| **Notifications**      | AWS SNS + SES                       | Email/SMS notifications                   |
| **Scheduling**         | AWS EventBridge                     | Streak tracking, milestone reminders      |
| **Monitoring**         | AWS CloudWatch                      | Metrics, logs, custom dashboards          |
| **Payments**           | Stripe                              | Subscriptions, job postings               |
| **Auth**               | NextAuth.js                         | User authentication                       |
| **Analytics**          | PostHog + CloudWatch Custom Metrics | Product analytics + AWS-native tracking   |

### AWS Cost Estimates (100 Active Users)

| Service                      | Usage                                  | Monthly Cost |
| ---------------------------- | -------------------------------------- | ------------ |
| Bedrock (Claude 3.5 Sonnet)  | Discovery (100) + AI coaching (500)    | ~$40-60      |
| Bedrock Agents               | Roadmap generation (100 executions)    | ~$20-30      |
| Knowledge Bases              | Vector searches (1,000 queries)        | ~$15-25      |
| RDS PostgreSQL (db.t3.micro) | Small instance with 20GB storage       | ~$15         |
| ECS Fargate                  | 0.25 vCPU, 0.5GB RAM (continuous)      | ~$15-20      |
| S3                           | 10GB storage, 1,000 uploads            | ~$2          |
| SNS/SES                      | 10,000 notifications/month             | ~$5          |
| EventBridge                  | 50,000 events/month                    | ~$0.05       |
| CloudWatch                   | Logs + custom metrics                  | ~$5-10       |
| **Total**                    |                                        | **~$117-167/month** |

**Note:** Costs scale with usage. At 1,000 users: ~$800-1,200/month.

### System Architecture Diagram

```
┌───────────────────────────────────────────────────────────────────┐
│                         AWS Cloud                                  │
│                                                                    │
│  ┌────────────────────────────────────────────────────────┐      │
│  │               Next.js App (ECS/Lambda)                  │      │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐     │      │
│  │  │  Pages/  │  │  Server  │  │  RDS PostgreSQL  │     │      │
│  │  │Components│──│  Actions │──│    (Prisma)      │     │      │
│  │  └──────────┘  └──────────┘  └──────────────────┘     │      │
│  └────────────────────────────────────────────────────────┘      │
│                          │                                        │
│                          ▼                                        │
│  ┌──────────────────────────────────────────────────────┐        │
│  │              AWS Bedrock Layer                        │        │
│  ├──────────────────────────────────────────────────────┤        │
│  │  • Claude 3.5 Sonnet (Discovery + AI Coaching)       │        │
│  │  • Bedrock Agents (Roadmap Generation)               │        │
│  │  • Knowledge Bases (Courses, Skills, Jobs)           │        │
│  └──────────────────────────────────────────────────────┘        │
│                          │                                        │
│                          ▼                                        │
│  ┌──────────────────────────────────────────────────────┐        │
│  │          Supporting Services                          │        │
│  ├──────────────────────────────────────────────────────┤        │
│  │  S3 (File Storage) ← Milestone Proofs                │        │
│  │  EventBridge ← Scheduled Check-ins, Streak Tracking  │        │
│  │  SNS/SES ← Email/SMS Notifications                   │        │
│  │  CloudWatch ← Metrics, Logs, Dashboards              │        │
│  └──────────────────────────────────────────────────────┘        │
└───────────────────────────────────────────────────────────────────┘
```

### Module 3: Accountability Engine Architecture

```
┌─────────────────────────────────────────────────────────────┐
│             User Progress Tracking Flow                      │
└─────────────────────────────────────────────────────────────┘

1. MILESTONE CHECK-IN
   User marks milestone complete → Upload proof (screenshot/link) → S3
                                  ↓
   Prisma updates milestone status + timestamps
                                  ↓
   Points/badges calculated → Stored in PostgreSQL
                                  ↓
   EventBridge triggered → Schedule next reminder


2. STREAK TRACKING
   EventBridge (Daily 9 AM) → Check last activity timestamp
                             ↓
   If >24h → Streak reset → SNS notification ("You lost your streak!")
   If <24h → Increment streak → SES email ("7-day streak! Keep going")


3. SMART NOTIFICATIONS
   EventBridge Rules:
   • Daily (9 AM): "What's your one action today?"
   • Milestone Due (3 days before): "Milestone X due in 3 days"
   • Inactivity (7 days): "We miss you! Your roadmap is waiting"
   • Streak Recovery (1 day away): "You're 1 day from a 7-day streak!"

   Notification Delivery:
   EventBridge → Lambda → SNS (SMS) / SES (Email) → User


4. AI COACHING CHECK-INS
   EventBridge (Weekly) → Trigger Bedrock prompt
                        ↓
   Bedrock analyzes: completed milestones, blocked items, user notes
                        ↓
   Generates: reflective questions, encouragement, roadmap adjustments
                        ↓
   Stored in PostgreSQL → Displayed in dashboard


5. LEARNING INTEGRATION
   Knowledge Base (S3 + Vector DB):
   • Course catalog (Coursera, Udemy, YouTube)
   • Skill frameworks
   • Career data
                        ↓
   Bedrock Agent queries KB → Links courses to roadmap milestones
                             ↓
   User clicks course → PostgreSQL logs activity
                      ↓
   User marks course complete → Milestone progress updated
```

### Extended Data Model (Prisma Schema)

**Core Models with Accountability & Job Marketplace:**

```
User
├── id, email, name, createdAt
├── subscriptionTier: FREE, PRO, GROWTH, ENTERPRISE
├── subscriptionStatus: ACTIVE, CANCELED, EXPIRED
├─> UserPersona[]
├─> UserProgress (1:1)
│   ├── currentStreak (days)
│   ├── longestStreak
│   ├── totalPoints
│   ├── badges[] (JSON: {name, earnedAt, description})
│   ├── lastActivityAt
│   └── milestoneCompletionRate (%)
├─> JobApplication[]
└─> NotificationPreferences (1:1)
    ├── emailDaily, emailWeekly, emailMilestones
    ├── smsEnabled, smsUrgentOnly
    └── timezone

UserPersona (Central Hub)
├── Input Fields: loseTrackOfTimeAreas, lovedDoingAt10, etc.
├── Extracted Fields: skills[], interests[], coreValues[], drivingBelief
├── Goal: BUSINESS or CAREER
├─> Roadmap (1:1) ← NEW
│   ├── generatedAt, lastUpdatedAt
│   ├── durationDays (default: 90)
│   ├── status: ACTIVE, COMPLETED, PAUSED
│   └─> Milestone[] (weekly breakdown)
│       ├── week, title, description
│       ├── category: SKILL, PROJECT, NETWORKING, APPLICATION
│       ├── successCriteria
│       ├── estimatedHours
│       ├── status: PENDING, IN_PROGRESS, COMPLETED, BLOCKED
│       ├── completedAt, proofUrl (S3)
│       ├── userNotes
│       ├── linkedCourses[] → Course
│       └─> AICheckIn[] ← NEW
│           ├── triggeredAt, question, userResponse
│           ├── aiSuggestions, adjustmentsMade
│
├─[BUSINESS PATH]─> Niche
│   ├── statement, whyYou
│   ├── validationQuestions[]
│   ├── uniqueValue, marketGap, competitiveEdge
│   ├── businessModel, supplyType, demandType, proposition, criticality
│   ├── adjacentNiches[], scalabilityNote
│   │
│   ├─> CustomerPersona (1:1)
│   │   ├── Demographics: minAge, maxAge, genders[], location, annualIncome
│   │   ├── Professional: jobTitles[], companySize, industryVerticals, buyingPower
│   │   ├── Psychographics: skills[], interests[], fears[], struggles[], goals[]
│   │   ├── Behavioral: painLevel, urgencyLevel, awarenessStage
│   │   ├── Current State: currentSolutions[], frustrations[], aspirations[]
│   │   └── Attributes: techSavviness, preferredChannels[], contentConsumption[]
│   │
│   ├─> NicheSolution[] (3-5)
│   │   ├── type: FEAR, INTEREST, GOAL, STRUGGLE
│   │   ├── description, solution
│   │   ├── deliveryFormat, timeframe, pricingGuidance
│   │   └── uniqueApproach, proofPoints[], idealForStage, bundlesWith[]
│   │
│   └─> MarketValidation (Tier 3+)
│       ├── TAM, SAM, SOM
│       ├── Competitors[]
│       └── Framework recommendations
│
└─[CAREER PATH]─> CareerDirection (1:1)
    ├── statement, whyYou
    ├── validationQuestions[]
    ├── careerArchetype, workingStyle, idealEnvironment
    ├── naturalStrengths[], blindSpots[], developmentAreas[]
    ├── demandOutlook, salaryExpectation, growthPotential
    ├── immediateNextSteps[], networkingAdvice
    ├── fiveYearVision, transitionStrategy
    │
    ├─> RoleRecommendation[] (3-5)
    │   ├── Basic: title, industry, whyFit, salaryRange
    │   ├── Skills: skillGaps[], requiredSkills[], niceToHaveSkills[]
    │   ├── Preparation: certifications[], portfolioProjects[], learningResources[]
    │   ├── Job Search: companies[], jobBoards[], keywordsTags[], interviewFocus[]
    │   ├── Reality: experienceRequired, competitionLevel, remoteViability
    │   └── Day-to-Day: workLifeBalance, stressLevel, typicalDayDescription
    │
    └─> JobMatch[] ← NEW (links user to recommended jobs)
        ├── jobId → Job
        ├── fitScore (0-100, calculated by Bedrock)
        ├── fitReasoning (why this job matches)
        ├── status: SAVED, APPLIED, INTERVIEWING, REJECTED, ACCEPTED
        └── appliedAt, aiGeneratedCoverLetter


Course ← NEW (Knowledge Base backed)
├── id, title, provider (COURSERA, UDEMY, YOUTUBE, FREE_RESOURCE)
├── url, description, thumbnailUrl
├── skills[], topics[]
├── duration, difficulty: BEGINNER, INTERMEDIATE, ADVANCED
├── price, isPaid
├── rating, reviewCount
└─> UserCourseProgress[]
    ├── userId, courseId
    ├── status: NOT_STARTED, IN_PROGRESS, COMPLETED
    ├── startedAt, completedAt
    └── linkedMilestoneId


Job ← NEW (Two-Sided Marketplace)
├── id, title, company, location
├── description, requirements[], niceToHave[]
├── salaryMin, salaryMax
├── remote: FULLY, HYBRID, ONSITE
├── postedById → User (business account)
├── status: ACTIVE, FILLED, CLOSED
├── postedAt, expiresAt
├── flowStateAlignment[] (tags extracted by Bedrock)
├── requiredSkills[], industryVerticals[]
└─> JobApplication[]
    ├── userId, jobId, status
    ├── appliedAt, coverLetter (AI-generated or custom)
    ├── resumeUrl (S3)
    └── notes


NotificationLog ← NEW
├── userId, type: EMAIL, SMS, PUSH
├── category: DAILY_PROMPT, MILESTONE_DUE, STREAK_ALERT, AI_CHECKIN
├── sentAt, delivered, opened, clicked
└── content (JSON)
```

**Enums:**

- BusinessModel: B2B, B2C, BOTH
- Criticality: CRITICAL, NICE_TO_HAVE
- Proposition: SAVE_TIME, GROW_REVENUE
- SupplyDemand: LOCAL, GLOBAL
- UrgencyLevel: LOW, MEDIUM, HIGH
- AwarenessStage: UNAWARE, PROBLEM_AWARE, SOLUTION_AWARE, PRODUCT_AWARE
- CompanySize: SOLO, SMALL_2_10, MEDIUM_11_50, LARGE_51_200, ENTERPRISE_200_PLUS
- BuyingPower: BUDGET_HOLDER, INFLUENCER, END_USER, CHAMPION
- TechSavviness: LOW, MEDIUM, HIGH
- EducationLevel: HIGH_SCHOOL, BACHELORS, MASTERS, PHD, PROFESSIONAL, SELF_TAUGHT
- DemandOutlook: HIGH_DEMAND, MODERATE_DEMAND, NICHE_DEMAND, DECLINING
- CompetitionLevel: LOW, MODERATE, HIGH
- RemoteViability: FULLY_REMOTE, HYBRID, ONSITE_MOSTLY, ONSITE_ONLY
- WorkLifeBalance: EXCELLENT, GOOD, MODERATE, DEMANDING, INTENSE
- StressLevel: LOW, MODERATE, HIGH, VERY_HIGH
- DeliveryFormat: DONE_FOR_YOU, DONE_WITH_YOU, SELF_SERVICE, HYBRID
- SolutionType: FEAR, INTEREST, GOAL, STRUGGLE

---

## Implementation Roadmap (12-Week AWS Challenge Plan)

### ✅ Phase 0: Current Status (Completed)

**Core Infrastructure:**
- [x] Next.js 14 App Router setup
- [x] Prisma schema design (comprehensive)
- [x] Authentication system (NextAuth.js)
- [x] Database models for both Business and Career paths

**Free Tier - Discovery (Live with 25 users):**
- [x] Multi-step persona input form (12 deep questions)
- [x] OpenAI integration with structured output (migrating to Bedrock)
- [x] Niche/Career direction generation
- [x] Customer persona and role recommendations
- [x] Admin dashboard

**Technical:**
- [x] Server Actions, TypeScript, Error handling
- [x] Form state management with custom hooks

---

### 🔨 Phase 1: AWS Migration + Roadmap Generation (Weeks 1-2)

**Goals:** Migrate to AWS Bedrock, deploy on AWS infrastructure, generate personalized roadmaps

- [ ] **AWS Bedrock Setup**
  - [ ] Migrate from OpenAI to AWS Bedrock (Claude 3.5 Sonnet)
  - [ ] Set up Bedrock Agents for roadmap generation
  - [ ] Configure IAM roles and policies
  - [ ] Test structured output with Bedrock prompts

- [ ] **Knowledge Bases**
  - [ ] Create S3 buckets for course catalogs, skill frameworks, career data
  - [ ] Set up vector database for semantic search
  - [ ] Ingest initial course data (Coursera, Udemy, YouTube)
  - [ ] Test retrieval accuracy

- [ ] **Roadmap Generation**
  - [ ] Design Bedrock Agent prompts for 90-day plans
  - [ ] Implement weekly milestone breakdown
  - [ ] Link skills to course recommendations
  - [ ] Store roadmaps in PostgreSQL

- [ ] **AWS Deployment**
  - [ ] Set up RDS PostgreSQL instance
  - [ ] Deploy Next.js app to ECS or Lambda
  - [ ] Configure VPC, security groups
  - [ ] Test end-to-end flow

**Deliverable:** Users can generate personalized 90-day roadmaps with weekly milestones.

---

### 🚀 Phase 2: Accountability Engine (Weeks 3-4)

**Goals:** Build progress tracking, notifications, streaks, and rewards

- [ ] **Milestone Tracking**
  - [ ] Prisma schema updates for milestones, progress
  - [ ] UI: Kanban-style milestone view (drag-to-complete)
  - [ ] Proof upload: S3 integration for screenshots/links
  - [ ] Completion logic: update points, badges, streak

- [ ] **Notification System**
  - [ ] EventBridge rules for scheduled notifications:
    - Daily (9 AM): "What's your one action today?"
    - Milestone due (3 days before)
    - Inactivity (7 days)
    - Streak recovery (1 day away from milestone)
  - [ ] Lambda function to process events
  - [ ] SNS (SMS) + SES (Email) integration
  - [ ] Notification preferences UI

- [ ] **Streak Tracking**
  - [ ] EventBridge daily check (9 AM UTC)
  - [ ] Compare last activity timestamp
  - [ ] Increment/reset streak logic
  - [ ] Streak visualization in dashboard

- [ ] **Reward System**
  - [ ] Points calculation (milestone completion, course completion, streak)
  - [ ] Badge definitions (JSON schema)
  - [ ] Award logic in Prisma
  - [ ] Rewards display in dashboard

- [ ] **AI Coaching Check-ins**
  - [ ] EventBridge weekly trigger
  - [ ] Bedrock prompt: analyze completed milestones, blockers
  - [ ] Generate reflective questions
  - [ ] Store check-ins in PostgreSQL
  - [ ] Display in dashboard with response form

**Deliverable:** Users can track progress, get adaptive reminders, earn rewards, and receive AI coaching.

---

### 📚 Phase 3: Learning Integration (Weeks 5-6)

**Goals:** Curate courses, link to milestones, track completion

- [ ] **Course Database**
  - [ ] Scrape/API integration for Coursera, Udemy, YouTube
  - [ ] Prisma schema for Course model
  - [ ] Manual curation for high-quality courses
  - [ ] Store in PostgreSQL + sync to Knowledge Base

- [ ] **Course Linking**
  - [ ] Bedrock Agent queries KB to match courses to milestones
  - [ ] Display course cards in roadmap view
  - [ ] Link courses to specific milestones
  - [ ] Track course clicks in PostgreSQL

- [ ] **Progress Tracking**
  - [ ] UserCourseProgress model (status: NOT_STARTED, IN_PROGRESS, COMPLETED)
  - [ ] UI to mark course completion
  - [ ] Update milestone progress when course completed
  - [ ] Course completion contributes to points/badges

- [ ] **Learning Path Visualization**
  - [ ] Skill tree graph (D3.js or React Flow)
  - [ ] Show dependencies between skills
  - [ ] Highlight completed vs pending

**Deliverable:** Users get curated course recommendations linked to their roadmap and can track learning progress.

---

### 💼 Phase 4: Job Marketplace MVP (Weeks 7-8)

**Goals:** Launch two-sided job board with AI-powered matching

- [ ] **Job Board Schema**
  - [ ] Prisma models: Job, JobApplication, JobMatch
  - [ ] Job posting UI for businesses (form with validation)
  - [ ] Stripe integration for job posting payments

- [ ] **Job Search & Discovery**
  - [ ] Job listing page with filters (niche, skills, location, remote)
  - [ ] Search functionality (Algolia or PostgreSQL full-text)
  - [ ] Job detail page

- [ ] **Smart Matching**
  - [ ] Bedrock analyzes job description vs user persona
  - [ ] Generate fit score (0-100) with reasoning
  - [ ] Display recommended jobs in dashboard
  - [ ] "Jobs for You" section based on career direction

- [ ] **Application Workflow**
  - [ ] Bedrock generates cover letter from user's "Why You" story
  - [ ] User can edit AI-generated cover letter
  - [ ] Upload resume to S3
  - [ ] Submit application
  - [ ] Track application status (APPLIED, INTERVIEWING, REJECTED, ACCEPTED)

- [ ] **Business Dashboard**
  - [ ] View posted jobs
  - [ ] Search candidates by flow-state alignment
  - [ ] Review applications
  - [ ] Candidate fit scores

**Deliverable:** Functional job marketplace where users find aligned opportunities and businesses find mission-driven candidates.

---

### 🎨 Phase 5: Polish & Launch (Weeks 9-12)

**Goals:** Refine UX, add analytics, launch to 100 beta users

- [ ] **UI/UX Improvements**
  - [ ] Mobile-responsive design for all pages
  - [ ] Result display pages (replace JSON with beautiful components)
  - [ ] Onboarding flow with milestone setup wizard
  - [ ] Dashboard redesign (overview, roadmap, jobs, progress)

- [ ] **Analytics & Monitoring**
  - [ ] CloudWatch custom metrics:
    - Milestone completion rate
    - Streak distribution
    - Job application conversion
    - User retention (weekly return rate)
  - [ ] PostHog integration for product analytics
  - [ ] Funnel analysis (discovery → roadmap → milestone completion)

- [ ] **Email Campaigns**
  - [ ] Welcome email sequence (SES)
  - [ ] Weekly digest with progress summary
  - [ ] Re-engagement for inactive users (7 days, 14 days, 30 days)
  - [ ] Milestone celebration emails

- [ ] **Soft Launch**
  - [ ] Recruit 100 beta users (LinkedIn, Reddit, Indie Hackers)
  - [ ] Early-bird pricing ($10/mo for first 100 users)
  - [ ] Collect feedback via in-app surveys
  - [ ] Iterate on AI quality (prompt tuning)
  - [ ] Test notification timing (A/B test)

- [ ] **Documentation**
  - [ ] User guide for roadmap creation
  - [ ] Video walkthrough of key features
  - [ ] FAQ page
  - [ ] Business guide for posting jobs

**Deliverable:** Polished product ready for wider launch with 100 active users and validated engagement metrics.

---

### 📊 Success Metrics

| Metric                          | Target         | Measurement           |
| ------------------------------- | -------------- | --------------------- |
| Milestone completion rate       | 70% (≥3 in 30d) | CloudWatch + Prisma   |
| Weekly user return rate         | 50%            | PostHog cohort analysis|
| Free → Paid conversion          | 15%            | Stripe webhooks       |
| Job marketplace usage           | 20 postings    | PostgreSQL count      |
| Job application conversion      | 100 apps       | PostgreSQL count      |
| AI roadmap quality              | <5% manual fix | User feedback         |
| Notification open rate          | 40%            | NotificationLog table |
| Course completion contribution  | 30% of milestones | UserCourseProgress |

---

### 🎯 Post-Challenge Roadmap (Weeks 13+)

- [ ] Advanced market validation (TAM/SAM/SOM with Perplexity API)
- [ ] Community features (forums, peer accountability groups)
- [ ] Mobile app (React Native)
- [ ] Enterprise features (team accounts, admin controls)
- [ ] Referral program with rewards
- [ ] SEO optimization and content marketing
- [ ] Partnerships with course providers (affiliate revenue)
- [ ] Advanced analytics dashboard (Tableau/QuickSight)

---

## Social Impact & Value Creation

### How We Solve the Execution Gap

**The Problem:** 80% of people who discover their "purpose" never act on it because they lack:
1. **Daily Structure** - No clear "what to do today"
2. **Accountability** - Motivation fades without external pressure
3. **Learning Guidance** - Overwhelmed by course options
4. **Proof of Progress** - Can't see if they're getting closer
5. **Economic Opportunity** - No bridge to jobs/clients

**Our Solution:**

| Execution Gap                | Traditional Approach       | Our Approach                                  |
| ---------------------------- | -------------------------- | --------------------------------------------- |
| "What do I do today?"        | Generic advice             | Daily prompts based on roadmap milestones     |
| "I lost motivation"          | Self-discipline            | Streaks, rewards, AI check-ins                |
| "Which course should I take?"| Search Coursera yourself   | Curated courses linked to specific milestones |
| "Am I making progress?"      | Gut feeling                | Milestone tracking, points, badges            |
| "Where do I find jobs?"      | Generic job boards         | Jobs matched to your flow-state alignment     |

### Economic Empowerment

1. **For Aspiring Entrepreneurs:**
   - Reduces time to first customer (from 18 months to 90 days with roadmap)
   - Provides daily actions, not vague strategies
   - Links to resources without expensive coaching ($200-500/session)

2. **For Career Switchers:**
   - Systematically builds portfolio through milestone projects
   - Connects to job opportunities aligned with strengths
   - Tracks skill development with clear progression

3. **For Businesses:**
   - Finds candidates aligned with mission, not just qualified on paper
   - Reduces mis-hires and turnover (flow-state fit > resume fit)
   - Access to self-aware, motivated talent pipeline

### Accessibility

- **Democratizes Coaching:** Free discovery tier (worth $500 with human coach)
- **Affordable Execution Support:** $15/mo vs $200-500/session for coaching
- **Free Learning Resources:** Links to free/affordable courses
- **No Geographic Barriers:** Remote job marketplace

### Behavior Change at Scale

**Traditional career coaching:** 1:1, high-touch, doesn't scale ($200-500/session, 100 clients max per coach)

**Our platform:**
- AI coaching check-ins provide personalized guidance at scale
- EventBridge schedules adaptive reminders (not generic)
- Reward system gamifies habit formation
- Community features (future) provide peer accountability

**Target:** 70% of users complete ≥3 milestones in first 30 days (vs. industry standard of 15% for self-paced programs)

### Why AWS Makes This Possible

| Feature                  | AWS Service       | Impact on Users                               |
| ------------------------ | ----------------- | --------------------------------------------- |
| Personalized roadmaps    | Bedrock Agents    | Autonomous plan creation without manual work  |
| Smart notifications      | EventBridge       | Adaptive reminders based on user behavior     |
| AI coaching at scale     | Bedrock + Lambda  | Reflective questions without human coaches    |
| Course recommendations   | Knowledge Bases   | Semantic search matches courses to milestones |
| Job matching             | Bedrock           | Analyzes fit beyond keyword matching          |
| Reliable delivery        | SNS/SES           | Multi-channel notifications (email, SMS)      |

---

## User Acquisition Strategy

### Primary Channels (No/Low Cost)

| Channel       | Tactic                                    | Target                 |
| ------------- | ----------------------------------------- | ---------------------- |
| LinkedIn      | Content about niche clarity, frameworks   | Coaches, consultants   |
| Reddit        | r/startups, r/Entrepreneur, r/SideProject | Aspiring entrepreneurs |
| Indie Hackers | Build in public                           | Solo founders          |
| Twitter/X     | Framework threads, case studies           | Tech-adjacent          |

### Content Strategy (15 Micro-Tools)

As part of Better Trajectory ecosystem, create vibecoded apps:

- Niche Statement Generator (this product)
- Offer Statement Builder
- ICP Quiz
- Pricing Strategy Calculator
- MVP Approach Finder
- And 10 more...

### Launch Timeline

- **Jan 5, 2026:** Start Instagram posting (3x weekly)
- **Jan 15, 2026:** MVP soft launch
- **Jan 20, 2026:** Product Hunt launch
- **Feb 1, 2026:** Paid ads test (if organic working)

---

## Success Metrics

### MVP Validation Metrics

| Metric                 | Target | Timeframe |
| ---------------------- | ------ | --------- |
| Landing page visitors  | 500    | Week 1-2  |
| Free tier completions  | 100    | Week 2-3  |
| Email capture rate     | 40%    | Ongoing   |
| Free → Paid conversion | 5-7%   | Week 3-4  |

### Unit Economics Target

| Metric              | Target |
| ------------------- | ------ |
| CAC                 | <₹500  |
| Average Order Value | ₹1,500 |
| Gross Margin        | >70%   |

---

## Risk Assessment

| Risk                           | Likelihood | Impact | Mitigation                                            |
| ------------------------------ | ---------- | ------ | ----------------------------------------------------- |
| AI output quality inconsistent | Medium     | High   | Extensive prompt engineering, human review of outputs |
| Low conversion free → paid     | Medium     | High   | A/B test pricing, improve free tier "wow" factor      |
| Perplexity API reliability     | Low        | Medium | Fallback to manual research for high-value customers  |
| Competitive entry              | Medium     | Medium | Build brand, community, consulting relationship moat  |
| Scope creep                    | High       | Medium | Strict 15-day deadline, MVP mindset                   |

---

## Appendix: Framework Reference Tables

### A. Size/Growth/Competition Combinations (8)

| #   | Size | Growth | Competition | Guidance                    |
| --- | ---- | ------ | ----------- | --------------------------- |
| 1   | L    | L      | L           | Bootstrap, grow organically |
| 2   | L    | L      | H           | Avoid - price wars          |
| 3   | L    | H      | L           | Bootstrap, friends/family   |
| 4   | L    | H      | H           | Tech = raise day 1          |
| 5   | H    | L      | L           | Bootstrap, organic          |
| 6   | H    | L      | H           | Avoid - price wars          |
| 7   | H    | H      | L           | Raise money, grow fast      |
| 8   | H    | H      | H           | Raise money, grow fast      |

### B. B2C Supply/Demand Combinations (4)

| #   | Supply | Demand | Guidance                            |
| --- | ------ | ------ | ----------------------------------- |
| 1   | Local  | Local  | Capital intensive, winner takes all |
| 2   | Local  | Global | High margin, exclusive supply       |
| 3   | Global | Local  | Market share of demand, low margin  |
| 4   | Global | Global | High margin, demand first           |

### C. B2B Criticality/Demand Combinations (4)

| #   | Criticality  | Demand | Guidance                         |
| --- | ------------ | ------ | -------------------------------- |
| 1   | Nice-to-have | Local  | Low margin, high capital         |
| 2   | Nice-to-have | Global | Tech saves costs, brand matters  |
| 3   | Critical     | Local  | High margin, very competitive    |
| 4   | Critical     | Global | High margin, market share driven |

### D. Time/Money/Trust Combinations (8) - MVP & Launch

| #   | Time | Money | Trust | MVP Approach | Launch Channel        |
| --- | ---- | ----- | ----- | ------------ | --------------------- |
| 1   | N    | N     | N     | Fastest      | Invite-based          |
| 2   | N    | N     | Y     | Testimonials | Influencers           |
| 3   | N    | Y     | N     | FOMO         | FOMO campaigns        |
| 4   | N    | Y     | Y     | Premium      | FOMO + Premium        |
| 5   | Y    | N     | N     | Best Price   | Offline               |
| 6   | Y    | N     | Y     | Abundance    | Online organic        |
| 7   | Y    | Y     | N     | Concierge    | Community             |
| 8   | Y    | Y     | Y     | Self-service | Community + Authority |

### E. Value/Competition/Frequency Combinations (8) - Pricing

| #   | Value | Competition | Frequency | Strategy              |
| --- | ----- | ----------- | --------- | --------------------- |
| 1   | L     | L           | L         | Membership            |
| 2   | L     | L           | H         | One-time pricing      |
| 3   | L     | H           | L         | Free (recoup via ads) |
| 4   | L     | H           | H         | Freemium recurring    |
| 5   | H     | L           | L         | Fixed price           |
| 6   | H     | L           | H         | Subscription          |
| 7   | H     | H           | L         | Freemium (most free)  |
| 8   | H     | H           | H         | Subscription          |

### F. Fundraising Readiness (4)

| #   | Tech Company | Revenue | Guidance                            |
| --- | ------------ | ------- | ----------------------------------- |
| 1   | No           | No      | Hard to raise - get revenue first   |
| 2   | No           | Yes     | Get profitable, then raise to scale |
| 3   | Yes          | No      | Hard to raise - get MVP first       |
| 4   | Yes          | Yes     | Unit positive economics, then raise |

### G. Pre-Money Valuation Guide (8)

| #   | Tech | Revenue | Growth | Valuation            |
| --- | ---- | ------- | ------ | -------------------- |
| 1   | N    | N       | N      | Don't raise          |
| 2   | N    | N       | Y      | Friends/family only  |
| 3   | N    | Y       | N      | 1x Annual Revenue    |
| 4   | N    | Y       | Y      | 3x Annual Revenue    |
| 5   | Y    | N       | N      | <1 Mn$               |
| 6   | Y    | N       | Y      | 1-2 Mn$              |
| 7   | Y    | Y       | N      | 5-8x Annual Revenue  |
| 8   | Y    | Y       | Y      | 8-12x Annual Revenue |

---

---

## AWS Challenge Application Summary

### One-Sentence Pitch
"We help people discover their ideal business niche or career direction by analyzing what gets them into flow state, their passions, and life experiences using AI, then transform that insight into an action plan with learning paths, milestone tracking, accountability rewards, and job matching - taking them from confusion to their first win."

### What We're Building (12 Weeks)

**Four Integrated Modules:**

1. **AI-Powered Discovery (Free)** - AWS Bedrock analyzes 12 deep questions to generate niche/career direction
2. **Intelligent Roadmap Generation (Free/Freemium)** - Bedrock Agents create personalized 90-day plans with weekly milestones
3. **Accountability & Progress Tracking (Core Platform)** - EventBridge schedules adaptive reminders, S3 stores milestone proofs, rewards gamify progress
4. **Two-Sided Job Marketplace** - Bedrock matches users to jobs by flow-state alignment, generates AI cover letters

### AWS Services Showcase

| Service          | Use Case                                      | Complexity      |
| ---------------- | --------------------------------------------- | --------------- |
| Bedrock (Claude) | Discovery analysis, AI coaching, job matching | High            |
| Bedrock Agents   | Autonomous roadmap generation                 | High            |
| Knowledge Bases  | Course catalogs, skill frameworks, job data   | Medium          |
| EventBridge      | Streak tracking, milestone reminders          | Medium          |
| SNS/SES          | Multi-channel notifications                   | Low             |
| S3               | Milestone proofs, resumes, documents          | Low             |
| RDS PostgreSQL   | User data, progress, milestones               | Medium          |
| CloudWatch       | Custom metrics, dashboards                    | Low-Medium      |
| ECS/Lambda       | Next.js app hosting                           | Medium          |

### Social Impact

- **Solves the execution gap:** 80% of people with clarity never act - we provide daily structure and accountability
- **Democratizes career coaching:** $15/mo vs $200-500/session
- **Better hiring outcomes:** Matches by flow-state alignment, not just resumes
- **Target:** 70% complete ≥3 milestones in 30 days (vs 15% industry standard)

### Early Traction

- 25 users completed discovery (free tier live)
- Ready to test accountability hypothesis with AWS Bedrock migration
- Validated discovery framework, now building execution layer

### Why This Matters

Career transitions fail not from lack of insight, but from lack of execution. We're building the first platform that turns AI-powered discovery into behavior change through accountability, learning integration, and economic opportunity - all powered by AWS.

---

## Document Version

- **Version:** 2.0 (Expanded Vision - Career Transformation Platform)
- **Last Updated:** January 20, 2026
- **Author:** Shashank B R
- **Product:** Better Trajectory - Career Transformation Platform
- **Challenge:** AWS Generative AI Challenge (12-week timeline)
