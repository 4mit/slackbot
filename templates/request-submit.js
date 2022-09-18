const request_submit_template = {
	color: '#f2c744',
	blocks: [
		{
			type: 'section',
			text: {
				type: 'mrkdwn',
				text: 'You have a new request',
			},
		},
		{
			type: 'section',
			block_id: 'user_information',
			fields: [],
		},
		{
			type: 'actions',
			block_id: 'approve_request_btn',
			elements: [
				{
					type: 'button',
					text: {
						type: 'plain_text',
						emoji: true,
						text: 'Approve',
					},
					style: 'primary',
					value: 'approve',
				},
				{
					type: 'button',
					text: {
						type: 'plain_text',
						emoji: true,
						text: 'Deny',
					},
					style: 'danger',
					value: 'deny',
				},
			],
		},
	],
}

module.exports = {
	request_submit_template,
}
