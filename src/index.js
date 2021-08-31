const { TOKEN } = require('./util/config');
const Megumin = require('./structures/Megumin');

let client = new Megumin({ prefix: '?' });

client.login(process.env.TOKEN);