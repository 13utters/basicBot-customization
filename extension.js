(function () {
    //Link location of your fork so you don't have to modify so many things.
    var fork = "ureadmyname";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }}}
         */
candyCommand: {
                bot.commands.candyCommand: 'candy',
                rank: 'user',
                type: 'startsWith',
                candies: ['has given you a chocolate chip candy!',
                    'has given you a soft homemade oatmeal candy!',
                    'has given you a plain, dry, old candy. It was the last one in the bag. Gross.',
                    'gives you a sugar candy. What, no frosting and sprinkles? 0/10 would not touch.',
                    'gives you a chocolate chip candy. Oh wait, those are raisins. Bleck!',
                    'gives you an enormous candy. Poking it gives you more candies. Weird.',
                    'gives you a fortune candy. It reads "Why aren\'t you working on any projects?"',
                    'gives you a fortune candy. It reads "Give that special someone a compliment"',
                    'gives you a fortune candy. It reads "Take a risk!"',
                    'gives you a fortune candy. It reads "Go outside."',
                    'gives you a fortune candy. It reads "Don\'t forget to eat your veggies!"',
                    'gives you a fortune candy. It reads "Do you even lift?"',
                    'gives you a fortune candy. It reads "m808 pls"',
                    'gives you a fortune candy. It reads "If you move your hips, you\'ll get all the ladies."',
                    'gives you a fortune candy. It reads "I love you."',
                    'gives you a Golden Candy. You can\'t eat it because it is made of gold. Dammit.',
                    'gives you an Oreo candy with a glass of milk!',
                    'gives you a rainbow candy made with love :heart:',
                    'gives you an old candy that was left out in the rain, it\'s moldy.',
                    'bakes you fresh candy, it smells amazing.'
                ],
                getCandy: function () {
                    var c = Math.floor(Math.random() * this.candies.length);
                    return this.candies[c];
                },
                functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                        var msg = chat.message;

                        var space = msg.indexOf(' ');
                        if (space === -1) {
                            API.sendChat(basicBot.chat.eatcandy);
                            return false;
                        }
                        else {
                            var name = msg.substring(space + 2);
                            var user = basicBot.userUtilities.lookupUserName(name);
                            if (user === false || !user.inRoom) {
                                return API.sendChat(subChat(basicBot.chat.nousercandy, {name: name}));
                            }
                            else if (user.username === chat.un) {
                                return API.sendChat(subChat(basicBot.chat.selfcandy, {name: name}));
                            }
                            else {
                                return API.sendChat(subChat(basicBot.chat.candy, {nameto: user.username, namefrom: chat.un, candy: this.getCandy()}));
                            }
                        }
                    }
                }
            },

        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "basicBot",
        language: "english",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        cmdDeletion: true,
        chatLink: "https://rawgit.com/ureadmyname/basicBot/master/lang/langIndex.json",
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 120,
        bouncerPlus: false,
        blacklistEnabled: false,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: false,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        timeGuard: false,
        maximumSongLength: 10,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 2,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
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
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/ureadmyname/basicBot/master/basicBot.js", extend);

}).call(this);
