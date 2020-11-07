const botbuilder = require('botbuilder');

const userController = {};

const adapter = new botbuilder.BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});


// POST Messagge
userController.sendMessage = (req, res) => {
    adapter.processActivity(req, res, async (context) =>{
        if (context.activity.type === "message"){
            const res = context.activity.text;

            await context.sendActivity(`Hola lo que escribiste fue ${ res }`)
        }
    })
}

 
module.exports = userController;