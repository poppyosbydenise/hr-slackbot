// app.js — People Ops Assistant Slack Bot (Socket Mode)

require("dotenv").config();
const { App } = require("@slack/bolt");
const { findMatch, getHelpMenu } = require("./matcher");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

// --- Helpers ---

const HELP_WORDS = new Set(["help", "menu", "start", "topics", "faq"]);

const TOPIC_LIST = "\n\n• :palm_tree: Time off & company holidays\n• :chart_with_upwards_trend: Performance reviews\n• :moneybag: Stock options & equity\n• :hospital: Benefits & wellness reimbursements\n• :house_with_garden: Remote work policy\n• :handshake: Employee referrals\n• :pencil: Updating your personal info\n\nJust ask me a question, or type *help* to see the full list!";

// Patterns for different conversational intents
const HELLO_PATTERNS = [
  "hi", "hello", "hey", "hiya", "howdy", "yo", "sup",
  "hey there", "hi there", "hello there",
  "good morning", "good afternoon", "good evening",
  "hola", "greetings"
];

const HOW_ARE_YOU_PATTERNS = [
  "how are you", "how are ya", "hows it going", "how's it going",
  "how are you doing", "whats up", "what's up", "whats good", "what's good",
  "how you doing", "how do you do"
];

const CAN_I_ASK_PATTERNS = [
  "can i ask you a question", "can i ask a question", "i have a question",
  "can you help me", "can you help", "i need help", "i need your help",
  "got a question", "quick question", "i was wondering"
];

const ANOTHER_QUESTION_PATTERNS = [
  "i have another question", "another question", "one more question",
  "can i ask another", "i have one more", "got another one",
  "one more thing", "another thing"
];

function matchesAny(input, patterns) {
  return patterns.some((p) => input === p || input.startsWith(p + " ") || input.endsWith(" " + p));
}

const FOOTER_BLOCKS = [
  { type: "divider" },
  {
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text: "Was this helpful? React with :thumbsup: or :thumbsdown: · Type *help* to see all topics"
      }
    ]
  }
];

function buildAnswerBlocks(faq) {
  return [
    {
      type: "section",
      text: { type: "mrkdwn", text: faq.answer }
    },
    ...FOOTER_BLOCKS
  ];
}

function buildFallbackBlocks() {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Hmm, I'm not sure about that one :thinking_face:\n\nI can only answer common People Ops questions right now. Here are some things you can try:\n\n• Type *help* to see all the topics I know about\n• Ask your question in *#ask-people-ops* for a human response\n• Check the *Employee Handbook* in your company wiki"
      }
    },
    ...FOOTER_BLOCKS
  ];
}

/**
 * Strip bot mention from the message text.
 */
function stripMention(text) {
  return text.replace(/<@[A-Z0-9]+>/g, "").trim();
}

/**
 * Handle an incoming message: match or fallback.
 */
function handleMessage(text) {
  const cleaned = stripMention(text);
  const lower = cleaned.toLowerCase().trim();

  // Help command — show full topic menu
  if (HELP_WORDS.has(lower)) {
    return { blocks: [...getHelpMenu(), ...FOOTER_BLOCKS] };
  }

  // "I have another question"
  if (matchesAny(lower, ANOTHER_QUESTION_PATTERNS)) {
    return {
      blocks: [{
        type: "section",
        text: { type: "mrkdwn", text: "Sure! What's your question? :blush:" }
      }, ...FOOTER_BLOCKS]
    };
  }

  // "Can I ask you a question"
  if (matchesAny(lower, CAN_I_ASK_PATTERNS)) {
    return {
      blocks: [{
        type: "section",
        text: { type: "mrkdwn", text: "Absolutely! Here's what I can help with:" + TOPIC_LIST }
      }, ...FOOTER_BLOCKS]
    };
  }

  // "How are you"
  if (matchesAny(lower, HOW_ARE_YOU_PATTERNS)) {
    return {
      blocks: [{
        type: "section",
        text: { type: "mrkdwn", text: "I'm doing well, thanks for asking! :blush: What can I help you with?" + TOPIC_LIST }
      }, ...FOOTER_BLOCKS]
    };
  }

  // Simple greeting — hi, hello, hey, etc.
  if (matchesAny(lower, HELLO_PATTERNS)) {
    return {
      blocks: [{
        type: "section",
        text: { type: "mrkdwn", text: "Hi! :wave: What can I help you with?" + TOPIC_LIST }
      }, ...FOOTER_BLOCKS]
    };
  }

  // Try to match a FAQ
  const match = findMatch(cleaned);
  if (match) {
    return { blocks: buildAnswerBlocks(match.faq) };
  }

  // Fallback
  return { blocks: buildFallbackBlocks() };
}

// --- Event Handlers ---

// Direct messages
app.event("message", async ({ event, say }) => {
  // Ignore bot messages, message_changed, etc.
  if (event.subtype) return;

  const { blocks } = handleMessage(event.text || "");
  await say({ blocks, text: "People Ops Assistant response" });
});

// @mentions in channels — reply in thread
app.event("app_mention", async ({ event, say }) => {
  const { blocks } = handleMessage(event.text || "");
  await say({
    blocks,
    text: "People Ops Assistant response",
    thread_ts: event.ts
  });
});

// --- Start ---

(async () => {
  await app.start();
  console.log("⚡ People Ops Assistant is running (Socket Mode)");
})();
