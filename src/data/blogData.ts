
import { BlogPost, Author, Category, Tag } from "@/types/blog";

const authors: Author[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "Sarah is our Senior Digital Strategist with over 10 years of experience in digital marketing and SEO optimization.",
    role: "Senior Digital Strategist",
    social: {
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahjohnson"
    }
  },
  {
    id: "2",
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "David leads our web development team, specializing in modern JavaScript frameworks and serverless architectures.",
    role: "Lead Web Developer",
    social: {
      twitter: "https://twitter.com/davidchen",
      linkedin: "https://linkedin.com/in/davidchen",
      github: "https://github.com/davidchen"
    }
  },
  {
    id: "3",
    name: "Michelle Rodriguez",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "Michelle is our Head of Design with expertise in UI/UX principles and brand identity development.",
    role: "Head of Design",
    social: {
      twitter: "https://twitter.com/michellerodriguez",
      linkedin: "https://linkedin.com/in/michellerodriguez",
      github: "https://github.com/michellerodriguez"
    }
  }
];

const categories: Category[] = [
  { id: "1", name: "SEO", slug: "seo" },
  { id: "2", name: "Web Design", slug: "web-design" },
  { id: "3", name: "Digital Marketing", slug: "digital-marketing" },
  { id: "4", name: "Case Studies", slug: "case-studies" },
  { id: "5", name: "Web Development", slug: "web-development" },
  { id: "6", name: "Analytics", slug: "analytics" },
  { id: "7", name: "Social Media", slug: "social-media" },
  { id: "8", name: "Agency News", slug: "agency-news" }
];

