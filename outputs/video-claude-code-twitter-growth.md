# I Built an X/Twitter Content Machine With Claude Code

**URL:** https://www.youtube.com/watch?v=JQQhT0edXXw
**Thumbnail:** https://i.ytimg.com/vi/JQQhT0edXXw/maxresdefault.jpg

| Field | Value |
|---|---|
| Published | April 30, 2026 |
| Duration | 15:17 |
| Views | 1,512 |
| Likes | 55 |
| Comments | 3 |
| Channel | Oleg Melnikov (@Oleg-Melnikov) |
| Subscribers | 18,000 |
| Monetized | N/A |
| Members Only | No |

## Description

Full guide in my free community: https://www.skool.com/ai-automation-7100/about

What if you could reverse-engineer what's already going viral in your niche on X/Twitter, and turn it into your own content in minutes?

I built a system with Claude Code that scrapes your competitors' top-performing tweets, runs deep AI analysis on every post (text + images), and generates ready-to-publish content, complete with branded infographic images in your style.

The pipeline: Apify scrapes X → Gemini analyzes each tweet → Claude generates new posts in your voice → Kie AI creates branded infographics. 60% infographic posts, 30% personal posts with your photos, 10% text-only. All from one click.

In this video I walk through the entire build, show you how the web app works, and how you can install it yourself and run it for your own niche.

## Timestamps

- 0:00 — Preview of the system
- 1:38 — Part 1: System in action
- 7:40 — Part 2: How to set it up
- 11:20 — Part 3: Improving it

## Links

- Skool community: https://www.skool.com/ai-automation-7100/about
- LinkedIn: https://linkedin.com/in/olegai
- Instagram: https://instagram.com/melnikoff_oleg

---

## Transcript

In today's video, I'll show you how to use Claude Code in order to create high-quality content for X or Twitter that will generate you sales afterwards. So, here's the system that I built using Claude Code, and here's what it does. On the left side, we have a piece of content from our competitor that went viral. And on the right side, we have our own piece of content that is reusing the same idea but applying it to our niche. And in this case, we even have an infographic. If I scroll more, another post, another post generated specifically for us with a personal image. Another post from competitor, another post for us. And we go and go and go, and we have so many pieces of content.

So, instead of figuring out what actually works, trying and testing, you can steal the proven hooks and frameworks and structures from other people in your niche and grow way faster. And here, you can be tracking multiple competitors. In my case, it is nine, but you can add so many more, and this process will be running automatically every single week, growing your audience on autopilot.

So, this video will have three parts. First of all, I'll show you how the system looks like inside in detail. We'll check out the quality of this content that it's producing, so you understand everything very clearly. Second, I'll show you how to set it up in less than 10 minutes, even if you're a complete beginner with Claude Code. Don't worry, even though the system was built using Claude Code, you will be able to interact with it very simply using this very intuitive chat interface in your plain English. And finally, we'll discuss how to get even better results for your Twitter growth strategy.

### Part 1: The System in Detail

So, let's begin with showing the whole system in detail. The first thing is the creators that we're analyzing, but let me explain to you the high-level strategy.

I will explain to you everything on a specific example. So, here is a Twitter profile of the guy Carl Weischel. He's running his agency — it's basically an agency that is helping with conversion rate optimization for e-com companies. So, let's say you're selling some supplements online or maybe you're selling beauty products online, then Carl will help you to increase conversion rate on your landing page. And Carl is getting a lot of clients through his personal brand on X.

For that reason, I decided, "Okay, let me build a strategy that will be kind of mirroring his niche, his ICP, but we are running our own profile in that niche." So, for that reason, I collected a selection of multiple creators on Twitter who are also related to conversion rate optimization or to a broader niche of marketing.

And now we're tracking all of them here in our dashboard, and then we're able to reuse their content for our own content creation process. So, as you can see, we added Carl, but we also added this guy about marketing, this guy in the CRO niche exactly. By the way, CRO is conversion rate optimization. And then multiple other people.

So, just to demonstrate how it works, we can go on Twitter, select a new profile, Joe Hides — the guy is also about Facebook ads. Let's just copy his username, go back to the app, press add creator. We pasted his username, and then let's say that the category is the same. We're adding creator, and now the system is scraping them, analyzing their Twitter profile, and then it will be added to our creators database. Bam, this guy was just added.

We have the amount of followers, amount of posts. We can kind of understand how good this profile is. And now, when we'll be scraping content from our competition, this guy will be included as well.

Once we've collected multiple competitors, then we go into the configs tab. Right here, we're kind of trying to define what our brand is about, what is our context, what is our ICP, and what are our content pillars. Basically, I'm giving it a name, giving a category of creators that goes along with that — in our case, creators in the marketing and CRO niche that we selected.

And then we're describing basically two things. We're describing how we want to analyze their content — the hook, the structure of their posts, engagement drivers, what actually made their specific tweet work and perform better than average. And then finally, we have generation instructions — how we are turning a piece of content from our competitors into a piece of content for our ICP, for our audience. This is a very specific instruction.

