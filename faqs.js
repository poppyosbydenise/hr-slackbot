// faqs.js — Single source of truth for all FAQ content
// Edit answers here. The bot reads from this file at startup.

const faqs = [
  {
    id: "time-off",
    question: "How do I request time off?",
    category: "Time & Leave",
    keywords: [
      "pto", "vacation", "leave", "time off", "sick day",
      "request off", "day off", "bereavement", "sick", "days off",
      "personal day", "take off", "out of office"
    ],
    answer: [
      "*How to Request Time Off* :palm_tree:",
      "",
      "To submit a PTO request:",
      "",
      "1. Log in to your HRIS (Workday, BambooHR, etc.)",
      "2. Navigate to *Time Off* or *Leave Requests*",
      "3. Select the type of leave: vacation, sick, personal, or bereavement",
      "4. Choose your dates and add a note if needed",
      "5. Submit — your manager will get a notification to approve",
      "",
      ":bulb: *Tips:*",
      "• Submit requests at least *2 weeks in advance* for planned time off",
      "• Sick days can be submitted same-day — just ping your manager on Slack too",
      "• Bereavement leave is typically *3–5 days* — reach out to People Ops if you need more",
      "• Check your remaining PTO balance in your HRIS dashboard before requesting",
      "",
      "Questions? Drop a note in *#ask-people-ops* and we'll help."
    ].join("\n")
  },
  {
    id: "holidays",
    question: "When is the next company holiday?",
    category: "Time & Leave",
    keywords: [
      "holiday", "holidays", "office closed", "holiday calendar",
      "holiday schedule", "company holiday", "next holiday",
      "bank holiday", "day off company"
    ],
    answer: [
      "*Company Holiday Schedule* :calendar:",
      "",
      "You can find the full holiday calendar in your HRIS under *Company > Holidays*, or pinned in *#general*.",
      "",
      ":star: *Typical US holidays observed:*",
      "• New Year's Day",
      "• MLK Jr. Day",
      "• Presidents' Day",
      "• Memorial Day",
      "• Juneteenth",
      "• Independence Day",
      "• Labor Day",
      "• Thanksgiving + day after",
      "• Winter break (Dec 24 – Jan 1)",
      "",
      ":bulb: *Note:* If a holiday falls on a weekend, the nearest weekday is observed. International teammates — check your region-specific calendar in the HRIS.",
      "",
      "If you're unsure about an upcoming date, ask in *#ask-people-ops*."
    ].join("\n")
  },
  {
    id: "performance-review",
    question: "When is the next performance review cycle?",
    category: "Growth & Development",
    keywords: [
      "performance review", "review cycle", "self review", "peer feedback",
      "promotion", "raise", "calibration", "performance", "review",
      "feedback cycle", "annual review", "mid-year review"
    ],
    answer: [
      "*Performance Review Cycle* :chart_with_upwards_trend:",
      "",
      "We run performance reviews *twice a year*:",
      "",
      ":one: *Mid-year review* — typically June/July",
      ":two: *Annual review* — typically December/January",
      "",
      "*What to expect:*",
      "• You'll complete a *self-review* reflecting on goals, wins, and growth areas",
      "• You'll give and receive *peer feedback* (usually 2–3 peers)",
      "• Your manager writes a *manager review* and holds a 1:1 discussion",
      "• Compensation adjustments and promotions are decided during *calibration*",
      "",
      ":bulb: *How to prepare:*",
      "• Keep a running doc of your accomplishments throughout the cycle",
      "• Tie your work back to team and company goals",
      "• Be specific — use numbers, outcomes, and examples",
      "",
      "Look for announcements in *#people-ops* when the next cycle kicks off. Questions? Ask in *#ask-people-ops*."
    ].join("\n")
  },
  {
    id: "stock-options",
    question: "How do my stock options work?",
    category: "Compensation & Equity",
    keywords: [
      "stock options", "equity", "vesting", "cliff", "shares",
      "iso", "nso", "carta", "exercise", "grant", "stock",
      "options", "equity grant", "vesting schedule"
    ],
    answer: [
      "*Understanding Your Stock Options* :moneybag:",
      "",
      "If you received an equity grant, here's how it works:",
      "",
      "*Vesting schedule:*",
      "• Standard is *4-year vesting* with a *1-year cliff*",
      "• After the cliff, shares vest monthly (or quarterly, depending on your grant)",
      "• You can see your vesting schedule and current status on your equity management platform (e.g., Carta, Pulley)",
      "",
      "*Key terms:*",
      "• *ISOs* (Incentive Stock Options) — tax-advantaged, for US employees",
      "• *NSOs* (Non-Qualified Stock Options) — available to employees and contractors",
      "• *Exercise price* — the price you pay per share (set at your grant date)",
      "• *Exercise* — buying your vested shares at the exercise price",
      "",
      ":warning: *Important:* Exercising options has tax implications. We strongly recommend consulting a tax advisor before making decisions.",
      "",
      "Check your equity platform for your grant details, or reach out to *#ask-people-ops* for help."
    ].join("\n")
  },
  {
    id: "all-hands",
    question: "Where can I find the All Hands notes?",
    category: "Company Info",
    keywords: [
      "all hands", "all-hands", "town hall", "meeting notes",
      "all hands recording", "all hands notes", "company meeting",
      "allhands", "town hall notes", "recording"
    ],
    answer: [
      "*All Hands Notes & Recordings* :mega:",
      "",
      "You can find everything from past All Hands meetings here:",
      "",
      "• *Notes & slides:* Check the *#all-hands* Slack channel — notes are pinned after each session",
      "• *Recordings:* Available in your company's shared drive (Google Drive or Notion), usually in a folder called *All Hands* or *Company Meetings*",
      "• *Q&A:* Questions submitted during the meeting (and answers) are typically included in the notes doc",
      "",
      ":bulb: *Can't find a specific one?* Search `in:#all-hands` in Slack or ask in *#ask-people-ops* and we'll dig it up for you.",
      "",
      "All Hands typically happens *monthly* — watch *#general* for the calendar invite."
    ].join("\n")
  },
  {
    id: "benefits",
    question: "How do I find my benefits information?",
    category: "Benefits",
    keywords: [
      "benefits", "insurance", "medical", "dental", "vision",
      "health insurance", "hsa", "fsa", "open enrollment",
      "health", "coverage", "benefits portal", "401k", "retirement"
    ],
    answer: [
      "*Your Benefits Information* :hospital:",
      "",
      "All your benefits details live in your HRIS benefits portal. Here's how to access them:",
      "",
      "1. Log in to your HRIS",
      "2. Go to *Benefits* or *My Benefits*",
      "3. You'll see your current elections: medical, dental, vision, life insurance, and more",
      "",
      "*What's available:*",
      "• :stethoscope: *Medical, dental, and vision* — company covers a significant portion of premiums",
      "• :moneybag: *HSA/FSA* — pre-tax accounts for health or dependent care expenses",
      "• :shield: *Life & disability insurance* — basic coverage provided at no cost",
      "• :baby: *Parental leave* — details in the employee handbook",
      "• :brain: *Mental health* — EAP and therapy benefits included",
      "",
      ":calendar: *Open Enrollment* happens once a year (typically November). That's when you can change your elections.",
      "",
      "Need your insurance card or member ID? Check your benefits portal or the carrier's app directly. Questions? *#ask-people-ops*."
    ].join("\n")
  },
  {
    id: "wellness",
    question: "How do I submit a wellness reimbursement?",
    category: "Benefits",
    keywords: [
      "wellness", "fitness", "gym", "reimbursement", "stipend",
      "gym membership", "wellness stipend", "fitness reimbursement",
      "workout", "yoga", "peloton", "classpass"
    ],
    answer: [
      "*Wellness Reimbursement* :muscle:",
      "",
      "We offer a wellness stipend to help you stay healthy. Here's how to use it:",
      "",
      "*How to submit:*",
      "1. Pay for a qualifying wellness expense",
      "2. Go to your HRIS and find *Reimbursements* or *Expense Claims*",
      "3. Upload your receipt and select *Wellness* as the category",
      "4. Submit — reimbursement typically processes within 1–2 pay cycles",
      "",
      "*What qualifies:*",
      "• Gym memberships and fitness classes",
      "• Home fitness equipment (reasonable amounts)",
      "• Meditation and mental wellness apps",
      "• Sports leagues and recreational activities",
      "• Ergonomic equipment (standing desk, monitor riser, etc.)",
      "",
      ":warning: *What doesn't qualify:* Clothing, food/supplements, cosmetic treatments",
      "",
      ":bulb: Check your offer letter or benefits summary for your annual stipend amount. Most companies offer *$500–$1,500/year*.",
      "",
      "Questions about what's covered? Ask in *#ask-people-ops*."
    ].join("\n")
  },
  {
    id: "remote-work",
    question: "What is the remote work policy?",
    category: "Workplace",
    keywords: [
      "remote", "wfh", "work from home", "hybrid", "in-office",
      "office days", "remote policy", "work remotely",
      "return to office", "rto", "home office"
    ],
    answer: [
      "*Remote Work Policy* :house_with_garden:",
      "",
      "Here's the overview of our current workplace policy:",
      "",
      "• *Hybrid* — Most roles follow a hybrid schedule (typically 2–3 days in-office per week)",
      "• *Fully remote* — Some roles are approved for full-time remote. Check with your manager if you're unsure about your role's designation",
      "• *Office days* — Core in-office days (if applicable) are set by your team. Check with your manager for specifics",
      "",
      "*Working from home guidelines:*",
      "• Be available during *core hours* (usually 10am–4pm in your local time zone)",
      "• Keep your Slack status updated (:house: WFH, :palm_tree: OOO, etc.)",
      "• Use video for meetings when possible",
      "• If you need to shift your schedule, just communicate with your team",
      "",
      ":bulb: *Need to go fully remote temporarily?* (traveling, personal reasons, etc.) — talk to your manager and give People Ops a heads-up, especially if it involves a different state or country (tax implications).",
      "",
      "Full policy details are in the *Employee Handbook*. Questions? *#ask-people-ops*."
    ].join("\n")
  },
  {
    id: "referral",
    question: "How do I refer someone for a role?",
    category: "Hiring",
    keywords: [
      "referral", "refer", "employee referral", "referral bonus",
      "hiring", "open roles", "refer someone", "recommend someone",
      "referral program", "job opening", "open positions"
    ],
    answer: [
      "*Employee Referral Program* :handshake:",
      "",
      "Know someone great? Here's how to refer them:",
      "",
      "1. Check open roles on our *careers page* or in *#hiring*",
      "2. Submit your referral through the ATS (Greenhouse, Lever, etc.) — look for *Refer a Candidate* or *Add Referral*",
      "3. Include their resume and a short note on why they'd be a great fit",
      "4. The recruiting team takes it from there — you'll get updates on their progress",
      "",
      ":gift: *Referral bonus:*",
      "• Bonuses are typically paid out after the referred hire completes *90 days*",
      "• Amount varies by role level — check the referral policy doc or ask People Ops",
      "• Bonuses are taxed as regular income",
      "",
      ":bulb: *Tips for a strong referral:*",
      "• Tell the person about the role and our culture before submitting",
      "• Let the recruiter know your relationship and why you're recommending them",
      "• Quality over quantity — refer people you'd genuinely vouch for",
      "",
      "Questions about the program? Drop a note in *#ask-people-ops*."
    ].join("\n")
  },
  {
    id: "personal-info",
    question: "How do I update my personal information?",
    category: "Account & Profile",
    keywords: [
      "personal info", "update info", "address", "emergency contact",
      "direct deposit", "name change", "update address",
      "change name", "bank account", "tax withholding", "w4",
      "marital status", "contact info"
    ],
    answer: [
      "*Update Your Personal Information* :pencil:",
      "",
      "You can update most personal details directly in your HRIS:",
      "",
      "1. Log in to your HRIS",
      "2. Go to *My Profile* or *Personal Info*",
      "3. Update the relevant section:",
      "",
      "• :house: *Home address* — update in Personal Info (important for tax purposes!)",
      "• :phone: *Phone number / email* — update in Contact Info",
      "• :rotating_light: *Emergency contacts* — update in Emergency Contacts",
      "• :bank: *Direct deposit / bank info* — update in Pay > Payment Method",
      "• :page_facing_up: *Tax withholding (W-4)* — update in Pay > Tax Withholding",
      "• :name_badge: *Legal name change* — contact People Ops directly (requires documentation)",
      "",
      ":warning: *Moved to a new state or country?* Tell People Ops ASAP — this affects tax withholding and possibly benefits eligibility.",
      "",
      "If you can't find what you need in your HRIS, reach out in *#ask-people-ops*."
    ].join("\n")
  }
];

module.exports = { faqs };
