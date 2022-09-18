const { request_submit_template } = require('../templates/request-submit')
const { FORM_FIELDS } = require('../constants/fields')

function generateOutput(fields) {
	const output = { ...request_submit_template }
	output.blocks[1].fields = []

	let tmpFields = []
	fields.forEach((field, idx) => {
		tmpFields.push({
			type: 'mrkdwn',
			text: '*' + FORM_FIELDS[idx] + ':*\n' + field.value,
		})
	})
	output.blocks[1].fields = tmpFields
	return output
}

module.exports = {
	generateOutput,
}
