export type ResumeSection =
  | "Profile"
  | "Experience"
  | "Education"
  | "Technical skills"
  | "Projects"
  | "Achievements"
  | "Contact";

export type ChatReply = {
  answer: string;
  sources: ResumeSection[];
  topic: string;
  suggestions: string[];
  action?: "contact" | "contact-info";
};

type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  problem: string;
  solution: string;
  outcome: string;
  keywords: string[];
  highlights: string[];
};

export const resumeProfile = {
  name: "Sanjay Soralamavu Dev",
  displayName: "Sanjay S Dev",
  currentLocation: "Tempe, Arizona",
  previousWorkLocation: "Bengaluru, India",
  email: "sanjayso@asu.edu",
  phoneDisplay: "480.359.9244",
  phoneHref: "tel:4803599244",
  linkedin: "https://linkedin.com/in/sanjay-soralamavu-dev",
  experience: [
    {
      id: "asu",
      role: "Data Analyst",
      organization: "Social Embeddedness, Arizona State University",
      location: "Tempe, Arizona",
      period: "May 2026 – Present",
      problem:
        "Raw Collaboratory exports needed to become reliable, repeatable reporting data.",
      solution:
        "A Python ETL pipeline, relational data models, validation reports, Tableau dashboards, and documented refresh workflows.",
      outcome:
        "Stakeholders can work from clean Tableau-ready datasets and repeat the reporting process with clearer definitions and quality checks.",
      keywords: [
        "asu",
        "arizona state",
        "social embeddedness",
        "collaboratory",
        "tableau",
        "etl",
        "current role",
      ],
      highlights: [
        "Built and maintains a Python ETL pipeline that converts raw Collaboratory exports into clean Tableau-ready tables, bridge tables, validation reports, and archived refreshes.",
        "Modeled activity, organization, profile, unit, and course data into relational datasets for reporting, dashboards, and visualizations.",
        "Created Tableau dashboards and data-model guidance for repeatable stakeholder reporting and program analysis.",
        "Documented definitions, quality checks, and reporting processes while supporting data collection, maintenance, and training.",
      ],
    },
    {
      id: "hitachi",
      role: "Business Process Quality and Improvement – Associate",
      organization: "Hitachi Digital Services",
      location: "Bengaluru, India",
      period: "Aug 2022 – Aug 2025",
      problem:
        "Global teams needed better visibility into process health, audit gaps, compliance risk, and recurring reporting.",
      solution:
        "QEI frameworks, Power BI KPI dashboards, regression and trend analysis, quality audits, and Power Automate reporting workflows.",
      outcome:
        "Results include 30% better operational efficiency, 40% operational improvement, and 20% fewer errors, with clearer reporting for India and Japan leadership.",
      keywords: [
        "hitachi",
        "business process",
        "quality",
        "qei",
        "audit",
        "cmmi",
        "iso",
        "power bi",
        "power automate",
        "regression",
        "compliance",
      ],
      highlights: [
        "Designed QEI frameworks, Power BI dashboards, and KPI reports that improved operational efficiency by 30%.",
        "Conducted Global Internal Quality Audits and analyzed audit data to identify gaps, improve operations by 40%, and reduce errors by 20%.",
        "Used regression and trend analysis to predict non-compliance patterns and support proactive audit and compliance decisions.",
        "Supported CMMI Level 3 and ISO audits, automated reporting with Power Automate, and prepared executive reports for India and Japan leadership.",
      ],
    },
    {
      id: "iisc",
      role: "Data Science Intern",
      organization: "Indian Institute of Science",
      location: "Bengaluru, India",
      period: "Jan 2022 – Jul 2022",
      problem:
        "Smartphone video and motion data needed to become consistent enough for ball-tracking research and model evaluation.",
      solution:
        "A ball-tracking application, annotated training data, cleaned motion datasets, exploratory trajectory analysis, and Python visualizations.",
      outcome:
        "Research stakeholders received more reliable data, visible trajectory patterns, and documented recommendations for improving the tracking model.",
      keywords: [
        "iisc",
        "indian institute of science",
        "intern",
        "internship",
        "ball tracking",
        "motion",
        "trajectory",
        "matplotlib",
        "seaborn",
      ],
      highlights: [
        "Developed a ball-tracking application using smartphone video capture and annotated datasets for machine-learning model training.",
        "Cleaned, validated, and preprocessed motion data to improve consistency and model reliability.",
        "Explored trajectory data and built Python visualizations with Matplotlib and Seaborn.",
        "Documented the methodology, findings, and recommendations for research stakeholders.",
      ],
    },
  ] satisfies ExperienceEntry[],
  education: [
    {
      degree: "Master’s in Computer Science",
      institution: "Arizona State University",
      location: "Tempe, Arizona",
      completion: "May 2027",
      gpa: "3.89 GPA",
    },
    {
      degree: "B.E. in Computer Science",
      institution: "Visvesvaraya Technological University",
      location: "India",
      completion: "Aug 2022",
      gpa: "3.69 GPA",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Java",
    "JavaScript",
    "Power BI",
    "Tableau",
    "Advanced Excel",
    "Power Automate",
    "PostgreSQL",
    "Kafka",
    "React",
    "Node.js",
    "D3.js",
    "ETL Pipelines",
    "Data Modeling",
    "Data Cleaning",
    "Data Validation",
    "Data Visualization",
    "KPI Reporting",
    "Statistical Analysis",
    "Regression Analysis",
    "Trend Analysis",
    "Business Analytics",
    "Process Improvement",
    "Quality Analytics",
    "Semantic Analysis",
    "RAG",
  ],
  projects: [
    {
      name: "QEI Observability & Analytics Platform",
      stack: "Python, SQL, React",
      details:
        "Built dashboards and backend pipelines to monitor KPIs, data quality, and anomalies, with SQL models and reusable Python modules for scalable reporting and drill-down analysis.",
    },
    {
      name: "Automation & Integration Services",
      stack: "Python, REST APIs",
      details:
        "Built REST API services for event processing and operational workflow automation, adding request validation, retry logic, structured logging, and unit tests for reliability.",
    },
  ],
  achievements: [
    "HV Pinnacle Awards: The Transformers Q1 FY2023–24",
    "Global Quality Centre of Excellence – Certificate of Achievement",
    "Silver Awards – HV Pinnacle: The Rookie Star Q3 FY2023–24",
    "Hitachi People Champion for 2022–23, 2023–24, and 2024–25",
  ],
} as const;

export const starterQuestions = [
  "Summarize Sanjay’s experience",
  "What problems has he solved?",
  "What are his strongest skills?",
  "Send Sanjay a message",
] as const;

const followUpSuggestions: Record<string, string[]> = {
  overview: [
    "What problems has he solved?",
    "Tell me about his current role",
    "What are his strongest skills?",
  ],
  asu: [
    "What tools does he use?",
    "Summarize all of his experience",
    "What is his education?",
  ],
  hitachi: [
    "What impact did he have?",
    "Tell me about his projects",
    "What are his analytics skills?",
  ],
  iisc: [
    "What Python experience does he have?",
    "Tell me about his projects",
    "Summarize all of his experience",
  ],
  skills: [
    "What is his Python experience?",
    "What reporting tools does he use?",
    "Tell me about his projects",
  ],
  projects: [
    "What skills did those projects use?",
    "What did he do at Hitachi?",
    "What are his achievements?",
  ],
  education: [
    "What is his work experience?",
    "What are his strongest skills?",
    "How can I contact him?",
  ],
  achievements: [
    "What impact did he have at Hitachi?",
    "Summarize his experience",
    "How can I contact him?",
  ],
  contact: [
    "Summarize Sanjay’s experience",
    "What are his strongest skills?",
    "What is his education?",
  ],
  unknown: [...starterQuestions],
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9+#.\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function containsAny(value: string, terms: readonly string[]) {
  const normalizedValue = normalize(value);
  const words = new Set(normalizedValue.split(" "));

  return terms.some((term) => {
    const normalizedTerm = normalize(term);
    if (!normalizedTerm) return false;
    if (normalizedTerm.length <= 3 && !normalizedTerm.includes(" ")) {
      return words.has(normalizedTerm);
    }
    return normalizedValue.includes(normalizedTerm);
  });
}

function contactIntent(query: string): "message" | "info" | undefined {
  if (
    containsAny(query, [
      "connect me",
      "help me connect",
      "send him a message",
      "send sanjay a message",
      "message him",
      "message sanjay",
      "email him",
      "email sanjay",
      "write to him",
      "write to sanjay",
      "i want to connect",
      "i want to contact",
      "i want to reach",
      "i'd like to connect",
      "i would like to connect",
      "can you connect",
      "can you contact",
      "can you reach",
      "schedule a meeting",
      "book a meeting",
      "set up a meeting",
      "meet with sanjay",
    ])
  ) {
    return "message";
  }

  if (
    containsAny(query, [
      "how to connect",
      "how can i connect",
      "how do i connect",
      "how to contact",
      "how can i contact",
      "how do i contact",
      "how to reach",
      "how can i reach",
      "where can i reach",
      "get in touch",
      "contact information",
      "contact details",
      "email address",
      "his email",
      "phone number",
      "his phone",
      "his number",
      "his linkedin",
      "share his contact",
      "give me his contact",
      "call him",
      "linkedin",
    ])
  ) {
    return "info";
  }

  const hasContactAction = containsAny(query, [
    "contact",
    "connect",
    "reach",
    "message",
    "email",
    "write",
    "talk",
    "speak",
    "call",
    "meet",
    "schedule",
  ]);
  const refersToSanjay = containsAny(query, [
    "sanjay",
    "him",
    "his",
    "you",
  ]);

  if (!hasContactAction || !refersToSanjay) return undefined;

  const asksForInformation = /^(how|what|where|can i|could i|is there)\b/.test(
    query,
  );
  return asksForInformation ? "info" : "message";
}

function isExactPhrase(query: string, phrases: readonly string[]) {
  return phrases.some((phrase) => query === normalize(phrase));
}

function smallTalkReply(query: string): ChatReply | undefined {
  if (
    /^(?:(?:ok|okay|alright|thanks|thank you) )?(?:bye|goodbye|see you|see ya|talk later|catch you later|good night|take care|have a good day)(?: (?:thanks|thank you))?$/.test(
      query,
    )
  ) {
    return {
      answer:
        "Thanks for stopping by. Come back anytime if you’d like to learn more about Sanjay or send him a message.",
      sources: ["Profile"],
      topic: "conversation",
      suggestions: [],
    };
  }

  if (
    isExactPhrase(query, [
      "thanks",
      "thank you",
      "thanks a lot",
      "thank you so much",
      "appreciate it",
      "that was helpful",
      "very helpful",
    ])
  ) {
    return {
      answer: "You’re welcome. Is there anything else you’d like to know about Sanjay?",
      sources: ["Profile"],
      topic: "conversation",
      suggestions: followUpSuggestions.overview,
    };
  }

  if (
    isExactPhrase(query, [
      "how are you",
      "how's it going",
      "hows it going",
      "how are things",
      "hi how are you",
      "hello how are you",
      "hey how are you",
    ])
  ) {
    return {
      answer:
        "I’m doing well and ready to help. You can ask about Sanjay’s work, background, projects, skills, or how to contact him.",
      sources: ["Profile"],
      topic: "conversation",
      suggestions: followUpSuggestions.overview,
    };
  }

  if (
    isExactPhrase(query, [
      "who are you",
      "what can you do",
      "how does this work",
      "help me",
      "help",
      "what should i ask",
    ])
  ) {
    return {
      answer:
        "I can answer questions about Sanjay’s experience, projects, skills, education, achievements, and background. I can also show his contact information or help you send him a message.",
      sources: ["Profile"],
      topic: "conversation",
      suggestions: [...starterQuestions],
    };
  }

  if (
    isExactPhrase(query, [
      "hello",
      "hey",
      "hi",
      "hi there",
      "hello there",
      "good morning",
      "good afternoon",
      "good evening",
      "yo",
    ])
  ) {
    return {
      answer:
        "Hi — I can tell you about Sanjay’s work or help you send him a message. What would you like to know?",
      sources: ["Profile"],
      topic: "conversation",
      suggestions: [...starterQuestions],
    };
  }

  if (
    isExactPhrase(query, [
      "ok",
      "okay",
      "cool",
      "got it",
      "makes sense",
      "nice",
      "great",
      "awesome",
      "perfect",
    ])
  ) {
    return {
      answer: "Got it. What else would you like to know?",
      sources: ["Profile"],
      topic: "conversation",
      suggestions: followUpSuggestions.overview,
    };
  }

  if (isExactPhrase(query, ["yes", "yeah", "yep", "sure", "sounds good"])) {
    return {
      answer: "Great — what would you like help with?",
      sources: ["Profile"],
      topic: "conversation",
      suggestions: [...starterQuestions],
    };
  }

  if (isExactPhrase(query, ["no", "nope", "not now", "maybe later"])) {
    return {
      answer: "No problem. I’m here whenever you need me.",
      sources: ["Profile"],
      topic: "conversation",
      suggestions: [],
    };
  }

  if (isExactPhrase(query, ["sorry", "my bad", "oops"])) {
    return {
      answer: "No worries. What would you like to know?",
      sources: ["Profile"],
      topic: "conversation",
      suggestions: followUpSuggestions.overview,
    };
  }

  if (isExactPhrase(query, ["haha", "lol", "that is funny"])) {
    return {
      answer: "Glad you’re enjoying the conversation. What should we explore next?",
      sources: ["Profile"],
      topic: "conversation",
      suggestions: followUpSuggestions.overview,
    };
  }

  return undefined;
}

function formatRole(entry: ExperienceEntry) {
  return `${entry.role} · ${entry.organization}\n${entry.period} · ${entry.location}\n${entry.highlights
    .map((highlight) => `• ${highlight}`)
    .join("\n")}`;
}

function roleReply(entry: ExperienceEntry): ChatReply {
  return {
    answer: formatRole(entry),
    sources: ["Experience"],
    topic: entry.id,
    suggestions: followUpSuggestions[entry.id],
  };
}

function solutionOverviewReply(): ChatReply {
  return {
    answer:
      "At a high level, Sanjay has developed four kinds of solutions:\n\n• Data pipelines and reporting systems — turning inconsistent exports into clean, validated relational data and Tableau-ready reporting at ASU.\n• Quality and decision-support systems — using QEI frameworks, Power BI dashboards, KPI reporting, audits, and statistical analysis to expose process gaps and compliance risk at Hitachi.\n• Workflow automation and integration services — automating recurring reporting with Power Automate and building Python REST API services with validation, retries, logging, and tests.\n• Research analytics tools — converting smartphone video and motion data into a ball-tracking application, cleaned datasets, trajectory analysis, and visual evidence at IISc.\n\nThe common thread is that he takes fragmented, manual, or difficult-to-trust inputs and turns them into repeatable systems people can use to monitor performance, make decisions, and improve outcomes.",
    sources: ["Experience", "Projects"],
    topic: "overview",
    suggestions: [
      "What measurable impact has he had?",
      "What are his strongest skills?",
      "Tell me about his current role",
    ],
  };
}

function impactOverviewReply(): ChatReply {
  return {
    answer:
      "His clearest quantified impact comes from Hitachi: 30% better operational efficiency, 40% operational improvement, and 20% fewer errors. Beyond those metrics, he made reporting more repeatable at ASU through validated ETL and documented refresh workflows, improved research reliability at IISc through cleaned motion data and visual analysis, and strengthened software reliability in his API work with validation, retry logic, structured logging, and unit tests.",
    sources: ["Experience", "Projects"],
    topic: "overview",
    suggestions: [
      "What problems has he solved?",
      "What did he do at Hitachi?",
      "Tell me about his projects",
    ],
  };
}

function profileFactReply(query: string): ChatReply | undefined {
  if (
    containsAny(query, [
      "location",
      "located",
      "where is sanjay",
      "where is he",
      "where does he live",
      "where is he based",
      "where is sanjay based",
      "based in",
      "current city",
      "which city",
      "which state",
      "which country",
    ])
  ) {
    return {
      answer: `Sanjay is based in ${resumeProfile.currentLocation}, where he is completing his Master’s in Computer Science at Arizona State University and working with ASU Social Embeddedness. Before moving to Arizona, he worked at Hitachi Digital Services and IISc in ${resumeProfile.previousWorkLocation}.`,
      sources: ["Profile", "Experience", "Education"],
      topic: "overview",
      suggestions: [
        "What is his current role?",
        "What is his education?",
        "How can I contact him?",
      ],
    };
  }

  if (
    containsAny(query, [
      "full name",
      "what is his name",
      "what is sanjay's name",
      "name of sanjay",
    ])
  ) {
    return {
      answer: `His full name is ${resumeProfile.name}, and he presents himself professionally as ${resumeProfile.displayName}.`,
      sources: ["Profile"],
      topic: "overview",
      suggestions: followUpSuggestions.overview,
    };
  }

  if (
    containsAny(query, [
      "current job",
      "current role",
      "current position",
      "currently working",
      "where does he work",
      "current employer",
    ])
  ) {
    return roleReply(resumeProfile.experience[0]);
  }

  if (
    containsAny(query, [
      "how many years",
      "years of experience",
      "total experience",
      "experience length",
      "career length",
    ])
  ) {
    return {
      answer:
        "Sanjay spent three years at Hitachi Digital Services from Aug 2022 to Aug 2025, completed a seven-month Data Science internship at IISc from Jan to Jul 2022, and began his current ASU Social Embeddedness role in May 2026.",
      sources: ["Experience"],
      topic: "overview",
      suggestions: followUpSuggestions.overview,
    };
  }

  if (
    containsAny(query, [
      "where has he worked",
      "where did he work before",
      "previous job",
      "previous role",
      "prior role",
      "past employer",
      "previous employer",
      "before asu",
      "before arizona",
    ])
  ) {
    return {
      answer:
        "Before his current ASU role, Sanjay worked at Hitachi Digital Services in Bengaluru, India as a Business Process Quality and Improvement Associate from Aug 2022 to Aug 2025. Earlier, he was a Data Science Intern at the Indian Institute of Science in Bengaluru from Jan 2022 to Jul 2022.",
      sources: ["Experience"],
      topic: "overview",
      suggestions: [
        "What did he do at Hitachi?",
        "What did he do at IISc?",
        "What is his current role?",
      ],
    };
  }

  return undefined;
}

function professionalSynthesisReply(query: string): ChatReply | undefined {
  if (
    containsAny(query, [
      "problem",
      "problems",
      "solve",
      "solved",
      "solution",
      "solutions",
      "challenge",
      "challenges",
      "developed",
      "what has he built",
      "what did he build",
      "kind of work",
      "type of work",
      "what does he deliver",
      "what can he deliver",
      "what does he develop",
      "what can he develop",
      "what can he build",
      "how has he helped",
      "how does he help",
      "contribution",
      "contributions",
      "systems has he",
      "products has he",
      "business value",
      "value has he created",
      "value does he create",
    ])
  ) {
    return solutionOverviewReply();
  }

  if (
    containsAny(query, [
      "impact",
      "impacts",
      "outcome",
      "outcomes",
      "result",
      "results",
      "metric",
      "metrics",
      "measurable",
      "difference has he made",
      "what has he achieved",
    ])
  ) {
    return impactOverviewReply();
  }

  return undefined;
}

function skillEvidence(skill: string) {
  const normalizedSkill = normalize(skill);
  const relatedRoles = resumeProfile.experience.filter((entry) => {
    const evidence = normalize(`${entry.keywords.join(" ")} ${entry.highlights.join(" ")}`);
    return evidence.includes(normalizedSkill);
  });

  if (relatedRoles.length === 0) {
    return `${skill} is part of Sanjay’s technical toolkit. His available work details do not connect it to one specific project.`;
  }

  const evidence = relatedRoles
    .map((entry) => `${entry.organization}: ${entry.highlights.find((item) => normalize(item).includes(normalizedSkill))}`)
    .join("\n");
  return `${skill} is part of Sanjay’s technical toolkit. Relevant experience:\n${evidence}`;
}

function bestMatchingSkill(question: string) {
  const normalizedQuestion = normalize(question);
  return resumeProfile.skills.find((skill) => normalizedQuestion.includes(normalize(skill)));
}

const ignoredSearchWords = new Set([
  "a",
  "about",
  "an",
  "and",
  "can",
  "could",
  "did",
  "do",
  "does",
  "background",
  "career",
  "experience",
  "for",
  "have",
  "he",
  "his",
  "how",
  "history",
  "i",
  "is",
  "me",
  "of",
  "on",
  "sanjay",
  "summary",
  "summarize",
  "tell",
  "that",
  "the",
  "to",
  "what",
  "which",
  "with",
  "work",
  "worked",
  "professional",
]);

const searchExpansions: Record<string, string[]> = {
  api: ["api", "rest"],
  apis: ["api", "rest"],
  automate: ["automated", "automation", "power automate", "workflow"],
  automation: ["automated", "automation", "power automate", "workflow"],
  dashboard: ["dashboard", "tableau", "power bi", "kpi", "visualization"],
  dashboards: ["dashboard", "tableau", "power bi", "kpi", "visualization"],
  engineering: ["etl", "pipeline", "data model", "backend", "sql"],
  leadership: ["leadership", "executive", "stakeholder", "training"],
  machine: ["machine learning", "model", "training", "ball-tracking"],
  ml: ["machine learning", "model", "training", "ball-tracking"],
  pipeline: ["pipeline", "etl", "backend"],
  pipelines: ["pipeline", "etl", "backend"],
  reporting: ["reporting", "report", "dashboard", "tableau", "power bi", "kpi"],
  visualization: ["visualization", "dashboard", "tableau", "power bi", "matplotlib", "seaborn"],
};

function searchTerms(question: string) {
  const terms = normalize(question)
    .split(" ")
    .filter((term) => term.length > 2 && !ignoredSearchWords.has(term));

  return [
    ...new Set(
      terms.flatMap((term) => [term, ...(searchExpansions[term] ?? [])]),
    ),
  ];
}

function evidenceScore(text: string, terms: string[]) {
  const normalizedText = normalize(text);
  return terms.reduce(
    (score, term) => score + (normalizedText.includes(term) ? 1 : 0),
    0,
  );
}

function retrieveResumeEvidence(question: string): ChatReply | undefined {
  const terms = searchTerms(question);
  if (terms.length === 0) return undefined;

  const roleMatches = resumeProfile.experience.map((entry) => ({
    kind: "role" as const,
    entry,
    score: evidenceScore(
      `${entry.role} ${entry.organization} ${entry.keywords.join(" ")} ${entry.highlights.join(" ")}`,
      terms,
    ),
  }));
  const projectMatches = resumeProfile.projects.map((project) => ({
    kind: "project" as const,
    project,
    score: evidenceScore(
      `${project.name} ${project.stack} ${project.details}`,
      terms,
    ),
  }));
  const ranked = [...roleMatches, ...projectMatches].sort(
    (left, right) => right.score - left.score,
  );
  const topScore = ranked[0]?.score ?? 0;
  if (topScore === 0) return undefined;

  const strongest = ranked
    .filter((match) => match.score >= Math.max(1, topScore - 1))
    .slice(0, 2);
  const answer = strongest
    .map((match) => {
      if (match.kind === "project") {
        return `${match.project.name} · ${match.project.stack}\n${match.project.details}`;
      }

      const highlights = match.entry.highlights
        .map((highlight) => ({
          highlight,
          score: evidenceScore(highlight, terms),
        }))
        .sort((left, right) => right.score - left.score)
        .filter((item) => item.score > 0)
        .slice(0, 2);
      const evidence = highlights.length
        ? highlights.map((item) => `• ${item.highlight}`).join("\n")
        : `• ${match.entry.highlights[0]}`;
      return `${match.entry.role} · ${match.entry.organization}\n${evidence}`;
    })
    .join("\n\n");

  return {
    answer: `Here’s the most relevant experience:\n\n${answer}`,
    sources: [
      ...new Set<ResumeSection>(
        strongest.map((match) =>
          match.kind === "role" ? "Experience" : "Projects",
        ),
      ),
    ],
    topic: "overview",
    suggestions: followUpSuggestions.overview,
  };
}

function inferRoleFromFollowUp(question: string, previousQuestion?: string) {
  const followUp = containsAny(normalize(question), [
    "tell me more",
    "more about that",
    "what impact",
    "what did he achieve",
    "what tools did he use",
    "that role",
    "there",
  ]);

  if (!followUp || !previousQuestion) return undefined;
  const previous = normalize(previousQuestion);
  return resumeProfile.experience.find((entry) =>
    containsAny(previous, entry.keywords),
  );
}

export function answerResumeQuestion(
  question: string,
  previousQuestion?: string,
): ChatReply {
  const query = normalize(question);
  const inferredRole = inferRoleFromFollowUp(question, previousQuestion);

  if (inferredRole) return roleReply(inferredRole);

  const requestedContact = contactIntent(query);
  if (requestedContact === "message") {
    return {
      answer:
        "Absolutely — what’s your name?",
      sources: ["Contact"],
      topic: "contact",
      suggestions: [],
      action: "contact",
    };
  }

  if (requestedContact === "info") {
    return {
      answer: `You can connect with Sanjay directly:\n\n• Email: ${resumeProfile.email}\n• LinkedIn: linkedin.com/in/sanjay-soralamavu-dev\n• Phone: ${resumeProfile.phoneDisplay}\n\nIf you prefer, I can also help you send him a message here.`,
      sources: ["Contact"],
      topic: "contact",
      suggestions: ["Send Sanjay a message", "Summarize his experience"],
      action: "contact-info",
    };
  }

  const smallTalk = smallTalkReply(query);
  if (smallTalk) return smallTalk;

  const profileFact = profileFactReply(query);
  if (profileFact) return profileFact;

  if (
    containsAny(query, [
      "age",
      "birthday",
      "visa",
      "sponsorship",
      "salary",
      "married",
      "marital",
      "hobby",
      "hobbies",
      "citizenship",
    ])
  ) {
    return {
      answer:
        "I don’t have confirmed information about that. I can help with Sanjay’s experience, projects, skills, education, achievements, background, or contact details.",
      sources: ["Profile"],
      topic: "unknown",
      suggestions: followUpSuggestions.unknown,
    };
  }

  if (
    containsAny(query, [
      "education",
      "degree",
      "which university",
      "where did he study",
      "school",
      "college",
      "gpa",
      "master",
      "bachelor",
      "studied",
      "graduate",
      "graduation",
      "when will he finish",
    ])
  ) {
    return {
      answer:
        "Sanjay is completing a Master’s in Computer Science at Arizona State University (May 2027) with a 3.89 GPA. He earned a B.E. in Computer Science from Visvesvaraya Technological University in India in Aug 2022 with a 3.69 GPA.",
      sources: ["Education"],
      topic: "education",
      suggestions: followUpSuggestions.education,
    };
  }

  const directRole = resumeProfile.experience.find(
    (entry) =>
      containsAny(query, entry.keywords) || query.includes(normalize(entry.role)),
  );
  if (directRole) return roleReply(directRole);

  const professionalSynthesis = professionalSynthesisReply(query);
  if (professionalSynthesis) return professionalSynthesis;

  if (
    containsAny(query, [
      "experience",
      "career",
      "work history",
      "worked",
      "professional background",
      "summarize",
      "summary",
    ])
  ) {
    const focusedEvidence = retrieveResumeEvidence(question);
    if (focusedEvidence && searchTerms(question).length > 0) {
      return focusedEvidence;
    }

    return {
      answer:
        "Sanjay’s career shows a progression from research to enterprise quality analytics to production data systems.\n\n• At IISc (Jan–Jul 2022), he built a smartphone-video ball-tracking application and analyzed motion data with Python.\n• At Hitachi Digital Services (Aug 2022–Aug 2025), he designed QEI and Power BI reporting, analyzed global audits, automated workflows, and supported CMMI Level 3 and ISO audits. His work contributed to 30% better operational efficiency, 40% operational improvement, and 20% fewer errors.\n• At ASU Social Embeddedness (May 2026–Present), he builds Python ETL pipelines, relational data models, validation workflows, and Tableau reporting for Collaboratory data.",
      sources: ["Experience"],
      topic: "overview",
      suggestions: followUpSuggestions.overview,
    };
  }

  if (
    containsAny(query, [
      "who is sanjay",
      "who is he",
      "about sanjay",
      "about him",
      "tell me about him",
      "tell me about sanjay",
      "profile",
      "background",
      "introduce",
    ])
  ) {
    return {
      answer:
        "Sanjay S Dev is a data professional and Computer Science master’s student at Arizona State University. His work centers on dependable data systems, analytics, reporting, and process-improvement workflows—from research data at IISc, to quality analytics at Hitachi Digital Services, to Python ETL and Tableau reporting at ASU Social Embeddedness.",
      sources: ["Profile", "Experience", "Education"],
      topic: "overview",
      suggestions: followUpSuggestions.overview,
    };
  }

  if (
    containsAny(query, [
      "project",
      "portfolio",
      "qei platform",
      "observability",
      "automation service",
      "integration service",
      "rest api",
    ])
  ) {
    return {
      answer: resumeProfile.projects
        .map((project) => `${project.name} · ${project.stack}\n${project.details}`)
        .join("\n\n"),
      sources: ["Projects"],
      topic: "projects",
      suggestions: followUpSuggestions.projects,
    };
  }

  if (
    containsAny(query, [
      "award",
      "achievement",
      "recognition",
      "pinnacle",
      "people champion",
      "certificate",
    ])
  ) {
    return {
      answer: `Sanjay has received:\n${resumeProfile.achievements
        .map((achievement) => `• ${achievement}`)
        .join("\n")}`,
      sources: ["Achievements"],
      topic: "achievements",
      suggestions: followUpSuggestions.achievements,
    };
  }

  const matchedSkill = bestMatchingSkill(question);
  if (matchedSkill) {
    return {
      answer: skillEvidence(matchedSkill),
      sources: ["Technical skills", "Experience"],
      topic: "skills",
      suggestions: followUpSuggestions.skills,
    };
  }

  if (
    containsAny(query, [
      "skill",
      "tool",
      "technology",
      "tech stack",
      "programming",
      "strongest",
      "good at",
      "expertise",
      "capabilities",
    ])
  ) {
    return {
      answer:
        "Sanjay is strongest where data engineering, analytics, and business improvement meet. Core tools include Python, SQL, Power BI, Tableau, Advanced Excel, Power Automate, PostgreSQL, Kafka, React, Node.js, and D3.js. His methods include ETL pipelines, data modeling and validation, KPI reporting, statistical and regression analysis, trend analysis, process improvement, semantic analysis, and RAG.",
      sources: ["Technical skills", "Experience"],
      topic: "skills",
      suggestions: followUpSuggestions.skills,
    };
  }

  if (
    containsAny(query, [
      "why hire",
      "good fit",
      "strength",
      "value",
      "candidate",
      "stand out",
    ])
  ) {
    return {
      answer:
        "Sanjay’s clearest strength is connecting technical data work to operational outcomes. He has built ETL and API pipelines, designed dashboards and data models, automated reporting, supported formal audits, and documented systems for repeatable use. At Hitachi, that work contributed to 30% higher operational efficiency, 40% operational improvement, and 20% fewer errors.",
      sources: ["Experience", "Projects", "Technical skills"],
      topic: "overview",
      suggestions: followUpSuggestions.overview,
    };
  }

  const retrievedEvidence = retrieveResumeEvidence(question);
  if (retrievedEvidence) return retrievedEvidence;

  return {
    answer:
      "I don’t have a reliable answer for that yet. Try asking about Sanjay’s background, location, work, projects, skills, education, achievements, or contact information.",
    sources: ["Profile"],
    topic: "unknown",
    suggestions: followUpSuggestions.unknown,
  };
}
