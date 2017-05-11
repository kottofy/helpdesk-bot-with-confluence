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


## Customer Profile ##

- [Chicago Mercantile Exchange](http://www.cmegroup.com/)
- CME Group is the world's leading and most diverse derivatives marketplace, handling 3 billion contracts worth approximately $1 quadrillion annually (on average). The company provides a marketplace for buyers and sellers, bringing together individuals, companies and institutions that need to manage risk or that want to profit by accepting risk.
- Chicago, Il
- CME's exchanges - CME, CBOT, NYMEX and COMEX - offer the widest range of global benchmark products across all major asset classes, including futures and options based on interest rates, equity indexes, foreign exchange, energy, agricultural commodities, metals, weather and real estate. As part of our commitment to providing innovative risk-management solutions to the marketplace, CME Group also offers a growing slate of cleared OTC products and services. Through our CME Globex electronic trading platform, users worldwide are able to access the broadest array of the most liquid financial derivatives markets available anywhere. Additionally, CME Group operates CME Clearing, one of the world's leading central counterparty clearing providers. By serving as the counterparty to every trade that happens in our markets, we protect the integrity of our markets, virtually eliminating third-party credit risk. For the global economy, this unparalleled access translates into opportunity.

 
## Problem Statement ##

As workers for a financial institution, CME developers have to abide by many standards during their development such as password policies and content regulations. Because there are far too many to memorize, CME developers often find themselves interrupting their workflow to search Confluence, CME's internal document store, for the proper policy. This results in a loss of time due to context switching. Additionally, the Confluence search experience itself leads some users to spend copious amounts of time looking for the correct policy. 

A bot accessible through Skype, one of the company's internal messaging systems, or even accessible through a Visual Studio plugin using the direct line channel, will help the developers to remain focused while searching for the proper policy by simply asking the bot to find it for them. For the purposes of our hackfest we focused on just adding the Skype channel.

![Problem](./Images/botfluence.jpg)
 
## Solution and Steps ##

Microsoft and the CME team worked togehter to create a bot that will easily integrate into the developer's workflow, making it easier to search Confluence for the documentation the developers need to be productive. The resulting bot has a standard architecture with the user interacting through whichever channel is convienent for them and the message gets sent through the connector back to our bot's web service. The dialog flow and architecture is outlined below.

 ![Architecture Diagram](https://raw.githubusercontent.com/kottofy/CME-HelpDeskBot/master/Images/Architecture.PNG?token=ADIOvVn0YOZiWUTZ2qe_k84kzPOWvKyHks5ZHeAlwA%3D%3D)

### Prerequisite Steps and Intial Roadblocks ###
 - Install any text editor, we used [Visual Studio Code](https://code.visualstudio.com/)
 - Install [Node.js](https://nodejs.org/en/) and the [Node Bot Framework SDK](https://docs.botframework.com/en-us/downloads/)
 - Install the [Bot Framework Emulator](https://docs.microsoft.com/en-us/bot-framework/debug-bots-emulator)
 - Obtain a [LUIS](https://www.luis.ai/) API key
 - Set up access to a [Confluence](https://www.atlassian.com/software/confluence) document store

There were several prerequiste steps and installations before we could begin working on this project, which are listed above. Installing Visual Studio Code and Node.js allowed us to start building our bot, however when it came time to test the bot for the first time we couldn't use the Bot Framework Channel Emulator. Because CME is a financial institution with a lot of protective regulations, employees can only download software available through their internal store. The Channel Emulator we needed to test our bot was not on that list of approved downloads. While we waited for a representative from CME to approve the Channel Emulator as an approved download, we switched our bot to use the ConsoleConnector instead of the standard ChatConnecter. This allowed us to remain productive and test our conversation flow before adding in UI elements meant for rich channels. 

The second intial problem we ran into was not being able to access the LUIS API while connected to CME's internal network. Because natural language, and therefore LUIS, were essential to the purpose of our bot, we needed to connect to CME's guest wifi instead to develop and test our bot. This lead to yet another problem because all of the data we needed to access through CME's Confluence was only avaialbe while we were on CME's internal network itself, not through the guest wifi. This put us in a Catch 22 before we had even begun any real development of this project- do we use natural language, the core purpose of the bot, or do we use real data, the foundation of the bot's knowledge. To overcome this roadblock, we set up a test Confluence site that looks like a micro version of CME's real Confluence site to do our testing.

With all of our prerequisties set up and all of our necessary software installed, we were ready to begin development of our bot soluton. A description of our dialog flow is outlined below in the Technical Delivery section.

- [Document Search Dialog](#document-search-dialog)
- [Adding LUIS Entities to Enhance Search](#adding-luis-entities-to-enchance-search)

## Technical Delivery ##

The bot solution we built follows the knowledge base pattern. We are using LUIS to parse any entities the user might have entered which help to guide our search of the Confluence data store. First, we return results based off of the title of the articles in our data store and then we return results based on a text match inside of each document. This way our bot capabilities are much more discoverable and users don't have to specifiy the title of the document to find the information they need. This is described in more detail in each of the sections below.

<!-- Need acess to the code to fully flesh out this section -->
### Document Search Dialog ###


<!-- Need acess to the code to fully flesh out this section -->
### Adding LUIS Entities to Enhance Search ###



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