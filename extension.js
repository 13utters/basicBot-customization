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
        var autoRules = true;
        var time= 1000* 60;
        
        bot.retrieveSettings();
        // change "1000 * 60" to, "time"
        
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
            if(autoRules === true) {
                API.sendChat("!rules");
            }
        }, 1000 * 60 * 78);
        
setInterval(function () {
            if(autoRoulette === true) {
                API.sendChat("!roulette");
            }
        }, 1000 * 60 * 91);
 /*       
             bot.commands.countdownCommand = {
	command: 'countdown',
	rank: 'manager',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("");
}
}
}; */

             bot.commands.allbotstuffCommand = {
	command: 'allbotstuff',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me everything to do with the room and bot: https://goo.gl/At5qWh");
}
}
};

             bot.commands.rouletteinfoCommand = {
	command: 'rouletteinfo',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me Roulette is run every 90 mins, do !join to join when it starts if you win you get first on the waitlist!");
}
}
};

             bot.commands.djcycleinfoCommand = {
	command: 'djcycleinfo',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me djcycle is the setting that adds you back onto the waitlist after playing a song, if it's disabled you will have to manually do this.");
}
}
}; 

             bot.commands.plugcolorCommand = {
	command: 'plugcolor',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me Plugcolor v1.1.1, http://pastebin.com/raw.php?i=FXnFBTwR");
}
}
};

             bot.commands.killtrollCommand = {
	command: 'killtroll',
	rank: 'bouncer',
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
	command: 'subinfo',
	rank: 'user',
	type: 'exact',
	functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
API.sendChat("/me what are subscriptions? http://goo.gl/Lcw6wX");
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
                    API.sendChat("/me Shuffle Message now set to " + autoShuffle);
                }
            }
        };

            bot.commands.automateRules = {
            command: ['autoRules'],
            rank: 'manager',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    autoRules = !autoRules;
                    API.sendChat("/me Rules now set to " + autoRules);
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
                var thebleepbloop = [' . ', ' .. ', ' ... '];
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
                    API.sendChat("/me Fav Message now set to " + autoFav);
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
        afkRemoval: false,
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
            ["crapiplayedthewrongsong", "That song wasn't the song the person wanted to play :P "],
            ["unavailable", "The song you played was not available for some users. "]
            ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Temporary Message of the Day",
        filterChat: false,
        etaRestriction: false,
        welcome: false,
        opLink: "https://rawgit.com/ureadmyname/basicBot-customization/master/ExampleOPlist.json",
        rulesLink: "http://goo.gl/5SNSgo",
        themeLink: "http://en.wikipedia.org/wiki/List_of_electronic_music_genres",
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
