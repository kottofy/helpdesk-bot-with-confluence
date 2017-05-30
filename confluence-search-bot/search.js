var request = require('request');
var Promise = require('bluebird');

module.exports = {
    search: function (searchTerm) {
        return new Promise(function (resolve) {

            var username = process.env.CONFLUENCE_USERNAME,
                password = process.env.CONFLUENCE_PASSWORD,
                url = 'http://' + username + ':' + password + '@confluencesite.atlassian.net/wiki/rest/api/search?cql=text~' + searchTerm;

            var results = [];

            request(
                {
                    method: 'GET',
                    uri: url
                }, function (error, response, body) {
                    if (response.statusCode == 200) {
                        console.log("Success");
                        results = JSON.parse(body).results;
                        // console.log(results);
                        resolve(results);
                    } else {
                        console.log('error: ' + response.statusCode);
                        console.log(body);
                    }
                }
            );
        });
    }
}