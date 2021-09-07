# DailyBotX
DailyBotX is a team-6 discord bot for manage the server.

### General Commands

- `/help` -> Lists all commands or just help for one command.
- `/daily` -> Returns a random user.

# Installation

This bot runs on [node.js](https://nodejs.org). You will need at least node 16.9.0.

## Windows

1. Install [node.js](https://nodejs.org/en/download/)
3. Install [Visual Studio Code](https://code.visualstudio.com/)
6. Run `npm install` and make sure it succeeds
7. Set up your bot token in `config.json`
8. Run `npm start` or `node app.js` to test the bot out!

# Setting up

- `For the commands to work correctly, you need to configure the slash command.`

Before the first run you will need to create an `config.json` file. A bot token is required. The other credentials are not required for the bot to run, but they are highly recommended as commands that depend on them will not function.

[Please see this excellent guide for how to create your discord bot's account and get your bot token.](https://discordjs.guide/preparations/setting-up-a-bot-application.html)

Verify that the bot runs with your config by running `npm start`.

## Updates
If you update the bot, please run `npm update` before starting it again. If you have
issues with this, you can try deleting your node_modules folder and then running
`npm install` again. Please see [Installation](#Installation).
