# Search Confluence with Bot Framework

To run this project: 

1. Setup a LUIS Application with:
    - Intents: Search, Greeting, Help, Closing, and None
    - Entities: SearchTerm
2. Update the .env file. Here is a sample:
```
# Bot Framework Variables
MICROSOFT_APP_ID=
MICROSOFT_APP_PASSWORD=

# This Url can be obtained by uploading or creating your model from the LUIS portal: https://www.luis.ai/
LUIS_MODEL_URL=https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/456jkhsd-f098-4441-9f16-3drt43hrt?subscription-key=tu89w5woutjreuiseltri7fa9&timezoneOffset=0&verbose=true&q=

CONFLUENCE_USERNAME=admin
CONFLUENCE_PASSWORD=password
CONFLUENCE_SITE_URL=http://confluence.atlassian.net
```

3. Install the npm packages in the `confluence-search-bot` folder with the command `npm install`
4. Run this project in the `confluence-search-bot` folder with the command `node app`
5. Use the Bot Emulator and connect to `http://localhost:3978/api/messages`
6. Interact with the bot using commands like "search for password"

*Please note that an APP Id and Password should be added to the .env for security.