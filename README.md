How to run the discord bot:

Go to https://discord.com/developers/docs/game-sdk/applications and create a new application. Then go to bot tab and click
add bot. Copy token and paste the token in the .env file after "TOKEN=". DO NOT EXPOSE
YOUR TOKEN TO ANYBODY INCLUDING ON A PUBLIC GITHUB REPOSITORY!!! On the same website go to OAuth2 tab and click
URL generator sub tab. Decide what you want the bot to do. Beware if bot is given admin permissions. Take link
generated and paste in your own web browser then select what server you want to add the bot too. Add it to the server
and click continue. Authorize the bot. 

We will be using nodemon to run this bot so globally install it with the terminal command [npm i -g nodemon]

Now you can run the discord bot with the command [nodemon index.js]

Currently this discord bot has a list of reply commands that you can see using the command [list]

The bot currently replys with images and gifs to the commands.