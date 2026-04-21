# 🌾 AgriMind — Setup & Deployment Guide

> AI-Powered Market Intelligence for African Farmers

---

## 📁 Project Structure

```
agrimind/
├── index.html        ← Landing page (home)
├── market.html       ← Live market dashboard
├── insights.html     ← AI Farm Plan generator (Claude API)
├── sell.html         ← Sell produce & connect with buyers
├── styles.css        ← All styles (shared design system)
├── app.js            ← Shared data & utilities
├── vercel.json       ← Vercel deployment config
└── README.md         ← This file
```

---

## 🖥️ Step 1: Open in VS Code

1. **Create a folder** on your computer called `agrimind`
2. **Move all files** into that folder
3. **Open VS Code** → File → Open Folder → select `agrimind`
4. You should see all files in the Explorer sidebar on the left

---

## 🌐 Step 2: Preview Locally (in your browser)

### Option A — VS Code Live Server (Recommended)
1. In VS Code, go to **Extensions** (Ctrl+Shift+X)
2. Search for **"Live Server"** by Ritwick Dey → Install it
3. Right-click on `index.html` in the file explorer
4. Click **"Open with Live Server"**
5. Your browser opens at `http://127.0.0.1:5500/index.html` ✅

### Option B — Direct file open
Just double-click `index.html` on your computer — it opens in your browser.
(Note: the AI features require a server, so Live Server is better)

---

## 🤖 Step 3: Add Your Claude API Key (for AI Insights)

The AI Farm Plan feature calls the Claude API. To enable it:

1. Get your API key from: https://console.anthropic.com/
2. Open `insights.html` in VS Code
3. Find this line (around line 130):
   ```javascript
   const response = await fetch('https://api.anthropic.com/v1/messages', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
   ```
4. Add your API key to the headers:
   ```javascript
   headers: {
     'Content-Type': 'application/json',
     'x-api-key': 'YOUR_API_KEY_HERE',
     'anthropic-version': '2023-06-01',
     'anthropic-dangerous-direct-browser-access': 'true'
   },
   ```
5. Replace `YOUR_API_KEY_HERE` with your actual key (starts with `sk-ant-...`)

> ⚠️ **Security Note**: For your prototype/demo this is fine. For production, 
> move the API call to a backend server so your key is not exposed in the browser.

---

## 🚀 Step 4: Deploy to Vercel

### 4a. Install Git (if you don't have it)
- Windows: https://git-scm.com/download/win
- Mac: run `git --version` in Terminal (it will prompt you to install)

### 4b. Create a GitHub Account
- Go to https://github.com and sign up (free)

### 4c. Push your project to GitHub

Open VS Code **Terminal** (Ctrl+`) and run these commands one by one:

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial AgriMind commit"

# Create a new repo on GitHub (do this on github.com first)
# Then connect your local project to it:
git remote add origin https://github.com/YOUR_USERNAME/agrimind.git

# Push your code
git branch -M main
git push -u origin main
```

### 4d. Deploy on Vercel

1. Go to https://vercel.com → Sign up with your GitHub account (free)
2. Click **"New Project"**
3. Click **"Import"** next to your `agrimind` repository
4. Vercel auto-detects it as a static site (no build settings needed)
5. Click **"Deploy"** 🚀
6. In ~30 seconds, you get a live URL like:
   `https://agrimind.vercel.app` ✅

### 4e. Your custom domain (optional)
- In Vercel dashboard → Settings → Domains
- Add your own domain like `agrimind.com.ng`

---

## 🔄 How to Update the Site After Changes

After making changes in VS Code:

```bash
git add .
git commit -m "Update: describe what you changed"
git push
```

Vercel **automatically re-deploys** within seconds every time you push to GitHub. ✨

---

## 📊 Customising the Market Data

All crop data lives in `app.js` in the `CROPS_DATA` array. Each crop has:

```javascript
{
  name: 'Tomatoes',
  emoji: '🍅',
  price: 850,           // Current price in ₦/kg
  demand: 'High',       // 'High', 'Trending', or 'Low'
  change: 12.4,         // % change this week (negative = decline)
  forecast: 'Strong Rise',  // 'Strong Rise', 'Moderate Rise', 'Stable', 'Declining'
  market: 'Oshodi, Lagos',  // Best market to sell
  risk: 'Low',          // 'Low', 'Medium', 'High'
  roi: 74,              // Estimated ROI %
  history: {
    labels: ['Jan','Feb',...],   // Chart labels
    prices: [520, 580, ...]      // Historical prices
  }
}
```

Add more crops, update prices daily, and connect to a real data API later.

---

## 🔮 Future Upgrades (Phase 2 — App)

When ready to build the mobile app:
- **React Native** or **Flutter** for iOS/Android
- **Supabase** for user auth + database (free tier)
- **Real market API** — connect to AFEX, GeoAgri, or custom web scraper
- **Push notifications** for price alerts
- **Payment integration** — Paystack for in-app transactions
- **WhatsApp API** — for buyer-farmer messaging

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JS |
| Charts | Chart.js |
| Fonts | Google Fonts (Fraunces + DM Sans) |
| AI | Anthropic Claude API (claude-sonnet) |
| Hosting | Vercel |
| Version Control | Git + GitHub |

---

## 💬 Support

Built for African farmers. Questions? Feedback?
Reach out and we'll help you get this live. 🌾

---

*AgriMind — Farm Smarter. Earn More. Feed More.*
