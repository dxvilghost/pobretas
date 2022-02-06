
const express = require("express"),
    app = express(),
    ejs = require('ejs'),
    client = new (require("discord.js")).Client()
    const Badge = require("./Badge");

client.on("ready", async () => {
    console.log('[BOT] Iniciado')
    await client.user.setStatus("invisible");
});


app.set("view engine", "ejs");
app.use(express.static("public"))



app.use(function (req, res, next) {
    res.removeHeader("x-powered-by")
    next();
});

app.post("*", async (req, res) => {
   return res.send('foi mal mano nao vai rolar request aq')
});


app.get("/", async (req, res, next) => {
  const yogurt = await client.users.fetch
  ("230113935351611392")
  const rep7 = await client.users.fetch
  ("330879828683390976")
  const arkoy = await client.users.fetch
  ("457363702619045898")
  const duality = await client.users.fetch
  ("467733555208781824")
  const lucas47 = await client.users.fetch
  ("310465294973796353")
  const luisao = await client.users.fetch
  ("225818218709778433")
  const rush7 = await client.users.fetch
  ("545703210539548684")
  const system1777 = await client.users.fetch
  ("161261080893587456")


  if (!yogurt.flags) await yogurt.fetchFlags();
    // get data
    const Flags = yogurt.flags.toArray();
    if (yogurt.bot && Flags.includes("VERIFIED_BOT")) yogurt.verified = true;

    const flags = Flags.filter(b => !!Badge[b]).map(m => Badge[m]);
    if (yogurt.flags.has(1 << 18)) flags.push(Badge["DISCORD_CERTIFIED_MODERATOR"]);

    if (yogurt.bot) {
        flags.push(Badge["BOT"]);
    }

if (!rep7.flagsrep7) await rep7.fetchFlags();
    const Flagsrep7 = rep7.flags.toArray();
    if (rep7.bot && Flagsrep7.includes("VERIFIED_BOT")) rep7.verified = true;

    const flagsrep7 = Flagsrep7.filter(b => !!Badge[b]).map(m => Badge[m]);
    if (rep7.flags.has(1 << 18)) flagsrep7.push(Badge["DISCORD_CERTIFIED_MODERATOR"]);

    if (rep7.bot) {
        flagsrep7.push(Badge["BOT"]);
    }

if (!arkoy.flagsarkoy) await arkoy.fetchFlags();
    const Flagsarkoy = arkoy.flags.toArray();
    if (arkoy.bot && Flagsarkoy.includes("VERIFIED_BOT")) arkoy.verified = true;

    const flagsarkoy = Flagsarkoy.filter(b => !!Badge[b]).map(m => Badge[m]);
    if (arkoy.flags.has(1 << 18)) flagsarkoy.push(Badge["DISCORD_CERTIFIED_MODERATOR"]);

    if (arkoy.bot) {
        flagsarkoy.push(Badge["BOT"]);
    }

if (!duality.flagsduality) await duality.fetchFlags();
    const Flagsduality = duality.flags.toArray();
    if (duality.bot && Flagsduality.includes("VERIFIED_BOT")) duality.verified = true;

    const flagsduality = Flagsduality.filter(b => !!Badge[b]).map(m => Badge[m]);
    if (duality.flags.has(1 << 18)) flagsduality.push(Badge["DISCORD_CERTIFIED_MODERATOR"]);

    if (duality.bot) {
        flagsduality.push(Badge["BOT"]);
    }

    if (!lucas47.flagslucas47) await lucas47.fetchFlags();
    const Flagslucas47 = lucas47.flags.toArray();
    if (lucas47.bot && Flagslucas47.includes("VERIFIED_BOT")) lucas47.verified = true;

    const flagslucas47 = Flagslucas47.filter(b => !!Badge[b]).map(m => Badge[m]);
    if (lucas47.flags.has(1 << 18)) flagslucas47.push(Badge["DISCORD_CERTIFIED_MODERATOR"]);

    if (lucas47.bot) {
        flagslucas47.push(Badge["BOT"]);
    }

    if (!luisao.flagsluisao) await luisao.fetchFlags();
    const Flagsluisao = luisao.flags.toArray();
    if (luisao.bot && Flagsluisao.includes("VERIFIED_BOT")) luisao.verified = true;

    const flagsluisao = Flagsluisao.filter(b => !!Badge[b]).map(m => Badge[m]);
    if (luisao.flags.has(1 << 18)) flagsluisao.push(Badge["DISCORD_CERTIFIED_MODERATOR"]);

    if (luisao.bot) {
        flagsluisao.push(Badge["BOT"]);
    }

    if (!rush7.flagsrush7) await rush7.fetchFlags();
    const Flagsrush7 = rush7.flags.toArray();
    if (rush7.bot && Flagsrush7.includes("VERIFIED_BOT")) rush7.verified = true;

    const flagsrush7 = Flagsrush7.filter(b => !!Badge[b]).map(m => Badge[m]);
    if (rush7.flags.has(1 << 18)) flagsrush7.push(Badge["DISCORD_CERTIFIED_MODERATOR"]);

    if (rush7.bot) {
        flagsrush7.push(Badge["BOT"]);
    }

    if (!system1777.flagssystem1777) await system1777.fetchFlags();
    const Flagssystem1777 = system1777.flags.toArray();
    if (system1777.bot && Flagssystem1777.includes("VERIFIED_BOT")) system1777.verified = true;

    const flagssystem1777 = Flagssystem1777.filter(b => !!Badge[b]).map(m => Badge[m]);
    if (system1777.flags.has(1 << 18)) flagssystem1777.push(Badge["DISCORD_CERTIFIED_MODERATOR"]);

    if (system1777.bot) {
        flagssystem1777.push(Badge["BOT"]);
    }

       return res.render("index", {
       flags,
       flagsrep7,
       flagsarkoy,
       flagsduality,
       flagslucas47,
       flagsluisao,
       flagsrush7,
       flagssystem1777,
       yogurt,
       rep7,
       arkoy,
       duality,
       lucas47,
       luisao,
       rush7,
       system1777,
    });
});


app.use(function (req,res){
	res.status(404).render('404');
});

client.login(process.env['TOKEN']);

app.listen(process.env.PORT, () => {
    console.log('[EXPRESS] Iniciado') 
});


setTimeout(() => process.exit(), 600000)
