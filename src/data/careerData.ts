import { CareerPath } from '../types/career';

export const CAREER_PATHS: Record<string, CareerPath> = {
  'Engineer': {
    field: 'Engineer',
    description: 'Master the art of building scalable, secure, and intelligent systems.',
    topics: [
      {
        id: 'eng-0',
        title: 'Data Structures & Algorithms (DSA)',
        description: 'The fundamental building blocks of all software engineering at scale.',
        lectures: [
          { id: 'dsa-l1', title: 'Big O & Arrays', duration: '45m', type: 'video', youtubeVideoId: 'RBSGKlAvoiM' },
          { id: 'dsa-l2', title: 'Linked Lists & Stacks', duration: '38m', type: 'video', youtubeVideoId: 'Wwfb6P882jY' },
          { id: 'dsa-l3', title: 'Dynamic Programming Mastery', duration: '55m', type: 'video', youtubeVideoId: 'oBt53YbR9Kk' }
        ],
        subtopics: [
          { id: 'dsa-st1', title: 'Time Complexity Analysis', questions: [] },
          { id: 'dsa-st2', title: 'Recursion & Backtracking', questions: [] },
          { id: 'dsa-st3', title: 'String Manipulation & Tries', questions: [] },
          { id: 'dsa-st4', title: 'Advanced Graph Theory', questions: [] }
        ]
      },
      {
        id: 'eng-1',
        title: 'Neural Architectures & AI',
        description: 'Deep dive into LLMs, Vector Databases, and Agentic Workflows.',
        lectures: [
          { id: 'l1', title: 'Transformers Explained', duration: '25m', type: 'video', youtubeVideoId: 'ySExwhuwwao' },
          { id: 'l2', title: 'Vector Embeddings Strategy', duration: '18m', type: 'video', youtubeVideoId: 'S-7A6xZbeM0' },
          { id: 'l3', title: 'Building Autonomous Agents', duration: '35m', type: 'interactive', youtubeVideoId: 'mS-R1M3-x3A' }
        ],
        subtopics: [
          { id: 'st1', title: 'Attention Mechanisms', questions: [] },
          { id: 'st2', title: 'RAG Optimization', questions: [] },
          { id: 'st2-1', title: 'Context Window Constraints', questions: [] },
          { id: 'st2-2', title: 'Multi-Modal Integration', questions: [] }
        ]
      },
      {
        id: 'eng-2',
        title: 'Distributed Systems Mastery',
        description: 'Scaling to millions of users with high availability.',
        lectures: [
          { id: 'l4', title: 'CAP Theorem in Practice', duration: '20m', type: 'video', youtubeVideoId: 'vU2f4_0H0G8' },
          { id: 'l5', title: 'Event Sourcing Patterns', duration: '15m', type: 'video', youtubeVideoId: '8JKjvY4et6Y' },
          { id: 'l5-1', title: 'Service Mesh Architectures', duration: '28m', type: 'reading', youtubeVideoId: 'L8v9tAIP-f0' }
        ],
        subtopics: [
          { id: 'st3', title: 'Consistency Models', questions: [] },
          { id: 'st4', title: 'Load Balancing Shards', questions: [] },
          { id: 'st4-1', title: 'Gossip Protocols', questions: [] },
          { id: 'st4-2', title: 'Byzantine Fault Tolerance', questions: [] }
        ]
      },
      {
        id: 'eng-3',
        title: 'Modern Frontend Engineering',
        description: 'Advanced React, performance tuning, and design systems.',
        lectures: [
          { id: 'l6', title: 'React Server Components', duration: '22m', type: 'video' },
          { id: 'l7', title: 'WASM for Web Perf', duration: '30m', type: 'reading' },
          { id: 'l7-1', title: 'Hydration Strategies', duration: '12m', type: 'video' }
        ],
        subtopics: [
          { id: 'st5', title: 'Reconciliation Engine', questions: [] },
          { id: 'st6', title: 'Memory Management', questions: [] },
          { id: 'st7', title: 'Edge Rendering Protocols', questions: [] }
        ]
      },
      {
        id: 'eng-4',
        title: 'Cybersecurity & Zero Trust',
        description: 'Protecting neural nodes and distributed databases.',
        lectures: [
          { id: 'l8', title: 'Zero Trust Principles', duration: '20m', type: 'video' },
          { id: 'l9', title: 'OAuth2 & OpenID Deep Dive', duration: '35m', type: 'interactive' }
        ],
        subtopics: [
          { id: 'st8', title: 'JWT Vulnerabilities', questions: [] },
          { id: 'st9', title: 'SQL Injection at Scale', questions: [] }
        ]
      }
    ]
  },
  'Finance': {
    field: 'Finance',
    description: 'Master global markets, risk modeling, and strategic asset management.',
    topics: [
      {
        id: 'fin-1',
        title: 'High-Frequency Trading',
        description: 'Algorithmic trading strategies and low-latency execution.',
        lectures: [
          { id: 'f-l1', title: 'Market Microstructure', duration: '30m', type: 'video', youtubeVideoId: 'LPs1p76P2Gk' },
          { id: 'f-l2', title: 'Order Book Dynamics', duration: '20m', type: 'video', youtubeVideoId: 'r53m159DCOm' },
          { id: 'f-l2-1', title: 'Co-location Strategies', duration: '15m', type: 'reading', youtubeVideoId: 'V9AbYv79-H8' }
        ],
        subtopics: [
          { id: 'f-st1', title: 'Execution Algorithms', questions: [] },
          { id: 'f-st2', title: 'Arbitrage Detection', questions: [] },
          { id: 'f-st2-1', title: 'Latency Optimization', questions: [] }
        ]
      },
      {
        id: 'fin-2',
        title: 'Quantitative Risk Analysis',
        description: 'Advanced statistical models for financial risk.',
        lectures: [
          { id: 'f-l3', title: 'Monte Carlo Simulations', duration: '35m', type: 'video', youtubeVideoId: '7ESK5SaP-bc' },
          { id: 'f-l4', title: 'Value at Risk (VaR)', duration: '25m', type: 'reading', youtubeVideoId: 'r53m159DCOm' },
          { id: 'f-l5', title: 'Expected Shortfall (ES)', duration: '28m', type: 'video', youtubeVideoId: 'V9AbYv79-H8' }
        ],
        subtopics: [
          { id: 'f-st3', title: 'Stochastic Calculus', questions: [] },
          { id: 'f-st4', title: 'Credit Multipliers', questions: [] },
          { id: 'f-st5', title: 'Copula Models', questions: [] }
        ]
      },
      {
        id: 'fin-3',
        title: 'Investment Banking Protocols',
        description: 'M&A, IPOs, and complex financial restructuring.',
        lectures: [
          { id: 'f-l6', title: 'Valuation Methodologies', duration: '40m', type: 'video' },
          { id: 'f-l7', title: 'LBO Structuring', duration: '30m', type: 'interactive' }
        ],
        subtopics: [
          { id: 'f-st6', title: 'DCF Analysis', questions: [] },
          { id: 'f-st7', title: 'Due Diligence Frameworks', questions: [] }
        ]
      }
    ]
  },
  'Medical': {
    field: 'Medical',
    description: 'Advance in diagnostic accuracy, clinical research, and specialized care.',
    topics: [
      {
        id: 'med-1',
        title: 'Genomic Medicine',
        description: 'Personalized treatment through genetic sequencing.',
        lectures: [
          { id: 'm-l1', title: 'CRISPR Applications', duration: '40m', type: 'video', youtubeVideoId: '6tw_JVz_IEc' },
          { id: 'm-l2', title: 'Pharmacogenomics', duration: '25m', type: 'interactive', youtubeVideoId: 'S-7A6xZbeM0' },
          { id: 'm-l2-1', title: 'Metabolic Engineering', duration: '30m', type: 'video', youtubeVideoId: 'ySExwhuwwao' }
        ],
        subtopics: [
          { id: 'm-st1', title: 'DNA Sequencing Tech', questions: [] },
          { id: 'm-st2', title: 'Epigenetic Markers', questions: [] },
          { id: 'm-st2-1', title: 'Gene Therapy Delivery', questions: [] }
        ]
      },
      {
        id: 'med-2',
        title: 'Emergency Diagnostics',
        description: 'Rapid decision making in critical care environments.',
        lectures: [
          { id: 'm-l3', title: 'Point-of-Care Ultrasound', duration: '30m', type: 'video' },
          { id: 'm-l4', title: 'Trauma Management 101', duration: '45m', type: 'video' },
          { id: 'm-l5', title: 'Sepsis Identification', duration: '20m', type: 'video' }
        ],
        subtopics: [
          { id: 'm-st3', title: 'Shock Response Paths', questions: [] },
          { id: 'm-st4', title: 'Respiratory Failure', questions: [] },
          { id: 'm-st5', title: 'Acute Cardiac Care', questions: [] }
        ]
      },
      {
        id: 'med-3',
        title: 'AI in Clinical Radiology',
        description: 'Integrating machine learning for enhanced medical imaging.',
        lectures: [
          { id: 'm-l6', title: 'Automated Image Segmentation', duration: '35m', type: 'video' },
          { id: 'm-l7', title: 'Radiomics for Oncology', duration: '30m', type: 'reading' }
        ],
        subtopics: [
          { id: 'm-st6', title: 'CNNs for X-Rays', questions: [] },
          { id: 'm-st7', title: 'Anomaly Detection Loops', questions: [] }
        ]
      }
    ]
  },
  'Bank': {
    field: 'Bank',
    description: 'Lead digital transformation and strategic lending in modern banking.',
    topics: [
      {
        id: 'bank-1',
        title: 'Digital Asset Banking',
        description: 'Integrating CBDCs and digital tokens into traditional banking.',
        lectures: [
          { id: 'b-l1', title: 'Introduction to CBDCs', duration: '20m', type: 'video', youtubeVideoId: '8JKjvY4et6Y' },
          { id: 'b-l2', title: 'Smart Contract Audits', duration: '35m', type: 'video', youtubeVideoId: 'vU2f4_0H0G8' },
          { id: 'b-l2-1', title: 'Defi Protocols in Banking', duration: '25m', type: 'video', youtubeVideoId: 'mS-R1M3-x3A' }
        ],
        subtopics: [
          { id: 'b-st1', title: 'Ledger Interoperability', questions: [] },
          { id: 'b-st2', title: 'Token Custody Laws', questions: [] },
          { id: 'b-st2-1', title: 'Stablecoin Collateral', questions: [] }
        ]
      },
      {
        id: 'bank-2',
        title: 'Strategic Credit Risk',
        description: 'Modernizing loan portfolios with AI-driven scoring.',
        lectures: [
          { id: 'b-l3', title: 'Alternative Data Scoring', duration: '25m', type: 'video' },
          { id: 'b-l4', title: 'Macroeconomic Stress Tests', duration: '30m', type: 'reading' },
          { id: 'b-l5', title: 'Basel IV Compliance', duration: '40m', type: 'video' }
        ],
        subtopics: [
          { id: 'b-st3', title: 'Lending Algorithms', questions: [] },
          { id: 'b-st4', title: 'Default Prediction', questions: [] },
          { id: 'b-st5', title: 'Capital Adequacy Ratio', questions: [] }
        ]
      },
      {
        id: 'bank-3',
        title: 'Anti-Money Laundering (AML)',
        description: 'Sophisticated patterns for detecting financial crime.',
        lectures: [
          { id: 'b-l6', title: 'Transaction Monitoring AI', duration: '30m', type: 'video' },
          { id: 'b-l7', title: 'Sanctions Screening', duration: '20m', type: 'video' }
        ],
        subtopics: [
          { id: 'b-st6', title: 'KYC Automation', questions: [] },
          { id: 'b-st7', title: 'SAR Generation', questions: [] }
        ]
      }
    ]
  },
  'Civil Service': {
    field: 'Civil Service',
    description: 'Design resilient public policies and govern with integrity.',
    topics: [
      {
        id: 'civil-1',
        title: 'Crisis Governance',
        description: 'Managing public infrastructure and safety during emergencies.',
        lectures: [
          { id: 'c-l1', title: 'Disaster Management Protocol', duration: '40m', type: 'video' },
          { id: 'c-l2', title: 'Public Resource Logistics', duration: '30m', type: 'video' },
          { id: 'c-l2-1', title: 'Cyber Resilience for Gov', duration: '25m', type: 'video' }
        ],
        subtopics: [
          { id: 'c-st1', title: 'Emergency Response Law', questions: [] },
          { id: 'c-st2', title: 'Community Resilience', questions: [] },
          { id: 'c-st2-1', title: 'Infrastructure Protection', questions: [] }
        ]
      },
      {
        id: 'civil-2',
        title: 'Data-Driven Policy',
        description: 'Using big data to inform urban planning and social policy.',
        lectures: [
          { id: 'c-l3', title: 'Smart City Frameworks', duration: '35m', type: 'video' },
          { id: 'c-l4', title: 'Algorithmic Fairness in Gov', duration: '25m', type: 'reading' },
          { id: 'c-l5', title: 'Sentiment Analysis for Policy', duration: '30m', type: 'video' }
        ],
        subtopics: [
          { id: 'c-st3', title: 'Urban Growth Models', questions: [] },
          { id: 'c-st4', title: 'Privacy in Public Sector', questions: [] },
          { id: 'c-st5', title: 'Social Network Analysis', questions: [] }
        ]
      },
      {
        id: 'civil-3',
        title: 'Econometrics for Policy',
        description: 'Statistical methods for evaluating social program impact.',
        lectures: [
          { id: 'c-l6', title: 'Causal Inference 101', duration: '40m', type: 'video' },
          { id: 'c-l7', title: 'Regression Discontinuity', duration: '30m', type: 'interactive' }
        ],
        subtopics: [
          { id: 'c-st6', title: 'Survey Design Path', questions: [] },
          { id: 'c-st7', title: 'Budget Allocation Logic', questions: [] }
        ]
      }
    ]
  }
};
