const axios = require('axios')
const instance = axios.create({
	baseURL: 'https://dev-73998207.okta.com' || process.env.OKTA_APP_URL,
})
instance.defaults.headers.common[
	'Authorization'
] = `SSWS 00LwKX0fen7mKTr3MlwRquvQBrtt_nVrjFLWcjXqgo`
const oktaGroupId = '00g6cw0c0h2bAAWrT5d7'

const getUserId = function (email) {
	return instance.get(`/api/v1/users?search=profile.email eq "${email}"`)
}

const addUserToGroup = async function (email) {
	const sanitizedEmail = email.slice(0, -1)
	try {
		const {
			data: { id },
		} = await getUserId(sanitizedEmail)
		return instance.put(`/api/v1/groups/${oktaGroupId}/users/${id}`)
	} catch (err) {
		return { text: 'Failed Processing...' }
	}
}

module.exports = {
	addUserToGroup,
}
