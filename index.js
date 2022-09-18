const path = require('path')
const express = require('express')
const { createMessageAdapter } = require('@slack/interactive-messages')
const { WebClient } = require('@slack/web-api')
const { createEventAdapter } = require('@slack/events-api')
const { requestInfoTemplate } = require('./templates/request-form-template')
const { attachmentParser } = require('./utils/attachmentValuesParser')
const { generateOutput } = require('./utils/outputGenerator')
const { addUserToGroup } = require('./api/index')
const { ALERTS } = require('./constants/alerts')

require('dotenv').config({
	path: path.resolve(__dirname, './test.env'),
})

const PORT = process.env.PORT || 3000
const signInSecret = process.env.SIGNIN_SECRET
const slackToken = process.env.AUTH_TOKEN

const app = express()
const slackEvent = createEventAdapter(signInSecret)
const slackInteractions = createMessageAdapter(signInSecret)
const slackClient = new WebClient(slackToken)

app.use('/interactive-endpoint', slackInteractions.requestListener())
app.use(slackEvent.requestListener())

// slack events specific
slackEvent.on('app_mention', (evt) => {
	console.log('app mention >>', evt)
	;(async () => {
		try {
			await slackClient.chat.postMessage({
				channel: evt.channel,
				text: `Hello <@${evt.user}> :wave:`,
				attachments: [requestInfoTemplate],
			})
		} catch (err) {
			console.log(err)
		}
	})()
})

// disable message as of now
// slackEvent.on("message", (evt) => {
//   console.log("channel messege>>", evt);
//   const { text, user, channel, team, bot_id } = evt;
//   if (bot_id) return;
//   (async () => {
//     try {
//       await slackClient.chat.postMessage({
//         channel: evt.channel,
//         text: `Hello <@${evt.user}> :tada`,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   })();
// });
slackEvent.on('error', console.error)

// slack interaction
slackInteractions.action(
	{ blockId: 'submit_request_form' },
	(payload, respond) => {
		console.log('payload', payload)
		const submmittedData = attachmentParser(payload.state.values)
		;(async () => {
			try {
				await slackClient.chat.postMessage({
					channel: 'C03SYJ44292',
					text: `Hi :wave:`,
					attachments: [generateOutput(submmittedData)],
				})
				respond({ text: ALERTS.ACCESS_REQ_SUCCESS, replace_original: true })
				return { text: ALERTS.PROCESSING }
			} catch (err) {
				respond({
					text: ALERTS.REQ_REJECT,
					replace_original: false,
				})
				return { text: ALERTS.ACCESS_REQ_FAIL }
			}
		})()
	}
)

slackInteractions.action(
	{ blockId: 'approve_request_btn' },
	(payload, respond) => {
		const action = payload['actions'][0]['value']
		const reqBody = payload.message.attachments

		if (action === 'deny') {
			respond({ text: ALERTS.REQ_DENY, replace_original: true })
			return { text: ALERTS.REQ_DENY }
		}
		;(async () => {
			try {
				await addUserToGroup(
					reqBody[0]['blocks'][1]['fields'][1].text.split('|')[1]
				)
				respond({ text: ALERTS.ACCESS_REQ_SUCCESS, replace_original: true })
				return { text: ALERTS.PROCESSING }
			} catch (err) {
				respond({
					text: ALERTS.REQ_REJECT,
					replace_original: false,
				})
				return { text: ALERTS.ACCESS_REQ_FAIL }
			}
		})()
	}
)

// app specific
app.post('/slack/events', (req, res) => {
	console.log('validate')
	res.send({
		challenge: req.body.challenge,
	})
})

app.post('/interactive-endpoint', () => {
	console.log('-------------')
})

app.get('/', (req, res) => {
	res.send('Hello there , If you this it means server is up')
})

app.listen(PORT, () => {
	console.log('Magic happens at port', PORT)
})
