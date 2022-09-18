const path = require('path')
const { App } = require('@slack/bolt')
require('dotenv').config({
	path: path.resolve(__dirname, './test.env'),
})

const PORT = process.env.PORT || 3000
const signInSecret = process.env.SIGNIN_SECRET
const slackToken = process.env.AUTH_TOKEN

const app = new App({
	token: slackToken,
	signingSecret: signInSecret,
	// socketMode: true, // add this
	appToken: process.env.SLACK_APP_TOKEN, // add this
	port: PORT || 3000,
})

app.message('hello', async ({ message, say }) => {
	// say() sends a message to the channel where the event was triggered
	await say({
		blocks: [
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: `Hey there <@${message.user}>!`,
				},
				accessory: {
					type: 'button',
					text: {
						type: 'plain_text',
						text: 'Click Me',
					},
					action_id: 'button_click',
				},
			},
		],
		text: `Hey there <@${message.user}>!`,
	})
})

app.event('app_home_opened', ({ event, say }) => {
	console.log(event)
})
;(async () => {
	await app.start()
	console.log('⚡️ Bolt app is running!')
})()
