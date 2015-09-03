(function () {

function extend() {
if (!window.bot) {
return setTimeout(extend, 1 * 1000);
}

var autoFav = true;
var autoRoulette = true;
var autoRules = true;
var autoShuffle = true;
var autoTwitch = false;
var autoQuestion = true;
var bot = window.bot;
var minute= 1000 * 60;

bot.retrieveSettings();

var spamWords = ['spam1234', 'spam2341', 'spam3412', 'spam4123'];
for (var i = 0; i < spamWords.length; i++) {
window.bot.chatUtilities.spam.push(spamWords[i]);
}

setInterval(function () {
if(autoShuffle === true) {
API.sendChat("!shuffle");
}
},
1000 * 60 * 49);

setInterval(function () {
if(autoFav === true) {
API.sendChat("!fav");
}
},
1000 * 60 * 67);
        
setInterval(function () {
if(autoRules === true) {
API.sendChat("!rules");
}
},
1000 * 60 * 78);
        
setInterval(function () {
if(autoRoulette === true) {
API.sendChat("!roulette");
}
},
1000 * 60 * 91);

setInterval(function () {
if(autoQuestion === true) {
API.sendChat("!question");
}
},
1000 * 60 * 103);

setInterval(function () {
if(autoTwitch === true) {
API.sendChat("!twitchlive");
}
},
1000 * 60 * 15);

bot.commands.abuseCommand = {
command: 'abuse',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Please do not abuse the !dc command. !dc is for when you have internet issues; Not for when you leave to go to another community and or leave to go do something else.");}}};

bot.commands.allbotstuffCommand = {
command: 'allbotstuff',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Everything to do with the room and bot: https://goo.gl/At5qWh");}}};

bot.commands.automateFav = {
command: ['autofav'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoFav = !autoFav;
API.sendChat("/me Fav Message now set to " + autoFav);}}};

bot.commands.automateRoulette = {
command: ['autoroulette'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoRoulette = !autoRoulette;
API.sendChat("/me Roulette now set to " + autoRoulette);}}};
                    
bot.commands.automateRules = {
command: ['autorules'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoRules = !autoRules;
API.sendChat("/me Rules now set to " + autoRules);}}};

bot.commands.automateShuffle = {
command: ['autoshuffle'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoShuffle = !autoShuffle;
API.sendChat("/me Shuffle message now set to " + autoShuffle);}}};

bot.commands.automateTwitch = {
command: ['autotwitch'],
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {
autoTwitch = !autoTwitch;
API.sendChat("/me Twitch message now set to " + autoTwitch);}}};

bot.commands.bleepbloopCommand = {
command: 'bleepbloop',
rank: 'bouncer',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else{API.sendChat(subChat(basicbot.chat.asdfasdf, {name: chat.un, response: basicBot.settings.asdfasdf}));}}};

