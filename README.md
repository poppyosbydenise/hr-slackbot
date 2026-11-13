# People Ops Assistant — Slack Bot

A Slack bot that answers the 10 most common HR/People Ops questions using keyword matching. No AI/LLM APIs — all answers come from a static FAQ database for 100% predictable, reliable responses.

## Tech Stack

- **Node.js** + `@slack/bolt` (Slack's official SDK)
- **Socket Mode** (WebSocket — no public URL needed)
- **Keyword matching** with scoring and confidence threshold

## Project Structure

```
hr-slackbot/
├── app.js          # Main Slack bot (Bolt framework, Socket Mode)
├── faqs.js         # All FAQ content — questions, keywords, answers, categories
├── matcher.js      # Keyword matching engine with scoring
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Slack App Setup

### 1. Create the App

1. Go to [api.slack.com/apps](https://api.slack.com/apps) and click **Create New App**
2. Choose **From scratch**
3. Name it `People Ops Assistant` and pick your workspace
4. Click **Create App**

### 2. Enable Socket Mode

1. In the left sidebar, go to **Socket Mode**
2. Toggle **Enable Socket Mode** to ON
3. You'll be prompted to create an App-Level Token:
   - Name it `socket-token`
   - Add the scope `connections:write`
   - Click **Generate**
   - **Copy the `xapp-...` token** — this is your `SLACK_APP_TOKEN`

### 3. Set Bot Token Scopes

1. Go to **OAuth & Permissions** in the left sidebar
2. Scroll to **Scopes > Bot Token Scopes**
3. Add these scopes:
   - `app_mentions:read`
   - `chat:write`
   - `im:history`
   - `im:read`

### 4. Subscribe to Events

1. Go to **Event Subscriptions** in the left sidebar
2. Toggle **Enable Events** to ON
3. Under **Subscribe to bot events**, add:
   - `app_mention`
   - `message.im`
4. Click **Save Changes**

### 5. Enable App Home Messages Tab

1. Go to **App Home** in the left sidebar
2. Under **Show Tabs**, make sure **Messages Tab** is checked
3. Check **Allow users to send Slash commands and messages from the messages tab**

### 6. Install to Workspace

1. Go to **Install App** in the left sidebar
2. Click **Install to Workspace** and authorize
3. **Copy the `xoxb-...` Bot User OAuth Token** — this is your `SLACK_BOT_TOKEN`
4. Go to **Basic Information** > **App Credentials**
5. **Copy the Signing Secret** — this is your `SLACK_SIGNING_SECRET`

### 7. Configure Environment

```bash
cp .env.example .env
```

Fill in your `.env`:

```
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_SIGNING_SECRET=your-signing-secret
SLACK_APP_TOKEN=xapp-your-app-token
```

## Run Locally

```bash
npm install
node app.js
```

You should see: `⚡ People Ops Assistant is running (Socket Mode)`

Test it by sending a DM to the bot in Slack, or @mentioning it in a channel.

## Deploy to Render (Free Tier)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — People Ops Assistant"
git remote add origin https://github.com/YOUR_USERNAME/hr-slackbot.git
git branch -M main
git push -u origin main
```

### 2. Create a Background Worker on Render

1. Go to [render.com](https://render.com) and sign in
2. Click **New** > **Background Worker**
3. Connect your GitHub repo (`hr-slackbot`)
4. Configure:
   - **Name:** `people-ops-assistant`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node app.js`
   - **Instance Type:** Free

### 3. Set Environment Variables

In Render's dashboard for your service, go to **Environment** and add:

| Key | Value |
|-----|-------|
| `SLACK_BOT_TOKEN` | `xoxb-...` |
| `SLACK_SIGNING_SECRET` | `...` |
| `SLACK_APP_TOKEN` | `xapp-...` |

### 4. Deploy

Click **Create Background Worker**. Render will install dependencies and start the bot. Since it uses Socket Mode (WebSocket), it doesn't need an HTTP port — a Background Worker is the correct service type.

The free tier keeps it running 24/7 as long as the process stays alive.

## Editing FAQs

All FAQ content lives in `faqs.js`. Each entry has:

- `id` — unique identifier
- `question` — the question as displayed in the help menu
- `category` — used to group questions in the help menu
- `keywords` — array of words/phrases the matcher checks against
- `answer` — Slack mrkdwn-formatted response

To add a new FAQ, add a new object to the array in `faqs.js` and redeploy.

## How Matching Works

1. User's message is normalized (lowercase, punctuation stripped)
2. Each FAQ's keywords are checked against the input
3. Single-word matches score 5 points; multi-word phrase matches score (word count × 5)
4. The FAQ with the highest score wins, if it meets the confidence threshold (10 points)
5. If no FAQ matches, the bot responds with a friendly fallback pointing to #ask-people-ops
