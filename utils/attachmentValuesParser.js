const { FORM_FIELDS } = require('../constants/fields')

function getValueFromField(field) {
	switch (field.type) {
		case 'plain_text_input':
			return field['value']
		case 'static_select':
			return field['selected_option']['value']
		case 'multi_static_select':
			return field['selected_options']
				.reduce((acc, cv) => {
					return [...acc, cv['value']]
				}, [])
				.toString()
		default:
			return {}
	}
}

function attachmentParser(attachment) {
	const output = []

	Object.keys(attachment).forEach((parent, i) => {
		Object.keys(attachment[parent]).forEach((child) => {
			output.push({
				field: FORM_FIELDS[i],
				value: getValueFromField(attachment[parent][child]),
			})
		})
	})
	return output
}

module.exports = {
	attachmentParser,
}
