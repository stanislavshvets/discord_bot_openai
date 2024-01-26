# 🚀 Getting started AiBot for Discord
#### Versions: discord.js: 14.14.1; openai: 4.25.0
#### To create our project, you need a couple of accounts, and the necessary software installed, as follows:
- [Discord account](https://discord.com/developers/)
- [OpenAI account](https://platform.openai.com/)

#### Software installs:
- [Node.js](https://nodejs.org/en/)
- [VS Code](https://code.visualstudio.com/) If you don’t have a code editor already

## Discord Preparation

### Step 1: Log in to Discord and create a server

1. You can read how to create a server [here](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server)
2. Сreate a text channel with a name "aibot". How to create on server text channel You can read [here](https://support.discord.com/hc/en-us/articles/4412085582359-Text-Channels-Text-Chat-In-Voice-Channels#h_01FMJT3JG3KD43WFH0ZEDZP07W)

### Step 2: Add a new developer application

1. Open the [Discord developer portal](https://discord.com/developers/applications) and log into your account.
2. In the upper right corner сlick on the "New Application" button: <br/> <div  style="width: 18%; text-align: center; padding: 10px 16px; border-radius: 3px; background: #5865f2">New Application</div>
3. Enter a name and confirm the pop-up window by clicking the "Create" button.

### Step 3: Create a bot token

1. Navigate to the [application page](https://discord.com/developers/applications).
2. Click on the bot you want to enable privileged intents for.
3. Navigate to the bot tab on the left side of the screen: <br/> <br/>
<img src="https://discordpy.readthedocs.io/en/latest/_images/discord_bot_tab.png" title="discord_bot_tab" alt="discord_bot_tab" width="40%"/><br/><br/>
4. Click on the Button “Reset token” button to create a new bot token.<br/> This token is secret and should not be shared with others.<br/> Save it in a text file for later use (token is only shown once).<br/>You should never share these API keys with anyone or upload them to your GitHub<br/><br/>
<img src="https://discordjs.guide/assets/created-bot.de724f7c.png" title="created-bot" alt="created-bot" width="80%"/>

### Step 4: Privileged Gateway Intents

1. Navigate to the [application page](https://discord.com/developers/applications). 
2. Click on the bot you want to enable privileged intents for.
3. Navigate to the bot tab on the left side of the screen: <br/><br/>
  <img src="https://discordpy.readthedocs.io/en/latest/_images/discord_bot_tab.png" title="discord_bot_tab" alt="discord_bot_tab" width="40%"/><br/><br/>
4. Scroll down to the “Privileged Gateway Intents” section and enable all: <br/><br/>
  <img src="https://discordpy.readthedocs.io/en/latest/_images/discord_privileged_intents.png" title="discord_privileged_intents" alt="discord_privileged_intents" width="80%"/><br/><br/>

### Step 5: Inviting Your Bot

1. Navigate to the [application page](https://discord.com/developers/applications).
2. Click on your bot’s page.
3. Go to the “OAuth2 > URL Generator” tab.<br/><br/>
   <img src="https://discordpy.readthedocs.io/en/stable/_images/discord_oauth2.png" title="discord_oauth2" alt="discord_oauth2" width="80%"/><br/><br/>
4. Tick the “bot” checkbox under “scopes”.<br/><br/>
   <img src="https://discordpy.readthedocs.io/en/stable/_images/discord_oauth2_scope.png" title="discord_oauth2" alt="discord_oauth2" width="80%"/><br/><br/>
5. Tick the permissions required for your bot to function under “Bot Permissions”. <br/> Set the permissions to enable the bot to read and write in teh chat. <br/> Other permissions are at your discretion.
- Please be aware of the consequences of requiring your bot to have the “Administrator” permission.
- Bot owners must have 2FA enabled for certain actions and permissions when added in servers that have Server-Wide 2FA enabled. Check the [2FA support page](https://support.discord.com/hc/en-us/articles/219576828-Setting-up-Two-Factor-Authentication) for more information. <br/><br/>
  <img src="https://discordpy.readthedocs.io/en/stable/_images/discord_oauth2_perms.png" title="discord_oauth2_perms" alt="discord_oauth2_perms" width="80%"/><br/><br/>
6. Now the resulting URL can be used to add your bot to a server. Copy and paste the URL into your browser, choose a server to invite the bot to, and click “Authorize”.

## Get an OpenAI API token
1. Create an account at https://platform.openai.com/signup
2. Go to https://platform.openai.com/api-keys.
3. Click on "<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12m-6-6h12"></path></svg> Create new secret key"
4. Give your token name and click "Create secret key".
5. Save your token and then click "Done"<br/>
   You should never share these API keys with anyone or upload them to your GitHub

## Bring the AI Bot to Life

### Step 1: Download project from GitHub

You can read how to download the project [here](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives)

### Step 2: Open project in VS Code

You can read how to open project [here](https://code.visualstudio.com/docs/introvideos/basics)

### Step 3: Install dependencies

1. Open terminal in vscode. You can read how to open terminal [here](https://code.visualstudio.com/docs/terminal/basics)
2. Run the following command in your terminal:

```
npm install discord.js openai dotenv
```
### Step 4: Add your tokens
1. Rename `.env.example` to `.env`.
2. In `.env` replace the part of `your_discord_token` with your discord bot token and `your_openAi_key` with your OpenAI API token.

```
DISCORDTOKEN=your_discord_token //Token that you saved in Discord Preparation step 3 of this tutorial
OPENAIKEY=your_openAi_key //Token that you saved in OpenAI API token of this tutorial
```
### Step 5: Run your bot
1. Open terminal in vscode.
2. Run the following command in your terminal:

```
npm run start
```
3. You should see in the terminal:

`Bot is online`<br/><br/>
Also on the Discord server the bot should have an online status.<br/>

### Additional Information
- If you want to stop the bot in the terminal, press `Ctrl + C` and then `Y`
- If you want to change the channel name you must also make changes to the code in file `bot.js`:

```
18. client.on("messageCreate", async (message) =>{
19. if(message.channel.name !== "aibot" || message.author.bot) {  // "aibot" is the channel name
20.    return
21. }
```

#### Note: 
This might not be the optimal code but it is one that is working for me as of today (26.01.2024). I hope this will fix the issues that some of you had with the bot not responding! Happy coding!



