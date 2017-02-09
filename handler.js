'use strict';

const request = require('request-promise');
const qs = require('qs');

module.exports.search = (event, context, callback) => {
    const params = qs.parse(event.body);

    if(params.token !== process.env.slackToken) {
        return callback(null, {
            statusCode: 403
        });
    }

    return request.get("https://www.googleapis.com/customsearch/v1", {
        json: true,
        qs: {
            key: process.env.googleApiKey,
            cx: process.env.googleSearchEngine,
            q: params.text,
            num: 1,
            searchType: 'image'
        }
    }).then(resp => {
        return resp.items.length > 0 ?
            resp.items[0] :
            null;
    }).then(result => {
        if(!result) {
            return {
                text: "Weird. The internet doesn't contain what you searched for."
            };
        }

        return {
            text: "<@" + params.user_id + "|" + params.user_name + "> here is your image :sparkles:",
            attachments: [{
                image_url: result.link,
                thumb_url: result.image.thumbnailLink,
                fallback: result.snippet,
                title: result.snippet
            }],
            response_type: "in_channel"
        };
    }).catch(err => {
        return {
            text: "Sorry, there was an error :boom:"
        };
    }).then(body => {
        callback(null, {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    });
};
