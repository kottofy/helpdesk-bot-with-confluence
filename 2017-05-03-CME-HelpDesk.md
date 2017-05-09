---
layout: post
title:  ""
author: "Chicago Mercantile Exchange Group and Microsoft"
#author-link: "Add URL for author's Twitter account here"
#author-image: "{{ site.baseurl }}/images/authors/photo.jpg"
date:   2017-05-03
categories: [Bot Framework]
color: "blue"
#image: "{{ site.baseurl }}/images/imagename.png" #should be ~350px tall
excerpt: 
language: The language of the article (e.g.: [English])
verticals: [Financial Services]
---

Chicago Mercantile Exchange group and Microsoft joined forces to build a help desk bot to enable users access to more convienent searching capabilities of the docuemntation and data stored in their Confluence content management system. 

- Key technologies used
  - [Bot Framework](https://dev.botframework.com/)
  - [LUIS: Language Understanding Intelligent Service](https://www.luis.ai/)
  - [Confluence API](https://docs.atlassian.com/confluence/REST/latest/)

- Core Team 
  - Stephen McCarthy, Senior Software Engineer in Test at CME
  - [Justine Cocchi](https://twitter.com/justinecocchi), Technical Evangelist at Microsoft
  - [Kristin Ottofy](http://twitter.com/kristinottofy), Technical Evangelist at Microsoft
  - [Kevin M. Gates](https://twitter.com/kevinmgates), Principal Technical Evangelist at Microsoft


## Customer profile ##

- [Chicago Mercantile Exchange](http://www.cmegroup.com/)
- CME Group is the world's leading and most diverse derivatives marketplace, handling 3 billion contracts worth approximately $1 quadrillion annually (on average). The company provides a marketplace for buyers and sellers, bringing together individuals, companies and institutions that need to manage risk or that want to profit by accepting risk.
- Chicago, Il
- CME's exchanges - CME, CBOT, NYMEX and COMEX - offer the widest range of global benchmark products across all major asset classes, including futures and options based on interest rates, equity indexes, foreign exchange, energy, agricultural commodities, metals, weather and real estate. As part of our commitment to providing innovative risk-management solutions to the marketplace, CME Group also offers a growing slate of cleared OTC products and services. Through our CME Globex electronic trading platform, users worldwide are able to access the broadest array of the most liquid financial derivatives markets available anywhere. Additionally, CME Group operates CME Clearing, one of the world's leading central counterparty clearing providers. By serving as the counterparty to every trade that happens in our markets, we protect the integrity of our markets, virtually eliminating third-party credit risk. For the global economy, this unparalleled access translates into opportunity.

 
## Problem statement ##

As workers for a financial institution, CME developers have to abide by many standards during their development such as password policies and content regulations. Because there are far too many to memorize, CME developers often find themselves interrupting their workflow to search Confluence, CME's internal document store, for the proper policy. This results in a loss of time due to context switching. Additionally, the Confluence search experience itself leads some users to spend copious amounts of time looking for the correct policy. 

A bot accessible through Skype, one of the company's internal messaging systems, or even accessible through a Visual Studio plugin using the direct line channel, will help the developers to remain focused while searching for the proper policy by simply asking the bot to find it for them. For the purposes of our hackfest we focused on just adding the Skype channel.

 
## Solution and steps ##


The majority of your win artifacts will be included in this section, including (but not limited to) the following: Source code snippets, pictures, drawings, architectural diagrams, value stream mappings, and demo videos.

This section should include the following details:

- What was worked on and what problem it helped solve.

 ![Architecture Diagram](/images/architecture.PNG)


## Technical delivery ##
This section will include the following details of how the solution was implemented:

- Bot Patterns

- Core Bot Capabilities

- Bot Intelligence

	- Cognitive Services

	- Azure Search


- Technology Integration

	- Azure Storage, Compute or services

	- Microsoft Canvas, 3rd Party Channels

- SDKs used, languages, etc.

- Code artifacts

- Pointers to references or documentation

- Learnings from the Microsoft team and the customer team

*If you’d really like to make your write-up pop, include a customer quote that highlights the solution. Attribute all quotes with Name, Title, Company.*


 
## Conclusion ##

This section will briefly summarize the technical story with the following details included:

- Measurable impact/benefits resulting from the implementation of the solution.

- General lessons:

  - Insights the team came away with

  - What can be applied or reused for other environments or customers?

- Opportunities going forward:

  - Details on how the customer plans to proceed or what more they hope to accomplish

*If you’d really like to make your write-up pop, include a customer quote highlighting impact, benefits, general lessons, and/or opportunities.*


## Additional resources ##
In this section, include a list of links to resources that complement your story, including (but not limited to) the following:

- Documentation

- Blog posts

- GitHub repos

- Etc…