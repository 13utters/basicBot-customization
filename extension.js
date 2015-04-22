(function () {
    var fork = "ureadmyname";
		
    function extend() {
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;
        var autoRoulette = true;
        var autoFav = true;
        var autoShuffle = true;
        
        bot.retrieveSettings();
        
setInterval(function () {
            if(autoShuffle === true) {
                API.sendChat("!shuffle");
            }
        }, 1000 * 60 * 49);
        
setInterval(function () {
            if(autoFav === true) {
                API.sendChat("!fav");
            }
        }, 1000 * 60 * 67);
        
setInterval(function () {
            if(autoRoulette === true) {
                API.sendChat("!roulette");
            }
        }, 1000 * 60 * 91);

             bot.commands.plugcolorCommand = {
	command: 'plugcolor',
	rank: 'manager',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me http://pastebin.com/raw.php?i=FXnFBTwR");
}
}
};  
/*
bot.commands.propsCommand = {
	command: 'props',
	rank: 'user',
	type: 'startsWith',
	prop: ['nice play!',
                    'great song!',
                    'amazing song!',
                    'lovin this song!'
                ],
                getprop: function () {
                    var c = Math.floor(Math.random() * this.prop.length);
                    return this.prop[c];
                },
functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                        var msg = chat.message;
                        var space = msg.indexOf(' ');
                        if (space === -1) {
                            API.sendChat(basicBot.chat.getprops);
                            return false;
                        }
                        else {
                            var name = msg.substring(space + 2);
                            var user = basicBot.userUtilities.lookupUserName(name);
                            if (user === false || !user.inRoom) {
                                return API.sendChat(subChat(basicBot.chat.nouserprops, {name: name}));
                            }
                            else if (user.username === chat.un) {
                                return API.sendChat(subChat(basicBot.chat.selfprops, {name: name}));
                            }
                            else {
                                return API.sendChat(subChat(basicBot.chat.props, {nameto: user.username, namefrom: chat.un, props: this.getprop()}));
                            }
                        }
                    }
                }
            }, */

             bot.commands.killtrollCommand = {
	command: 'killtroll',
	rank: 'manager',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me http://i.imgur.com/bwNSflr.jpg");
}
}
};
         
            bot.commands.dcinfoCommand = {
	command: 'dcinfo',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me Do !dc if you have recently disconnected to get your position on the waitlist back.");
}
}
};   
              bot.commands.whatissubCommand = {
	command: 'whatissub',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me http://goo.gl/Lcw6wX what are subscriptions?");
}
}
};  
        
        bot.commands.twitchCommand = {
	command: 'twitch',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me http://www.twitch.tv/theqtpi");
}
}
};
        
        bot.commands.shuffleCommand = {
	command: 'shuffle',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me Like other genres than EDM? Then you better be here Wednesday and Friday, any genre is allowed!!!");
}
}
};

            bot.commands.automateRoulette = {
            command: ['autoroulette'],
            rank: 'manager',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    autoRoulette = !autoRoulette;
                    API.sendChat("/me Roulette now set to " + autoRoulette);
                }
            }
        };

            bot.commands.automateShuffle = {
            command: ['autoshuffle'],
            rank: 'manager',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    autoShuffle = !autoShuffle;
                    API.sendChat("/me Shuffle now set to " + autoShuffle);
                }
            }
        };

        bot.commands.bleepbloopCommand = {
	command: 'bleepbloop',
	rank: 'bouncer',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                var thebleepbloop = ['great song!', 'great song, brah!', 'nice song!'];
var randomIndex = Math.floor(Math.random() * thebleepbloop.length);
var randomString = thebleepbloop[randomIndex];
                        API.sendChat(subChat(basicbot.chat.bleepbloop, {name: chat.un, response: basicBot.settings.bleepbloop[randomIndex]}));
                    }
                }
            };
            
            bot.commands.automateFav = {
            command: ['autofav'],
            rank: 'manager',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    autoFav = !autoFav;
                    API.sendChat("/me Fav now set to " + autoFav);
                }
            }
        };
            
bot.commands.favCommand = {
	command: 'fav',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me Remember to click the star in the top bar to favorite this room!!!");
}
}
};

bot.commands.doarefreshCommand = {
	command: 'ref',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me Having a problem or issue with plug.dj? Try refreshing =)");
}
}
};

bot.commands.trollCommand = {
	command: 'troll',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me :trollface:");
}
}
};
        bot.loadChat();

    }

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "qtbot",
        language: "english",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        cmdDeletion: true,
        chatLink: "https://rawgit.com/ureadmyname/basicBot/master/lang/en.json",
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
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 1,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["crapiplayedthewrongsong", "That song wasn't the song the person wanted to play. "],
            ["unavailable", "The song you played was not available for some users. "]
    ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Temporary Message of the Day",
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: "http://pastebin.com/raw.php?i=TmHQYit2",
        rulesLink: "http://goo.gl/5SNSgo",
        themeLink: "http://en.wikipedia.org/wiki/Electronic_dance_music",
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 30,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/ureadmyname/basicBot-customization/master/ExampleNSFWlist.json",
            OP: "https://rawgit.com/ureadmyname/basicBot-customization/master/ExampleOPlist.json"
        }
    }));

    $.getScript("https://rawgit.com/ureadmyname/basicBot/master/basicBot.js", extend);

}).call(this);
