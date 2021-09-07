//Grabbing the config file.
const config = require("./config.json");
const fs = require('fs');

//Defining the token.
const token = config.token;

//Starting.
const { Client, Intents, Collection } = require("discord.js");
const { type } = require("os");

//Creating A New Client.
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES]
});

//Launch the bot
client.once('ready', () => {
  console.log('El bot está listo!');

  //Define the bot activity
  client.user.setActivity({
    name: 'que tickets rejectear',
    type: 'WATCHING'
  })
});

//Creating the command collection.
client.commands = new Collection();

//Setting commands directories.
const folders = fs.readdirSync('./commands');

for (const folder of folders) {

  let folderPath = './commands/' + folder;

  const fileComands = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));

  for (const file of fileComands) {
    const comand = require(folderPath.concat('/' + file));
    client.commands.set(comand.data.name, comand);
  }
}

//Listening to slash commands.
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand) return;

  const commandName = interaction.commandName;

  //If we don't have the command return.
  if (!client.commands.has(commandName)) return;

  //Try to launch the command.
  try {
    await client.commands.get(commandName).execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'Algo ha ido mal', ephemeral: true })
  }
});

//Bot Login
client.login(token);