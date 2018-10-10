# node-reddit-bot
Using node, dotenv, Snoowrap and Snoostorm

### You need a reddit account and to create an app to obtain the relevant keys - https://www.reddit.com/prefs/apps/

Config should be setup as follows:
```
CLIENT_ID=***
CLIENT_SECRET=***
REDDIT_USER=***
REDDIT_PASS=***
```

Run the app using ``` node app.js ```

Currently the bot looks at r/testingground4bots, simply change
``` 
const streamOpts = {
  subreddit: "testingground4bots",
  results: 25
};
```

To look at whichever subreddit you want.

The bot will reply with a smiley face whenever it detects ':('
