const { WebClient } = require("@slack/web-api");
const { createEventAdaptor } = require("@slack/web-api");

const port = process.env.PORT || 3000;
const signInSecret = process.env.SIGNIN_SECRET;
const slackToken = process.env.AUTH_TOKEN;

const slackEvent = createEventAdaptor(signInSecret);
const slackClient = new WebClient(slackToken);

// subscribe events here
// we need to provide scope value here
slackEvent.on("app_mention", (evt) => {
  console.log(evt);
  (async () => {
    try {
      await slackClient.chat.postMessage({
        channel: evt.channel,
        text: `Hello <@${evt.user}> :tada`,
      });
    } catch (err) {
      console.log(err);
    }
  })();
});

slackEvent.on("error", console.error);
slackEvent.start(port).then(() => {
  console.log("Slack bot running at  : " + port);
});