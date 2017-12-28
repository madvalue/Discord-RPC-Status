const DiscordRPC = require("discord-rpc");
const DiscordJS = require("discord.js");
const client = new DiscordJS.Client();

var token = "nasz token";
var naglowek = "Górny tekst statusu";
var zawartosc = "Dolny tekst statusu";

const rpc = new DiscordRPC.Client({
	transport: 'ipc'
});

var timestamp = new Date();

function setAgain() {
    rpc.setActivity({
        details: naglowek,
        state: zawartosc,
        timestamp,
        largeImageKey: undefined,
        largeImageText: undefined,
        instance: true,
    });
}

rpc.on("ready", function () {
    setAgain();
});

client.login(token);
client.on("ready", function () {
    rpc.login(client.user.id).catch(console.error);
});
