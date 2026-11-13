// matcher.js — Keyword matching engine with scoring + confidence threshold

const { faqs } = require("./faqs");

const CONFIDENCE_THRESHOLD = 5;

/**
 * Normalize input: lowercase, strip punctuation, collapse whitespace.
 */
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Score a FAQ against the normalized input.
 * Multi-word keyword phrases score higher (word count * 5) than single words (5).
 */
function scoreFaq(faq, input) {
  let score = 0;

  for (const keyword of faq.keywords) {
    const normalizedKeyword = normalize(keyword);

    if (input.includes(normalizedKeyword)) {
      const wordCount = normalizedKeyword.split(" ").length;
      // Multi-word phrases are more specific, so they score higher
      score += wordCount > 1 ? wordCount * 5 : 5;
    }
  }

  return score;
}

/**
 * Find the best matching FAQ for a message.
 * Returns { faq, score } or null if no match meets the confidence threshold.
 */
function findMatch(message) {
  const input = normalize(message);

  let bestMatch = null;
  let bestScore = 0;

  for (const faq of faqs) {
    const score = scoreFaq(faq, input);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  if (bestScore >= CONFIDENCE_THRESHOLD) {
    return { faq: bestMatch, score: bestScore };
  }

  return null;
}

/**
 * Build a help menu grouped by category using Slack Block Kit blocks.
 */
function getHelpMenu() {
  const categories = {};

  for (const faq of faqs) {
    if (!categories[faq.category]) {
      categories[faq.category] = [];
    }
    categories[faq.category].push(faq.question);
  }

  const blocks = [
    {
      type: "header",
      text: { type: "plain_text", text: "People Ops Assistant", emoji: true }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Hi there! :wave: I can help with common People Ops questions. Just ask me anything below, or try one of these topics:"
      }
    },
    { type: "divider" }
  ];

  for (const [category, questions] of Object.entries(categories)) {
    const bulletList = questions.map((q) => `• ${q}`).join("\n");
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${category}*\n${bulletList}`
      }
    });
  }

  blocks.push(
    { type: "divider" },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: "Just type your question in plain English and I'll find the answer :mag:"
        }
      ]
    }
  );

  return blocks;
}

module.exports = { findMatch, getHelpMenu };
