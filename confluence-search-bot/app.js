// This loads the environment variables from the .env file
require('dotenv-extended').load();

var builder = require('botbuilder');
var restify = require('restify');
var Search = require('./search');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
// Create connector and listen for messages
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector, function (session) {
    session.send('Sorry, I did not understand \'%s\'. Type \'help\' if you need assistance.', session.message.text);
});

// You can provide your own model by specifing the 'LUIS_MODEL_URL' environment variable
// This Url can be obtained by uploading or creating your model from the LUIS portal: https://www.luis.ai/
var recognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL);
bot.recognizer(recognizer);

bot.dialog('Search', [
    function (session, args, next) {

        var searchEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'SearchTerm');

        if (searchEntity) {
            var searchTerm = searchEntity.entity;
            session.send("Great! I am searching for " + searchTerm);

            Search.search(searchTerm)
                .then(function (results) {
                    var message = new builder.Message()
                        .attachmentLayout(builder.AttachmentLayout.carousel)
                        .attachments(results.map(ResultAsAttachment));

                    session.send(message);

                    session.endDialog();
                });
        }
    }
]).triggerAction({
    matches: 'Search',
    onInterrupted: function (session) {
        session.send('Sorry I did not understand or something happened. Please ask me to search for something or type \'help\' for assistance.');
    }
});

bot.dialog('Help', function (session) {
    session.endDialog('I\'m here to help! Try asking me things like \'search for password policy\' or \'find me the email templates\'');
}).triggerAction({
    matches: 'Help'
});

bot.dialog('Greeting', function (session) {
    session.endDialog('Hi! I can help you search Confluence. Try asking me things like \'search for password policy\' or \'find me the email templates\'');
}).triggerAction({
    matches: 'Greeting'
});

function ResultAsAttachment(result) {
    return new builder.HeroCard()
        .title(result.title)
        .buttons([
            new builder.CardAction()
                .title('More details')
                .type('openUrl')
                .value(process.env.CONFLUENCE_SITE_URL + "/wiki/rest/api/content/" + result.id)
        ]);
}