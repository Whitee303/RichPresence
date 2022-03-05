const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});
const Gamedig = require('gamedig')
let date = new Date();

function UpdateStatements() {
    Gamedig.query({
        type: 'mtasa',
        host: '51.83.184.65'    
	}).then((state) => {
        rpc.setActivity({
            details: `Podłączeni gracze: ${state.players.length} / ${state.maxplayers}`,
            state: `Ping serwera: ${state.ping}`,
            largeImageKey: "1024",
            smallImageText: 'Multi Theft Auto',
            smallImageKey: 'mtasa',
            startTimestamp: date,
            buttons: [{ label: 'Discord', url: 'https://discord.gg/projectrpg' }, { label: 'Wejdź do gry', url: 'mtasa://s.projectrpg.pl:22003' }],
            largeImageText: "ProjectRPG"
        });
    })
}


rpc.on('ready', () => {
    UpdateStatements();
    setInterval(function () {
        UpdateStatements();
    }, 10000)
    console.log(`Ready!`);

});

rpc.login({
    clientId: "929701228898820136"
});

