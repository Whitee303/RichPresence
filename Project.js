const RPC = require("discord-rpc");
 
  var prompt = require('prompt-sync')({});
 
  let name = prompt('Nazwa serwera: ');

const ServerData = [
  {
    name: 'ProjectRPG', dataname:'❤ ProjectRPG ► Innowacyjny Polski Serwer RPG | ProjectRPG.pl', image:'projectrpg', ip: '146.59.4.44', port: '22003'
  },
  {
    name: '4life', dataname:"»» 4Life «« Polski Serwer RPG w nowoczesnym wydaniu « mta4life.pl | ServerProject »", image:'4life', ip: '137.74.7.181', port: '22110'
  },
  {
    name: 'ParadiseRPG', dataname:'••• paradise-rpg.pl ••• | Polski Serwer RPG | Voice/Prace/Gangi/Farmy/Biznesy' ,image:'paradiserpg', ip: '146.59.52.65', port: '22003'
  },
  {
    name: 'Polish Real Life', dataname:'Polish Real Life [PRL] (Polski Serwer RPG)', image:'polish_real_life', ip:'147.135.199.149', port: '22003'
  },
  {
    name: 'New Real Life - Polski Serwer RPG | Prace ・ Frakcje ・ Gangi ・ Biznesy ・ Voice Chat', image:'new_real_life', ip: '193.70.126.129', port: '20000'
  },
  {
    name: 'ffs',dataname:'FFS Gaming DM/Race/DD/Hunter/Shooter/Stuntage/Trials/HP/RUN/CW/PTP/CarBall/Training/Minigames' , image:'ffs', ip: '54.37.245.209', port:'22003'
  },
  {
    name: 'top-dayz', datataname:'█ #1 █ TOP-GTA DayZ International █ #1 █ [ZOMBIES PVP DM CARS EASY BR PT FPS+ BSOD-NONE]',image:'top-dayz', ip:'160.202.166.14' , port:'22003'
  },
  {
    name: 'multirpg',dataname:'MultiRPG | Polski Serwer RPG • Duze zarobki • Darmowe premium • Voice •', image:'multirpg', ip: '51.83.214.131' , port:'22003'
  },
  {
    name: 'megarpg',dataname:'» MegaRPG «  Polski Serwer RPG • Autorskie skrypty • Wysokie zarobki • megarpg.pl', image:'megarpg', ip: '137.74.4.38' , port:'22003'
  },

]


const rpc = new RPC.Client({
    transport: "ipc"
});

const Gamedig = require('gamedig')
let date = new Date();
function UpdateStatements() {
  const data = ServerData.find(x => x.name === name);
    Gamedig.query({
        type: 'mtasa',
        host: data.ip,
        port: parseInt(data.port)
	}).then((state) => {
        rpc.setActivity({
            details: `${data.dataname}`,
            state: `Obecnie graczy: ${state.players.length.valueOf()}/${state.maxplayers}`,
            largeImageKey: "mtasa_icon_hq",
            smallImageKey: data.image,
            smallImageText: `${data.name}`,
            largeImageText: `Multi Theft Auto San Andreas`,
            startTimestamp: date,
        });
    }).catch((error) => {
      console.log(error)
    });
}


rpc.on('ready', () => {
    UpdateStatements();
    setInterval(function () {
        UpdateStatements();
    }, 20000)
    console.log(`Ready!`);

});

rpc.login({
    clientId: "960904632492781599"
});

