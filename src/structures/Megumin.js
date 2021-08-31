const { AkairoClient, CommandHandler } = require('discord-akairo');

module.exports = class Megumin extends AkairoClient {
  constructor(config = {}) {
    super(
      { ownerID: '551112253265543178' },
      {
        allowedMentions: {
          parse: ['roles', 'everyone', 'users'],
          repliedUser: false
        },
        partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
        presence: {
          status: 'dnd',
          activities: [
            {  
            name: 'Wissame',
            type: 'STREAMING',
            url: 'https://www.youtube.com/channel/UC0PpaOqVWbbgao2P03LcLAQ'
            }
          ]
        },
        intents: 32767
      }
    );

    this.commandHandler = new CommandHandler(this, {
      allowMention: true,
      prefix: config.prefix,
      defaultCooldown: 2000,
      directory: './src/commands/'
    });

    this.commandHandler.loadAll();
  }
}