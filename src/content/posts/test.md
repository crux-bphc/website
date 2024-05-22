---
title: Recommendations for CRUx Senate AY2024-25
author: Soumitra
description: In this document, I will discuss some ideas for the senate that we realized could be good for the club during our term, during the senate interviews, etc.
pubDate: 2024-05-22
image: {
  url: "/crux.png",
  alt: "crux"
}
category: test
---

# Hi there!

This Markdown file creates a page at `your-domain.com/page-1/`

It probably isn't styled much, but Markdown does support:

- **bold** and _italics._
- lists
- [links](https://astro.build)
- and more!

Code block jumpscare

```js
const double = (x) => 2 * x;
```

# Recommendations for CRUx Senate AY2024-25

In this document, I will discuss some ideas for the senate that we realized could be good for the club during our term, during the senate interviews, etc. I will list them in 2 categories: first, what NOT to do, and second what to do.

Of course, as is true with all the docs we send you, you can choose to completely ignore our advice. However, since I believe our term was more than reasonably successful in terms of reviving club activity and culture, I believe that at the end of our term I am much wiser, and I have a better idea of what ideas will work for the club, and which won't.

## What NOT to do

### 1. cruX Forum

I think it is finally time we retire this name. Alumni, 21 batch, and 22 batch all have very different conceptions of these words.

There are 3 definitions of this word as per my understanding that are floating around:

- The project and group of repos that cruX worked on back in 2020-2022. The project was meant to be purely a Facebook replacement.
- The idea that we should build services like Multipartus, Chrono, Rideshare, etc., and eventually Buy&Sell, Shoutbox, FreeExpressionGroup, etc. to create a network of services that we maintain for campus, which will eventually aim to replace the usage of Facebook with our apps.
- The idea that we should build services like Multipartus, Chrono, Rideshare, cruXAuth, etc., to create a network of services that we maintain for campus. This is the extent of the idea, and there is no intention of replacing Facebook. All we want is integrations between cruX services instead of having them be completely standalone.

I believe that simply because of the confusing name, we should retire this name completely. I stuck with the name because I believed people's perceptions would switch over, but I don't think this has happened.

Let's be clear: cruX should not be working to replace Facebook in it's entirety or a major chunk of it in the short term. Our job is not to build and maintain a huge communication network. It is too big of a project for the members of cruX, and it will end up being a burden on us.

The General Body already does not value ChronoFactorem and Rideshare, and they will likely find Lex to be cool for the first few months, and then stop valuing it as well. What I mean by this, is that any outage, whether it's your fault or not, will be blamed on you, and it will hurt the GB's perception of you.

GB projects are great because they give us leverage over the tech senate and the GB. However, if we want to maintain this leverage, we need to make sure these projects are maintained, and they are maintained well. Their operation must be buttery smooth. Only then, is there a room for expansion of GB projects.

I wholeheartedly believe that we are not at a phase where we should be expanding into more GB projects, and we should spend time into making the existing GB projects more maintainable, and polishing the features of the existing GB projects. Only once the existing GB projects are running buttery smooth, and they all have systems in place to check validity of releases, and have adequate documentation, we should branch out into more projects.

Even after this, ShoutBox and FreeExpressionGroup are some of the last services we should be building. The case for a separate app is much more pronounced and obvious in the case of Buy&Sell, and Rideshare. Simply broadcasting text and media to the rest of the campus is not an urgent use case. Buy&Sell, and other similar such specialized groups on Facebook should be the ones we target next.

So, when we mean that cruX forum is a very long term outlook to tech culture on this campus, we mean long term in the span of multiple senates. Maybe 5-10 years down the line, we will find that the campus communicates not on Facebook, but on WhatsApp, or maybe even some new app. The dynamics of such a change should not be our concern right now.

### 2. Too much dependence on proposed "BITS Summer/Winter of Code"

One idea proposed during the senate interviews was a workshop/contest/event where we encourage GB members to contribute to some of our repos. To be clear, the idea is not bad. The idea is actually pretty good. However, as we stand now, there are many issues with this, and I will highlight them.

None of our projects are at the point where we can expect external contributors to contribute. Our projects are horribly documented, the documentation is not available to the public, the DB schema is not well explained in the README, and usually the README contains only the most basic stuff.

Beyond just this, we do not have enough projects to expect contributions on. Lex is still in progress, and much of it is in the stage where we need to make core decisions with respect to how we want the app to be. ChronoFactorem and Rideshare are the only finished projects that are in production. Beyond this, we do have cruX website, but that's not exactly a great repo for people to learn from, since it's laser focused on implementing what's in the Figma and nothing else.

Other than this, we have Lumos, BITSGPT, and the torrent client. All of these are pretty unknown in the sense that they are all experimental projects, where the final outcome is not known. We are just kinda trying stuff and seeing if it works.

To summarize, we don't have enough projects, and the few projects that we do have, we cannot in their current state expect people to contribute to them. To get them to that state, we need to have a concerted effort throughout the club to effectively document all existing projects.

There will need to be a lot of work put in before we can even dream of something like a BITS Summer/Winter of Code.

## What to do

### 1. Project Leads/PoCs

Assign one PoC or project lead to every project. Maybe even assign multiple (a max of 2). These PoCs need to make sure that the projects are progressing as normal, and they will be the ones updating the Dev Sec and President about the status of these projects in the review meets.

Project leads will be way more effective than a domain lead, since a domain is usually split into many parts working on different projects. Project members will also now have a person to answer to, and this delegates away the Dev Sec's job of personally reminding all project members about the project progress.

Of course, the project PoCs chosen will need to be active and trusted members of the club. These PoCs will also hopefully make the future decisions of whom to make Dev Sec or President more apparent.

### 2. Summer groups

Last year, dev was unable to hold a summer group because Ansh Kanotra (Tech Sec) requested us to hold the summer groups during the semester. Since ATMoS work overwhelmed dev members, we decided that CC will hold their summer group during Sem I, and dev will do so in Sem II.

However, during ATMoS the senate was replaced, and at that point we had other more important things to worry about than summer groups. It felt as if the club was crumbling, and we had to act quickly to get the club back where it was. Our inductions got stretched into the next sem due to this, and that caused further delays.

In the second part of the semester, we ended up having to worry about TechWeek as well, and we ended up doing whatever little work on projects we could. Sem II inductions also started around that time.

Due to this, we are massively overdue for a summer group, and in some ways I'd argue it has affected our member intake. We are noticing that the size of the club for 22 batch and below has significantly reduced compared to 21 batch's size.

I highly recommend hosting:

- Dev summer groups (however many domains you have)
- UI/UX summer group (since we are suffering from a lack of UI/UX members)
- CTF summer group (to keep the momentum of the relatively alive CTF division going)

I recommend that these summer groups post their content on GitBook, or Rust MDBook, or even Astro's MD/MDX formatter, and keep both WhatsApp and Discord groups for summer groups. This will maximize the reach of the summer groups, while still allowing you to maintain a structured discord server. Of course, you have more work when posting, but all you need to do is copy paste a discord announcement with a website link onto WhatsApp.

I believe this is the thing we need the most during the summer, and members that aren't working on summer groups should work on maintaining and completing our existing projects.

I also recommend holding a hackathon or CTF contest at the end of the summer groups, since this allows you to properly gauge the effect you have had on the people following along.

### 3. Increase the number of workshops and sprints

Since we seem to be running out of new ideas for projects, we should focus on maintaining our existing projects or finishing them. The members that are free, should heavily consider holding workshops or sprints internally or for the GB. The senate needs to find incentives that will make it easier than ever for members to host workshops.

A basic programming workshop would be a good idea in Sem I, since 24 batch will just arrive on campus. If this general purpose programming workshop helps them grasp programming better, in the long run it will benefit more advanced workshops, and it might even benefit dev and CC inductions, since more people are nudged towards learning about these topics.

This workshop could also be a good means to advertise or link the summer groups that happened over the summer. Interested students can go through the summer groups at their own pace as well.

As for sprints, I believe another Docker or Nginx basic deployment sprint is needed, since we will have new members at the end of this induction cycle, who have no idea about how we deploy and automate things here at cruX. Maybe a better alternative would be to document all this in a common place, with some other conventions we use in cruX. This should be done while engaging the new inductees, because this is something they will need regardless, and it's a pretty small task.

### 4. Create a knowledge base for CTFs

This one is pretty easy. The new cruX website is in Astro, and Astro has a nice markdown plugin we can easily use to maintain our knowledge base. This doesn't necessarily need to be a list of writeups, it can just be interesting concepts or questions that someone might have done a deep dive into.

### 5. Fix the project stagnation issue

The biggest issue with projects in dev right now is the fact that projects have in some form stagnated. Once you become senate, in your first meet, please go over the list of projects in dev, and ask the members what they see as the future of the project. I believe Lumos might not see a future, and Game Dev might have to think of new projects, since the original maintainers will be gone at the end of next semester.

Beyond this, the projects that are in dire need of good understanding of maintenance across years, are terribly documented, and a lot of the code could be cleaner and refactored. This refers to ChronoFactorem, Rideshare and Lex.

One of your biggest priorities should be finishing, polishing, and documenting these projects and their know-how. Once this is done, we can go back to maintaining then for a few months and testing if we can branch into newer projects.

If you have more innovative solutions, please discuss them, or bring them up to the previous senate.

### 6. Create a culture of doing challenges and events together

When I say events it need not mean hackathons or competitions. It could mean simple challenges.

For example, you could try and rope in a bunch of people interested in learning any new language and creating an accountability group that makes sure everyone else did the Advent of Code challenge for that day.

Another example was the 1 Billion Row Challenge: https://1brc.dev/

You could also look at specific code golf or automation or scripting challenges.

Small trends and challenges like these will build a culture of doing something together that's not necessarily club work, out of their own will.

cruX is a club of hobbyists, but funnily enough we don't participate in programming as a hobby together, and as a club there is some potential to be explored there.

### 7. Event and Project Post-Mortems

For any given event, say a workshop you conduct, or a summer group, or some ATMoS or TechWeek event, sit the organizers or whoever was involved down in a meet, with maybe a few other interested people in the club, and discuss what you did well, and what we could have done better.

Discuss why things went the way they did, and discuss if you could improve on some of these things. In my entire term, I ended up doing this only once, but it was extremely helpful in retrospect.

This whole idea can be applied to Project releases as well. ChronoFactorem and Rideshare have releases that are around the start/end of semesters, and these are fairly periodic events after which you can hold a meet with everyone involved in the project.

### 8. Encourage GSoC and other event participation

GSoC seems to be the most prestigious and most worth-it event in terms of time spent. Try and make sure that 1st years apply at the end of their 1-2, since this is the prime time for them. Since these members got inducted in their 1st year, chances are that they are probably really good from the get go.

Try and nudge them towards Open Source contributions, and explain to them the potential they have. You will have to put the idea in their head months before the application deadline, so that they get time to not only consider applying, but acting on it.

Higher amount of participation in GSoC will obviously make us look better in the eyes of the GB and senate, but it will also boost our prestige outside of this campus, and even in open source communities.

If you can manage to create a cycle next year encouraging 1st years to apply to GSoC in their free summer break, this would be great for both them and you. It's likely that this will be the only free summer they have in their college life, due to PS-1, SI Prep, and SI.

### 9. Speed up induction process

The round 1 sheet should be released instantly as the form is opened, so that over the period that the sheet is opened, people can review the sheet and fill in their remarks. The whole round 1 process should not exceed 48 hours after the form closes. You can do this by incentivizing free ANC treats to the one that reviews most submissions.

If you can manage this, it means you can manage holding R2 in the same week. If you can do that, then you can send out R3 tasks the next week, leaving them 10-14 days for R3. After those 10-14 days, you can schedule their interviews over a week, or 10 days at max.

This gives you an inductions scenario of 20-30 days. This is still a good case. In these 20-30 days, 10-14 will be spent waiting for the projects to be submitted. You need to make sure this time is spent wisely, because with 1 induction cycle per sem, and 1 midsem and 1 compre every sem, you are left with a total of 12 - 2(1 + 1 + 1) = 6 months of real work.

Out of these 6 months, 2 are spent in the summer on summer groups, giving only 4 months of project work that you can use. This is why having inductions faster and finishing them as fast as you can is critical. If you can save time and get those 2 months back somehow by being smart with scheduling, you can net a gain of 50% time in your tenure.

A 50% gain on time is one to kill for.

Speed up inductions. Inductions put the club into a freezer.

### 10. More interactive feedback for R3

There are a lot of devs that get to R3, but they lack certain skills, or aren't as experienced or polished. Usually, these guys get rejected, and we hope that they apply next sem, by dangling a direct R3 selection in front of them.

Instead of this, if you can assign them a capable mentor, maybe the person that took their R3, and give them 2 more weeks or a month or so to fix their shortcomings, this is a much better strategy to ensuring quicker induction turnovers. Of course, on paper, their name will come out in the next sem's Facebook post, but you can unofficially induct such members into the club earlier.

It's extremely important that inductions result in better prospective members if rejected, and that inductions are sped up.

---

In conclusion, these are all the suggestions I have for the CRUx Senate AY2024-25. I believe if all of these ideas were implemented, you would see unimaginable growth in terms of the member quality, and the quality of the work we produce, and your senate will be a huge success.

I hope you guys take some of this advice for your own good, and continue this newfound tradition of imparting knowledge and experience to the next senate. I believe this is what will help the club progress in the long term, and truly cause growth in the tech culture both inside the club, and on campus as well.

If you have the ability to give a shit about this, the change you could bring to this campus will be unimaginable.

I hope that when I look back at AY2024-25, when I leave for my PS or Thesis, I look back at the senate's progress and say "My senate walked so their senate could launch rockets to the fucking moon."

Thanks, and good luck.

~ Soumitra Shewale (21 batch senate)
