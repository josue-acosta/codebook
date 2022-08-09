export const step110 = `$ npm install --save twilio @twilio/conversations`
export const step120 =
`if (process.env.NODE_ENV === 'production') {
    // production credentials
    module.exports = require('./prod')
} else {
    // development credentials
    module.exports = require('./dev')
}`
export const step121 = 
`module.exports = {
    identity: 'HANDLE_NAME',
    serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    twilioAccountSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    twilioApiKey: 'SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    twilioApiSecret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    twilioAuthToken: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    twilioPhoneNumber: '+10000000000',
    twilioUrl: 'https://conversations.twilio.com/v1/Conversations'
}`
export const step122 = 
`module.exports = {
    identity: process.env.IDENTITY,
    serviceSid: process.env.SERVICE_SID,
    twilioAccountSid: process.env.TWILIO_ACCOUNT,
    twilioApiKey: process.env.TWILIO_API_KEY,
    twilioApiSecret: process.env.TWILIO_API_SECRETE,
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
    twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER,
    twilioUrl: process.env.TWILIO_URL
}`
export const step130 = 
`/
┕ client
    ┕ src
        ┕ utils
            - dev.js
            - keys.js
            - prod.js
┝ config
    - dev.js
    - keys.js
    - prod.js
┕ ...`
export const step133 = 
`node_modules
dev.js`