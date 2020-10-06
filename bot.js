const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("in NexusMart", {type: "PLAYING", text: "in NexusMart"});
	
	global.guild = bot.guilds.cache.get('721150125644185609');
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
	
	if (message.channel.id == "721150326526181408") {
        message.react('❤️');

        const verifiedRole = global.guild.roles.cache.find(role => role.name === 'Verified Customer');
        const author = message.author.id;
        const memberId = global.guild.members.cache.find(member => member.user.id == author);

        if (memberId) memberId.roles.add(verifiedRole);

        let embed = new Discord.MessageEmbed()
            .setColor('#5B0FEC')
            .setAuthor('New verification message')
            .setDescription(`\nUser @${message.author.tag} sent message in vouch channel: \`${message.content}\``)
            .setTimestamp();

        let channel = bot.channels.cache.get('721182139500068964');

        if (!channel) {
            console.log('The logging channel could not be found');
        } else {
            channel.send('', { embed });
        }
    }

    let prefix = process.env.BOT_PREFIX
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    const memberId = global.guild.members.cache.find(member => member.user.id == message.author.id);
    
    if (memberId || memberId.roles.cache.some(role => role.name !== 'Admin')) {
        if (message.channel.id !== "721150277247565877" && message.content.startsWith === "nm!") {
            return message.channel.send("Please send the command in <#721150277247565877>");
        }
    }

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello!")
    }

    if(cmd === `${prefix}ping`){
	return message.channel.send("Pong.")
    } 
	
    if(cmd === `${prefix}server`){
	return message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nTotal Autists: 7`);
    }
	
    if(cmd === `${prefix}info`){
	if (!message.mentions.users.size) {
		return message.reply('you need to tag a user in order to info them!');
	}
	    
	const taggedUser = message.mentions.users.first();
	    
	return message.channel.send(`Username: ${taggedUser.username}\n ID: ${taggedUser.id}`);
    }
	
    if(cmd === `${prefix}dupe`) {
	const amount = parseInt(args[0]);

	if(isNaN(amount)){
		return message.reply('that doesn\'t seem to be a valid number.');
	}
	else if(amount < 1){
		return message.reply('Choose a value above 0');
	}
	else if(amount === 1){
		return message.reply('Price is $' + 25);
	}
	else if(amount === 2){
		return message.reply('Price is $' + 40);
	}
	else{
		x = 40 + (amount - 2) * 10;
		return message.reply('Price is $' + x);
	}
	
}
	
    if(cmd === `${prefix}deca`) {
	const amount = parseInt(args[0]);

	if(isNaN(amount)){
		return message.reply('that doesn\'t seem to be a valid number.');
	}
	else if(amount < 1){
		return message.reply('Choose a value above 0');
	}
	else if(amount > 1 && amount < 100 ){
		
			
		return message.reply('Price is $' + amount * 0.25);
	}
	else if(amount > 100 && amount < 250){
		
			
		return message.reply('Price is $' + amount * 0.20);
	}
	else if(amount > 250 && amount < 350){
		
			
		return message.reply('Price is $' + amount * 0.18);
	}
	else if(amount > 350 && amount < 500){
		
			
		return message.reply('Price is $' + amount * 0.16);
	}
	else if(amount > 500 && amount < Infinity){
		
			
		return message.reply('Price is $' + amount * 0.15);
	}	
	
}
    if(cmd === `${prefix}help`) {
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Help Panel")
        .setThumbnail("https://i.imgur.com/B4LMAPa.png")
        .addField("NexusMart:",
        "Prefix: nm!\nLanguage: English")
        .addField("👷 Admin:\n",
        "**Management:**\nnm!welcome\nnm!terms-of-service\nnm!ban *member*\nnm!kick *member*\n\n**Duping:**\nnm!dupe\nnm!vaultslot\nnm!qchest\nnm!runes\nnm!misc\n\n**Shop:**\nnm!deca-shop\nnm!keyper-running\nnm!skin-shop\nnm!maxing-service\nnm!event-farming\nnm!exaltation\nMore Unreleased\n\n**Dungeons:**\nnm!dungeon-running-overview\nnm!losthalls\nnm!oryx3\nnm!shatters\nnm!fungal\nnm!nest\nnm!parasite\nnm!thicket\nMore Unreleased!")
        .addField("❤️ Everyone:\n",
        "**Public Commands:**\nnm!dupe *amount*\nnm!deca *amount*\nnm!server\nnm!info *member*\nnm!hello\nnm!ping")
        .setDescription("Help Panel for NexusMart")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }	

	
    
    // check if the user sending the command has the Admin role, otherwise return
    if (!memberId || !memberId.roles.cache.some(role => role.name === 'Admin')) return;

    if(cmd === `${prefix}thicket`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Thicket Running")
        .setThumbnail("https://i.imgur.com/xFWvgyV.png")
        .addField("Requirements:",
        "\nRare Pet and 2/8 Char. (Reqs change based on runner)")
        .addField("First Boss Only runs (Tenne):",
        "1-8 Runs: $0.90 ea.\n9-16 Runs: $0.85 ea.\n17+ Runs: $0.80")
        .addField("Full 3-Boss Run:",
        "1-8 Runs: $0.95 ea.\n9-16 Runs: $0.90 ea.\n17+ Runs: $0.85 ea.")
        .setDescription("Purchase the cheapest thicket runs!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}nest`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Nest Running")
        .setThumbnail("https://i.imgur.com/hUWc3IV.png")
        .addField("Requirements:",
        "\n1x Rare Pet and 4/8 Char. (Reqs change based on runner)")
        .addField("Full Nest runs:",
        "1-8 Runs: $0.95 ea.\n9-16 Runs: $0.90 ea.\n17+ Runs: $0.85 ea.")
        .setDescription("Purchase the cheapest nest runs! (Maximum 20 per purchase)")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}fungal`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Fungal Running")
        .setThumbnail("https://i.imgur.com/K6rOQzR.png")
        .addField("Requirements:",
        "\nMeet the Fungal Discord requirements.")
        .addField("Full Fungal runs:",
        "1-8 Runs: $1.05 ea.\n9-16 Runs: $0.95 ea.\n17+ Runs: $0.90 ea.")
        .setDescription("Purchase the cheapest fungal runs!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}shatters`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Shatters Running")
        .setThumbnail("https://static.drips.pw/rotmg/wiki/Enemies/shtrs%20The%20Forgotten%20King.png")
        .addField("Requirements:",
        "\nMeet Shatters' Discord requirements.")
        .addField("Full Shatters runs:",
        "1-8 Runs: $1.00 ea.\n9-16 Runs: $0.95 ea.\n17+ Runs: $0.90 ea.")
        .setDescription("Purchase the cheapest shatters runs!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}losthalls`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Lost Halls Running")
        .setThumbnail("https://i.imgur.com/kbzthE4.png")
        .addField("Requirements:",
        "\n1x Rare Pet + Meet Wonderland or PubHalls's stat and equipment requirements.")
        .addField("Cult/Marble Colossus only runs:",
        "1-8 Runs: $1.00 ea.\n9-16 Runs: $0.95 ea.\n17-23 Runs: $0.90 ea.\n24+ Runs: $0.85 ea.")
        .addField("Void runs:",
        "1-8 Runs: $1.05 ea.\n9-16 Runs: $0.95 ea.\n17+ Runs: $0.90 ea.")
        .setDescription("Purchase the cheapest Lost Halls runs!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}event-farming`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Event Farming")
        .setThumbnail("https://static.drips.pw/rotmg/wiki/Enemies/shtrs%20Loot%20Balloon%20Bridge.png")
        .addField("Price per event:",
        "1-50 Runs: $0.70 ea.\n50+ Runs: $0.60 ea.")
        .addField("Info:",
        "Please understand that this service does not mean that we will keep running until you get a white bag. We will run the events and pick anything that is dropped up including white bags. Even of you receive the white from the specific event, we will continue until all runs have been completed. You may discuss what/what not you want picked up with the runner.")
        .setDescription("Purchase the cheapest event runs!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}lod-running`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Lair of Draconis Running")
        .addField("Requirements:",
        "\nRare Pet")
        .setThumbnail("https://i.imgur.com/beABgum.png")
        .addField("Run includes:",
        "Killing: Feargus, Pyyr, Nikao, Limoz and the Ivory Wyvern")
        .addField("Full LOD run:",
        "1-8 Runs: $0.60 ea.\n9-16 Runs: $0.55 ea.\n17-23 Runs: $0.45 ea.\n24-32 Runs: $0.40 ea.")
        .setDescription("Purchase the cheapest LOD runs!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}parasite`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Parasite Running")
        .addField("Requirements:",
        "\nRare Pet")
        .setThumbnail("https://i.imgur.com/zodPEFO.png")
        .addField("Full Parasite run:",
        "1-8 Runs: $0.80 ea.\n9-16 Runs: $0.75 ea.\n17-23 Runs: $0.70 ea.\n24-32 Runs: $0.65 ea.")
        .setDescription("Purchase the cheapest parasite runs!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}welcome`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Welcome to NexusMart!")
        .addField("Introduction:",
        "Welcome to NexusMart! We are a ReaIm of the Mad God trading server with the BEST prices and Fast deliveries! We offer a Deca and ST shop, Maxing services, Event grinding, and Dungeon running!")
        .setThumbnail("https://i.imgur.com/dtHiq94.jpg")
        .addField("Promotions:",
        "<@&730631385542295624> will receive 3 Decas, 1 Valentine Egg, and access to our Private Giveaway Channel!")
        .addField("Additional Info:",
        "You can expect to see plenty of giveaways in the Private Giveaway channel if you become part of the boosting team! Please enjoy your stay at NexusMart!\n\nReact with the ':heart:' emoji to gain access to the rest of the server.\n")
        .setDescription("Welcome to NexusMart, the cheapest and best RotMG store.")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}terms-of-service`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Terms of Service")
        .addField("Paypal:",
        "All purchases are made through PayPal Friends and Family. This is to prevent charge backs, a common method used to scam companies/sellers to get free goods/services. Your goods will always be delivered safely and timely. In the rare occurrance of an accidental purchase etc., a refund will be issued.")
        .setThumbnail("https://static.drips.pw/rotmg/wiki/Environment/Containers/Loot%20Bag%207.png")
        .addField("Fraud/Scam Prevention:",
        "Please DO NOT do business with anyone outside of our server. Always double check the seller's vouches and identity! If you have any evidence regarding fraudulent transactions (such as hacked accounts), please report it to an admin or moderator so we can make an announcement with the perpetrators name.\n\n**WE ARE NOT RESPONSIBLE FOR CONSEQUENCES THAT MAY OCCUR IF YOU DO NOT REPORT THE SUSPICIOUS ACTIVITY.**")
        .addField("More Info:",
        "If you feel that NexusMart is unsafe at any point, feel free to contact staff to have your issue cleared up. If misconduct isn't reported to us immediately, we are not responsible! If you wish to report any misconduct, please open a support ticket! All support tickets are saved and your input will be taken into consideration. We do not condone selling/promoting hacks or cheats. Bringing up topics such as these will result in consequences.")
        .setDescription("The Terms of Service for NexusMart")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}skin-shop`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Skin Shop")
        .setThumbnail("https://i.imgur.com/vLzXg9O.png")
        .addField("Price per skin:",
        "1-7 Skins: ~~$0.70~~ ea.\n8-15 Skins: ~~$0.64~~ ea.\n16-31 Skins: ~~$0.60~~ ea.\n31-40+ Skins: ~~$0.56~~ ea.\n**Every Skin in Stock**")
        .setDescription("Purchase the cheapest skins")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}oryx-running`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Oryx Running")
        .addField("Requirements:",
        "\nRare Pet")
        .setThumbnail("https://static.drips.pw/rotmg/wiki/Enemies/Oryx%20the%20Mad%20God%201.png?dl=0")
        .addField("Run includes:",
        "Killing: Stone Guardians, Janus (if possible), O1 and O2")
        .addField("Full Oryx run:",
        "1-12 Runs: $0.95 ea.\n13-32 Runs: $0.90 ea.")
        .setDescription("Purchase the cheapest oryx runs!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }
	
    if(cmd === `${prefix}lefttomax`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("/tell Mreyeball lefttomax")
        .setThumbnail("https://i.imgur.com/dKc7rfs.png")
        .addField("What to do:",
        "Screenshot the message mreyeball sends back to you after you do '/tell mreyeball lefttomax' when you open a ticket!")
        .setDescription("You will be asked to provide your left-to-max message from either your stats or the dm you get from mreyeball!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}maxing-service`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Maxing Service")
        .setThumbnail("https://i.imgur.com/dKc7rfs.png")
        .addField("Price:",
        "8/8: $6.50\n6/8: $5.00")
        .setDescription("Purchase the cheapest maxing")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}deca-shop`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Purchase Decas & STs")
	.addField("Additional Info:",
		"Minimum Purchase of 16 Decas\nBulk Purchases are Subject to Discount")
        .setThumbnail("https://media2.giphy.com/media/MXjdlNtjfxjxQsevj6/giphy.gif")
        .addField("Price:",
        "Decas: $0.25 ea.\nSTs: $0.25 ea.\n\n**Bulk Purchases are Heavily Discounted**")
        .setDescription("Purchase the cheapest Decas/STs")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}dungeon-running-overview`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Dungeon Running")
        .setThumbnail("https://i.imgur.com/zNLAaQU.png")
        .addField("Our runners:",
        "<@182858619451080704> <@327555672193368075> <@266209589941370880> <@196118902512680960> <@327498806478503936>")
        .addField("Proof:",
        "To prove the dungeon runner has done the runs, they can pick up the mark or take screenshots of completion. You may discuss more with them")
        .addField("Our runners:",
        "We employ dungeon runners who have a lot of experience in the field and can deliver their services in an efficient and clean way.")
        .setDescription("Information about NexusMart's Dungeon Running")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }
	
    if(cmd === `${prefix}oryx3`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Oryx 3 Running")
        .addField("Requirements:",
        "\nRare Pet")
        .setThumbnail("https://i.imgur.com/teubxNT.png%22")
        .addField("Run includes:",
        "Killing: Oryx The Mad God 3")
        .addField("Oryx 3 Runs:",
        "1-10 Runs: $7.00 ea.\n11-20 Runs: $6.00 ea.\n20+ Runs: $5.00 ea.")
        .setDescription("Purchase the cheapest Oryx 3 runs!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
		
	}
	
    if(cmd === `${prefix}duping-overview`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Doubling Overview")
        .setThumbnail("https://i.imgur.com/UeVseXq.png%22")
        .addField("Our Duper:",
        "<@728448495085682758>, is vouched and finish your orders at the highest proficiency. Charles has been playing RotMG for over 9+ years and has gained MANY vouches in a short amount of time.\n You will not go wrong when buying from him!")
        .addField("In this service:",
		"One UT Double means that your characters inventory will be doubled. We highly advise putting 8 items in the inventory to maximize the value for money.")
	.setDescription("Information about our Doubling Service")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
		
	}
	
    if(cmd === `${prefix}duping`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("UT Doubling")
	.addField("Info:",
		"1 Double = 8 Items in an Inventory Being Doubled")
        .addField("\nPricing:",
         "One Double: `$25.00`\nTwo Doubles: `$40.00`\nProceeding Doubles: `$10.00` Per Double")
        .setDescription("Purchase the Cheapest UT Doubles")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
	
	}
		
    if(cmd === `${prefix}vaultslot`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Vault and Character Slot Doubling")
        .addField("Requirements:",
        "Must have at least 1 unlocker or coupon for the requested commodity!")
        .setThumbnail("https://i.imgur.com/a2K3BpC.png")
        .addField("Additional Info:",
        "Must purchase at least 24 vault and char slots combined.")
	.addField("Pricing:",
		"24 - 63 : $1.50 Ea.\n64 - 140 : $1.25 Ea.\n**10% OFF IF ALL VAULTS UNLOCKED!**")
        .setDescription("Purchase the cheapest vaults and slots")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
		
	}
	
    if(cmd === `${prefix}runes`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Oryx 3 Rune Doubling")
	.setThumbnail("https://i.imgur.com/uPLEGcD.png")
        .addField("Pricing:",
        "24 - 64 : $1.50 ea.\n64+ : $1.25 ea.")
        .setDescription("Need Oryx 3 Runes doubled? Start a ticket!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(cmd === `${prefix}petfood`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Pet Food Doubling")
        .addField("Requirements:",
        "Must have At least one pet food of your choosing (Ambrosia, Solar Energy, etc.)!")
        .setThumbnail("https://i.imgur.com/OJKeuVG.png")
        .addField("Additional Info:",
        "If you would like to discuss pricing for bringing your pet to a certain level or rarity, start a ticket.")
	.addField("Pricing:",
		"24 - 63 : $1.50 Ea.\n64 - 127 : $1.25 Ea.\n128 - 256 : $1.00 Ea.\n256+ : $0.75 Ea.")
        .setDescription("Purchase the cheapest Pet Food")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
		
    }
    if(cmd === `${prefix}qchest`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Quest Chest & ST Chest Doubling")
        .addField("Requirements:",
        "Must have At least one Quest Chest or ST token/chest!")
        .setThumbnail("https://i.imgur.com/KOHUjk0.png")
	.addField("Pricing:",
		"24 - 63 : $1.50 Ea.\n64 - 127 : $1.25 Ea.\n128 - 256 : $1.00 Ea.\n256+ : $0.75 Ea.")
        .setDescription("Purchase the cheapest Quest Chest & ST Chest Doubles")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }
	
    if(cmd === `${prefix}misc`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Keys/Shards/Clovers/Etc. Doubling")
	.setThumbnail("https://i.imgur.com/efX1IUQ.png")
        .addField("Keys/Shards/Clovers:",
        "24+ : $0.625 ea.")
        .addField("Other Items:",
        "Start a ticket to discuss pricing!")
        .setDescription("Start a ticket!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
	
    }
    
    if(cmd === `${prefix}accounts`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Account Sales")
        .addField("About:",
        ":ribbon: We sell accounts on this channel! If you would like to sell your account, DM me and we can put it up here! If you would like to buy an account, please check out the pictures posted here and start a ticket to discuss a price or purchase the account!:ribbon:")
        .addField("**IMPORTANT NOTICE:**",
		"None of the accounts sold are stolen.\nAll of our accounts are either created by the our staff, bought from people that are looking to sell their account, or accounts we are selling for people and giving them a cut.")
	.setDescription("Want to buy an account? Start a ticket!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
	
	}
	
    if(cmd === `${prefix}star`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Star Service")
        .setThumbnail("https://i.imgur.com/quc35yw.png%22")
        .addField("This includes:",
        "Farming the amount of stars purchased and anything else discussed within the ticket.")
        .addField("Star Service:",
        "1 Star: $1.00 Ea.\n$50 for White Star (0 to 80) Bulk Discount.")
        .setDescription("Purchase the CHEAPEST and ONLY star service!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
	}
	
    if(cmd === `${prefix}roulette`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Welcome to NexusMart's Test of Luck!")
        .setThumbnail("https://media2.giphy.com/media/PjTywYBHJkrLV24gSR/giphy.gif")
        .addField("Price:",
        "1 Spin: $2.50\n2 Spins: $4.50\n5 Spins: $11.00\n10 Spins: $21.00\n20 Spins: $40.00\nAdditional Spins: $1.75")
        .setDescription("Instructions:\n1. Start a ticket\n2. Specify how many spins you would like to purchase\n3. Test your luck!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
    }
	
    if(cmd === `${prefix}keyper-running`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Keyper Farming")
        .addField("Requirements:",
        "6/8 Trickster + Rare Pet")
        .addField("Discounts:",
        "8/8 Trickster + Divine Pet With Magic Heal")
        .setThumbnail("https://i.imgur.com/LYrS2iC.png")
        .addField("Run includes:",
        "Killing the Keyper and collecting white bags, specified items and shards")
        .addField("Keyper Pricing:",
        "0 - 50 : 0.70 Ea. ⬅️\n50+ : 0.60 Ea. ⬅️\n\n**CHEAPEST ON MARKET**")
        .setDescription("Purchase the cheapest Keyper Runs!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
		
	}
	
    if(cmd === `${prefix}exaltation`){
        var embed = new Discord.MessageEmbed()
        .setColor(0x695DCF)
        .setTitle("Exaltation Completion Service")
        .addField("Requirements:",
        "Rare Pet")
        .setThumbnail("https://i.imgur.com/lFTryT6.jpg")
        .addField("Run includes:",
        "Farming the desired level of Exaltation + Collecting all loot from dungeons")
        .addField("[Shatters] Attack Exaltation:",
        "Level 0 -> Level 1 (5 Completes) : $4.50\nLevel 1 -> Level 2 (10 Completes) : $9.00\nLevel 2 -> Level 3 (15 Completes) : $13.50\nLevel 3 -> Level 4 (20 Completes) : $18.00\nLevel 4 -> Level 5 (25 Completes) : $21.00")
        .addField("[Nest] Dexterity Exaltation:",
        "Level 0 -> Level 1 (5 Completes) : $4.50\nLevel 1 -> Level 2 (10 Completes) : $9.00\nLevel 2 -> Level 3 (15 Completes) : $13.50\nLevel 3 -> Level 4 (20 Completes) : $18.00\nLevel 4 -> Level 5 (25 Completes) : $21.00")        
        .addField("[Cult] Speed Exaltations: ",
        "Level 0 -> Level 1 (5 Completes) : $4.50\nLevel 1 -> Level 2 (10 Completes) : $9.00\nLevel 2 -> Level 3 (15 Completes) : $13.50\nLevel 3 -> Level 4 (20 Completes) : $18.00\nLevel 4 -> Level 5 (25 Completes) : $21.25")
        .addField("**DOUBLE VALUE**\n[MBC + Void] Defense + Mana Exaltations: ",
        "Level 0 -> Level 1 (5 Completes) : $5.00\nLevel 1 -> Level 2 (10 Completes) : $9.50\nLevel 2 -> Level 3 (15 Completes) : $13.50\nLevel 3 -> Level 4 (20 Completes) : $18.00\nLevel 4 -> Level 5 (25 Completes) : $22.50")        
        .addField("**DOUBLE VALUE**\n[Fungal + Crystal] Wisdom + Vitality Exaltations: ",
        "Level 0 -> Level 1 (5 Completes) : $5.00\nLevel 1 -> Level 2 (10 Completes) : $9.50\nLevel 2 -> Level 3 (15 Completes) : $13.50\nLevel 3 -> Level 4 (20 Completes) : $18.00\nLevel 4 -> Level 5 (25 Completes) : $22.50")        
        .addField("[Oryx3] Life Exaltations: ",
        "Level 0 -> Level 1 (5 Completes) : $25.00\nLevel 1 -> Level 2 (10 Completes) : $48.00\nLevel 2 -> Level 3 (15 Completes) : $72.00\nLevel 3 -> Level 4 (20 Completes) : $95.00\nLevel 4 -> Level 5 (25 Completes) : $112.00")
        .setDescription("Purchase the cheapest Exaltation Farming!")
        .setFooter("NexusMart")
        .setTimestamp()
        message.channel.send(embed)
		
    }
	
   if(cmd === `${prefix}ban`){
       const user = message.mentions.users.first();
       if(isNaN(user)){
           return message.channel.send("Please specify a user to ban!")
       }
       const member = message.guild.member(user);
       member.ban()
       message.channel.send(member + " was banned! ✅")
   }

   if(cmd === `${prefix}kick`){
       const user = message.mentions.users.first();
       if(isNaN(user)){
        return message.channel.send("Please specify a user to kick!")
    }
       const member = message.guild.member(user);
       member.kick()
       message.channel.send(member + " was kicked! ✅")
   }
	
})

bot.login(process.env.BOT_TOKEN)