const tags: Tag[] = [
  { id: "1", name: "SEO", slug: "seo" },
  { id: "2", name: "Web Design", slug: "web-design" },
  { id: "3", name: "Digital Marketing", slug: "digital-marketing" },
  { id: "4", name: "E-commerce", slug: "e-commerce" },
  { id: "5", name: "UX/UI", slug: "ux-ui" },
  { id: "6", name: "Mobile", slug: "mobile" },
  { id: "7", name: "Analytics", slug: "analytics" },
  { id: "8", name: "Social Media", slug: "social-media" },
  { id: "9", name: "PPC", slug: "ppc" },
  { id: "10", name: "Content Strategy", slug: "content-strategy" },
  { id: "11", name: "Agency News", slug: "agency-news" },
  { id: "12", name: "Case Study", slug: "case-study" }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 SEO Trends You Can't Ignore in 2025",
    slug: "seo-trends-2025",
    excerpt: "Stay ahead of the competition with these emerging SEO strategies that will dominate digital marketing in 2025.",
    content: `
# 5 SEO Trends You Can't Ignore in 2025

In the ever-evolving landscape of search engine optimization, staying ahead of trends isn't just advantageous—it's essential for digital survival. As we move further into 2025, several emerging SEO patterns are reshaping how businesses approach their digital presence.

## 1. AI-Powered Search Intent Optimization

Google's algorithms have evolved beyond keyword matching to understanding user intent with remarkable precision. In 2025, successful SEO strategies now revolve around optimizing for the specific questions and problems users are trying to solve, rather than simply targeting keywords.

* Focus on creating content that thoroughly addresses user questions
* Implement structured data to help AI understand your content context
* Develop content clusters that cover topics comprehensively

## 2. Voice Search Optimization Becomes Mandatory

With smart speakers and voice assistants becoming ubiquitous in homes and devices, voice search optimization is no longer optional:

* Optimize for conversational, question-based queries
* Focus on featured snippet positions (position zero)
* Improve local SEO for "near me" voice searches

## 3. User Experience Signals as Primary Ranking Factors

Google's Core Web Vitals have expanded, and in 2025, user experience metrics directly influence rankings more than ever:

* Page load speed under 2 seconds is now standard
* Interactive elements must respond within 100ms
* Layout stability is critical across all device types

## 4. Video Search Optimization

Video content has become a primary search medium rather than just supplementary material:

* Implement video transcripts with semantic markup
* Create segmented video content with chapter markers
* Optimize video thumbnail images for higher click-through rates

## 5. E-E-A-T Principles Expanded

The expertise, experience, authoritativeness, and trustworthiness principles have expanded to include:

* Transparent authorship and credentials
* Demonstrated real-world experience
* Regular content updates and fact verification
* Source citation and reference linking

By embracing these trends, businesses can ensure their digital presence remains robust and visible in an increasingly competitive online landscape.
    `,
    featuredImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    author: authors[0],
    category: categories[0],
    tags: [tags[0], tags[9]],
    publishedDate: "2025-04-15",
    readTime: 7
  },
  {
    id: "2",
    title: "The Ultimate Guide to Choosing a Web Design Agency",
    slug: "ultimate-guide-choosing-web-design-agency",
    excerpt: "Finding the right web design partner can make or break your online presence. Learn the critical factors to evaluate before making this important decision.",
    content: `
# The Ultimate Guide to Choosing a Web Design Agency

Selecting the right web design agency is one of the most consequential business decisions you'll make. Your website is often the first point of contact between your brand and potential customers—it needs to make the right impression.

## Define Your Goals and Requirements

Before approaching agencies, clearly define:

* Primary business objectives for your website
* Key functionality requirements
* Content management needs
* Integration with existing systems
* Budget constraints and timeline

## Evaluate Their Portfolio

A agency's previous work speaks volumes:

* Look for design versatility across industries
* Check for UX coherence and intuitive navigation
* Assess mobile responsiveness
* Look for projects similar to your industry or scale

## Technical Expertise and Process

Modern websites require diverse technical skills:

* Front-end development capabilities
* Back-end system integration expertise
* Security implementation practices
* Performance optimization techniques
* Development methodology and client involvement

## Post-Launch Support

Your website journey doesn't end at launch:

* Understand maintenance packages
* Clarify update procedures and timelines
* Discuss training for your team
* Evaluate analytics setup and reporting

## Client Testimonials and References

Don't just take their word for it:

* Request client references specifically related to projects similar to yours
* Look for reviews that mention timeline adherence and budget management
* Ask about communication during the project

## Cultural Fit and Communication

The best technical skills won't overcome poor communication:

* Evaluate responsiveness during the sales process
* Understand their project management approach
* Meet the team members who will work on your project
* Discuss how they handle feedback and revisions

By thoroughly evaluating these aspects, you'll increase your chances of finding a web design agency that not only delivers an exceptional website but also provides a positive, productive working relationship throughout the process.
    `,
    featuredImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    author: authors[2],
    category: categories[1],
    tags: [tags[1], tags[4]],
    publishedDate: "2025-04-10",
    readTime: 9
  },
  {
    id: "3",
    title: "How Content Marketing Drives B2B Lead Generation",
    slug: "content-marketing-b2b-lead-generation",
    excerpt: "Discover the powerful connection between strategic content marketing and B2B lead generation in today's digital-first business environment.",
    content: `
# How Content Marketing Drives B2B Lead Generation

In the complex world of B2B sales, the traditional hard-sell approach has given way to a more nuanced strategy: content marketing. By providing value before asking for commitment, businesses are seeing dramatically improved lead generation results.

## The B2B Buyer's Journey Has Changed

Today's B2B decision-makers:

* Complete 70% of their research before contacting sales
* Consult an average of 10 information sources before purchasing
* Value educational content over promotional material by a 3-to-1 margin

## Content Types That Generate B2B Leads

Different content formats work at different funnel stages:

### Top of Funnel (Awareness)
* Industry research reports and original data
* Educational blog posts addressing common pain points
* Thought leadership articles

### Middle of Funnel (Consideration)
* Detailed case studies with measurable outcomes
* Comparison guides and feature breakdowns
* Expert webinars and video demonstrations

### Bottom of Funnel (Decision)
* Product-specific white papers
* Customized ROI calculators
* Client testimonials and implementation guides

## Effective Distribution Channels

Creating content is only half the equation:

* LinkedIn remains the most effective B2B content platform (87% engagement rate)
* Email marketing delivers the highest ROI for nurturing leads
* Industry partnerships amplify content reach to qualified audiences

## Measurement Beyond Views

Sophisticated B2B content marketing measures:

* Content engagement time (not just page views)
* Return visitor rates and content journey mapping
* Lead quality scoring based on content consumption patterns
* Attribution modeling across touchpoints

## Building a Content Engine

For sustainable lead generation:

* Create a consistent publishing calendar
* Develop content clusters around core business solutions
* Implement progressive profiling to advance relationships
* Continuously test and refine based on engagement metrics

When implemented strategically, content marketing transforms B2B lead generation from interruptive outreach to magnetic attraction, drawing in pre-qualified prospects already engaged with your ideas and solutions.
    `,
    featuredImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    author: authors[0],
    category: categories[2],
    tags: [tags[2], tags[9]],
    publishedDate: "2025-04-05",
    readTime: 8
  },
  {
    id: "4",
    title: "Unlocking Success: A Case Study in E-commerce CRO",
    slug: "ecommerce-cro-case-study",
    excerpt: "Learn how we helped an e-commerce client increase their conversion rate by 73% through strategic optimization and testing.",
    content: `
# Unlocking Success: A Case Study in E-commerce CRO

When luxury home goods retailer Domicile approached us, they were experiencing high traffic but disappointing conversion rates. Their beautifully designed website wasn't translating visits into sales. Here's how our data-driven CRO approach transformed their business.

## Initial Situation

* 250,000 monthly visitors
* 0.8% conversion rate (industry average: 2.3%)
* 68% cart abandonment rate
* Average order value: $95

## Diagnosis Phase

Our comprehensive audit revealed several critical issues:

* Mobile checkout process required 19 taps to complete (industry best practice: 7-8)
* Product pages lacked sufficient visual content (2.3 images per product vs. industry standard 5-7)
* Trust signals were buried in footer, not visible during purchase decision
* Shipping costs revealed only at final checkout step

## Strategic Intervention

We implemented a phased optimization approach:

### Phase 1: Quick Wins
* Implemented express checkout option
* Added prominent trust badges near add-to-cart buttons
* Created floating cart summary during checkout
* Displayed shipping costs on product pages

### Phase 2: UX Redesign
* Streamlined mobile checkout (reduced to 8 taps)
* Expanded product imagery (7+ images per product)
* Implemented 360° product views for top 50 products
* Created size comparison visualizations

### Phase 3: Personalization
* Developed abandoned cart email sequence with dynamic incentives
* Implemented product recommendation engine based on browsing behavior
* Created persistent shopping carts across devices
* Deployed exit-intent offers for first-time visitors

## A/B Testing Protocol

Each change was validated through rigorous A/B testing:

* Test duration: 2 weeks per element
* Minimum sample: 25,000 visitors per variation
* Statistical significance threshold: 95%
* Sequential testing to isolate impact

## Results After Six Months

* Conversion rate increase: 73% (from 0.8% to 1.38%)
* Cart abandonment reduction: 31%
* Average order value increase: 24% (to $117)
* Mobile conversion improvement: 106%
* ROI on CRO investment: 843%

## Key Learnings

This case study demonstrated several universal principles:

* Mobile optimizations deliver outsized returns in today's market
* Visual content quality directly impacts conversion confidence
* Transparency about costs prevents late-stage abandonment
* Personalization drives both conversion and order value

By taking a methodical, data-driven approach to conversion optimization, we helped Domicile transform their e-commerce performance and establish a culture of continuous testing and improvement.
    `,
    featuredImage: "https://images.unsplash.com/photo-1526374965328-7f61d2c6f44d",
    author: authors[1],
    category: categories[3],
    tags: [tags[3], tags[12]],
    publishedDate: "2025-03-28",
    readTime: 10
  },
  {
    id: "5",
    title: "Why Your Business Needs a Mobile-First Website Now",
    slug: "business-mobile-first-website",
    excerpt: "Mobile traffic continues to dominate online browsing. Learn why a mobile-first approach is essential for business success in today's digital landscape.",
    content: `
# Why Your Business Needs a Mobile-First Website Now

In 2025, mobile-first isn't just a design philosophy—it's a business imperative. With mobile devices accounting for over 72% of all website traffic, organizations that still treat mobile as an afterthought are facing serious competitive disadvantages.

## Mobile Usage Statistics You Can't Ignore

The data tells a compelling story:

* 61% of users never return to a site that isn't mobile-friendly
* Mobile users spend 88% more time on responsive websites
* 52% of customers are less likely to engage with a company after a poor mobile experience
* Google's indexing prioritizes mobile-friendly sites

## Beyond Responsive: True Mobile-First Design

Mobile-first design means more than just responsive layouts:

* Prioritizing essential content and features
* Designing for touch interfaces and variable connectivity
* Optimizing for vertical scrolling patterns
* Implementing accelerated mobile pages (AMP)
* Focusing on micro-interactions and gesture controls

## Business Impact of Mobile-First

The benefits extend throughout your business:

### SEO Performance
* Higher search engine rankings
* Better click-through rates from mobile searches
* Improved local search visibility

### User Engagement
* Lower bounce rates (average 38% reduction)
* Increased time on site (27% improvement)
* Higher page depth per session

### Conversion Metrics
* Improved form completion rates
* Higher lead generation efficiency
* Increased mobile purchases

## Implementation Strategy

Moving to mobile-first requires a strategic approach:

* Begin with a comprehensive mobile UX audit
* Prioritize core user journeys for optimization
* Implement progressive enhancement for advanced features
* Test with actual devices, not just viewport emulation
* Analyze mobile-specific user behavior patterns

## Common Pitfalls to Avoid

Many organizations stumble with these common mistakes:

* Simply shrinking desktop layouts
* Hiding critical functionality on mobile
* Ignoring variable network conditions
* Creating different user experiences across devices
* Forgetting to optimize images and media

Mobile-first is no longer a future trend—it's the current standard. Businesses that invest in exceptional mobile experiences see immediate returns in engagement, conversions, and customer loyalty.
    `,
    featuredImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    author: authors[2],
    category: categories[1],
    tags: [tags[1], tags[5]],
    publishedDate: "2025-03-22",
    readTime: 7
  },
  {
    id: "6",
    title: "Decoding Google Analytics 4 for Marketers",
    slug: "google-analytics-4-for-marketers",
    excerpt: "Google Analytics 4 represents a paradigm shift in digital analytics. Learn how to leverage its new capabilities to enhance your marketing strategy.",
    content: `
# Decoding Google Analytics 4 for Marketers

Google Analytics 4 (GA4) represents the biggest shift in digital analytics in a decade. With its event-based tracking model and AI-powered insights, GA4 offers unprecedented opportunities for marketers who know how to leverage its capabilities.

## Key Differences from Universal Analytics

GA4 introduces several fundamental changes:

* Event-based measurement model (vs. session-based)
* User-centric tracking across devices and platforms
* Privacy-focused design with cookieless measurement
* Built-in predictive metrics and anomaly detection
* Integration with Google's AI for automated insights

## Essential GA4 Reports for Marketers

While the interface has changed, these reports provide critical marketing intelligence:

### Acquisition Overview
* Discover which channels deliver engaged users
* Compare first-user to repeat-visitor acquisition paths
* Identify which campaigns drive high-value conversions

### Engagement Reports
* Analyze pages and screens with highest engagement
* Track event frequency and user interaction patterns
* Identify content that creates return visitors

### Monetization Analysis
* Track e-commerce performance with enhanced metrics
* Analyze purchase probability and revenue prediction
* Identify products with highest conversion rates

### Retention Insights
* Measure cohort return rates over time
* Analyze which features drive recurring visits
* Compare retention across acquisition channels

## Custom Dimensions and Metrics

GA4's flexibility allows marketers to create:

* Content groupings based on topics or funnel stages
* Custom user segments based on engagement patterns
* Cross-platform user journey maps
* Attribution models based on specific business needs

## Implementing Effective Event Tracking

Successful GA4 implementation requires strategic event planning:

1. Map critical user journeys across your digital properties
2. Define a consistent event naming taxonomy
3. Implement enhanced measurement for automatic event capturing
4. Configure custom events for business-specific interactions
5. Set up conversion events aligned with business objectives

## Leveraging Predictive Metrics

GA4's AI-powered predictive capabilities help marketers:

* Identify users likely to convert in the next 7 days
* Target users with high purchase probability
* Re-engage users with high churn probability
* Optimize campaigns based on predicted LTV

As third-party cookies phase out and privacy regulations increase, GA4's approach to measurement provides marketers with a sustainable analytics framework that balances detailed insights with user privacy.
    `,
    featuredImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    author: authors[0],
    category: categories[5],
    tags: [tags[6], tags[2]],
    publishedDate: "2025-03-15",
    readTime: 9
  },
  {
    id: "7",
    title: "Our Agency's Top 3 Web Development Tools",
    slug: "agency-top-web-development-tools",
    excerpt: "Discover the essential tools our development team relies on to create high-performance, scalable web applications for our clients.",
    content: `
# Our Agency's Top 3 Web Development Tools

After evaluating countless development frameworks and tools over the years, our agency has settled on a technology stack that consistently delivers exceptional results for our clients. These are the three core tools we rely on for modern web development projects.

## 1. Next.js: Our Frontend Framework of Choice

Next.js has become our standard for React-based projects due to its exceptional balance of developer experience and performance optimization:

### Why We Love It
* Server components eliminate unnecessary client-side JavaScript
* Image optimization automatically handles responsive sizing and formats
* Built-in routing capabilities simplify application architecture
* Incremental Static Regeneration provides the perfect balance of dynamic content and performance
* TypeScript integration ensures code reliability at scale

### Real-World Benefits
* 27% average improvement in Core Web Vitals scores
* 42% reduction in time-to-interactive metrics
* Streamlined development workflow across team members

## 2. Supabase: Modern Backend Infrastructure

For database and authentication needs, Supabase has become our go-to solution:

### Why We Love It
* PostgreSQL foundation provides enterprise-grade reliability
* Real-time capabilities without complex infrastructure
* Row-level security simplifies authorization logic
* Built-in authentication with multiple provider options
* Edge Functions for server-side logic

### Real-World Benefits
* 65% reduction in backend development time
* Simplified data management for client teams
* Enhanced security posture with minimal configuration

## 3. Tailwind CSS: Utility-First Styling

Tailwind CSS has transformed our approach to building user interfaces:

### Why We Love It
* Consistent design system implementation
* Reduced CSS bundle size through purging
* Component-focused styling approach
* Responsive design utilities built-in
* Theme customization for brand alignment

### Real-World Benefits
* 40% faster UI development cycles
* Improved design consistency across projects
* Easier handoffs between designers and developers

## Honorable Mentions

While these three tools form our core stack, we also frequently utilize:

* Prisma for type-safe database access
* Storybook for component documentation
* Playwright for end-to-end testing
* ContentLayer for structured content management

By standardizing on these tools, we're able to deliver consistently high-quality results while maintaining development efficiency and code maintainability.
    `,
    featuredImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    author: authors[1],
    category: categories[4],
    tags: [tags[4], tags[1]],
    publishedDate: "2025-03-08",
    readTime: 6
  },
  {
    id: "8",
    title: "Building Brand Trust Through Authentic Social Media",
    slug: "brand-trust-authentic-social-media",
    excerpt: "In an era of skepticism, learn how to leverage social media authenticity to build lasting trust with your audience.",
    content: `
# Building Brand Trust Through Authentic Social Media

In an age where consumers are increasingly skeptical of traditional advertising, authentic social media presence has become the cornerstone of building brand trust. Here's how forward-thinking brands are creating genuine connections through strategic authenticity.

## The Trust Crisis in Digital Marketing

Recent studies paint a concerning picture:

* 81% of consumers report trust as a deciding factor in purchasing decisions
* Only 34% trust the brands they use regularly
* 73% would pay more for products from companies they trust
* 86% expect transparency from brands on social media

## Elements of Authentic Social Media Presence

Authenticity in social media isn't accidental—it's strategic:

### 1. Value-First Content Strategy
* Educational content that addresses audience pain points
* Entertainment that aligns with brand values
* Inspiration that resonates with audience aspirations
* Resources that provide genuine utility

### 2. Transparent Communication
* Behind-the-scenes content showing real processes
* Open discussion of challenges and failures
* Clear disclosure of sponsored content
* Proactive addressing of concerns and criticism

### 3. Community Engagement
* Responsive, human interaction in comments
* User-generated content that spotlights customers
* Two-way dialogue rather than broadcast messaging
* Community recognition and celebration

### 4. Consistent Brand Voice
* Personality that feels human, not corporate
* Value alignment with target audience
* Consistency across platforms and team members
* Appropriate vulnerability and personality

## Measuring Trust-Building Success

Authentic social media builds measurable trust:

* Sentiment analysis of comments and mentions
* Engagement rate on non-promotional content
* Brand advocacy and user-generated content volume
* Direct message engagement and response rates

## Case Study: Building Trust Through Crisis

When outdoor apparel company NatureTrek faced product safety concerns, their authentic social media response became a masterclass in trust-building:

1. Immediate acknowledgment of the issue
2. Transparent communication about investigation process
3. Regular updates showing behind-the-scenes efforts
4. Direct engagement with affected customers
5. Clear explanation of resolution and preventative measures

Result: 94% customer retention and 23% increase in trust metrics following the crisis.

The brands that will thrive in the trust economy are those who view social media not as a promotional channel, but as a platform for authentic relationship building with their communities.
    `,
    featuredImage: "https://images.unsplash.com/photo-1611262588019-db6cc2032da3",
    author: authors[2],
    category: categories[6],
    tags: [tags[7], tags[9]],
    publishedDate: "2025-02-28",
    readTime: 8
  },
  {
    id: "9",
    title: "The Power of PPC: When to Use Google Ads vs. Social Ads",
    slug: "ppc-google-ads-vs-social-ads",
    excerpt: "Maximize your advertising ROI by understanding when to leverage search PPC versus social media advertising for different marketing objectives.",
    content: `
# The Power of PPC: When to Use Google Ads vs. Social Ads

Paid digital advertising remains one of the most powerful and flexible marketing channels available today. However, the landscape has grown increasingly complex, with the choice between search-based PPC (primarily Google Ads) and social media advertising representing a critical strategic decision.

## The Fundamental Difference: Intent vs. Interest

The core distinction between these channels lies in the user mindset:

* **Search PPC**: Captures active intent—users actively searching for solutions
* **Social Ads**: Targets passive interest—users browsing content who might be interested

## When Google Ads Excel

Google Ads typically outperforms in these scenarios:

### 1. High Purchase Intent
* Bottom-of-funnel conversions
* Product-specific searches with buying intent
* Local service inquiries (e.g., "plumber near me")
* Immediate problem-solving needs

### 2. B2B Complex Sales
* Solution-specific research phases
* Technical specification comparisons
* Vendor evaluation searches
* Industry-specific terminology targeting

### 3. Direct Response Campaigns
* Lead generation with specific conversion goals
* E-commerce transactions for known products
* Service bookings and appointments
* Time-sensitive offers and promotions

## When Social Ads Take the Lead

Social advertising platforms excel in these scenarios:

### 1. Awareness Building
* New brand introduction
* Product category education
* Market disruption messaging
* Audience expansion initiatives

### 2. Interest Cultivation
* Content marketing amplification
* Value proposition storytelling
* Visual product showcasing
* Lifestyle alignment messaging

### 3. Advanced Targeting Capabilities
* Demographic precision beyond search intent
* Interest-based audience building
* Behavioral targeting
* Lookalike audience expansion

## Hybrid Strategies: Better Together

The most effective campaigns often utilize both channels in complementary ways:

* Using social ads for initial awareness, followed by search retargeting
* Capturing search traffic while simultaneously building brand recognition via social
* Reinforcing key messages across both platforms for increased recall
* Using learnings from each platform to optimize the other

## Budget Allocation Framework

Consider these factors when dividing budget between platforms:

* Product/service purchase cycle length
* Visual appeal of offering
* Competitive search landscape costs
* Brand recognition level
* Target demographic platform usage

By understanding the strengths and ideal use cases for both Google Ads and social advertising platforms, marketers can strategically deploy their budgets for maximum impact across the entire customer journey.
    `,
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    author: authors[0],
    category: categories[2],
    tags: [tags[2], tags[8]],
    publishedDate: "2025-02-20",
    readTime: 9
  },
  {
    id: "10",
    title: "Agency Spotlight: Welcoming Our New Head of Strategy",
    slug: "agency-new-head-of-strategy",
    excerpt: "Futurity is delighted to announce the appointment of Dr. Rebecca Chen as our new Head of Strategy, bringing her renowned expertise in digital transformation to our growing team.",
    content: `
# Agency Spotlight: Welcoming Our New Head of Strategy

We are thrilled to announce a significant addition to our leadership team. Dr. Rebecca Chen has joined Futurity as our new Head of Strategy, bringing with her over 15 years of experience in digital transformation and strategic innovation.

## Dr. Chen's Background

Rebecca joins us from her previous role as Digital Strategy Director at GlobalTech Consulting, where she led digital transformation initiatives for Fortune 500 clients across technology, healthcare, and financial services sectors.

Her professional background includes:

* Ph.D. in Business Strategy from Stanford University
* Former advisor to multiple successful tech startups
* Author of "Digital Disruption: Navigating Business Evolution in the Connected Age"
* Regular speaker at industry conferences including SXSW, Web Summit, and Adobe MAX

## Strategic Vision for Futurity

In her new role, Rebecca will lead our strategic consulting practice, focusing on:

### Digital Experience Transformation
Helping organizations reimagine customer and employee experiences through cohesive digital strategies that align technology investments with business outcomes.

### Data-Driven Decision Architecture
Building frameworks that enable organizations to leverage their data assets for more effective decision-making and predictive insights.

### Innovation Acceleration Programs
Developing structured approaches to help established companies cultivate innovation mindsets and processes that drive sustainable growth.

## Client Impact

Rebecca's appointment strengthens our ability to serve clients in several key areas:

* Strategic roadmapping for digital transformation initiatives
* Executive alignment workshops for technology investments
* Competitive advantage analysis and strategy development
* Digital maturity assessments and capability building

## A Message from Rebecca

"I'm excited to join an agency that has built such a strong foundation in delivering both strategic thinking and exceptional execution. Today's business challenges require more than just technical solutions—they demand a holistic understanding of business objectives, customer needs, and organizational capabilities. I look forward to working with the talented Futurity team to help our clients navigate digital complexity and achieve meaningful business outcomes."

## Looking Forward

Rebecca's leadership will be instrumental as we expand our strategic consulting services in the coming year. Her expertise complements our existing capabilities in design, technology, and marketing, allowing us to provide even more comprehensive solutions to our clients' most challenging business problems.

Please join us in welcoming Rebecca to the Futurity team!
    `,
    featuredImage: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4",
    author: authors[2],
    category: categories[7],
    tags: [tags[10]],
    publishedDate: "2025-02-10",
    readTime: 5
  }
];

export const getAllPosts = () => {
  return blogPosts;
};

export const getPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentPosts = (count: number = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count);
};

export const getPostsByCategory = (categorySlug: string) => {
  return blogPosts.filter(post => post.category.slug === categorySlug);
};

export const getPostsByTag = (tagSlug: string) => {
  return blogPosts.filter(post => post.tags.some(tag => tag.slug === tagSlug));
};

export const getPostsByAuthor = (authorId: string) => {
  return blogPosts.filter(post => post.author.id === authorId);
};

export const getAllCategories = () => {
  return categories;
};

export const getAllTags = () => {
  return tags;
};

export const getAllAuthors = () => {
  return authors;
};
