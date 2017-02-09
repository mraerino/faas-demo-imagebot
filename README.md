# Slack Imagebot (FaaS Demo)

An Imagebot for Slack that returns the first image found for a user's search query.

This was built for the Serverless talk by [@neolegends](https://github.com/neolegends) and [@mraerino](https://github.com/mraerino).

Slides are here: https://docs.google.com/presentation/d/17uoIhA2Qbugeyi3UKmM5qmYQbejCcQyS1-F0nxEGlm0/edit?usp=sharing


## Getting started

### Dependencies

- Node.JS
- Serverless Framework `npm i -g serverless`

### AWS & Serverless Framework

Please see the [Serverless Framework manual](https://serverless.com/framework/docs/providers/aws/guide/credentials/) for how to setup the tools to deploy this.

### Deploy

```sh
serverless deploy
```

### Slack setup

Please see the [Slack manual](https://api.slack.com/slash-commands#attaching_your_custom_command_to_an_app) on how to setup your Slash command.