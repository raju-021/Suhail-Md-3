const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_19_09_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMixcbiAgICAgICAgMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDczLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaWlBHRldWY2VYaE56U2I0UjBCQllwTWw5UnoxZE9ySDdvalRlT1VyL2xZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDkyNjc0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTU0RjhFNDA1MEZGNTE2REFCODA0OUQ5MTkxNDE5RTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU5MTYyNzYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJiajF1SDBSUjBLdE56SjRpMm5LamdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjMxZDhhNDgtOTg5ZS00Mzk2LTlkMDQtNDkxYTE3ZTI2MmJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDE4NyxcbiAgICAgIDE1MyxcbiAgICAgIDAsXG4gICAgICAyMTksXG4gICAgICAyMzksXG4gICAgICAzNSxcbiAgICAgIDExMixcbiAgICAgIDEzNSxcbiAgICAgIDQyLFxuICAgICAgNTgsXG4gICAgICAzOCxcbiAgICAgIDQ0LFxuICAgICAgMTk2LFxuICAgICAgMTI4LFxuICAgICAgMTk1LFxuICAgICAgMjI0LFxuICAgICAgMzEsXG4gICAgICAyMjMsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDgsXG4gICAgICAyMjUsXG4gICAgICAxOTQsXG4gICAgICA1MixcbiAgICAgIDg3LFxuICAgICAgMTQ5LFxuICAgICAgMzgsXG4gICAgICAxNzQsXG4gICAgICAyMjEsXG4gICAgICAzNixcbiAgICAgIDg0LFxuICAgICAgNTYsXG4gICAgICAxMTgsXG4gICAgICAyMzQsXG4gICAgICAxNixcbiAgICAgIDg0LFxuICAgICAgMTY5LFxuICAgICAgMzMsXG4gICAgICAyMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTDl4L01FRUlEajZzWUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRmMnlPUE54M0w2dFRobzE5b1NLNTJPYXhuL1U3THBKMnhYN2J2VnJLaEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiempnNnV6bU5PSWNnbUNBSmVZbk1lMGJRNXhtR25uRkZxbXA0MUdhK1dlMFQ0Qnl4RjNJQWtGems3TlpLQnRKVlhuNlVoMG5vQlZsNlkwZFZ3MUhPQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM04yUzIrQ05GWXNGWmJYYkFleW5LTnJFM2wweGNyYUlQRG0zU0VONXBJdkNEaGxWY0dtQ0tsMnNWaDdNb2pTT1RXck1uYWd4YlB3dzBEUTEwOHlxQXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTQ5MjY3NDY6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEbyBOb3QgRGlzdHVyYiBNZVwiLFxuICAgIFwibGlkXCI6IFwiMjY1MDQ3MzY0Mzc4Njg2OjQxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0OTI2NzQ2OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTkxNjI3NTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEKzRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQrNC5qc29uIjogIntcImtleURhdGFcIjpcImZZVC9VMjdTU2w4YjBBUC9rRHF6TVVIc0ZIL2ViRkZZdkNuNGZzUmZxTW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMxNjA5MzY1MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzU5MTUzNTk5MTY3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_e17fe171b8d395b9df440e504aa8aeaacb08ead66db9692e";
global.aitts_Voice_Id = process.env.AITTS_ID|| "wHI7GVgoHNG9c8H7zXAt";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
