export const step110 = `$ npm install --save twilio @twilio/conversations`
export const step120 = `const keys = require('./dev');

// Used specifically for creating Chat tokens
const identity = keys.identity || process.env.IDENTITY
const serviceSid = keys.serviceSid || process.env.SERVICE_SID

// Used when generating any kind of tokens
const twilioAccountSid = keys.twilioAccountSid || process.env.TWILIO_ACCOUNT_SID
const twilioApiKey = keys.twilioApiKey || process.env.TWILIO_API_KEY
const twilioApiSecret = keys.twilioApiSecret || process.env.TWILIO_API_SECRET

const AccessToken = require('twilio').jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

module.exports = {
    getToken: () => {
        try {
            // Create a "grant" which enables a client to use Chat as a given user,
            // on a given device
            const chatGrant = new ChatGrant({
                serviceSid: serviceSid,
            });

            // Create an access token which we will sign and return to the client,
            // containing the grant we just created
            const token = new AccessToken(
                twilioAccountSid,
                twilioApiKey,
                twilioApiSecret,
                {
                    identity: identity
                }
            );

            // Add "grant" information to the token
            token.addGrant(chatGrant);
            return token.toJwt()
        } catch (error) {
            console.log(error)
        }
    }
};`
export const step121 =
`/*
App
*/
.main {
display: flex;
font-family: 'Roboto Mono', monospace;
}

.section {
width: 100%;
}

.section:first-child {
padding-right: 15px;
border-right: 1px solid #ddd;
}

.section:last-child {
position: relative;
padding-left: 15px;
}


/*
ConversationThread
*/
.form {
display: flex;
justify-content: space-between;
padding-top: 15px;
border-top: 1px solid #ccc;
}

.input {
padding: 10px 15px;
border: 1px solid #ccc;
width: 100%;
}

.submit {
padding: 10px 15px;
border: none;
background-color: cornflowerblue;
}

.submit:hover {
color: #fff;
background-color: #5077BE;
}

.conversationThread {
position: relative;
}


/*
ConversationList
*/
.conversationsList {
list-style: none;
margin: 0;
padding: 0;
}

.conversationsList li {
padding: 15px;
}

.selectedConversation {
background-color: cornflowerblue;
}

.conversationsList li:not(:last-child) {
border-bottom: 1px dashed #aaa;
}

.conversationsList li:hover {
background-color: #eee;
}


/*
ConversationMessage
*/
.conversationMessage {
display: flex;
flex-direction: column;
list-style: none;
margin: 0;
padding: 0;

height: 425px;
overflow-y: scroll;
}

.conversationMessage li {
width: 80%;
padding: 15px;
margin-bottom: 5px;
}


/*
MessageBubble
*/
.conversationMessage li {
display: flex;
flex-direction: column;
}

.conversationMessage .timestamp {
font-size: 12px;
}

.conversationMessage .outgoing {
align-self: end;
background-color: cornflowerblue;
text-align: right;
}

.conversationMessage .incoming {
align-self: start;
background-color: #ccc;
text-align: left;
}`
export const step122 =
`import React, { Component } from 'react';
import { Client as ConversationsClient } from "@twilio/conversations";

import styles from './styles/styles.module.css'

import ConversationsList from './components/ConversationsList';
import ConversationThread from './components/ConversationThread';

const { getToken } = require('./utils/get-token');

export default class App extends Component {
    state = {
        name: "HANDLE_NAME",
        token: null,
        statusString: null,
        conversations: [],
        selectedConversationSid: null,
        newMessage: ""
    };

    componentDidMount = () => {
        this.mountToken();
        this.setState({ statusString: "Fetching credentials..." });
    };

    mountToken = () => {
        const myToken = getToken()
        this.setState({ token: myToken }, this.initConversations);
    };

    initConversations = async () => {
        const client = new ConversationsClient(this.state.token);

        client.on("stateChanged", (state) => {
            // The client failed to initialize
            if (state === "failed") {
                return;
            }

            // Use the client
            if (state === "initialized") {
                this.setState({ statusString: "Client initialized" });
            }
        });

        client.getSubscribedConversations()
            .then(item => this.setState({
                conversations: item.items
            }))

        client.on("connectionStateChanged", (state) => {
            if (state === "connecting")
                this.setState({
                    statusString: "Connecting to Twilio???",
                    status: "default"
                });
            if (state === "connected") {
                this.setState({
                    statusString: "You are connected.",
                    status: "success"
                });
            }
            if (state === "disconnecting")
                this.setState({
                    statusString: "Disconnecting from Twilio???",
                    status: "default"
                });
            if (state === "disconnected")
                this.setState({
                    statusString: "Disconnected.",
                    status: "warning"
                });
            if (state === "denied")
                this.setState({
                    statusString: "Failed to connect.",
                    status: "error"
                });
        });

        client.on("conversationJoined", (conversation) => {
            this.setState({ conversations: [...this.state.conversations, conversation] });
        });

        client.on("conversationLeft", (thisConversation) => {
            this.setState({
                conversations: [...this.state.conversations.filter((it) => it !== thisConversation)]
            });
        });

        client.on("tokenAboutToExpire", () => {
            const updatedToken = getToken()
            client.updateToken(updatedToken)
        });
    }

    render() {
        const { conversations, selectedConversationSid, status, statusString } = this.state;

        const selectedConversation = conversations.find((item) => {
            return item.sid === selectedConversationSid
        });

        let conversationContent
        if (selectedConversation) {
            conversationContent = (
                <ConversationThread
                    conversationProxy={selectedConversation}
                    myIdentity={this.state.name}
                />)
        } else if (status !== "success") {
            conversationContent = (
                <p>Please select a conversation</p>
            )
        } else {
            conversationContent = conversationContent = (
                <p>conversationContent = conversationContent</p>);
        }

        return (
            <main className={styles.main}>
                <div className={styles.section}>
                    <h1>Conversation List</h1>
                    <p>{statusString}</p>
                    <ConversationsList
                        conversations={conversations}
                        selectedConversationSid={selectedConversationSid}
                        onConversationClick={(item) => {
                            this.setState({ selectedConversationSid: item });
                        }}
                    />
                </div>

                <div className={styles.section}>
                    <h1>Message List</h1>
                    {conversationContent}
                </div>
            </main>
        );
    }
}`
export const step123 =
`import React, { Component } from 'react';

import styles from '../styles/styles.module.css'

export default class ConversationsList extends Component {
    render() {
        const { conversations, selectedConversationSid, onConversationClick } = this.props;

        return (
            <ul className={styles.conversationsList}>
                {conversations.map(item => (
                    <li 
                        key={item.sid}
                        onClick={() => onConversationClick(item.sid)}
                        className={selectedConversationSid === item.sid ? styles.selectedConversation : ''}
                    >
                        {item.friendlyName || item.sid}
                    </li>
                ))}
            </ul>
        );
    }
}`
export const step124 =
`import React, { Component } from 'react';

// component
import ConversationMessages from "./ConversationMessages";

import styles from '../styles/styles.module.css'

export default class ConversationThread extends Component {
    state = {
        newMessage: '',
        conversationProxy: this.props.conversationProxy,
        messages: [],
        loadingState: 'initializing',
        boundConversations: new Set()
    }

    loadMessagesFor = (thisConversation) => {
        if (this.state.conversationProxy === thisConversation) {

            thisConversation.getMessagesCount()
                .then(count => {
                    thisConversation.getMessages(count)
                    .then(messagePaginator => {
                        if (this.state.conversationProxy === thisConversation) {
                            this.setState({ messages: messagePaginator.items, loadingState: 'ready' });
                        }
                    })
                    .catch(err => {
                        console.error("Couldn't fetch messages IMPLEMENT RETRY", err);
                        this.setState({ loadingState: "failed" });
                    });
                })
        }
    };

    componentDidMount = () => {
        if (this.state.conversationProxy) {
            this.loadMessagesFor(this.state.conversationProxy);

            if (!this.state.boundConversations.has(this.state.conversationProxy)) {
                let newConversation = this.state.conversationProxy;
                newConversation.on('messageAdded', m => this.messageAdded(m, newConversation));
                this.setState({ boundConversations: new Set([...this.state.boundConversations, newConversation]) });
            }
        }
    }

    componentDidUpdate = (oldProps, oldState) => {
        if (this.state.conversationProxy !== oldState.conversationProxy) {
            this.loadMessagesFor(this.state.conversationProxy);

            if (!this.state.boundConversations.has(this.state.conversationProxy)) {
                let newConversation = this.state.conversationProxy;
                newConversation.on('messageAdded', m => this.messageAdded(m, newConversation));
                this.setState({ boundConversations: new Set([...this.state.boundConversations, newConversation]) });
            }
        }
    };

    static getDerivedStateFromProps(newProps, oldState) {
        let logic = (oldState.loadingState === 'initializing') || oldState.conversationProxy !== newProps.conversationProxy;
        if (logic) {
            return { loadingState: 'loading messages', conversationProxy: newProps.conversationProxy };
        } else {
            return null;
        }
    }

    messageAdded = (message, targetConversation) => {
        if (targetConversation === this.state.conversationProxy)
            this.setState((prevState, props) => ({
                messages: [...prevState.messages, message]
            }));
    };

    onMessageChanged = event => {
        this.setState({ newMessage: event.target.value });
    };

    sendMessage = event => {
        event.preventDefault();
        const message = this.state.newMessage;
        this.setState({ newMessage: '' });
        this.state.conversationProxy.sendMessage(message);
    };

    render () {
        const { myIdentity } = this.props;
        const { messages } = this.state;

        return (
            <div className={styles.conversationThread}>
                <ConversationMessages
                    identity={myIdentity}
                    messages={messages}
                />

                <form className={styles.form} onSubmit={this.sendMessage} >
                    <input 
                    type="text" 
                    name="message"
                    placeholder="Enter message..." 
                    className={styles.input}
                    onChange={this.onMessageChanged}
                    value={this.state.newMessage} />

                    <input type="submit" value="Submit" className={styles.submit} />
                </form>
            </div>
        )
    }
}`
export const step125 =
`import React, { Component } from "react";

import MessageBubble from "./MessageBubble";

import styles from '../styles/styles.module.css'

export default class ConversationMessages extends Component {
    render() {
        const { messages, identity } = this.props

        return (
            <ul className={styles.conversationMessage}>
                {messages.map(item => {
                    if (item.author === identity) {
                        return <MessageBubble 
                        key={item.state.index}
                        direction="outgoing"
                        message={item.state.body}
                        timestamp={item.state.timestamp}
                        />
                    } else {
                        return <MessageBubble 
                        key={item.state.index}
                        direction="incoming"
                        message={item.state.body}
                        timestamp={item.state.timestamp}
                        />
                    }
                })}
            </ul>
        );
    }
}`
export const step126 =
`import React, { Component } from "react";

import styles from '../styles/styles.module.css'

export default class MessageBubble extends Component {
    render() {
        const { message, direction, timestamp } = this.props
        const timestampOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }

        return (
            <li className={ direction === 'incoming' ? styles.incoming : styles.outgoing }>
                <span>{message}</span>
                <span className={styles.timestamp}>
                    {timestamp.toLocaleString('en-US', timestampOptions)}
                </span>
            </li>
        )
    }
}`