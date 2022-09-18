// this list cpuld be recieved from API
const { userRoleList } = require('../mockData/archesRoleList')
const { dppRoles } = require('../mockData/dppRoleList')

const approverList = [
	{
		text: {
			type: 'plain_text',
			text: 'Ankit agarwal',
			emoji: true,
		},
		value: 'Ankit agarwal',
	},
	{
		text: {
			type: 'plain_text',
			text: 'Sidharth chhabra',
			emoji: true,
		},
		value: 'Sidharth chhabra',
	},
	{
		text: {
			type: 'plain_text',
			text: 'other ',
			emoji: true,
		},
		value: 'other ',
	},
]

const archesRoleList = userRoleList.member.reduce((acc, cv) => {
	return [
		...acc,
		{
			text: {
				type: 'plain_text',
				text: cv['name'],
				emoji: true,
			},
			value: cv['id'],
		},
	]
}, [])

const dppRoleList = dppRoles.reduce((acc, cv) => {
	return [
		...acc,
		{
			text: {
				type: 'plain_text',
				text: cv['name'],
				emoji: true,
			},
			value: cv['id'],
		},
	]
}, [])

const toolList = [
	{
		text: {
			type: 'plain_text',
			text: 'arches',
			emoji: true,
		},
		value: 'arches',
	},
	{
		text: {
			type: 'plain_text',
			text: 'dpp',
			emoji: true,
		},
		value: 'dpp',
	},
]

const environmentList = [
	{
		text: {
			type: 'plain_text',
			text: 'dev1',
			emoji: true,
		},
		value: 'dev1',
	},
	{
		text: {
			type: 'plain_text',
			text: 'qa1',
			emoji: true,
		},
		value: 'qa1',
	},
	{
		text: {
			type: 'plain_text',
			text: 'prod1',
			emoji: true,
		},
		value: 'prod1',
	},
	{
		text: {
			type: 'plain_text',
			text: 'instage',
			emoji: true,
		},
		value: 'instage',
	},
]

const requestInfoTemplate = {
	blocks: [
		{
			type: 'header',
			text: {
				type: 'plain_text',
				text: 'Please provide below information',
				emoji: true,
			},
		},
		{
			type: 'divider',
		},
		{
			type: 'input',
			element: {
				type: 'plain_text_input',
				action_id: 'plain_text_input-action',
			},
			label: {
				type: 'plain_text',
				text: 'Tell us your name ',
				emoji: true,
			},
		},

		{
			type: 'input',
			element: {
				type: 'multi_static_select',
				placeholder: {
					type: 'plain_text',
					text: 'Select options',
					emoji: true,
				},
				options: [...environmentList],
				action_id: 'multi_static_select-action',
			},
			label: {
				type: 'plain_text',
				text: 'Which Environment you want access for ? ',
				emoji: true,
			},
		},
		{
			type: 'input',
			element: {
				type: 'plain_text_input',
				action_id: 'plain_text_input-action',
			},
			label: {
				type: 'plain_text',
				text: 'What is your Email ? ',
				emoji: true,
			},
		},
		{
			type: 'input',
			element: {
				type: 'multi_static_select',
				placeholder: {
					type: 'plain_text',
					text: 'Select a tool',
					emoji: true,
				},
				options: [...toolList],
				action_id: 'static_select-action',
			},
			label: {
				type: 'plain_text',
				text: 'Select Tool ',
				emoji: true,
			},
		},
		{
			type: 'input',
			element: {
				type: 'multi_static_select',
				placeholder: {
					type: 'plain_text',
					text: 'Select arches role',
					emoji: true,
				},
				options: [...archesRoleList],
				action_id: 'static_select-action',
			},
			label: {
				type: 'plain_text',
				text: 'Select Arches Role (s)',
				emoji: true,
			},
		},
		{
			type: 'input',
			element: {
				type: 'multi_static_select',
				placeholder: {
					type: 'plain_text',
					text: 'Select DPP role',
					emoji: true,
				},
				options: [...dppRoleList],
				action_id: 'static_select-action',
			},
			label: {
				type: 'plain_text',
				text: 'Select DPP Role (s) ',
				emoji: true,
			},
		},
		{
			type: 'input',
			element: {
				type: 'plain_text_input',
				action_id: 'plain_text_input-action',
			},
			label: {
				type: 'plain_text',
				text: 'Enter your Manager Email',
				emoji: true,
			},
		},
		{
			type: 'input',
			element: {
				type: 'static_select',
				placeholder: {
					type: 'plain_text',
					text: 'Select approver',
					emoji: true,
				},
				options: [...approverList],
				action_id: 'static_select-action',
			},
			label: {
				type: 'plain_text',
				text: 'Select approver',
				emoji: true,
			},
		},
		{
			type: 'actions',
			block_id: 'submit_request_form',
			elements: [
				{
					type: 'button',
					text: {
						type: 'plain_text',
						text: 'Submit Request',
						emoji: true,
					},
					style: 'primary',
					value: 'click_me_123',
					action_id: 'actionId-0',
				},
			],
		},
	],
}

module.exports = {
	requestInfoTemplate,
}
