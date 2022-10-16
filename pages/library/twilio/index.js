import PageTitle from '../../../components/PageTitle'
import StepMajor from '../../../components/StepMajor'
import StepMinor from '../../../components/StepMinor'
import Code from '../../../components/Code'
import * as data from '../../../utils/page-data/twilio-data'

export default function Twilio() {
    return (
        <>
            <PageTitle pageTitle="Create Twilio Conversations Web App" />
            <StepMajor
                step="1.0.0"
                sentence="Initializing Conversations SDK Clients"
                direction="Initializing Conversations SDKs is an important step to ensure your client is ready for use on an end user's mobile or web device. The Conversations SDKs put necessary data in place and set up event handlers for new Messages and other events."
                sideNote=""
                />
            <StepMinor
                step="1.1.0"
                sentence="Install the necessary packets"
                filePath=""
                direction="Install in the root directory."
                sideNote=""
                />
            <Code
                language="console"
                source={data.step110}
                />
            <StepMinor
                step="1.2.0"
                sentence="Create get-token"
                filePath="/client/src/utils/get-token.js"
                direction="You'll need to pass a valid Access Token to the client creation method as the first parameter. This file generates that by first stating who the Participant is and what they should be allowed to do."
                sideNote="You can read more here: https://www.twilio.com/docs/conversations/create-tokens"
                />
            <Code
                language="code"
                source={data.step120}
                />
            <StepMinor
                step="1.2.1"
                sentence="Add basic styleing"
                filePath="/client/src/styles/styles.module.css"
                direction="The focus is on the functionality of the application, not the styling. However, we'll add just enough to make look presentable."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step121}
                />
            <StepMinor
                step="1.2.2"
                sentence="Initiate Twilio Conversations"
                filePath="/client/src/App.js"
                direction="We'll house the Conversaton Client here. We rename `Client` as `ConversationsClient` just to distinguish it a little more from other client-named variables."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step122}
                />
            <StepMinor
                step="1.2.3"
                sentence="Create ConversationsList.js"
                filePath="/client/src/components/ConversationsList.js"
                direction="This is the list of people messeging us."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step123}
                />
            <StepMinor
                step="1.2.4"
                sentence="Create ConversationThread.js"
                filePath="/client/src/components/ConversationThread.js"
                direction="This is the collection of messages in a conversation."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step124}
                />
            <StepMinor
                step="1.2.5"
                sentence="Create ConversationMessages.js"
                filePath="/client/src/components/ConversationMessages.js"
                direction="This is the colored message bubble around the text. The main purpose is to change the background color and alignment based in the direction of the message being sent."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step125}
                />
            <StepMinor
                step="1.2.6"
                sentence="Create MessageBubble.js"
                filePath="/client/src/components/MessageBubble.js"
                direction="This is the text and data from the message like the body of the message, time and date."
                sideNote=""
                />
            <Code
                language="code"
                source={data.step126}
                />
        </>
    )
}