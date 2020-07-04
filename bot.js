const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'YOUR TOKEN HERE';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

var lyrics = [
    "Aww man",
    "So we back in the mine",
    "Got our pickaxe swinging from",
    "Side to side",
    "Side side to side",
    "This task's a grueling one",
    "Hope to find some diamonds to- Night night night",
    "Diamonds to-night",
    "Heads up",
    "You hear a sound",
    "turn around and look up",
    "Total shock fills your body",
    "Oh no it's you again",
    "I could never forget those",
    "Eyes eyes eyes",
    "Eyes eyes eyes eyes",
    "'Cause baby tonight",
    "The creeper's tryin' to steal all our stuff again",
    "'Cause baby tonight",
    "You grab your pick",
    "shovel And bolt again",
    "bolt again -gain",
    "And run, run",
    "until it's done, done",
    "until the sun comes up in the morn'",
    "'Cause baby tonight",
    "The creeper's tryin' to steal all Our stuff again, stuff again -gain",
    "Just when you think you're safe",
    "Overhear some hissing from",
    "Right be-hind",
    "Right right be-hind",
    "That's a nice life you have",
    "Shame it's got to end at this",
    "Time time time",
    "Time time time time",
    "Blows up",
    "And your health bar drops and you could use a one-up",
    "Get inside, don't be tardy",
    "So now you're stuck in there",
    "Half a heart is left but don't",
    "Die die die",
    "Die die die die",
    "'Cause baby tonight",
    "The creeper's tryin' to steal all our stuff again",
    "'Cause baby tonight",
    "You grab your pick, shovel And bolt again, bolt again -gain",
    "And run, run",
    "until it's done, done",
    "until the sun comes up in the morn",
    "'Cause baby tonight",
    "The creeper's tryin' to steal all Our stuff again",
    "(Creepers, you're mine)",
    "(Haha)",
    "Dig up diamonds",
    "Craft those diamonds",
    "Make some armor",
    "Get it baby",
    "Gonna forge it Like your so MLG pro",
    "The sword's made of diamond So come at me, bro",
    "(Huh)",
    "Trainin' in your room Under the torchlight Hone that form To get you ready for the big fight",
    "Every single day",
    "And the whole night",
    "Creepers' out prowlin' (whew) all right",
    "Look at me",
    "look at you",
    "Take my revenge",
    "That's what I'm gonna do",
    "I'm a, warrior baby",
    "What else is new?",
    "And my blade's gonna tear through you",
    "(Bring it)",
    "'Cause baby tonight",
    "The creeper's tryin' to steal all our stuff again",
    "(Gather your stuff, yeah, let's take back the world)",
    "Yeah baby tonight",
    "(Haha)",
    "Have your sword, armor and go",
    "(It's on)",
    "Take your revenge!",
    "So fight, fight",
    "Like it's the last, last night of your life, life",
    "Show them your fight",
    "'Cause baby tonight",
    "The creeper's tryin' to steal all our stuff again",
    "'Cause baby tonight",
    "You grab your pick, shovel And bolt again, bolt again -gain",
    "And run, run",
    "until it's done, done",
    "until the sun comes up in the morn",
    "'Cause baby tonight",
    "The creeper's tried to steal all our stuff again."
];

async function kripr(msg) {
    var i = 0;
    var zpivej = client.setInterval(function() {
        if(i < lyrics.length)
            msg.channel.send(lyrics[i], {tts: true});
        else clearInterval(zpivej);
        i++;
    }, 1200);
}

client.on('message', msg => {
    if (msg.content === 'creeper') {
        kripr(msg);
    }
});

client.login(token);