bot.commands.dcinfoCommand = {
command: 'dcinfo',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Do !dc if you have recently disconnected to get your position on the waitlist back!");}}};

bot.commands.djcycleinfoCommand = {
command: 'djcycleinfo',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Djcycle is a setting that automatically adds you back onto the waitlist after playing a song. If it's disabled you will have to manually add yourself back.");}}};

bot.commands.favCommand = {
command: 'fav',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Remember to click the star in the top bar to favorite this room!! http://i.imgur.com/sXDxQgj.png");}}};

bot.commands.guidelinesCommand = {
command: 'guidelines',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Staff Guidelines: http://git.io/vGZFx");}}};

bot.commands.illuminatiCommand = {
command: 'illuminati',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me http://i.imgur.com/7JEucMA.png");}}};

bot.commands.killtrollCommand = {
command: 'killtroll',
rank: 'bouncer',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me http://i.imgur.com/bwNSflr.jpg");}}};

bot.commands.questionCommand = {
command: 'question',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me It would be extremely appreciated if you take 1 minute out of your day to answer a couple questions to help us better our community :) http://questionpro.com/t/ALh4WZSw1M");}}};

bot.commands.doarefreshCommand = {
command: 'ref',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Having a problem or issue with plug.dj? Try refreshing =)");}}};

bot.commands.rouletteinfoCommand = {
command: 'rouletteinfo',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Roulette is run every 90 mins, do !join to join when it starts. If you win you get first on the waitlist!");}}};

bot.commands.rule8Command = {
command: 'rule8',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me http://goo.gl/5SNSgo Rule 8: Please don't beg to be part of the community staff.");}}};

bot.commands.shuffleCommand = {
command: 'shuffle',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Like other genres than EDM? Then you better be here Monday and Friday Shuffle, any genre is allowed! Shuffle time is run 12am EST till 12am PDT");}}};

bot.commands.staffCommand = {
command: 'staff',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me Tips for trying to get staff: http://git.io/vG7Wj");}}};  

bot.commands.whatissubCommand = {
command: 'subinfo',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me What are subscriptions? http://goo.gl/Lcw6wX");}}};

bot.commands.twitchCommand = {
command: 'twitch',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me http://www.twitch.tv/theqtpi");}}};

bot.commands.twitchliveCommand = {
command: 'twitchlive',
rank: 'manager',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {API.sendChat("/me TheQTpi is live right now! Come watch her stream with us here: http://www.twitch.tv/theqtpi");}}};
//
bot.loadChat();}
localStorage.setItem("basicBotsettings", JSON.stringify({

botName: "qtbot",
language: "english",
chatLink: "https://rawgit.com/ureadmyname/basicBot/master/lang/en.json",
scriptLink: "https://rawgit.com/ureadmyname/basicBot/master/basicBot.js",
roomlock: false,
startupCap: 1,
startupVolume: 0,
startupEmoji: false,
autowoot: true,
autoskip: false,
smartSkip: true,
cmdDeletion: true,
maximumAfk: 120,
afkRemoval: true,
maximumDc: 180,
bouncerPlus: false,
blacklistEnabled: true,
lockdownEnabled: false,
lockGuard: false,
maximumLocktime: 10,
cycleGuard: false,
maximumCycletime: 10,
voteSkip: false,
voteSkipLimit: 10,
historySkip: false,
timeGuard: true,
maximumSongLength: 10,
autodisable: true,
commandCooldown: 15,
usercommandsEnabled: true,
skipPosition: 1,
skipReasons: [
["theme", "This song does not fit the room theme. "],
["op", "This song is on the OP list. "],
["history", "This song is in the history. "],
["sound", "The song you played had bad sound quality or no sound. "],
["nsfw", "The song you contained was NSFW (image or sound). "],
["unavailable", "The song you played was not available for some users. "]],
afkpositionCheck: 15,
afkRankCheck: "ambassador",
motdEnabled: false,
motdInterval: 5,
motd: "Temporary Message of the Day",
filterChat: false,
etaRestriction: false,
welcome: true,
opLink: "http://git.io/vOTmj",
rulesLink: "http://goo.gl/5SNSgo",
themeLink: "Community Theme: http://en.wikipedia.org/wiki/List_of_electronic_music_genres",
fbLink: "No FB link at the moment.",
youtubeLink: "No YT link at the moment.",
website: "No website at the moment.",
intervalMessages: [],
messageInterval: 30,
songstats: false,
commandLiteral: "!",
blacklists: {
NSFW: "https://rawgit.com/ureadmyname/basicBot-customization/master/ExampleNSFWlist.json",
OP: "https://rawgit.com/ureadmyname/basicBot-customization/master/ExampleOPlist.json",
BANNED: "https://rawgit.com/ureadmyname/basicBot-customization/master/ExampleBANNEDlist.json"}}));
$.getScript("https://rawgit.com/ureadmyname/basicBot/master/basicBot.js", extend);
}).call(this);
