# node-reddit-bot
Using node, dotenv, Snoowrap and Snoostorm


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
