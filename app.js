require("dotenv").config();

const Snoowrap = require("snoowrap");
const Snoostorm = require("snoostorm");

// snoowrap and snoostorm clients
const snoowrapConfig = new Snoowrap({
  userAgent: "reddit-bot-example-node",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});
const client = new Snoostorm(snoowrapConfig);

// configure options for stream
const streamOpts = {
  subreddit: "testingground4bots",
  results: 25
};

// create snoostorm comment stream
const comments = client.CommentStream(streamOpts);

// on comment, perform logic
comments.on("comment", comment => {
  if (comment.body === ":(") {
    comment.reply(":)");
  }
});