Once we have this configuration, we're scraping all the most viral stuff from our competition, and then we're regenerating our own content based on that. To do that, we go to the run pipeline section, select this configuration. In the advanced settings, we can select how many posts for every creator we'll be scraping — in this case, it's 20. We select top three posts for every single creator in the past 20. So, we're selecting the top tier, only the best-performing stuff. And we'll be looking only at the past 30 days because we want to be publishing stuff that's relevant and up-to-date.

Then just press run pipeline. It will take roughly 15 minutes to execute, and then we'll get our content.

So, as you can see: original post — "Entrepreneurship is about self-belief first and business skills second." And then our post — "Conversion rate optimization is about user psychology first and design tweaks second." And not only that, we also have an infographic — "CRO teams waste time vs. where growth actually happens."

And then the next post — "Distribution is your moat. Can't stop thinking about this." And our version — "Testing velocity is your moat. Can't stop thinking about this." These ideas are rhyming, but obviously this one is specifically applied to our own niche. And by the way, it goes with a personal image of mine because I want a mix of images in the feed — personal images, infographics. Some posts can even be without images because it's X, that works.

And here's another: "Why AB tests fail" — three main reasons why this is happening, and then text explaining that deeper. This is the high-level overview of the system. Obviously, you can connect automatic publishing software to the system, so you won't need to paste it to X manually — it will all go live automatically through API, but that's the next step.

### Part 2: How to Set It Up in 10 Minutes

I will give you everything that you need to get started. I will give you the whole source code that you will be able to import and start building.

**Step 1: Install Visual Studio Code.** This is the environment where we will be running our Claude Code. Just download it. By the way, the whole instruction will be in description down below. Download Visual Studio Code, then open it on your computer. On the top left, you will need to open a specific folder that I will also give you — just download this folder with the whole source code.

**Step 2: Connect Claude Code.** Once you have this folder open, on the left side you will have the whole structure of the project. To connect Claude Code, go to the left side, write "Claude Code" right here, and find the extension for Visual Studio Code. Press install. By the way, to use Claude Code, you need a paid subscription which is at least $19 per month, but trust me, it is completely worth it. Then log in and you'll be good to go.

**Step 3: Connect the APIs.** We need three external APIs:

1. **Apify** (to scrape Twitter) — Go to apify.com, create an account for free. You'll get a decent amount of scraping capabilities for free. Just create an account, copy your API key from the settings, and paste it in the .env file.

2. **Gemini API** (to analyze competitor visuals) — Go to AI Studio, create an account for free, copy API key, paste it in the .env file. This will be used to analyze the visuals of our competition — infographics, personal images, whatever they're using.

3. **Anthropic API** (for content generation) — Create an API account on the Claude platform, put at least $5 into your cabinet, and paste your API key in the .env file.

**Step 4: Run the app.** Once you've collected all the API keys, go to the top part, press new terminal, and type `npm run dev`. Enter, and your website will be running. You'll see the whole interface, the whole dashboard of the app at localhost. You'll be able to add your own configuration, your own creators, run your own pipeline, and get content specifically tailored for your Twitter account.

### Part 3: Getting Even Better Results

Here are four things to level up your results:

**1. Provide more context about your brand.** The more context AI has about you, the better the quality of the outputs. Provide your website, your Instagram, your LinkedIn — anything that contains rich information about your brand. Just paste it to Claude Code: create a new terminal, start a session with Claude, and tell it, "Hey, here is my website. Scrape info about my brand. Update my config in the app." Press enter and it will do all the work for you. Because we're connected to Apify, it will scrape them, analyze your visuals, your brand identity, and put it all together in the DNA of your brand.

**2. Give specific calls to action.** It's good to produce high-quality, valuable content for your audience, but it's not necessarily converting. In some posts, at the end, we can put a call to action — like "book a 30-minute consultation with our agency to analyze your funnel and your potential in terms of conversion rate optimization." This automates our lead generation pipeline.

**3. Analyze comments from your competitors and find gaps.** We already found many guys in our niche, and many of them are getting engagement. I can see what people are thinking, what's important for them, what are the potential angles that might not be covered yet. We can use all that in our content strategy to stand out among the crowd.

**4. Analyze your own historical performance.** Give your own Twitter URL to the system, tell it to analyze your latest 30 posts. Especially when you're already getting some engagement and analytics. Feed your own historical performance into Claude Code — "Here's my Twitter URL. Analyze performance of my latest 30 posts. Drive insights from there, and put it all together into our app, so our new content goes closer to the stuff that's working and further from what's not."

With these things, and with enough consistency posting every single day, you'll grow and generate sales for your business.

So, that was it. Once again, check out the instruction in description down below on how to set it all up. And if you're interested, here's another video where I'm showing how to use Claude Code for different marketing tasks, running ads, running cold outreach campaigns, content creation for social media on Instagram, and anything like that. Check it out.
