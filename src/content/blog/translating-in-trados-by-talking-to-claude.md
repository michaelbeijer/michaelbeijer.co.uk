---
title: "Translating in Trados Studio by talking to Claude"
description: "The new Supervertaler MCP Server connects Claude for Desktop to Trados Studio. Combine it with a good dictation tool like Wispr Flow, and translating becomes something entirely new: a spoken conversation about your project."
pubDate: 2026-07-26
hidden: true
---

For as long as I've been translating, the basic physical activity has been the same: sit at a keyboard, look at a segment, type. The tools around that activity have changed enormously – CAT tools, translation memories, termbases, machine translation, post-editing – but the fingers-on-keys part has always remained.

That has just changed for me, and I want to describe the new setup, because it's the most fun I've had with translation technology in years.

## The Supervertaler MCP Server

The [Supervertaler MCP Server](https://docs.supervertaler.com/trados/mcp-server/) connects Claude for Desktop to [Supervertaler for Trados](https://supervertaler.com/trados/), my plug-in for Trados Studio 2024/2026. Once the connection is made, Claude has full access to my open Trados project: the segments in the grid, my termbases, my translation memories, and even Trados Studio comments. It can read them – and it can change them.

MCP (Model Context Protocol) is the open standard that makes this possible: it's the plumbing that lets an AI assistant like Claude talk to other software on your computer. In this case, that other software is Trados Studio.

## The workflow

After implementing the server, I started using it on real translation jobs. The workflow goes like this:

1. I open a project in Trados Studio 2026.
2. I open a fresh chat in Claude for Desktop and give it a prompt along these lines:

> I'm translating a project from English into Dutch, and I have it open in Trados Studio 2026. Please analyse the project.
>
> As you'll see, a large portion of it is already 100% and CM (context) matches – i.e. confirmed. As a rule, we can ignore any confirmed segment. Your job is to translate the rest and make sure it's consistent with the whole document.
>
> It's also your job to make sure the whole document is consistent and correct. If you find things in already-confirmed segments that aren't correct, you can fix them.
>
> If you find a segment that isn't confirmed, isn't set to translated, and has a high fuzzy match (say 93–95%), you can use it as a reference – but make sure to insert a 100% correct translation. Don't just copy high matches or use them without thinking.
>
> Please also consult all the client's notes and references in this folder: D:\Example\refs
>
> You can also look at the source document as a PDF for reference if you need it: D:\Example\Example source document.pdf

3. I then translate the project interactively in Studio, just by chatting with Claude.

## Add dictation, and everything changes

Here's the part that turns this from a clever integration into a genuinely new way of working: I don't type any of this. I use [Wispr Flow](https://www.wispr.com/) for all the communication with Claude.

I keep the Claude chat window open on one monitor, with Trados Studio on my main monitor. As I talk, I can watch things update in real time in my Trados project – segments filling in, statuses changing, comments appearing – without me touching the keyboard or mouse at all.

The effect is hard to describe until you've tried it. Translating stops being typing and becomes a conversation *about* the document:

- "Have a look at segments 40 to 60 – the client's reference PDF uses a different term for that component; check which one and make it consistent throughout."
- "That fuzzy match in the active segment is close, but the date format is wrong – fix it and confirm."
- "Search the TM for how we translated this phrase last time, and use that."

Any decent dictation tool would work, but a fast, accurate one like Wispr Flow matters here, because the whole point is that speaking becomes the primary interface. If dictation is slow or clumsy, you fall back to the keyboard and the spell is broken. When it's fast, you genuinely lean back and direct the work.

## QA on a whole new level

Not only does Claude answer questions about the project perfectly, but because it has access to the whole job, it spots things there is no way I would have spotted unless I had spent an inordinate amount of time combing through the entire project: an inconsistent term used in segment 12 and segment 847, a number that doesn't match the source, a confirmed 100% match that is actually wrong in this context.

Traditional QA in CAT tools is mechanical: pattern matching, number checks, forbidden-term lists. Useful, but blunt. An AI with contextual knowledge of the whole file can hold the entire document in its head and suggest changes across giant projects – the kind of consistency checking that previously only happened if you had the time (and the caffeine) to re-read everything.

And crucially, you remain in charge. Claude proposes, explains and asks; you decide. It's less like handing your project to a machine and more like having an infinitely patient assistant who has actually read the whole document – and all the client's reference material.

## Improving the tool while using it

One more trick that I love. If Claude is unable to do something – some operation the MCP server doesn't support yet – I simply switch to the Claude Code tab in the Claude for Desktop app and tell Claude Code to implement it. It gets to work on the plug-in's source code, and I switch back to the translation chat tab to carry on translating.

This means I can improve the system iteratively while using it to translate a real project at the same time. The tool grows to fit the work, mid-job.

## Try it yourself

If you'd like to try this workflow, grab the trial version of [Supervertaler for Trados on the RWS App Store](https://appstore.rws.com/plugin/432). The MCP Server setup is documented [here](https://docs.supervertaler.com/trados/mcp-server/).

The trial period is 14 days, but I would be more than happy to extend it as long as you need – just ask. And if you have any questions at all, get in touch at [support@supervertaler.com](mailto:support@supervertaler.com).
